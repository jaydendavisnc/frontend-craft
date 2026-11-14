#!/usr/bin/env node
// audit.mjs: is this page a template? Measures what a filled-in template cannot fake.
//
//   node audit.mjs <folder|index.html|url> [--json]
//
// Calibrated on 35 real sites and on pages from earlier versions of this skill. It is a floor, not a judge:
// a pass does not make a page good, and some excellent sites score low here. A generated page that fails has the shape of a template.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';

const argv = process.argv.slice(2);
const json = argv.includes('--json');
let target = argv.find(a => !a.startsWith('--'));
if (!target) { console.error('usage: node audit.mjs <folder|file|url> [--json]'); process.exit(2); }
const sleep = ms => new Promise(r => setTimeout(r, ms));
const W = 1440, H = 900;

const CHROME = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'].find(p => fs.existsSync(p));
if (!CHROME) { console.error('audit.mjs needs Chrome or Chromium.'); process.exit(2); }

function serve(root) {
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2', '.json': 'application/json', '.glb': 'model/gltf-binary' };
  const s = http.createServer((q, r) => {
    let f = path.join(root, decodeURIComponent(q.url.split('?')[0]));
    if (f.endsWith('/')) f += 'index.html';
    fs.readFile(f, (e, b) => { if (e) { r.writeHead(404); r.end(); } else { r.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); r.end(b); } });
  });
  return new Promise(ok => s.listen(0, '127.0.0.1', () => ok({ s, port: s.address().port })));
}

