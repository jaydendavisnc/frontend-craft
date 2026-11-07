#!/usr/bin/env node
// lint.mjs: lists the habits that make a page read as generated. These are defaults rather than
// crimes: any of them can be right on purpose, so treat each hit as the question "did I choose this?"
//
//   node lint.mjs <folder|file> [--json]
import fs from 'node:fs';
import path from 'node:path';

const target = process.argv[2], asJson = process.argv.includes('--json');
if (!target) { console.error('usage: node lint.mjs <folder|file> [--json]'); process.exit(2); }

const files = [];
(function walk(p) {
  let st; try { st = fs.statSync(p); } catch { return; }
  if (st.isDirectory()) {
    if (/(^|\/)(node_modules|shots|dist|build|vendor|render|renders|_source|\.[^/.][^/]*)$/.test(p)) return;
    for (const f of fs.readdirSync(p)) walk(path.join(p, f));
  } else if (/\.(html?|css|scss|jsx?|tsx?|mjs|vue|svelte|astro)$/.test(p) && !/\.min\./.test(p) && st.size < 2e6) files.push(p);
})(target);

const src = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');
const code = src.replace(/<!--[\s\S]*?-->/g, '').replace(/\/\*[\s\S]*?\*\//g, '');
const markup = files.filter(f => /\.(html?|jsx|tsx|vue|svelte|astro)$/.test(f)).map(f => fs.readFileSync(f, 'utf8')).join('\n');
// Copy often lives in a content file rather than in markup, so sentence-like strings from scripts count too.
const strings = files.filter(f => /\.(ts|js|mjs|json|md|mdx)$/.test(f) && !/(config|lock|\.min\.|\.d\.ts)/.test(f)).flatMap(f => { try { return fs.readFileSync(f, 'utf8').match(/(["'`])(?:(?!\1)[^\\\n]){12,}\1/g) || []; } catch { return []; } }).filter(x => /^.[A-Z0-9“"'][^<>{}=;]*\s\S+\s/.test(x)).join('\n');
const visible = (markup + '\n' + strings).replace(/<!--[\s\S]*?-->/g, '').replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ');
const count = (re, s = code) => (s.match(re) || []).length;
const headingText = [...markup.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim()).join('\n');

const DEFAULT_FONTS = ['Poppins', 'Montserrat', 'Nunito', 'Raleway', 'Lato', 'DM Sans', 'Outfit', 'Sora', 'Space Grotesk', 'Syne', 'Bebas Neue', 'Oswald', 'Playfair Display', 'Cormorant', 'Cormorant Garamond', 'Fraunces', 'Instrument Serif', 'DM Serif Display', 'Crimson Pro', 'Lora', 'Merriweather', 'Libre Baskerville', 'Space Mono', 'Reenie Beanie', 'Caveat', 'Kalam', 'Permanent Marker', 'Archivo Black'];
const usedFonts = new Set();
for (const m of code.matchAll(/fonts\.googleapis\.com\/css2?\?([^"'\s)]+)/g)) for (const f of m[1].matchAll(/family=([^:&]+)/g)) usedFonts.add(decodeURIComponent(f[1]).replace(/\+/g, ' '));
for (const m of code.matchAll(/font-family\s*:\s*([^;}]+)/g)) usedFonts.add(m[1].split(',')[0].replace(/["']/g, '').trim());
for (const m of code.matchAll(/fontFamily[^{]*\{[^}]*\}/g)) for (const f of m[0].matchAll(/["']([A-Z][A-Za-z ]+)["']/g)) usedFonts.add(f[1]);
const defaultsUsed = [...usedFonts].filter(f => DEFAULT_FONTS.some(d => d.toLowerCase() === f.toLowerCase()));

const hex = c => (code.match(new RegExp(c, 'gi')) || []).length;
const PHRASES = /\b(elevate|seamless(ly)?|unleash|unlock|revolutioni[sz]e|supercharge|game[- ]chang|effortless(ly)?|transform your|empower|next[- ]generation|cutting[- ]edge|world[- ]class|state[- ]of[- ]the[- ]art|crafted with|designed for the modern|built for (modern|teams|the)|where .{3,24} meets|isn.t just|more than just|not just an?|join (thousands|over)|everything you need|all in one place|take your .{3,20} to the next level|ready to (get started|transform|take|begin|start)\??|peace of mind|your journey|at the heart of|we believe)\b/gi;
const NAMES = /\b(Sarah (Chen|Johnson|Mitchell|Martinez|K\.?)|Marcus (Chen|Johnson|Williams|Rivera|Thompson)|Elena (Rodriguez|Vasquez|Marchetti|Petrova)|Maya (Patel|Chen|Rodriguez)|Priya (Sharma|Patel|Nair|Raman)|David (Kim|Park|Chen)|James (Wilson|Chen|Okafor)|Alex (Rivera|Chen|Morgan|Thompson)|Jordan (Lee|Rivera)|Emily (Chen|Rodriguez)|Amara (Okafor|Osei)|Lena (Park|Fischer|Hoffmann|Voss)|Tom(a|á)s (Herrera|Reyes)|Dr\. Sarah|Mei Lin|Aisha (Khan|Rahman))\b/g;

// Measured on 104 top sites: largest text has a median of 64px and weight 450. Heavy poster type is the generated look.
const h1Rule = code.match(/(?:^|[\s{;}])h1[^{]*\{[^}]*\}/) || [''];
const px = v => { const m = v.match(/([\d.]+)(rem|px|vw)/); return m ? +m[1] * ({ rem: 16, vw: 14.4, px: 1 })[m[2]] : 0; };
const h1Sizes = [...h1Rule[0].matchAll(/font-size\s*:\s*([^;}]+)/g)].flatMap(m => m[1].split(',').map(px));
const h1Weight = +(h1Rule[0].match(/font-weight\s*:\s*(\d+)/)?.[1] || 0);
const poster = Math.max(0, ...h1Sizes) > 96 && h1Weight >= 650 ? 1 : 0;

const rules = [
  ['type', 'poster headline', poster, `h1 up to ${Math.round(Math.max(0, ...h1Sizes))}px at weight ${h1Weight}; top sites sit near 64px at 450`, 1],
  ['type', 'heavy headline', !poster && h1Weight >= 750 ? 1 : 0, `h1 weight ${h1Weight}; top sites sit at 400 to 500`, 1],
  ['type', 'default fonts', defaultsUsed.length, defaultsUsed.join(', '), 1],
  ['type', 'gradient-clipped text', count(/background-clip\s*:\s*text/g), 'headline filled with a gradient', 1],
  ['type', 'tracked-out uppercase labels', count(/text-transform\s*:\s*uppercase[^}]*letter-spacing|letter-spacing[^}]*text-transform\s*:\s*uppercase|uppercase\s+tracking-/g), 'small caps eyebrow pattern', 3],
  ['type', 'one accented word in a heading', count(/<h[12][^>]*>(?:(?!<\/h[12]).)*<(?:em|i|mark|span[^>]*class=["'][^"']*(?:accent|highlight|italic|serif|mark|gradient))[\s>"'][^]*?<\/h[12]>/gi), 'italic or coloured word inside a heading', 2],
  ['color', 'purple/indigo gradient palette', hex('#(667eea|764ba2|6366f1|4f46e5|8b5cf6|7c3aed|a855f7|a78bfa|818cf8)') + count(/from-(indigo|violet|purple)-\d+/g), 'the default AI palette', 2],
  ['color', 'cream and terracotta palette', hex('#(f5f0e8|f5f1e8|faf7f2|faf6f0|f4f1ea|f7f3ec|f5efe6|fbf8f3|f8f4ec|d97757|c2410c|b5532a|c4633f|c8553d|b8583c|c96442|a0522d)'), 'warm paper plus clay accent', 3],
  ['color', 'glowing blue on dark', count(/box-shadow[^;}]*rgba?\(\s*(?:3\d|4\d|5\d|6\d)[ ,]+\s*(?:9\d|1[0-3]\d)[ ,]+\s*2[0-9]{2}/g), 'blue glow under controls, the current generated dark look', 1],
  ['color', 'near-black plus one neon', hex('#(0a0a0a|0a0a0b|0b0b0c|0d0d0d|111111|0f0f0f|0a0a0f)') && hex('#(c8ff00|ccff00|d4ff00|b6ff00|a3ff12|39ff14|00ff88|00ffa3|e6ff00|d9ff00|ff4d00|ff5c00)') ? 1 : 0, 'dark page with an acid accent', 1],
  ['layout', 'equal three-up or auto-fit grids', count(/repeat\(\s*3\s*,\s*(minmax\([^)]*\)|1fr)\s*\)|repeat\(\s*auto-(fit|fill)\s*,\s*minmax|grid-cols-3/g), 'cards in equal columns', 3],
  ['layout', 'stat strip', count(/class=["'][^"']*\b(stat|stats|metric|metrics)\b/gi), 'row of big numbers with small labels', 4],
  ['layout', 'identical pill and card radii', (() => { const r = [...code.matchAll(/border-radius\s*:\s*(\d+)px/g)].map(m => +m[1]); if (r.length < 8) return 0; const top = Math.max(...Object.values(r.reduce((a, v) => (a[v] = (a[v] || 0) + 1, a), {}))); return top / r.length > .6 ? 1 : 0; })(), 'one radius everywhere', 1],
  ['surface', 'glass panels', count(/backdrop-filter\s*:\s*blur|backdrop-blur/g), 'blurred translucent cards', 3],
  ['surface', 'soft grey shadow', count(/0\s+\d+px\s+\d+px\s+(-?\d+px\s+)?rgba\(0\s*,\s*0\s*,\s*0\s*,\s*0?\.(0\d|1\d?)\)/g), 'same soft shadow on everything', 4],
  ['surface', 'film grain overlay', count(/feTurbulence[^]{0,400}(opacity|mix-blend)|\bnoise\.(png|svg)|class=["'][^"']*\b(grain|noise)\b/g), 'decorative grain', 1],
  ['motion', 'fade-up reveal', /IntersectionObserver/.test(code) && count(/translateY\(\s*\d{2}px\s*\)/g) ? count(/translateY\(\s*\d{2}px\s*\)/g) : 0, 'opacity 0 + translateY on scroll', 2],
  ['motion', 'hover lift', count(/:hover\s*\{[^}]*translateY\(\s*-\d+px\s*\)/g), 'card rises a few pixels', 2],
  ['motion', 'transition: all', count(/transition\s*:\s*all/g), 'unconsidered transitions', 2],
  ['motion', 'no motion at all', /(@keyframes|\.animate\(|gsap|transition\s*:|animation\s*:)/.test(code) ? 0 : 1, 'a static page', 1],
  ['content', 'emoji or symbols as icons', count(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, visible), 'emoji or text glyphs such as stars and ticks standing in for drawn icons', 2],
  ['content', 'paired fragments', count(/(?:^|[>\n.!?]\s*)[A-Z][^.!?<\n]{2,28}\.\s+[A-Z][^.!?<\n]{2,28}\.(?=\s*(?:<|\n|$))/g, headingText), 'headings built as two short fragments: "Good coffee. Better days."', 1],
  ['content', 'false contrast', count(/\b(?:not just|isn['\u2019]t just|more than just|not a [a-z]+[,.]? (?:but )?a)\b|,\s(?:not|never)\s[a-z]+[^.]{0,30}\./gi, visible), '"X, not Y" and "not just X" as a rhythm', 3],
  ['content', 'never and nobody rhythm', count(/\b(?:Nobody|Nothing|Never|No one)\b/g, visible), 'sentences that open on Nobody, Nothing or Never', 5],
  ['content', 'numbered markers', count(/(^|[\s>])0[1-9](\s*[\/.—–-]|\s*<)/g), '01 / 02 / 03', 3],
  ['content', 'arrows on links', count(/[→↗]/g, visible), 'arrow appended to link text', 3],
  ['content', 'middle-dot strings', count(/\s[·•]\s/g, visible), 'A · B · C', 3],
  ['content', 'em dashes in copy', count(/—/g, visible), 'em dash habit', 4],
  ['content', 'marketing phrases', count(PHRASES, visible), [...new Set((visible.match(PHRASES) || []).map(s => s.toLowerCase()))].slice(0, 6).join(', '), 1],
  ['content', 'stock model names', count(NAMES, visible), [...new Set(visible.match(NAMES) || [])].slice(0, 5).join(', '), 1],
  ['content', 'round-number social proof', count(/\b(\d{1,3}[,.]?\d*[kKmM]?\+|99\.9+%|4\.9\s*(\/|★|stars?)|★★★★★)/g, visible), 'made-up stats', 3],
  ['content', 'placeholder text', count(/lorem ipsum|placeholder|coming soon|your (company|logo|name) here/gi, visible), 'unfinished content', 1],
];

const hits = rules.filter(([, , n, , min]) => n >= min).map(([area, name, n, detail]) => ({ area, name, n, detail }));
if (asJson) console.log(JSON.stringify({ files: files.length, tells: hits.length, hits }, null, 1));
else {
  console.log(`${files.length} files, ${hits.length} defaults found. Each one is a question, not a verdict: did you choose this, or did it just happen?\n`);
  for (const h of hits) console.log(`  [${h.area}] ${h.name} x${h.n}${h.detail ? ': ' + h.detail : ''}`);
}
