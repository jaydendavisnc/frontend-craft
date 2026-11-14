#!/usr/bin/env node
// slop.mjs: names the exact elements that make work look generated, and says what to do instead.
//
//   node slop.mjs <folder|index.html|poster.html|art.svg|url> [--medium poster|cover|art|page] [--json]
//
// Works on pages and on single-frame pieces: posters, covers, SVG art, slides. Every finding points at one
// element (a CSS path you can search for) and quotes its text. REMOVE means delete it or rebuild that part.
// CHANGE means the choice is weak but the element can stay. Exit code 1 while anything is left to REMOVE.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';

const argv = process.argv.slice(2);
const json = argv.includes('--json');
const flag = n => { const i = argv.indexOf('--' + n); return i < 0 ? null : argv[i + 1]; };
let target = argv.find((a, i) => !a.startsWith('--') && !['--medium'].includes(argv[i - 1]));
if (!target) { console.error('usage: node slop.mjs <folder|file|url> [--medium poster|page] [--json]'); process.exit(2); }
const sleep = ms => new Promise(r => setTimeout(r, ms));
const W = 1440, H = 900;
const CHROME = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', process.env.CHROME_PATH].find(p => p && fs.existsSync(p));
if (!CHROME) { console.error('slop.mjs needs Chrome or Chromium.'); process.exit(2); }

function serve(root) {
  const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.json': 'application/json', '.woff2': 'font/woff2', '.bin': 'application/octet-stream' };
  const s = http.createServer((q, r) => {
    const u = new URL(q.url, 'http://x');
    if (u.pathname === '/__wrap') { // an SVG is inlined into a page so its shapes can be inspected like elements
      fs.readFile(path.join(root, u.searchParams.get('f')), 'utf8', (e, svg) => { r.writeHead(e ? 404 : 200, { 'content-type': 'text/html' }); r.end(e ? '' : `<!doctype html><meta charset=utf-8><body style="margin:0;background:#fff">${svg}</body>`); });
      return;
    }
    let f = path.join(root, decodeURIComponent(u.pathname));
    if (f.endsWith('/')) f += 'index.html';
    fs.readFile(f, (e, b) => { if (e) { r.writeHead(404); r.end(); } else { r.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); r.end(b); } });
  });
  return new Promise(ok => s.listen(0, '127.0.0.1', () => ok({ s, port: s.address().port })));
}