const COLLECT = `(() => {
  const vw = innerWidth, vh = innerHeight, docH = document.documentElement.scrollHeight;
  const vis = e => { const c = getComputedStyle(e), r = e.getBoundingClientRect(); return c.display !== 'none' && c.visibility !== 'hidden' && +c.opacity > .05 && r.width > 1 && r.height > 1; };
  const abs = e => { const r = e.getBoundingClientRect(); return { l: r.left + scrollX, t: r.top + scrollY, r: r.right + scrollX, b: r.bottom + scrollY, w: r.width, h: r.height }; };
  // Scenes: step down through wrappers until the page divides into real blocks
  let root = document.querySelector('main') || document.body;
  for (let i = 0; i < 6; i++) { const kids = [...root.children].filter(k => k.getBoundingClientRect().height > 160 && !/^(SCRIPT|STYLE|NOSCRIPT|HEADER|NAV|FOOTER)$/.test(k.tagName)); if (kids.length === 1) root = kids[0]; else if (kids.length < 3) { const big = kids.sort((a, b) => b.getBoundingClientRect().height - a.getBoundingClientRect().height)[0]; if (big && big.children.length > kids.length) root = big; else break; } else break; }
  const blocks = [...root.children].filter(k => vis(k) && k.getBoundingClientRect().height > 160 && !/^(SCRIPT|STYLE|NOSCRIPT|FOOTER)$/.test(k.tagName));
  // Media: real pictures, video, canvas, and large CSS background images
  const media = [];
  for (const e of document.querySelectorAll('img,video,canvas,picture,svg')) {
    if (e.tagName === 'PICTURE' || !vis(e) || e.closest('button,a[aria-label]') && e.getBoundingClientRect().width < 120) continue;
    const a = abs(e); if (a.w < 120 || a.h < 90) continue;
    if (e.tagName === 'svg' && a.w * a.h < 90000) continue;
    media.push({ ...a, tag: e.tagName, nw: e.naturalWidth || e.videoWidth || e.width || 0, src: (e.currentSrc || e.src || '').slice(0, 90), e });
  }
  for (const e of document.querySelectorAll('body *')) { const c = getComputedStyle(e); if (c.backgroundImage.startsWith('url(') && vis(e)) { const a = abs(e); if (a.w > 200 && a.h > 120) media.push({ ...a, tag: 'BG', nw: 0, src: '', e }); } }
  // Page area under imagery, counted on a coarse grid so overlapping layers do not count twice
  const cell = 40, cols = Math.ceil(vw / cell), hit = new Set();
  for (const m of media) { for (let y = Math.floor(m.t / cell); y * cell < m.b; y++) for (let x = Math.max(0, Math.floor(m.l / cell)); x < Math.min(cols, Math.ceil(m.r / cell)); x++) hit.add(y * cols + x); }
  const imageShare = hit.size * cell * cell / (vw * docH);
  const bigImages = media.filter(m => m.tag !== 'svg' && (m.w >= vw * .6 || m.h >= vh * .7)).length;
  const fullBleed = media.filter(m => m.tag !== 'svg' && m.w >= vw * .92 && m.h >= vh * .55).length;
  const soft = media.filter(m => m.tag === 'IMG' && m.nw && !/\\.svg/.test(m.src) && m.nw < m.w * 1.4 && m.w > 300).length;
  // Type
  const bodySize = parseFloat(getComputedStyle(document.body).fontSize) || 16;
  const texts = [...document.querySelectorAll('h1,h2,h3,h4,p,span,div,a,li,blockquote,b,strong,em')].filter(e => { if (!vis(e)) return false; const big = parseFloat(getComputedStyle(e).fontSize) >= 40; const own = [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > (big ? 0 : 1)); return own; });  // display numerals split one character per span still count
  const size = e => parseFloat(getComputedStyle(e).fontSize);
  const big = texts.filter(e => size(e) >= 28);
  const maxType = Math.max(0, ...texts.map(size));
  const huge = texts.filter(e => size(e) >= vw * .07).length;
  // Type and image in one space: display text sitting over a picture, not above or beside it
  let typeOnImage = 0;
  for (const e of big) { const a = abs(e); const ar = a.w * a.h; if (media.some(m => m.tag !== 'svg' && !m.e.contains(e) && Math.max(0, Math.min(a.r, m.r) - Math.max(a.l, m.l)) * Math.max(0, Math.min(a.b, m.b) - Math.max(a.t, m.t)) > ar * .35)) typeOnImage++; }
  // Headings: does every section open the same way?
  const heads = [...document.querySelectorAll('h2')].filter(vis).map(e => { const c = getComputedStyle(e), a = abs(e); return { k: Math.round(parseFloat(c.fontSize) / 4) * 4 + '/' + Math.round(a.l / 32) * 32 + '/' + c.textAlign.replace('start', 'left'), l: Math.round(a.l / 32) * 32 }; });
  const tally = {}; heads.forEach(h => tally[h.k] = (tally[h.k] || 0) + 1);
  const sameHeading = heads.length ? Math.max(...Object.values(tally)) / heads.length : 0;
  const headEdges = new Set(heads.map(h => h.l)).size;
  // Equal cells: three or more same-size siblings in a row
  const rows = []; const seen = new Set();
  for (const p of document.querySelectorAll('body *')) {
    if (seen.has(p) || p.closest('svg,[aria-hidden=true]') || p.children.length < 3) continue;
    const kids = [...p.children].filter(vis); if (kids.length < 3) continue;
    const rs = kids.map(k => k.getBoundingClientRect());
    const firstRow = rs.filter(r => Math.abs(r.top - rs[0].top) < 6);
    if (firstRow.length >= 3 && firstRow.length <= 8) { const w = firstRow.map(r => r.width), h = firstRow.map(r => r.height); if (Math.max(...w) - Math.min(...w) < 8 && Math.min(...w) > 140 && Math.max(...h) - Math.min(...h) < 24 && Math.min(...h) > 90) { rows.push({ n: firstRow.length, w: Math.round(w[0]), t: Math.round(rs[0].top + scrollY) }); seen.add(p); } }
  }
  // Ruled rows: a stack of three or more rows divided by hairlines, with nothing but text in them
  let ruled = 0, ruledRows = 0;
  for (const p of document.querySelectorAll('body *')) {
    const kids = [...p.children].filter(vis); if (kids.length < 3 || p.closest('table') || p.closest('svg')) continue;
    const ok = kids.filter(k => { const c = getComputedStyle(k), r = k.getBoundingClientRect(); return r.width > 180 && r.height >= 24 && r.height < 170 && (parseFloat(c.borderBottomWidth) > 0 || parseFloat(c.borderTopWidth) > 0) && !k.querySelector('img,video,canvas'); });
    if (ok.length >= 3 && ok.length >= kids.length * .7) { const ys = ok.map(k => k.getBoundingClientRect().left); if (Math.max(...ys) - Math.min(...ys) < 4) { ruled++; ruledRows += ok.length; } }
  }
  // Scene shapes: heading on top with a group of cells below, the skeleton of a template
  const sig = blocks.map(b => {
    const r = abs(b), h = [...b.querySelectorAll('h1,h2,h3')].filter(vis)[0];
    const hr = h ? abs(h) : null;
    const ms = media.filter(m => m.t < r.b && m.b > r.t && m.tag !== 'svg');
    const area = ms.reduce((n, m) => n + Math.max(0, Math.min(m.b, r.b) - Math.max(m.t, r.t)) * m.w, 0) / (r.w * r.h);
    const on = hr && ms.some(m => hr.l < m.r && hr.r > m.l && hr.t < m.b && hr.b > m.t);
    const cx = ms.length ? ms.reduce((n, m) => n + (m.l + m.r) / 2, 0) / ms.length / vw : -1;
    const side = !ms.length ? 'none' : on ? 'under' : area > .5 ? 'full' : cx < .4 ? 'left' : cx > .6 ? 'right' : 'mid';
    const group = rows.some(g => g.t > r.t && g.t < r.b);
    const topHead = hr && (hr.t - r.t) < r.h * .4 && !on;
    const c = getComputedStyle(b).backgroundColor;
    const lum = (() => { const m = c.match(/[\\d.]+/g); if (!m || m[3] === '0') return 'p'; return (+m[0] + +m[1] + +m[2]) / 3 < 110 ? 'd' : 'l'; })();
    const stack = topHead && (side === 'none' || side === 'mid') ;
    return { s: [topHead ? 'T' : hr ? 'S' : 'N', side, group ? 'G' : '-', lum].join(''), stack };
  });
  const uniqueShapes = sig.length ? new Set(sig.map(x => x.s)).size / sig.length : 0;
  const stacked = sig.length ? sig.filter(x => x.stack).length / sig.length : 0;
  return { blocks: blocks.length, height: docH, imageShare: +imageShare.toFixed(3), mediaCount: media.length, bigImages, fullBleed, soft, bodySize, maxType: Math.round(maxType), huge, typeOnImage, headCount: heads.length, sameHeading: +sameHeading.toFixed(2), headEdges, equalRows: rows.length, ruled, ruledRows, uniqueShapes: +uniqueShapes.toFixed(2), stacked: +stacked.toFixed(2), shapes: sig.map(x => x.s), libs: { gsap: !!window.gsap, lenis: !!(window.Lenis || window.lenis), three: !!window.THREE, canvas: document.querySelectorAll('canvas').length } };
})()`;

