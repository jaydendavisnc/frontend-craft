#!/usr/bin/env node
// shoot.mjs: see your own page. Drives system Chrome over CDP with no npm install, wheel-scrolls
// the page like a person, and writes one contact sheet plus a report of real defects.
//
//   node shoot.mjs <folder|index.html|url> [--out dir] [--stops 9] [--wait ms]
//   node shoot.mjs . --eval "openMenu()" --name menu     run code first, shoot that state
//   node shoot.mjs . --at 0,2400 --width 820               quick look at chosen positions and widths
//
// Writes <out>/sheet.jpg (hero, scroll stops, phone, load strip, mid-scroll strip), each frame as
// its own jpg, and report.json. Needs Node 22+ (built-in WebSocket) and any Chrome or Chromium.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';

const argv = process.argv.slice(2);
const flag = (n, d) => { const i = argv.indexOf('--' + n); return i < 0 ? d : argv[i + 1]; };
let target = argv.find(a => !a.startsWith('--') && !['out', 'stops', 'wait', 'eval', 'name', 'at', 'width'].includes(argv[argv.indexOf(a) - 1]?.replace(/^--/, '')));
if (!target) { console.error('usage: node shoot.mjs <folder|file|url> [--out dir] [--stops 9] [--wait ms] [--eval js] [--name label]'); process.exit(2); }
if (typeof WebSocket === 'undefined') { console.error('shoot.mjs needs Node 22 or newer (global WebSocket).'); process.exit(2); }
const outDir = path.resolve(flag('out', path.join(/^https?:/.test(target) ? '.' : (fs.statSync(target).isDirectory() ? target : path.dirname(target)), '.shots')));
const MAX_STOPS = Math.max(2, +flag('stops', 9)), SETTLE = +flag('wait', 2600), EVAL = flag('eval'), NAME = flag('name', '');
const AT = flag('at'), WIDTH = +flag('width', 1440);
if (/^file:\/\//.test(target)) { target = decodeURIComponent(new URL(target).pathname); }
const sleep = ms => new Promise(r => setTimeout(r, ms));
fs.mkdirSync(outDir, { recursive: true });

function sourceText(root) { // the page's own code, for checks a screenshot cannot make
  let text = '';
  try {
    const walk = d => { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue;
      const f = path.join(d, e.name);
      if (e.isDirectory()) walk(f); else if (/\.(html?|css|m?js|tsx?|jsx)$/.test(e.name) && !/\.min\./.test(e.name)) text += fs.readFileSync(f, 'utf8');
    } };
    if (fs.statSync(root).isDirectory()) walk(root); else walk(path.dirname(root));
  } catch { return ''; }
  return text;
}

function findShell() { // Playwright's headless shell needs no window server, so it survives sandboxes that full Chrome does not
  for (const base of [path.join(os.homedir(), 'Library/Caches/ms-playwright'), path.join(os.homedir(), '.cache/ms-playwright')]) {
    if (!fs.existsSync(base)) continue;
    for (const d of fs.readdirSync(base).filter(d => d.startsWith('chromium_headless_shell-')).sort().reverse()) {
      for (const sub of fs.readdirSync(path.join(base, d))) {
        const p = path.join(base, d, sub, 'chrome-headless-shell');
        if (fs.existsSync(p)) return p;
      }
    }
  }
  return null;
}

function launch(bin, flags) {
  proc = spawn(bin, [...flags, 'about:blank'], { stdio: ['ignore', 'ignore', 'pipe'] });
  const started = proc;
  // A hard kill skips every handler above, so a small watcher cleans up if this process vanishes.
  if (process.platform !== 'win32') spawn('sh', ['-c', `while kill -0 ${process.pid} 2>/dev/null; do sleep 3; done; kill -9 ${proc.pid} 2>/dev/null; rm -rf "${profile}"`], { detached: true, stdio: 'ignore' }).unref();
  return new Promise((ok, no) => {
    let b = '';
    const t = setTimeout(() => no(new Error('Chrome did not start')), 15000);
    started.on('exit', () => { clearTimeout(t); no(new Error('Chrome did not start')); });
    started.on('error', () => { clearTimeout(t); no(new Error('Chrome did not start')); });
    started.stderr.on('data', d => { b += d; const m = b.match(/DevTools listening on (ws:\/\/\S+)/); if (m) { clearTimeout(t); ok(m[1]); } });
  });
}

function findChrome() {
  const home = os.homedir();
  const fixed = [process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge', '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/snap/bin/chromium',
    'C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'];
  for (const p of fixed) if (p && fs.existsSync(p)) return p;
  for (const base of [path.join(home, 'Library/Caches/ms-playwright'), path.join(home, '.cache/ms-playwright')]) {
    if (!fs.existsSync(base)) continue;
    for (const d of fs.readdirSync(base).filter(d => d.startsWith('chromium-')).sort().reverse()) {
      for (const rel of ['chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing', 'chrome-mac/Chromium.app/Contents/MacOS/Chromium', 'chrome-linux/chrome']) {
        const p = path.join(base, d, rel); if (fs.existsSync(p)) return p;
      }
    }
  }
  return null;
}