const CHECK = (medium) => `(() => {
  const MED = ${JSON.stringify(medium)}, vw = innerWidth, vh = innerHeight, docH = document.documentElement.scrollHeight;
  const out = [];
  const vis = e => { const c = getComputedStyle(e), r = e.getBoundingClientRect(); return c.display !== 'none' && c.visibility !== 'hidden' && +c.opacity > .04 && r.width > 1 && r.height > 1; };
  const sel = e => { if (e === document.body) return 'body'; if (e === document.documentElement) return 'html'; const parts = []; let n = e; while (n && n.nodeType === 1 && n !== document.body && parts.length < 4) { if (n.id) { parts.unshift('#' + n.id); break; } let s = n.tagName.toLowerCase(); const cls = [...(n.classList || [])].filter(c => !/^(on|in|is-|active)/.test(c)).slice(0, 2); if (cls.length) s += '.' + cls.join('.'); if (n.parentNode) { const sib = [...n.parentNode.children].filter(x => x.tagName === n.tagName); if (sib.length > 1) s += ':nth-of-type(' + (sib.indexOf(n) + 1) + ')'; } parts.unshift(s); n = n.parentElement; } return parts.join(' > '); };
  const snip = e => ((e.innerText !== undefined ? e.innerText : e.textContent) || '').trim().replace(/\\s+/g, ' ').slice(0, 54);
  const add = (level, rule, e, fix, note) => out.push({ level, rule, where: e ? sel(e) : 'page', text: note !== undefined ? note : e ? snip(e) : '', fix });
  const own = e => [...e.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
  const all = [...document.querySelectorAll('body *')].filter(e => !/^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE|DEFS|STOP|LINEARGRADIENT|RADIALGRADIENT|FILTER|CLIPPATH|MASK|TITLE|DESC)$/i.test(e.tagName) && !e.closest('defs'));
  const shown = all.filter(vis);
  const texty = shown.filter(e => own(e).length > 0 && !e.closest('svg') || (e.tagName.toLowerCase() === 'text' && e.textContent.trim()));
  const fsz = e => parseFloat(getComputedStyle(e).fontSize) || 0;
  const rgb = s => { const m = String(s).match(/rgba?\\(([^)]+)\\)/); if (!m) return null; const v = m[1].split(/[ ,/]+/).filter(Boolean).map(parseFloat); return { r: v[0], g: v[1], b: v[2], a: v.length > 3 ? v[3] : 1 }; };
  const hsl = c => { const r = c.r / 255, g = c.g / 255, b = c.b / 255, mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn; let h = 0, s = 0; if (d) { s = d / (1 - Math.abs(2 * l - 1)); h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h = (h * 60 + 360) % 360; } return { h, s, l }; };
  const colours = s => (String(s).match(/rgba?\\([^)]+\\)/g) || []).map(rgb).filter(Boolean);
  const hueGap = (a, b) => { const d = Math.abs(a - b) % 360; return Math.min(d, 360 - d); };
  const clusters = (hs, gap) => { const c = []; for (const h of hs) if (!c.some(x => hueGap(x, h) < gap)) c.push(h); return c; };
  const hex = c => '#' + [c.r, c.g, c.b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
  const area = e => { const r = e.getBoundingClientRect(); return Math.min(r.width, vw) * Math.min(r.height, docH); };
  const piece = MED !== 'page';
  const violet = h => h >= 235 && h <= 320;

  // Gradients: the multi-hue wash and gradient text
  const gradOf = e => { const c = getComputedStyle(e); return c.backgroundImage && /gradient/.test(c.backgroundImage) ? c.backgroundImage : ''; };
  for (const e of [document.documentElement, document.body, ...shown]) {
    const g = gradOf(e); if (!g) continue;
    const hs = colours(g).map(hsl).filter(x => x.s > .28 && x.l > .12 && x.l < .9);
    const cl = clusters(hs.map(x => x.h), 40);
    const c = getComputedStyle(e);
    const inks = []; for (const x of colours(g)) if (x.a > .1 && !inks.some(y => Math.abs(y.r - x.r) + Math.abs(y.g - x.g) + Math.abs(y.b - x.b) < 40)) inks.push(x);
    if (/text/.test(c.webkitBackgroundClip || c.backgroundClip || '')) { if (inks.length >= 2) add('REMOVE', 'gradient text', e, 'set the words in one solid colour'); continue; }  // one ink with a cut is a letterform, not a gradient
    if (area(e) < vw * vh * .12 || cl.length < 2) continue;
    const span = Math.max(0, ...cl.flatMap(a => cl.map(b => hueGap(a, b))));
    if ((cl.some(violet) && span >= 40) || span >= 150) add('REMOVE', 'multi-hue gradient wash', e, 'use a flat ground, or tints of one hue; let a real picture or the content carry colour', cl.map(h => Math.round(h) + 'deg').join(' to '));
  }
  for (const g of document.querySelectorAll('linearGradient,radialGradient')) {
    const hs = [...g.querySelectorAll('stop')].map(s => rgb(getComputedStyle(s).stopColor)).filter(Boolean).map(hsl).filter(x => x.s > .28 && x.l > .12 && x.l < .9);
    const cl = clusters(hs.map(x => x.h), 40), used = g.id && document.querySelectorAll('[fill="url(#' + g.id + ')"],[stroke="url(#' + g.id + ')"]').length;
    const sp = Math.max(0, ...cl.flatMap(a => cl.map(b => hueGap(a, b))));
    if (used && cl.length >= 2 && ((cl.some(violet) && sp >= 40) || sp >= 150)) add('REMOVE', 'multi-hue SVG gradient', g, 'fill with flat colour; two or three inks plus the paper', '#' + g.id);
  }
  // Light effects: coloured glows, blurred blobs, glass, shadows on everything
  let shadowed = 0, boxed = 0, glass = [];
  for (const e of shown) {
    const c = getComputedStyle(e), r = e.getBoundingClientRect();
    const pc = e.parentElement && getComputedStyle(e.parentElement), inherited = pc && pc.textShadow === c.textShadow && c.boxShadow === 'none';
    const sh = [c.boxShadow, inherited ? 'none' : c.textShadow, c.filter].filter(v => v && v !== 'none').join(', ');
    if (sh) {
      const parts = sh.split(/,(?![^(]*\\))/);
      for (const p of parts) { const col = rgb(p), nums = (p.replace(/rgba?\\([^)]+\\)/, '').match(/-?[\\d.]+px/g) || []).map(parseFloat), blur = nums[2] || 0, hs = col && hsl(col);
        if (col && blur >= 16 && col.a >= .3 && hs.s > .4 && hs.l > .2 && !/inset/.test(p) && Math.abs(nums[0] || 0) <= 4 && Math.abs(nums[1] || 0) <= 4 && Math.min(r.width, r.height) > 6) { add('REMOVE', 'coloured glow', e, 'drop it; real light comes from a picture or a lit render, not a halo', p.trim().slice(0, 60)); break; } }
      if (/(?:^|\\s)(?:\\d+px\\s+){2}(?:[1-9]\\d+)px/.test(c.boxShadow) && !/inset/.test(c.boxShadow)) shadowed++;
    }
    if (/blur\\((?:[4-9]\\d|\\d{3})px\\)/.test(c.filter) && !own(e) && r.width > 80 && (c.position === 'absolute' || c.position === 'fixed') && c.clipPath === 'none' && parseFloat(c.borderTopLeftRadius) >= Math.min(r.width, r.height) * .3) add('REMOVE', 'blurred colour blob', e, 'delete it; atmosphere should come from light on a real object');
    if (/blur/.test(c.backdropFilter || c.webkitBackdropFilter || '')) glass.push(e);
    if ((c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0) && r.width > 120 && r.height > 60) boxed++;
  }
  if (glass.length >= 3) glass.slice(1).forEach(e => add('CHANGE', 'glass on everything', e, 'keep frosted glass on the nav at most; give other surfaces a solid fill'));
  if (shadowed >= 8 && shadowed > boxed * .4) add('CHANGE', 'drop shadows on ' + shadowed + ' boxes', null, 'shadows only where something really floats; flat surfaces separate by tone', '');
  for (const f of document.querySelectorAll('filter')) { const b = f.querySelector('feGaussianBlur'), n = f.id ? document.querySelectorAll('[filter="url(#' + f.id + ')"]').length : 0; if (b && parseFloat(b.getAttribute('stdDeviation')) >= 3 && n >= 3) add('CHANGE', 'glow filter on ' + n + ' shapes', f, 'remove the blur; let silhouettes and value do the work', '#' + f.id); }

  // Words: emoji, sparkles, slop phrases, placeholder copy, paired fragments
  const EMOJI = /\\p{Extended_Pictographic}/u, SPARK = /[✨✦✧⭐🌟💫]|\\bsparkle/iu;
  const SLOP = /\\b(seamless(ly)?|elevate[sd]?|unleash(es|ed)?|unlock (your|the|new)|empower(s|ing)?|revolutioni[sz](e|es|ing)|cutting[- ]edge|next[- ]level|game[- ]?changer|delve|in today's|fast[- ]paced (world|landscape)|supercharge|effortless(ly)?|transform (your|the way)|world[- ]class|state[- ]of[- ]the[- ]art|harness the power|unforgettable|immersive experience|look no further|whether you're|the future of|reimagin(e|ed|ing)|at the intersection of|crafted with (care|love|passion)|beautifully simple|built for (the future|scale)|take .{1,20} to the next level|dive (in|into)|your journey|journey begins)\\b|not just .{2,30}(,|—|-) ?(it's|but)/i;
  const HOLD = /lorem ipsum|dolor sit amet|your (name|company|logo) here|company name|acme( corp)?\\b|john doe|jane doe|example\\.com|placeholder/i;
  for (const e of texty) {
    const t = own(e) || e.textContent;
    if (EMOJI.test(t.replace(/[©®™↗→←↑↓✓✔×·•–—]/g, ''))) add('REMOVE', 'emoji', e, 'replace with a real icon, a word, or nothing');
    if (SPARK.test(t) || /sparkle|magic/i.test(e.getAttribute('class') || '')) add('REMOVE', 'sparkle', e, 'delete it; sparkles say "AI made this"');
    const m = t.match(SLOP); if (m) add('REMOVE', 'generated phrase "' + m[0].trim() + '"', e, 'rewrite as one plain fact: a number, a name, a place');
    if (HOLD.test(t)) add('REMOVE', 'placeholder copy', e, 'write the real thing');
  }
  for (const e of shown.filter(e => /^H[1-3]$/.test(e.tagName))) {
    const t = snip(e);
    if (/^[A-Z][^.!?]{2,34}[.!]\\s+[A-Z][^.!?]{2,34}[.!]?$/.test(t)) add('REMOVE', 'paired-fragment headline', e, 'one plain sentence with a noun only this subject has');
    const kids = [...e.children].filter(k => /^(SPAN|EM|I|STRONG|MARK|B)$/.test(k.tagName)).filter(k => { const a = getComputedStyle(k), b = getComputedStyle(e), words = snip(k).split(' ').length; return (a.color !== b.color || a.fontStyle !== b.fontStyle || /gradient/.test(a.backgroundImage)) && words <= 2 && snip(k).length > 1 && snip(k).length < t.length * .45; });
    if (kids.length) add('REMOVE', 'accent word in a headline', kids[0], 'set the whole headline in one colour and one style');
  }
  // Labels and markers
  const eyebrows = [];
  for (const h of shown.filter(e => /^H[1-3]$/.test(e.tagName))) { const p = h.previousElementSibling; if (!p || !vis(p)) continue; const c = getComputedStyle(p); if (fsz(p) <= 15 && snip(p).length < 40 && (c.textTransform === 'uppercase' || parseFloat(c.letterSpacing) / fsz(p) >= .07)) eyebrows.push(p); }
  if (eyebrows.length >= 3) eyebrows.slice(1).forEach(e => add('REMOVE', 'tracked label above a heading (' + eyebrows.length + ' of them)', e, 'delete; keep at most one on the page'));
  const nums = texty.filter(e => /^0[1-9][.)]?$/.test(snip(e)) && !e.closest('ol'));
  if (nums.length >= 3) nums.forEach(e => add('REMOVE', '01 02 03 marker', e, 'delete unless the order matters to the reader'));
  const arrows = shown.filter(e => /^(A|BUTTON)$/.test(e.tagName) && /[→↗›»]\\s*$|-&gt;$/.test(snip(e)));
  if (arrows.length >= 4) arrows.slice(2).forEach(e => add('REMOVE', 'arrow on every link (' + arrows.length + ')', e, 'drop the arrow; keep it on two real destinations'));
  // Kit parts: pills, icon tiles, equal card rows, confetti
  const pills = shown.filter(e => { const r = e.getBoundingClientRect(), c = getComputedStyle(e); return r.height >= 16 && r.height <= 40 && r.width < 260 && r.width > r.height * 1.6 && snip(e).length >= 3 && parseFloat(c.borderTopLeftRadius) >= r.height / 2 - 1 && (c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0) && snip(e).length > 0 && snip(e).length < 26 && !/^(BUTTON|A|INPUT)$/.test(e.tagName); });
  if (pills.length >= 6) pills.slice(2).forEach(e => add('REMOVE', 'pill tag (' + pills.length + ' on the page)', e, 'say it in the sentence, or drop it'));
  const tiles = shown.filter(e => { const r = e.getBoundingClientRect(), c = getComputedStyle(e); return r.width >= 28 && r.width <= 72 && Math.abs(r.width - r.height) < 6 && c.backgroundColor !== 'rgba(0, 0, 0, 0)' && parseFloat(c.borderTopLeftRadius) >= 6 && e.querySelector('svg,i,img') && !snip(e) && e.parentElement && [...e.parentElement.children].some(k => k !== e && /^(H2|H3|H4|B|STRONG)$/.test(k.tagName) || k.querySelector && k !== e && k.querySelector('h2,h3,h4')); });
  if (tiles.length >= 3) tiles.forEach(e => add('REMOVE', 'icon in a rounded tile', e, 'drop the tile; if the icon earns its place, let it stand alone'));
  const rows = new Set();
  for (const p of shown) { const kids = [...p.children].filter(vis); if (kids.length < 3 || kids.length > 6) continue; const rs = kids.map(k => k.getBoundingClientRect()); const same = rs.every(r => Math.abs(r.top - rs[0].top) < 6 && Math.abs(r.width - rs[0].width) < 8 && Math.abs(r.height - rs[0].height) < 30) && rs[0].width > 160 && rs[0].height > 110; const boxed2 = kids.every(k => { const c = getComputedStyle(k); return c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0 || c.boxShadow !== 'none'; });
    const prices = kids.every(k => /[$£€¥]\\s?\\d/.test(snip(k) + ' ' + (k.innerText || '')));  // plans side by side are a real comparison
    if (same && boxed2 && !prices && kids.every(k => k.querySelector('h2,h3,h4,b,strong') && snip(k).length > 30) && ![...rows].some(x => x.contains(p))) rows.add(p); }
  rows.forEach(p => add('CHANGE', 'equal row of ' + p.children.length + ' cards', p, 'the template ladder: rebuild from an object this subject really has, not nicer cards'));
  // Stock layouts blind panels kept naming in round two
  if (MED === 'page') {
    for (const p of rows) { const kids = [...p.children].filter(vis); if (kids.every(k => /[“"«]/.test(k.innerText || '') || k.querySelector('blockquote,q'))) add('REMOVE', 'three quote cards in a row', p, 'one quote at a real size with the person and detail, or the actual artefact they sent'); }
    const qs = texty.filter(e => /\\?\\s*$/.test(snip(e)) && snip(e).length > 12 && fsz(e) >= 15 && fsz(e) <= 30);
    if (qs.length >= 4) { const lefts = new Set(qs.map(e => Math.round(e.getBoundingClientRect().left / 40))); if (lefts.size >= 2) { const tops = qs.map(e => Math.round(e.getBoundingClientRect().top + scrollY)); const sameRow = tops.some((t, i) => tops.some((u, j) => i !== j && Math.abs(t - u) < 20)); if (sameRow) add('CHANGE', 'FAQ set as a grid of questions', qs[0], 'a single column of questions with the answers in plain sight reads faster and looks less like a kit'); } }
    for (const p of shown) { const kids = [...p.children].filter(vis); if (kids.length !== 3) continue; if (!kids.every(k => /[$£€¥]\\s?\\d/.test(k.innerText || ''))) continue; const rs = kids.map(k => k.getBoundingClientRect()), cs = kids.map(k => getComputedStyle(k)); if (Math.abs(rs[0].width - rs[2].width) > 12 || rs[0].width < 200 || rs[0].height < 200 || Math.abs(rs[0].top - rs[2].top) > 8) continue; if (!cs.every(c => c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0 || c.boxShadow !== 'none')) continue; const mid = cs[1].backgroundColor !== cs[0].backgroundColor && cs[0].backgroundColor === cs[2].backgroundColor || rs[1].height > rs[0].height + 24 || cs[1].transform !== 'none'; if (mid) add('CHANGE', 'highlighted middle pricing card', kids[1], 'say which plan suits whom in a sentence, or compare plans in one table; the raised middle card is the stock pricing page'); }
    let bounce = null; for (const e of shown) { const c = getComputedStyle(e), fns = (c.transitionTimingFunction + ',' + c.animationTimingFunction).match(/cubic-bezier\\(([^)]+)\\)/g) || []; for (const f of fns) { const v = f.slice(13, -1).split(',').map(parseFloat); if (v[1] > 1.02 || v[3] > 1.02 || v[1] < -0.02 || v[3] < -0.02) { bounce = [e, f]; break; } } if (bounce) break; }
    const scripts = [...document.scripts].map(s => s.textContent).join(' '); if (!bounce && /\\b(back|elastic|bounce)\\.(out|inOut|in)\\b/.test(scripts)) bounce = [null, 'GSAP back/elastic ease'];
    if (bounce) add('CHANGE', 'overshoot or bounce easing', bounce[0], 'use a calm ease-out; panels flagged bouncing motion as cheap', bounce[1]);
    const h1 = document.querySelector('h1'); if (h1 && h1.getBoundingClientRect().top < vh) { const prev = h1.previousElementSibling; const btns = [...document.querySelectorAll('a,button')].filter(b => { const r = b.getBoundingClientRect(), c = getComputedStyle(b); return r.top < vh && r.top > h1.getBoundingClientRect().bottom && r.height >= 34 && r.height <= 64 && (c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0); }); const label = prev && vis(prev) && fsz(prev) <= 15 && snip(prev).length < 48; if (label && btns.length >= 2) add('CHANGE', 'stock hero: label, headline, two buttons', h1, 'lead with the real thing working on the first screen, and one clear action'); }
  }
  const confetti = shown.filter(e => { const r = e.getBoundingClientRect(), c = getComputedStyle(e); return !snip(e) && !e.closest('a,button,li,label,svg,[role]') && r.width > 6 && r.width < 160 && r.height < 160 && (c.position === 'absolute' || c.position === 'fixed') && (c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0) && !e.querySelector('img,svg,canvas,video'); });
  if (confetti.length >= 6) confetti.slice(0, 8).forEach(e => add('REMOVE', 'decorative confetti (' + confetti.length + ' loose shapes)', e, 'delete all of them; one deliberate shape beats a scatter'));
  // Web chrome on a piece that is not a web page
  if (piece) for (const e of shown) {
    const c = getComputedStyle(e), r = e.getBoundingClientRect();
    if (/^(NAV|BUTTON|INPUT|SELECT|TEXTAREA)$/.test(e.tagName) || (e.tagName === 'A' && c.backgroundColor !== 'rgba(0, 0, 0, 0)' && r.height < 64)) add('REMOVE', 'web control on a ' + MED, e, 'a ' + MED + ' has no buttons or navigation; set the information as type');
    else if (snip(e).length > 20 && r.width > 160 && r.width < vw * .7 && r.height > 70 && parseFloat(c.borderTopLeftRadius) >= 8 && (c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0) && !e.parentElement.closest('[style*=radius]')) add('REMOVE', 'card box on a ' + MED, e, 'take the text out of the box and set it on the surface');
  }
  // Colour: how many hues
  const weight = {};
  for (const e of shown) {
    const c = getComputedStyle(e), a = Math.max(1, area(e) / 1000);
    const list = [[c.backgroundColor, a], [c.color, own(e) ? 1 : 0]];
    if (e.closest('svg')) list.push([c.fill, a], [c.stroke, .2]);
    for (const [v, w] of list) { if (!w) continue; const x = rgb(v); if (!x || x.a < .2) continue; const s = hsl(x); if (s.s < .3 || s.l < .14 || s.l > .9) continue; const k = Math.round(s.h / 30); weight[k] = (weight[k] || 0) + w; if (!weight['c' + k]) weight['c' + k] = hex(x); }
  }
  const hues = Object.keys(weight).filter(k => !k.startsWith('c')).filter(k => weight[k] > 2);
  const hueList = clusters(hues.map(k => k * 30), 40);
  if (hueList.length >= (piece ? 4 : 5)) add('CHANGE', hueList.length + ' separate hues', null, 'cut to two or three colours chosen as a set, plus neutrals', hues.map(k => weight['c' + k]).join(' '));
  // Type: default faces, polite scale
  const DEFAULT = /^(inter|poppins|montserrat|dm sans|space grotesk|syne|outfit|sora|playfair display|bebas neue|oswald|raleway|lato|nunito|roboto|open sans|arial|helvetica|system-ui|-apple-system|segoe ui|sans-serif|serif)$/i;
  const fam = e => getComputedStyle(e).fontFamily.split(',')[0].replace(/["']/g, '').trim();
  const bigText = [...texty].sort((a, b) => fsz(b) - fsz(a));
  if (bigText[0] && DEFAULT.test(fam(bigText[0]))) add('CHANGE', 'default face for the display type: ' + fam(bigText[0]), bigText[0], 'choose a face with a point of view for this subject');
  const families = new Set(texty.filter(e => !/mono|code/i.test(fam(e))).map(fam));
  if (families.size >= 4) add('CHANGE', families.size + ' typefaces', null, 'one family, or two that clearly disagree', [...families].join(', '));
  const body = texty.filter(e => own(e).length > 60).map(fsz).sort((a, b) => a - b)[0] || texty.map(fsz).sort((a, b) => a - b)[Math.floor(texty.length / 2)] || 16;
  const ratio = (bigText[0] ? fsz(bigText[0]) : 16) / body;
  if (ratio < (piece ? 6 : 2.6)) add('CHANGE', 'polite scale: largest type is ' + ratio.toFixed(1) + 'x the text', bigText[0], piece ? 'a poster wants 10 to 1 or more: make one thing enormous' : 'give the page a clear lead: one headline or picture should be plainly the first read');
  // Composition: the centred stack
  const first = texty.filter(e => { const r = e.getBoundingClientRect(); return r.top < vh && r.bottom > 0 && fsz(e) >= 13; });
  const centred = first.filter(e => { const r = e.getBoundingClientRect(); return Math.abs(r.left + r.width / 2 - vw / 2) < 28 && r.width < vw * .9 && getComputedStyle(e).textAlign === 'center'; });
  if (bigText[0] && centred.includes(bigText[0]) && centred.length >= 3) add(piece ? 'REMOVE' : 'CHANGE', 'centred stack of ' + centred.length + ' lines on the first screen', bigText[0], 'break the symmetry: put the big element against an edge and the information in one corner block');
  // Dark blue with a glowing button
  const bg = rgb(getComputedStyle(document.body).backgroundColor) || rgb(getComputedStyle(document.documentElement).backgroundColor);
  if (bg && bg.a > .5) { const b = hsl(bg); if (b.l < .16 && b.s > .18 && b.h > 195 && b.h < 265) add('CHANGE', 'blue-tinted dark ground', document.body, 'start dark from neutral black; colour should come from content', hex(bg)); }
  // Uniform rounded boxes
  const rounded = shown.filter(e => { const c = getComputedStyle(e), r = e.getBoundingClientRect(); return r.width > 120 && r.height > 60 && (c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderTopWidth) > 0); });
  const same = rounded.filter(e => { const v = parseFloat(getComputedStyle(e).borderTopLeftRadius); return v >= 12 && v <= 28; });
  if (rounded.length >= 10 && same.length / rounded.length > .8) add('CHANGE', 'the same rounded box ' + same.length + ' times', null, 'vary the surfaces: edges, full bleed, objects, not one card shape everywhere');
  // Tells blind panels flagged again and again on generated pages (Nov 2026)
  if (MED === 'page') {
    const foot = document.querySelector('footer') || [...document.querySelectorAll('body > *, main > *')].filter(vis).pop();
    if (foot) for (const e of texty.filter(e => foot.contains(e))) { if (fsz(e) >= Math.max(110, vw * .085) && snip(e).length <= 28) { add('REMOVE', 'giant wordmark footer', e, 'end on a useful footer at text size; blind panels flagged the giant name in the footer on page after page'); break; } }
    for (const e of texty) { const c = getComputedStyle(e), col = rgb(c.color), t = own(e); if (fsz(e) >= 150 && /^[\\d.,:%£$€x×+\\-\\s]{1,8}$/.test(t) && (+c.opacity < .35 || (col && col.a < .35))) add('REMOVE', 'ghost giant numeral', e, 'delete it; a faded number behind content is decoration'); }
    const ph = (document.body.innerText || '').match(/(?:\\(\\d{3}\\)\\s?|\\b\\d{3}[ .-])555[ .-]\\d{4}\\b/); if (ph) add('REMOVE', 'placeholder 555 phone number', null, 'use a believable number in the local format, or a booking link instead', ph[0]);
    for (const e of shown) { if (e.closest('svg')) continue; const c = getComputedStyle(e); const m = c.transform.match(/matrix\\(([^)]+)\\)/); if (!m) continue; const v = m[1].split(',').map(parseFloat), deg = Math.abs(Math.atan2(v[1], v[0]) * 180 / Math.PI), r = e.getBoundingClientRect(); if (deg >= .8 && deg <= 15 && snip(e).length > 24 && r.width < vw * .6 && r.width > 120) add('REMOVE', 'tilted note card', e, 'set it straight on the grid; a rotated note or polaroid is a costume'); }
    const SCRIPT = /cursive|Caveat|Dancing Script|Homemade Apple|Mrs Saint Delafield|Pinyon|Great Vibes|Allura|La Belle Aurore|Reenie Beanie|Kalam|Satisfy|Sacramento|Parisienne|Alex Brush|Herr Von|Monsieur La Doulaise|Nothing You Could Do|Rock Salt|Shadows Into Light|Indie Flower|Gloria Hallelujah|Yellowtail|Mr Dafoe|Kristi|Zeyada|Cedarville|Over the Rainbow|Waterfall|Birthstone|Ballet|Imperial Script/i;
    const scr = texty.filter(e => SCRIPT.test(getComputedStyle(e).fontFamily) && snip(e).length < 40); if (scr.length) add('CHANGE', 'script signature or handwriting accent', scr[0], 'drop the handwriting; let the type system carry the voice');
    const big = shown.filter(e => { const r = e.getBoundingClientRect(); return e.tagName === 'IMG' && r.width * r.height > vw * vh * .08; });
    const srcs = {}; for (const e of big) { const k = (e.currentSrc || e.src || '').split('?')[0].replace(/[-_@](?:\\d{3,4}w?|\\dx)(?=\\.\\w+$)/, ''); (srcs[k] = srcs[k] || []).push(e); }
    for (const k in srcs) if (k && srcs[k].length >= 2) add('REMOVE', 'same photo used ' + srcs[k].length + ' times', srcs[k][1], 'every large picture should be a different photograph; find another or cut one', k.split('/').pop());
    if (big.length >= 4) { const fx = big.map(e => { const c = getComputedStyle(e); return (c.filter === 'none' ? '' : c.filter) + '|' + (c.mixBlendMode === 'normal' ? '' : c.mixBlendMode); }); const cnt = {}; fx.filter(f => f !== '|').forEach(f => cnt[f] = (cnt[f] || 0) + 1); const best = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0]; if (best && best[1] >= big.length * .8) add('CHANGE', 'one filter on every photo', big[0], 'match the set in the grade, but let photographs keep their own colour; a duotone on everything flattens them', best[0]); }
    for (const p of shown) { const kids = [...p.children].filter(k => k.tagName === 'SPAN' && (k.textContent || '').trim().split(/\\s+/).length <= 2); if (kids.length >= 12 && kids.length >= p.children.length * .9 && snip(p).length > 50) { const looks = new Set(kids.map(k => getComputedStyle(k).opacity + getComputedStyle(k).color)); if (looks.size >= 2) { add('CHANGE', 'word-by-word scroll fill', p, 'set the paragraph in full ink; nobody should wait for words to light up'); break; } } }
  }
  // Filters doing the work
  for (const e of shown) { const c = getComputedStyle(e), r = e.getBoundingClientRect(); if ((c.position === 'fixed' || c.position === 'absolute') && r.width >= vw * .95 && r.height >= vh * .9 && c.pointerEvents === 'none' && !snip(e) && (/url\\(|radial-gradient/.test(c.backgroundImage)) && c.mixBlendMode !== 'normal') add('CHANGE', 'noise or vignette overlay across the page', e, 'texture belongs to a material, not a filter laid over everything'); }
  // Group and cap: say it once per rule with a count, then the elements
  const seen = new Set(), res = [];
  for (const f of out) { const k = f.rule + '|' + f.where; if (seen.has(k)) continue; seen.add(k); res.push(f); }
  return { medium: MED, findings: res, height: docH };
})()`;