const SAMPLER = `(() => { const pick = [...new Set([...document.querySelectorAll('img,video,canvas,h1,h2,h3')].slice(0, 200).flatMap(e => [e, e.parentElement]))]; window.__m = { seen: new Map(), kinds: {} }; const m = window.__m;
  const read = e => { const c = getComputedStyle(e); return [c.transform, c.clipPath, c.opacity, c.filter, c.scale, c.translate].join('|'); };
  pick.forEach(e => m.seen.set(e, read(e)));
  window.__tick = () => { for (const e of pick) { const a = m.seen.get(e), b = read(e); if (a !== b) { const k = (/IMG|VIDEO|CANVAS/.test(e.tagName) || e.querySelector(':scope > img,:scope > video,:scope > canvas') ? 'media-' : 'type-'); const [t0, c0, o0, f0] = a.split('|'), [t1, c1, o1, f1] = b.split('|'); if (t0 !== t1) m.kinds[k + 'move'] = 1; if (c0 !== c1) m.kinds[k + 'clip'] = 1; if (f0 !== f1) m.kinds[k + 'filter'] = 1; if (o0 !== o1) m.kinds[k + 'fade'] = 1; m.seen.set(e, b); } } return Object.keys(m.kinds); };
  window.__pins = () => [...document.querySelectorAll('body *')].filter(e => { const c = getComputedStyle(e); if (c.position !== 'sticky') return false; const p = e.parentElement.getBoundingClientRect(), r = e.getBoundingClientRect(); return p.height > r.height * 1.5 && r.height > 300; }).length; })()`;