const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.gif': 'image/gif', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.otf': 'font/otf', '.mp4': 'video/mp4', '.webm': 'video/webm', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm' };
function serve(root) {
  return new Promise(res => {
    const s = http.createServer((q, a) => {
      let p = path.join(root, decodeURIComponent(q.url.split('?')[0]));
      if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
      if (!fs.existsSync(p)) { a.writeHead(404); return a.end(); }
      a.writeHead(200, { 'content-type': MIME[path.extname(p).toLowerCase()] || 'application/octet-stream' });
      fs.createReadStream(p).pipe(a);
    }).listen(0, '127.0.0.1', () => res({ s, url: `http://127.0.0.1:${s.address().port}/` }));
  });
}

class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.wait = new Map(); this.handlers = [];
    ws.addEventListener('message', e => { const m = JSON.parse(e.data);
      if (m.id && this.wait.has(m.id)) { const { ok, no } = this.wait.get(m.id); this.wait.delete(m.id); m.error ? no(new Error(m.error.message)) : ok(m.result); }
      else this.handlers.forEach(h => h(m)); }); }
  send(method, params = {}, sessionId) { const id = ++this.id;
    return new Promise((ok, no) => { this.wait.set(id, { ok, no }); this.ws.send(JSON.stringify({ id, method, params, sessionId })); }); }
  on(h) { this.handlers.push(h); }
}

// Called at every stop: remember each text node that was on screen and visible at least once.
const MARK = `(() => { const seen = window.__seen ||= new WeakSet();
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n, cap = 5000;
  while ((n = w.nextNode()) && cap--) { const el = n.parentElement; if (!el || n.textContent.trim().length < 2 || seen.has(el)) continue;
    const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight || r.width < 1) continue;
    const s = getComputedStyle(el); if (s.visibility === 'hidden' || s.display === 'none') continue;
    let op = 1; for (let e = el; e; e = e.parentElement) op *= +getComputedStyle(e).opacity;
    if (op > .25) seen.add(el); } })()`;