(async () => {
  let url = target, server, medium = flag('medium');
  if (!/^https?:/.test(target)) {
    const stat = fs.statSync(target), dir = stat.isDirectory() ? target : path.dirname(target);
    server = await serve(path.resolve(dir));
    const base = stat.isDirectory() ? '' : path.basename(target);
    url = /\.svg$/i.test(base) ? `http://127.0.0.1:${server.port}/__wrap?f=${encodeURIComponent(base)}` : `http://127.0.0.1:${server.port}/${base}`;
    if (!medium) { const hand = path.join(path.resolve(dir), '.frontend-craft', 'hand.md'); if (fs.existsSync(hand) && /taste hand/.test(fs.readFileSync(hand, 'utf8'))) medium = (fs.readFileSync(hand, 'utf8').match(/This is an? \*\*([^*]+)\*\*/) || [])[1]; }
    if (!medium && /\.svg$/i.test(base)) medium = 'artwork';
  }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'slop-'));
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
  const SNAP = `(() => { const all = [...document.querySelectorAll('body *')]; return all.map((e, i) => { const r = e.getBoundingClientRect(), t = [...e.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim(); return r.top < innerHeight && r.bottom > 0 && parseFloat(getComputedStyle(e).fontSize) >= 56 && /\\d/.test(t) && t.length <= 14 ? [i, t] : null; }).filter(Boolean); })()`;
  await s('Page.navigate', { url }); await sleep(450);
  const early = await ev(SNAP).catch(() => []); await sleep(3050);
  const late = Object.fromEntries((await ev(SNAP).catch(() => [])).map(([i, t]) => [i, t]));
  const counted = early.filter(([i, t]) => late[i] !== undefined && late[i] !== t && /\d/.test(late[i])).map(([i, t]) => t + ' to ' + late[i]);
  if (!medium) { const one = await ev(`document.documentElement.scrollHeight <= innerHeight * 1.25 && !document.querySelector('nav') && document.querySelectorAll('a').length <= 3`); medium = one ? 'single-frame piece' : 'page'; }
  // let scroll-driven pages show everything once, then judge the top of the page as the first screen
  await ev(`(async () => { const h = document.documentElement.scrollHeight; for (let y = 0; y < h; y += innerHeight * .8) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } scrollTo(0, 0); await new Promise(r => setTimeout(r, 400)); })()`);
  const broken = await ev(`/can.t be reached|ERR_|404 Not Found/.test(document.title + ' ' + (document.body ? document.body.innerText.slice(0, 300) : ''))`);
  if (broken) { console.error('slop.mjs could not load ' + url + '. Start the page first.'); process.exit(2); }
  const r = await ev(CHECK(medium));
  if (counted.length && r.medium === 'page') r.findings.unshift({ level: 'REMOVE', rule: 'count-up number on the first screen', where: 'page', text: counted[0], fix: 'show the final number from the start; counting up on load is a template animation' });
  const rem = r.findings.filter(f => f.level === 'REMOVE'), chg = r.findings.filter(f => f.level === 'CHANGE');
  if (json) console.log(JSON.stringify(r));
  else {
    console.log(`slop check: ${r.medium}, ${rem.length} to remove, ${chg.length} to change`);
    for (const f of [...rem, ...chg]) console.log(`${f.level.padEnd(6)} ${f.rule}\n       at ${f.where}${f.text ? `  "${f.text}"` : ''}\n       do ${f.fix}`);
    if (!rem.length && !chg.length) console.log('ok     nothing generated-looking found. This is a floor, not a judge: still run the critique in references/taste.md');
  }
  try { await Promise.race([send('Browser.close'), sleep(1500)]); } catch {}
  proc.kill('SIGKILL'); server?.s.close();
  try { fs.rmSync(dir, { recursive: true, force: true, maxRetries: 3 }); } catch {}
  process.exit(rem.length ? 1 : 0);
})().catch(e => { console.error(e.message); process.exit(2); });