// Clutter is measured one screen at a time, because that is how a visitor meets it.
const SCREEN = `(() => { const vw = innerWidth, vh = innerHeight; let blocks = 0, words = 0, small = 0, chips = 0, lines = 0, cta = 0; const sizes = new Set(), inks = new Set();
  for (const e of document.querySelectorAll('body *')) {
    if (e.closest('svg,canvas,[aria-hidden=true],script,style')) continue;
    const r = e.getBoundingClientRect(); if (r.width < 2 || r.bottom <= 0 || r.top >= vh || r.right <= 0 || r.left >= vw) continue;
    const c = getComputedStyle(e); if (c.visibility === 'hidden' || +c.opacity < .05 || c.display === 'none') continue;
    const own = [...e.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join(' ').trim();
    if (r.height <= 2 && r.width > 120 && c.backgroundColor !== 'rgba(0, 0, 0, 0)') lines++;
    if (parseFloat(c.borderTopWidth) === 1 || parseFloat(c.borderBottomWidth) === 1) { if (r.width > 120 && parseFloat(c.borderLeftWidth) === 0) lines++; }
    if (own.length > 1) { const fs = parseFloat(c.fontSize); blocks++; words += own.split(/\\s+/).length; sizes.add(Math.round(fs)); inks.add(c.color); if (fs < 14) small++;
      const hasFill = c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0; if (hasFill && r.height < 40 && own.length < 30 && parseFloat(c.borderTopLeftRadius) >= 4 && !/^(A|BUTTON)$/.test(e.tagName)) chips++; }
    if (/^(A|BUTTON)$/.test(e.tagName) && r.height >= 30 && r.width >= 60 && c.backgroundColor !== 'rgba(0, 0, 0, 0)' && r.height < 80) cta++;
  }
  return { blocks, words, small, chips, lines, cta, sizes: sizes.size, inks: inks.size }; })()`;

// Parts a kit or page builder hands you. One or two is normal. A page made of them is a template.
const GENERIC = `(() => { const vis = e => { const c = getComputedStyle(e), r = e.getBoundingClientRect(); return c.display !== 'none' && c.visibility !== 'hidden' && r.width > 1 && r.height > 1; };
  const found = {}; const hit = k => found[k] = (found[k] || 0) + 1;
  for (const h of document.querySelectorAll('h1,h2')) { const p = h.previousElementSibling; if (!p || !vis(p)) continue; const c = getComputedStyle(p), r = p.getBoundingClientRect(); if (r.height < 40 && p.textContent.trim().length < 40 && parseFloat(c.borderTopLeftRadius) >= 8 && (c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0)) hit('pill above a heading'); }
  for (const e of document.querySelectorAll('svg,img')) { const r = e.getBoundingClientRect(), p = e.parentElement; if (!p || r.width > 44 || r.width < 10) continue; const c = getComputedStyle(p), q = p.getBoundingClientRect(); if (q.width >= 32 && q.width <= 84 && Math.abs(q.width - q.height) < 6 && c.backgroundColor !== 'rgba(0, 0, 0, 0)' && parseFloat(c.borderTopLeftRadius) >= 6) hit('icon in a tinted tile'); }
  for (const p of document.querySelectorAll('body *')) { const kids = [...p.children].filter(vis); if (kids.length < 3) continue;
    const imgs = kids.filter(k => /^(IMG|PICTURE)$/.test(k.tagName) || (k.querySelector && k.children.length === 1 && k.querySelector('img')));
    if (imgs.length >= 3 && imgs.length === kids.length) { const rs = imgs.map(i => i.getBoundingClientRect()); if (rs.every(r => r.width < 64 && r.width > 16) && rs[1].left < rs[0].right) hit('avatar stack'); if (rs.length >= 5 && rs.every(r => r.height < 70 && Math.abs(r.top - rs[0].top) < 40)) hit('logo row'); }
    const nums = kids.filter(k => { const t = k.textContent.trim(); const big = [...k.querySelectorAll('*')].map(x => parseFloat(getComputedStyle(x).fontSize)); return /\\d/.test(t) && t.length < 90 && big.length && Math.max(...big) >= 30; });
    if (kids.length >= 3 && kids.length <= 6 && nums.length === kids.length) { const rs = kids.map(k => k.getBoundingClientRect()); if (rs.every(r => Math.abs(r.top - rs[0].top) < 12 || Math.abs(r.left - rs[0].left) < 12)) hit('stat row'); }
  }
  const acc = document.querySelectorAll('details').length + document.querySelectorAll('button[aria-expanded]').length; if (acc >= 5) hit('accordion list');
  if (document.querySelector('[role=tablist]')) hit('tab bar');
  const glass = [...document.querySelectorAll('body *')].filter(e => { const c = getComputedStyle(e); return (c.backdropFilter && c.backdropFilter !== 'none') && e.getBoundingClientRect().height > 80; }).length; if (glass >= 3) hit('glass cards');
  const grad = [...document.querySelectorAll('h1,h2,h3,span')].filter(e => { const c = getComputedStyle(e); return (c.webkitBackgroundClip === 'text' || c.backgroundClip === 'text') && c.backgroundImage.includes('gradient'); }).length; if (grad) hit('gradient text');
  return found; })()`;