// Runs in the page once scrolling is finished; anything never seen on the way down is a real bug.
const AUDIT = `(() => {
  const vis = el => { const r = el.getBoundingClientRect(), s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.display !== 'none'; };
  const lum = c => { const a = c.map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return .2126 * a[0] + .7152 * a[1] + .0722 * a[2]; };
  const px = document.createElement('canvas').getContext('2d', { willReadFrequently: true }); px.canvas.width = px.canvas.height = 1;
  const rgba = s => { if (!/^rgb/.test(s)) { px.clearRect(0, 0, 1, 1); px.fillStyle = s; px.fillRect(0, 0, 1, 1); const d = px.getImageData(0, 0, 1, 1).data; return [d[0], d[1], d[2], d[3] / 255]; }
    const m = s.match(/[\\d.]+/g)?.map(Number) || [0, 0, 0, 0]; return m.length < 4 ? [...m, 1] : m; };
  const bgOf = el => { for (let e = el; e; e = e.parentElement) { const s = getComputedStyle(e); if (s.backgroundImage !== 'none') return null; const c = rgba(s.backgroundColor); if (c[3] > .95) return c; if (c[3] > .05) return null; } return [255, 255, 255, 1]; };
  const texts = []; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n, cap = 4000;
  while ((n = w.nextNode()) && cap--) { const t = n.textContent.trim(), el = n.parentElement;
    if (t.length < 2 || !el || /^(SCRIPT|STYLE|NOSCRIPT|TEMPLATE)$/.test(el.tagName) || !vis(el)) continue; texts.push({ el, t }); }
  let hidden = [], lowContrast = [], longLines = 0, chars = 0; const fams = {}, sizes = {};
  for (const { el, t } of texts) {
    const s = getComputedStyle(el), fsz = parseFloat(s.fontSize); chars += t.length;
    const f = s.fontFamily.split(',')[0].replace(/["']/g, '').trim(); fams[f] = (fams[f] || 0) + t.length; sizes[Math.round(fsz)] = (sizes[Math.round(fsz)] || 0) + t.length;
    let op = 1; for (let e = el; e; e = e.parentElement) op *= +getComputedStyle(e).opacity;
    const closedUi = el.closest('[aria-hidden="true"],[hidden],dialog,[role="dialog"],[class*="menu" i],[class*="modal" i],[class*="drawer" i],[class*="tooltip" i],[class*="sr-only" i]');
    const box = el.getBoundingClientRect(), parked = s.visibility === 'hidden' || box.right <= 0 || box.left >= innerWidth; // off-canvas menus are closed, not broken
    if (!window.__seen?.has(el) && !closedUi && !parked && !/^skip to/i.test(t)) hidden.push(t.slice(0, 40));
    const overMedia = () => { const cx = box.left + box.width / 2, cy = box.top + box.height / 2; if (cy < 0 || cy > innerHeight) return false; return document.elementsFromPoint(cx, cy).some(e => /^(IMG|VIDEO|CANVAS|PICTURE)$/.test(e.tagName) || (e.tagName === 'svg' && e.getBoundingClientRect().height > 80)); };
    let blended = false; for (let e = el; e && !blended; e = e.parentElement) blended = getComputedStyle(e).mixBlendMode !== 'normal';
    if (op > .5 && t.length > 2 && !blended && !overMedia()) { const bg = bgOf(el), fg = rgba(s.color); if (bg && fg[3] > .5) { const a = lum(fg), b = lum(bg), r = (Math.max(a, b) + .05) / (Math.min(a, b) + .05); if (r < (fsz >= 24 ? 3 : 4.5)) lowContrast.push(t.slice(0, 30) + ' ' + r.toFixed(1)); } }
    if (el.tagName === 'P' && t.length > 110 && box.width / (fsz * .5) > 88) longLines++; // a short line in a wide column is not a long line
  }
  // Habits that separate generated pages from real ones. Each was flagged repeatedly by blind judges.
  const heads = [...document.querySelectorAll('h1,h2')].filter(vis).map(h => ({ h, t: h.textContent.replace(/\\s+/g, ' ').trim() })).filter(x => x.t.length > 3);
  const smallLabel = e => { if (!e || e.textContent.trim().length > 70 || !e.textContent.trim()) return false; const c = getComputedStyle(e); return parseFloat(c.fontSize) <= 14 && (c.textTransform === 'uppercase' || /mono/i.test(c.fontFamily) || parseFloat(c.letterSpacing) > 1); };
  const controls = [...document.querySelectorAll('a,button')].filter(vis).filter(e => e.textContent.trim().length > 2);
  const lastClass = e => { const l = e.lastElementChild; return l ? String(l.className?.baseVal ?? l.className ?? '') : ''; };
  const pSizes = [...document.querySelectorAll('main p, body > section p, p')].filter(vis).filter(e => e.textContent.trim().length > 60).map(e => parseFloat(getComputedStyle(e).fontSize)).sort((a, b) => a - b);
  const root = document.querySelector('main') || document.body;
  const media = 'img,picture,video,canvas,table,form,pre,details,dl,ul,ol,iframe,svg';
  const blocks = [...root.children].filter(e => e.getBoundingClientRect().height > 320 && !/^(SCRIPT|STYLE|NAV|HEADER|FOOTER)$/.test(e.tagName));
  // A page boxed between visible rails leaves dead strips down both sides. Pinned tracks are tall on purpose, so they count as filled.
  const docH = document.documentElement.scrollHeight, tall = [...document.querySelectorAll('body *')].slice(0, 4000).filter(e => { const r = e.getBoundingClientRect(); return r.height > docH * .5 && r.width < innerWidth - 40 && r.width > 500; });
  const ruled = (e, w) => { const c = getComputedStyle(e, w); return c.content !== 'none' && parseFloat(c.width) <= 2 && parseFloat(c.height) > innerHeight; };
  const boxed = tall.some(e => { const c = getComputedStyle(e); return (parseFloat(c.borderLeftWidth) > 0 && parseFloat(c.borderRightWidth) > 0) || ruled(e, '::before') || ruled(e, '::after'); }) || [...document.querySelectorAll('body *')].slice(0, 4000).filter(e => { const r = e.getBoundingClientRect(); if (r.width > 2 || r.width < .4 || r.height <= innerHeight * .9) return false; const c = getComputedStyle(e); return c.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(c.borderLeftWidth) > 0; }).length >= 2;
  const filled = [...document.querySelectorAll('h1,h2,h3,h4,h5,p,li,a,button,img,svg,canvas,video,table,input,label,td')].filter(vis).map(e => e.getBoundingClientRect()).filter(r => r.width * r.height > 60).map(r => [r.top + scrollY, r.bottom + scrollY]);
  for (const e of document.querySelectorAll('*')) { const c = getComputedStyle(e); if (c.position === 'sticky' && e.parentElement) { const r = e.parentElement.getBoundingClientRect(); filled.push([r.top + scrollY, r.bottom + scrollY]); } }
  for (const e of [...document.querySelectorAll('body *')].slice(0, 4000)) { const c = getComputedStyle(e), leaf = !e.children.length && e.textContent.trim(); if ((leaf || c.backgroundImage !== 'none') && vis(e)) { const r = e.getBoundingClientRect(); if (r.width * r.height > 60 && r.height < innerHeight * 3) filled.push([r.top + scrollY, r.bottom + scrollY]); } }
  filled.sort((a, b) => a[0] - b[0]);
  let reach = filled[0]?.[1] ?? 0, hole = 0; for (const [t, b] of filled) { if (t - reach > hole) hole = Math.round(t - reach); reach = Math.max(reach, b); }
  const ruledLists = [...document.querySelectorAll('body *')].slice(0, 4000).filter(e => { const kids = [...e.children].filter(k => k.getBoundingClientRect().height > 28 && k.getBoundingClientRect().width > 400); if (kids.length < 3 || kids.length !== e.children.length) return false; return kids.every(k => { const c = getComputedStyle(k); return (parseFloat(c.borderTopWidth) > 0 || parseFloat(c.borderBottomWidth) > 0) && k.children.length >= 2 && !k.querySelector('img,canvas,video') && ![...k.querySelectorAll('svg')].some(v => v.getBoundingClientRect().height > 40); }); }).length;
  const proseWords = e => [...e.querySelectorAll('p')].filter(vis).filter(q => !q.closest('table,li,[class*="window" i],[class*="app" i],[class*="mock" i],[class*="ui" i],[class*="screen" i],[class*="demo" i]')).reduce((n, q) => n + q.textContent.trim().split(/\\s+/).length, 0);
  const wordy = blocks.filter(e => proseWords(e) > 70).length;
  const shape = e => { const h = e.querySelector('h2,h3'); if (!h || !vis(h)) return ''; const r = h.getBoundingClientRect(), x = (r.left + r.width / 2) / innerWidth; const m = [...e.querySelectorAll('img,svg,canvas,video')].filter(vis).map(v => v.getBoundingClientRect()).sort((a, b) => b.width * b.height - a.width * a.height)[0]; const mx = m ? (m.left + m.width / 2) / innerWidth : -1; return (x < .4 ? 'L' : x > .6 ? 'R' : 'C') + (m ? (mx < .4 ? 'l' : mx > .6 ? 'r' : 'c') : 'n'); };
  let run = 1, longest = 1; const shapes = blocks.map(shape); for (let i = 1; i < shapes.length; i++) { run = shapes[i] && shapes[i] === shapes[i - 1] ? run + 1 : 1; longest = Math.max(longest, run); }
  const craft = { boxed, hole, ruledLists, wordy, slides: longest, heads: heads.length, fullStops: heads.filter(x => /\\.$/.test(x.t) && ![...x.h.querySelectorAll('span,em')].some(e => getComputedStyle(e).color !== getComputedStyle(x.h).color)).length, paired: heads.filter(x => /^[^.!?]{3,36}\\.\\s+[^.!?]{3,36}\\.?$/.test(x.t)).map(x => x.t.slice(0, 60)),
    labelled: heads.filter(x => smallLabel(x.h.previousElementSibling) || smallLabel(x.h.parentElement?.previousElementSibling)).length,
    controls: controls.length, arrowed: controls.filter(e => /[\\u2192\\u2197\\u2198\\u203a\\u00bb]\\s*$/.test(e.textContent.trim()) || e.lastElementChild?.tagName?.toLowerCase() === 'svg' || /arrow/i.test(lastClass(e))).length,
    eased: controls.filter(e => parseFloat(getComputedStyle(e).transitionDuration) > 0).length,
    pMedian: pSizes.length ? pSizes[pSizes.length >> 1] : null,
    blocks: blocks.length, textOnly: blocks.filter(e => ![...e.querySelectorAll(media)].some(m => m.getBoundingClientRect().height > 48) && [...e.querySelectorAll('*')].filter(n => !n.children.length && n.textContent.trim()).length < 18).length };
  const top = Object.entries(fams).sort((a, b) => b[1] - a[1]);
  const missing = top.slice(0, 4).map(e => e[0]).filter(f => !/^(system-ui|-apple-system|ui-|serif|sans-serif|monospace)/i.test(f) && !document.fonts.check('16px "' + f + '"'));
  const h1El = document.querySelector('h1');
  const h1Spec = h1El && vis(h1El) ? (() => { const c = getComputedStyle(h1El), fz = parseFloat(c.fontSize); return { size: Math.round(fz), weight: +c.fontWeight, tracking: +((parseFloat(c.letterSpacing) || 0) / fz).toFixed(3), leading: +((parseFloat(c.lineHeight) || fz * 1.2) / fz).toFixed(2), family: c.fontFamily.split(',')[0].replace(/["']/g, '') }; })() : null;
  const loaded = [...document.fonts].filter(f => f.status === 'loaded').length, failed = [...document.fonts].filter(f => f.status === 'error').map(f => f.family);
  const small = [...document.querySelectorAll('button,input,select,summary,nav a,header a')].filter(vis).filter(e => { const r = e.getBoundingClientRect(); return r.height > 2 && +getComputedStyle(e).opacity > .05 && r.height < 32 && r.width < 200 && innerWidth < 500 && !e.closest('p,li li'); }).length;
  return { title: document.title, h1: document.querySelectorAll('h1').length, h1Spec, chars, sizes: Object.keys(sizes).length, fonts: top.slice(0, 5), fontsMissing: missing, fontsFailed: [...new Set(failed)], webfontsLoaded: loaded,
    overflowX: document.documentElement.scrollWidth - innerWidth, height: document.documentElement.scrollHeight, sections: (() => { const root = document.querySelector('main') || document.body; return Math.max([...root.children].filter(e => e.getBoundingClientRect().height > 120 && !/^(SCRIPT|STYLE|NAV|HEADER)$/.test(e.tagName)).length, [...document.querySelectorAll('section,footer')].filter(e => e.getBoundingClientRect().height > 120).length); })(), ground: getComputedStyle(document.body).backgroundColor,
    craft, hiddenText: hidden.length, hiddenSample: hidden.slice(0, 6), lowContrast: lowContrast.length, lowContrastSample: lowContrast.slice(0, 6), longLines,
    brokenImages: [...document.images].filter(i => i.complete && !i.naturalWidth).map(i => (i.currentSrc || i.src).slice(-60)).slice(0, 6), images: document.images.length,
    deadLinks: document.querySelectorAll('a[href="#"],a:not([href])').length, smallTargets: small, runningAnimations: document.getAnimations?.().length ?? 0 };
})()`;