const med = a => { const v = [...a].sort((x, y) => x - y); return v.length ? v[Math.floor(v.length / 2)] : 0; };
const p90 = a => { const v = [...a].sort((x, y) => x - y); return v.length ? v[Math.floor(v.length * .9)] : 0; };

const score = m => {
  // Each rule is one thing a filled-in template does. Limits come from the calibration in references/template-audit.md
  const shaped = m.blocks >= 3;  // single-page apps can hide their structure from this check, so these rules only apply when scenes were found
  const rules = [
    // Weight 0 rules are notes, not targets. Blind panels marked pages down when builders forced type onto photos and stock images in to pass them.
    ['pictures carry the page', m.imageShare >= .28, `${Math.round(Math.min(m.imageShare, 1) * 100)}% of the page is imagery. Real sites have a median of 38%, but a real product interface counts as much as a photo, and a weak stock photo counts against you`, 0],
    ['type and image share space', m.typeOnImage >= 2, `${m.typeOnImage} display text blocks sit on a picture. Only where the picture has a calm zone; never let type collide with the subject`, 0],
    ['a big picture moment', m.bigImages >= 1, `${m.bigImages} pictures at 60% width or 70% height. At least 1`, 1],
    ['clear lead in scale', m.maxType / m.bodySize >= 3, `largest type is ${m.maxType}px on ${m.bodySize}px body, a ratio of ${(m.maxType / m.bodySize).toFixed(1)}. At least 3`, 1],
    ['sections open differently', m.sameHeading <= .6 || m.headCount < 3, `${Math.round(m.sameHeading * 100)}% of section headings share one size and one position. Keep it to 60%`, 1],
    ['no card rows by default', m.equalRows <= 1, `${m.equalRows} rows of equal cells. One at most`, 1],
    ['no ruled lists by default', m.ruled === 0, `${m.ruled} ruled lists (${m.ruledRows} rows). Real sites have a median of 0`, 3],
    ['scenes differ in shape', !shaped || m.uniqueShapes >= .6, `${Math.round(m.uniqueShapes * 100)}% of scenes have a unique shape. At least 60%`, 1],
    ['not heading-then-content', !shaped || m.stacked <= .4, `${Math.round(m.stacked * 100)}% of scenes are a heading stacked over content. Real sites have a median of 14%. Keep it to 40%`, 3],
    ['motion touches pictures', m.kinds.some(k => k.startsWith('media-')) || m.pins >= 1, `scroll changes pictures: ${m.kinds.filter(k => k.startsWith('media-')).join(', ') || 'never'}, ${m.pins} pins`, 1],
    ['more than one kind of motion', m.kinds.length >= 2 || m.pins >= 1, `${m.kinds.length} kinds of scroll motion, ${m.pins} pins`, 1],
    ['calm screens', m.blocksMed <= 22, `${m.blocksMed} text blocks on a typical screen. Real sites have a median of 14. Keep it to 22`, 3],
    ['few words at once', m.wordsMed <= 100, `${m.wordsMed} words on a typical screen. Real sites have a median of 59. Keep it to 100`, 2],
    ['no rules everywhere', m.linesMed <= 1, `${m.linesMed} hairlines on a typical screen. Real sites have a median of 0`, 1],
    ['no chips and tags', m.chipsMed === 0, `${m.chipsMed} chips on a typical screen. Real sites have a median of 0`, 1],
    ['no kit parts', m.genericKinds <= 1, `${m.genericKinds} kinds of kit part: ${Object.keys(m.generic).join(', ') || 'none'}. One at most`, 2],
    ['pictures are sharp', m.soft === 0, `${m.soft} pictures are under 1.4x their display size. Soft photos cost more than no photos`, 2],
  ];
  const total = rules.reduce((n, r) => n + r[3], 0), got = rules.reduce((n, r) => n + (r[1] ? r[3] : 0), 0);
  return { score: Math.round(got / total * 100), rules };
};