// Chrome outlives node unless it is told otherwise: every way out of this script has to take it along.
let proc, profile;
const cleanup = () => { try { proc?.kill('SIGKILL'); } catch {} try { if (profile) fs.rmSync(profile, { recursive: true, force: true, maxRetries: 2 }); } catch {} proc = profile = null; };
process.on('exit', cleanup);
for (const sig of ['SIGINT', 'SIGTERM', 'SIGHUP']) process.on(sig, () => process.exit(130));
setTimeout(() => { console.error('shoot.mjs gave up after 4 minutes. This is usually a busy machine or a stalled GPU rather than the page. Try again, or set CHROME_PATH to a headless shell.'); process.exit(1); }, 240000).unref();

async function main() {
  const chrome = findChrome();
  if (!chrome) { console.error('No Chrome found. Set CHROME_PATH to a Chrome or Chromium binary.'); process.exit(2); }
  let url = target, server;
  if (!/^https?:/.test(target)) {
    const stat = fs.statSync(target);
    const root = path.resolve(stat.isDirectory() ? target : path.dirname(target));
    server = await serve(root);
    url = server.url + (stat.isDirectory() ? '' : path.basename(target));
  }
  profile = fs.mkdtempSync(path.join(os.tmpdir(), 'shoot-'));
  const base = ['--remote-debugging-port=0', `--user-data-dir=${profile}`, '--no-first-run', '--no-default-browser-check', '--hide-scrollbars', '--mute-audio', '--ignore-gpu-blocklist', '--enable-webgl'];
  const confined = ['--no-sandbox', '--single-process', '--no-zygote', '--in-process-gpu', '--disable-gpu']; // what still runs inside a seatbelt or container
  const shell = findShell();
  // The headless shell never queues behind the GPU, so a busy machine cannot stall it. Prefer it whenever it is installed.
  const attempts = [...(shell ? [[shell, ['--disable-gpu', ...base]], [shell, [...confined, ...base]]] : []), [chrome, ['--headless=new', ...base]], [chrome, ['--headless=new', ...confined, ...base]]];
  let wsUrl;
  for (const [bin, flags] of attempts) {
    wsUrl = await launch(bin, flags).catch(() => null);
    if (wsUrl) break;
    try { proc?.kill('SIGKILL'); } catch {}
  }
  if (!wsUrl) throw new Error('Chrome did not start');
  const ws = new WebSocket(wsUrl);
  await new Promise(r => ws.addEventListener('open', r, { once: true }));
  const cdp = new CDP(ws);

  const newPage = async (width, height, mobile = false, media = []) => {
    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    await sleep(120);
    const { sessionId: sid } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
    for (const d of ['Page', 'Runtime', 'Network', 'Log']) await cdp.send(d + '.enable', {}, sid);
    await cdp.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile }, sid);
    if (media.length) await cdp.send('Emulation.setEmulatedMedia', { features: media }, sid);
    return { sid, targetId, ev: e => cdp.send('Runtime.evaluate', { expression: e, returnByValue: true, awaitPromise: true }, sid).then(r => { if (r.exceptionDetails && process.env.SHOOT_DEBUG) console.error('page eval failed:', r.exceptionDetails.exception?.description); return r.result?.value; }),
      shot: async (file, q = 72) => { const { data } = await Promise.race([cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: q }, sid), sleep(45000).then(() => { throw new Error('Screenshot stalled. The machine or GPU is busy, not the page. Set CHROME_PATH to a headless shell, or retry when load drops'); })]); if (file) fs.writeFileSync(path.join(outDir, file), Buffer.from(data, 'base64')); return data; },
      wheel: (dy, x, y) => cdp.send('Input.dispatchMouseEvent', { type: 'mouseWheel', x, y, deltaX: 0, deltaY: dy }, sid) };
  };

  if (!AT) for (const f of fs.readdirSync(outDir)) if (new RegExp(`^${NAME ? NAME + '-' : ''}stop-\\d+\\.jpg$`).test(f)) fs.rmSync(path.join(outDir, f), { force: true });
  const errors = [], failed = [];
  cdp.on(m => {
    if (m.method === 'Runtime.exceptionThrown') errors.push((m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text || '').split('\n')[0].slice(0, 160));
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push(String(m.params.args?.[0]?.value ?? m.params.args?.[0]?.description ?? '').slice(0, 160));
    if (m.method === 'Network.responseReceived' && m.params.response.status >= 400 && !/favicon/.test(m.params.response.url)) failed.push(`${m.params.response.status} ${m.params.response.url.slice(-70)}`);
    if (m.method === 'Network.loadingFailed' && !m.params.canceled) failed.push(`failed ${m.params.errorText}`);
  });

  const runEval = async page => { if (!EVAL) return; const r = await cdp.send('Runtime.evaluate', { expression: `(async () => { ${/;|\breturn\b/.test(EVAL) ? EVAL : `return (${EVAL})`} })()`, returnByValue: true, awaitPromise: true }, page.sid);
    if (r.exceptionDetails) console.log(`FIX  --eval failed: ${(r.exceptionDetails.exception?.description || r.exceptionDetails.text || '').split('\n')[0]}`); };

  // Quick look: chosen scroll positions at a chosen width, without the full walk. Use it for sections, states and tablet checks.
  if (AT) {
    const look = await newPage(WIDTH, WIDTH < 500 ? 844 : 900, WIDTH < 500);
    await cdp.send('Page.navigate', { url }, look.sid);
    await sleep(Math.min(SETTLE, 1800));
    await runEval(look); if (EVAL) await sleep(600);
    for (const spot of AT.split(',')) {  // a pixel offset, or selector:fraction for a point through a pinned section
      const [sel, part] = spot.split(':');
      const y = /^\d+$/.test(spot) ? +spot : Math.round(await look.ev(`(() => { const r = document.querySelector(${JSON.stringify(sel)}).getBoundingClientRect(); return r.top + scrollY + (r.height - innerHeight) * ${+part || 0}; })()`));
      await look.ev(`scrollTo({ top: ${y}, behavior: 'instant' })`); await sleep(900);
      const file = `${NAME ? NAME + '-' : ''}at-${WIDTH}-${y}.jpg`;
      await look.shot(file, 80); console.log(path.join(outDir, file));
    }
    console.log(`overflow at ${WIDTH}px: ${await look.ev('document.documentElement.scrollWidth - innerWidth')}px, console errors: ${errors.length} ${errors.slice(0, 3).join(' | ')}`);
    await Promise.race([cdp.send('Browser.close').catch(() => {}), sleep(1500)]);
    server?.s.close(); cleanup(); process.exit(0);
  }

  // Desktop: load strip, hero, then a wheel-driven walk down the page.
  const d = await newPage(1440, 900);
  const t0 = Date.now(); const prefix = NAME ? NAME + '-' : '';
  await cdp.send('Page.navigate', { url }, d.sid);
  const load = [];
  let loadRunning = 0;
  for (const [i, at] of [300, 800, 1400, 2200].entries()) { await sleep(Math.max(0, at - (Date.now() - t0))); loadRunning = Math.max(loadRunning, await d.ev('document.getAnimations().filter(a => a.playState === "running").length + (window.gsap || window.anime || window.Motion ? 1 : 0)').catch(() => 0)); load.push(await d.shot(`${prefix}load-${i}.jpg`, 55)); }
  await sleep(Math.max(0, SETTLE - (Date.now() - t0)));
  if (EVAL) { await runEval(d); await sleep(900); }
  const hero = await d.shot(`${prefix}hero.jpg`);
  const firstGround = await d.ev('getComputedStyle(document.body).backgroundColor');
  await d.ev(`(() => { const seen = new Map(), moved = new Set(); const look = e => { const c = getComputedStyle(e); return c.transform + c.opacity + c.clipPath; };
    const all = [...document.querySelectorAll('body *')].filter(e => !/^(SCRIPT|STYLE|LINK|META)$/.test(e.tagName)).slice(0, 2500); all.forEach(e => seen.set(e, look(e)));
    window.__tick = () => { for (const e of all) if (seen.get(e) !== look(e)) moved.add(e); return moved.size; }; })()`);
  const stops = []; let last = -1, stuck = 0, prev = hero, scrollMoved = 0;
  await d.ev(MARK);
  for (let s = 0; s < 40 && stuck < 3; s++) {
    for (let k = 0; k < 6; k++) { await d.wheel(130, 720, 450); await sleep(60); }
    await sleep(700);
    await d.ev(MARK);
    const y = await d.ev('Math.round(scrollY)');
    stuck = y === last && y > 0 ? stuck + 1 : 0; last = y;
    const data = await d.shot(null);
    if (data !== prev) stops.push({ y, data }); prev = data;
    scrollMoved = await d.ev('window.__tick?.() ?? 0').catch(() => scrollMoved);
  }
  const report = { url, ...(await d.ev(AUDIT)), ground: firstGround, loadRunning, scrollMoved };

  // Mid-gesture frames: shows whether anything moves with the scroll.
  await d.ev('scrollTo(0, document.documentElement.scrollHeight * .25)'); await sleep(450);
  const motion = []; for (let k = 0; k < 4; k++) { await d.wheel(260, 720, 450); await sleep(110); motion.push(await d.shot(null, 55)); }

  // Phone: fresh page, so nothing leaks from the desktop run.
  const m = await newPage(390, 844, true);
  await cdp.send('Page.navigate', { url }, m.sid); await sleep(SETTLE);
  if (EVAL) { await runEval(m); await sleep(700); }
  const phone = [await m.shot(`${prefix}phone-0.jpg`)];
  const mh = await m.ev('document.documentElement.scrollHeight');
  for (let k = 0; k < 3; k++) { await m.ev(`scrollTo(0, ${Math.round(mh * (k + 1) / 4)})`); await sleep(650); phone.push(await m.shot(`${prefix}phone-${k + 1}.jpg`)); }
  for (let y = 0; y < mh; y += 500) { await m.ev(`scrollTo(0, ${y})`); await sleep(220); await m.ev(MARK); }
  await sleep(300); await m.ev(MARK);
  report.phone = await m.ev(AUDIT);

  // Reduced motion: nothing may stay hidden behind an animation that no longer runs.
  const r = await newPage(1440, 900, false, [{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await cdp.send('Page.navigate', { url }, r.sid); await sleep(SETTLE);
  const rh = await r.ev('document.documentElement.scrollHeight');
  for (let y = 0; y < rh; y += 700) { await r.ev(`scrollTo(0, ${y})`); await sleep(140); await r.ev(MARK); }
  await sleep(200); await r.ev(MARK);
  report.reducedMotionHiddenText = (await r.ev(AUDIT)).hiddenText;

  const pick = stops.length > MAX_STOPS ? Array.from({ length: MAX_STOPS }, (_, i) => stops[Math.round(i * (stops.length - 1) / (MAX_STOPS - 1))]) : stops;
  pick.forEach((s, i) => fs.writeFileSync(path.join(outDir, `${prefix}stop-${String(i).padStart(2, '0')}.jpg`), Buffer.from(s.data, 'base64')));
  report.scrollStops = stops.length;
  report.consoleErrors = [...new Set(errors)].slice(0, 8);
  report.failedRequests = [...new Set(failed)].slice(0, 8);

  // The sheet: every frame in one image, so a whole page can be judged at a glance.
  const img = (b, w) => `<img src="data:image/jpeg;base64,${b}" style="width:${w}px;display:block">`;
  const desk = [hero, ...pick.map(s => s.data)];
  const html = `<!doctype html><body style="margin:0;background:#18181c;color:#ccc;font:12px system-ui;padding:6px;width:2840px">
    <div style="display:flex;gap:6px"><div style="display:grid;grid-template-columns:repeat(5,480px);gap:6px">${desk.map(x => img(x, 480)).join('')}</div>
    <div style="display:grid;grid-template-columns:repeat(2,190px);gap:6px;align-content:start">${phone.map(x => img(x, 190)).join('')}</div></div>
    <div style="display:flex;gap:18px;margin-top:10px"><div>load 0.3s to 2.2s<div style="display:flex;gap:4px;margin-top:4px">${load.map(x => img(x, 240)).join('')}</div></div>
    <div>during a scroll gesture<div style="display:flex;gap:4px;margin-top:4px">${motion.map(x => img(x, 240)).join('')}</div></div></div></body>`;
  const sh = await newPage(2852, 1200);
  await cdp.send('Page.setDocumentContent', { frameId: (await cdp.send('Page.getFrameTree', {}, sh.sid)).frameTree.frame.id, html }, sh.sid);
  await sleep(500);
  const height = await sh.ev('document.documentElement.scrollHeight');
  await cdp.send('Emulation.setDeviceMetricsOverride', { width: 2852, height, deviceScaleFactor: 1, mobile: false }, sh.sid);
  await sleep(250);
  await sh.shot(`${prefix}sheet.jpg`, 80);

  fs.writeFileSync(path.join(outDir, `${prefix}report.json`), JSON.stringify(report, null, 1));
  const p = report.phone;
  const line = (ok, s) => console.log(`${ok ? 'ok  ' : 'FIX '} ${s}`);
  console.log(`sheet: ${path.join(outDir, prefix + 'sheet.jpg')}`);
  line(!report.consoleErrors.length, `console errors: ${report.consoleErrors.length} ${report.consoleErrors.slice(0, 3).join(' | ')}`);
  line(!report.failedRequests.length, `failed requests: ${report.failedRequests.length} ${report.failedRequests.slice(0, 3).join(' | ')}`);
  line(!report.fontsMissing.length && !report.fontsFailed.length, `fonts: ${report.fonts.slice(0, 3).map(f => f[0]).join(', ')} (${report.webfontsLoaded} faces loaded${report.fontsMissing.length ? ', NOT LOADED: ' + report.fontsMissing.join(', ') : ''})`);
  line(report.hiddenText < 4, `text never visible while scrolling the whole page (a few hover labels are fine): ${report.hiddenText} ${report.hiddenSample.slice(0, 3).join(' | ')}`);
  line(report.reducedMotionHiddenText === 0, `text never visible under prefers-reduced-motion: ${report.reducedMotionHiddenText}`);
  line(report.overflowX <= 1 && p.overflowX <= 1, `sideways overflow: desktop ${report.overflowX}px, phone ${p.overflowX}px`);
  line(!report.brokenImages.length, `broken images: ${report.brokenImages.length} of ${report.images}`);
  line(report.lowContrast < 3, `low-contrast text runs: ${report.lowContrast} ${report.lowContrastSample.slice(0, 3).join(' | ')}`);
  line(p.smallTargets < 4, `phone tap targets under 32px: ${p.smallTargets}`);
  line(report.longLines === 0, `paragraphs over ~88 characters a line: ${report.longLines}`);
  line(report.h1 === 1, `h1 count: ${report.h1}`);
  if (report.h1Spec) { const h = report.h1Spec; console.log(`info headline: ${h.size}px / ${h.weight} / ${h.tracking}em in ${h.family}. Top modern sites: 48 to 80px, weight 400 to 600, 0 to -0.033em. A dealt type system outranks this.`); }
  line(report.deadLinks < 3, `dead links (href="#"): ${report.deadLinks}`);
  const handFile = [path.resolve(/^https?:/.test(target) ? '.' : target), process.cwd()].map(d => path.join(fs.existsSync(d) && fs.statSync(d).isDirectory() ? d : path.dirname(d), '.frontend-craft', 'direction.json')).find(f => fs.existsSync(f));
  const hand = handFile ? JSON.parse(fs.readFileSync(handFile, 'utf8')) : null;
  if (hand) {
    const rendered = report.fonts.map(f => f[0].toLowerCase());
    const dealt = hand.fonts.filter(f => !rendered.some(r => r.includes(f.toLowerCase())));
    line(!dealt.length, `type system: dealt ${hand.fonts.join(' + ')}, page renders ${report.fonts.slice(0, 3).map(f => f[0]).join(', ')}`);
    if (hand.minHeight) line(report.height >= hand.minHeight, `page length: ${report.height}px at 1440. Top ${hand.surface} pages run ${hand.heightRange}. Thin pages read as templates, so build every section you were dealt with real content`);
    if (hand.minHeight && hand.surface !== 'pricing') line(report.sections >= hand.sections.length - 3, `sections: about ${report.sections} on the page, ${hand.sections.length} dealt including the nav`);
    const rgb = c => (String(c).match(/[\d.]+/g) || []).slice(0, 3).map(Number), hex = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16));
    if (/^#[0-9a-f]{6}$/i.test(hand.palette?.bg || '')) { const a = rgb(report.ground), b = hex(hand.palette.bg); line(a.length < 3 || Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) < 45, `ground: dealt ${hand.palette.bg}, page uses ${report.ground}`); }
  } else console.log(`info page length: ${report.height}px at 1440, ${report.sections} sections. Top landing pages run about 5,700 to 10,900px.`);
  const c = report.craft;
  console.log('--- craft: habits that made blind judges mark pages down');
  line(!c.boxed, `page edges: ${c.boxed ? 'the page sits in a column between visible rails, leaving dead strips down both sides. Let grounds and bands reach the viewport edge, and drop the rails' : 'grounds reach the viewport'}`);
  line(c.ruledLists <= 1, `plain ruled lists: ${c.ruledLists}. One is fine. Stylise the rest: an object per row, size carrying value, a real axis, rows that open`);
  line(c.wordy <= 1, `sections heavy with prose: ${c.wordy}. This is a website, not a slide deck, so show it instead`);
  line(c.slides < 3, `longest run of sections with the same skeleton: ${c.slides}. Give adjacent sections different shapes`);
  line(c.hole <= 360, `largest empty band: ${c.hole}px. Spacing should separate ideas, so close anything past about 300px`);
  line(c.fullStops <= c.heads * .5, `headings ending in a full stop: ${c.fullStops} of ${c.heads}. Real sites: about 28%, generated pages: 85%`);
  line(!c.paired.length, `paired-fragment headings: ${c.paired.length} ${c.paired.slice(0, 3).join(' | ')}. Rewrite each as one plain sentence with a concrete noun`);
  line(c.labelled <= Math.max(1, c.heads * .4), `small tracked or mono labels above headings: ${c.labelled} of ${c.heads}. Keep these to one or two sections`);
  line(c.arrowed <= Math.max(4, c.controls * .35), `controls ending in an arrow or icon: ${c.arrowed} of ${c.controls}. Keep arrows for a few real destinations`);
  if (c.pMedian) line(c.pMedian >= 15, `paragraph text median ${c.pMedian}px. Use 16 to 18px, and step colour rather than size for secondary copy`);
  if (c.blocks) line(c.textOnly <= Math.max(1, c.blocks * .25), `sections with nothing but text: ${c.textOnly} of ${c.blocks}. Each needs something real to look at: a product view, an image, a table, real data`);
  if (!['app', 'docs'].includes((hand || {}).surface)) line(report.loadRunning > 0, `load motion running in the first two seconds: ${report.loadRunning}. Stage the first screen as dealt`);
  const dealtHand = hand || {}, snaps = /instant|snap/.test(dealtHand.motion?.Hover || '');
  if (!['app', 'docs', 'pricing'].includes(dealtHand.surface)) line(report.scrollMoved >= 3, `elements that moved during the scroll: ${report.scrollMoved}. Scrolling should visibly do something beyond the page sliding`);
  if (!snaps) line(c.controls === 0 || c.eased >= c.controls * .6, `links and buttons with a hover transition: ${c.eased} of ${c.controls}`);
  if (hand?.sections?.length && hand.minHeight) {
    let ideas = ''; try { ideas = fs.readFileSync(path.join(path.dirname(handFile), 'ideas.md'), 'utf8'); } catch {}
    const count = (ideas.match(/wouldn.?t it be cool/gi) || []).length;
    line(count >= hand.sections.length * 2, `section ideas in .frontend-craft/ideas.md: ${count}. Write three "wouldn't it be cool if" lines for each of the ${hand.sections.length} sections, and build the best`);
  }
  if (hand?.coach) {
    const counter = path.join(path.dirname(handFile), 'rounds.json');
    const complete = !hand.minHeight || report.height >= hand.minHeight;
    let round = 0; try { round = JSON.parse(fs.readFileSync(counter, 'utf8')).round; } catch {}
    const defects = (report.craftFixes || 0);
    console.log('--- rounds');
    if (!complete) console.log(`KEEP BUILDING. The page is ${report.height}px and the sections you were dealt are not all built with real content. Rounds begin when it reaches ${hand.minHeight}px.`);
    else {
      round += 1; try { fs.writeFileSync(counter, JSON.stringify({ round })); } catch {}
      const steps = {
        1: `ROUND 1 OF 3: REBUILD. Passing checks is the floor. Open the sheet and full-size frames. Name the three weakest sections and rebuild each from scratch with more real content: more rows, more states, real interaction.${hand.components?.length ? ` Check these are built in full, with at least a dozen rows of data: ${hand.components.join('; ')}.` : ''} Then shoot again.`,
        2: 'ROUND 2 OF 3: DEPTH AND MOTION. Read every section at full size. Count distinct real facts on the page and aim for 80 or more. Rewrite any heading a competitor could use. Build the staged first screen, one section where scrolling does real work, and product surfaces that animate as if in use. Then shoot again.',
        3: 'ROUND 3 OF 3: EDIT. Cut clutter: any chip, label or divider without a job. Close holes in the spacing. Check the phone frames, and use --at 0,2400 --width 820 for tablet. Find the single weakest thing left and fix it. Then shoot once more.',
      };
      console.log(steps[round] || 'All rounds are done. Finish only when no FIX line remains and you can find nothing honest to criticise. Then delete .frontend-craft and .shots.');
    }
  }
  fs.writeFileSync(path.join(outDir, `${prefix}report.json`), JSON.stringify(report, null, 1));
  await Promise.race([cdp.send('Browser.close').catch(() => {}), sleep(1500)]);
  server?.s.close();
  await sleep(200);
  cleanup();
}

// A loaded machine can fail a run at startup. Try again once before calling it a real failure.
main().then(() => process.exit(0)).catch(e => {
  if (process.env.SHOOT_RETRY || !/did not start|Not attached|Target closed|Session closed/.test(String(e))) { console.error(e); process.exit(1); }
  cleanup();
  const r = spawn(process.execPath, process.argv.slice(1), { stdio: 'inherit', env: { ...process.env, SHOOT_RETRY: '1' } });
  r.on('close', c => process.exit(c ?? 1));
});