(async () => {
  let url = target, server;
  if (!/^https?:/.test(target)) {
    const stat = fs.statSync(target), dir = stat.isDirectory() ? target : path.dirname(target);
    server = await serve(path.resolve(dir));
    url = `http://127.0.0.1:${server.port}/${stat.isDirectory() ? '' : path.basename(target)}`;
  }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'audit-'));
  const proc = spawn(CHROME, ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${dir}`, '--no-first-run', '--hide-scrollbars', '--disable-gpu', `--window-size=${W},${H}`, 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  const wsUrl = await new Promise((ok, no) => { let b = ''; proc.stderr.on('data', d => { b += d; const m = b.match(/ws:\/\/[^\s]+/); if (m) ok(m[0]); }); setTimeout(() => no(new Error('Chrome did not start')), 15000); });
  const ws = new WebSocket(wsUrl); await new Promise(r => ws.onopen = r);
  let id = 0; const wait = new Map();
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && wait.has(m.id)) { const { ok, no } = wait.get(m.id); wait.delete(m.id); m.error ? no(new Error(m.error.message)) : ok(m.result); } };
  const send = (method, params = {}, sessionId) => new Promise((ok, no) => { const i = ++id; wait.set(i, { ok, no }); ws.send(JSON.stringify({ id: i, method, params, sessionId })); });
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  const s = (m, p) => send(m, p, sessionId);
  const ev = async js => { const r = await s('Runtime.evaluate', { expression: js, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description || r.exceptionDetails.text); return r.result.value; };
  await s('Page.enable'); await s('Runtime.enable');
  await s('Emulation.setDeviceMetricsOverride', { width: W, height: H, deviceScaleFactor: 1, mobile: false });
  await s('Page.navigate', { url }); await sleep(5000);
  await ev(SAMPLER);
  const docH = await ev('document.documentElement.scrollHeight');
  const stops = Math.min(90, Math.ceil(docH / (H * .6)));
  const screens = [];
  for (let i = 0; i <= stops; i++) { await s('Input.dispatchMouseEvent', { type: 'mouseWheel', x: 700, y: 450, deltaX: 0, deltaY: H * .6 }); await sleep(260); await ev('window.__tick && window.__tick()'); if (i % 2 === 0 && screens.length < 24) { await sleep(320); screens.push(await ev(SCREEN)); } }
  const kinds = await ev('window.__tick()'), pins = await ev('window.__pins()');
  await ev('scrollTo({top:0,behavior:"instant"})'); await sleep(900);
  const generic = await ev(GENERIC);
  const m = { url, ...(await ev(COLLECT)), kinds, pins, generic, genericKinds: Object.keys(generic).length,
    wordsMed: med(screens.map(x => x.words)), blocksMed: med(screens.map(x => x.blocks)), blocksP90: p90(screens.map(x => x.blocks)), smallMed: med(screens.map(x => x.small)), chipsMed: med(screens.map(x => x.chips)), linesMed: med(screens.map(x => x.lines)), ctaMed: med(screens.map(x => x.cta)), ctaMax: Math.max(0, ...screens.map(x => x.cta)), sizesMed: med(screens.map(x => x.sizes)), inksMed: med(screens.map(x => x.inks)) };
  const { score: sc, rules } = score(m);
  if (json) console.log(JSON.stringify({ ...m, score: sc, fails: rules.filter(r => !r[1]).map(r => r[0]) }));
  else {
    console.log(`template audit: ${sc}/100  (scenes ${m.blocks}, height ${m.height}px)`);
    for (const r of rules) console.log(`${r[3] === 0 ? 'note' : r[1] ? 'ok  ' : 'FIX '} ${r[0]}: ${r[2]}`);
    console.log('This is a floor, not a target. A page can score 100 here and still lose a blind review: do not change the design just to move this number.');
    console.log(`info per screen, median: ${m.blocksMed} text blocks, ${m.wordsMed} words, ${m.smallMed} small labels, ${m.chipsMed} chips, ${m.linesMed} rules, ${m.ctaMed} filled buttons`);
    if (m.genericKinds) console.log(`info kit parts: ${Object.entries(m.generic).map(([k, v]) => `${k} x${v}`).join(', ')}`);
    console.log(`info scene shapes: ${m.shapes.join(' ')}`);
    console.log(`info engines: ${JSON.stringify(m.libs)}`);
  }
  try { await Promise.race([send('Browser.close'), sleep(1500)]); } catch {}
  proc.kill('SIGKILL'); server?.s.close();
  try { fs.rmSync(dir, { recursive: true, force: true, maxRetries: 3 }); } catch {}
  process.exit(0);
})().catch(e => { console.error(e.message); process.exit(1); });
