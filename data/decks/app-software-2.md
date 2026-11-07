# Your direction (seed 1048)

Reads as **saas**, surface **app**, register **light-precision** (see `references/registers.md`).

**This hand is your brief. Build what was dealt.** It was drawn at random from real top-tier pages so that no two projects look alike, and that only works if you follow it. Your own taste will pull you back to your usual page: a split hero, a short row of features, a warm or dark palette, four brief sections and a footer. Do not adapt the hand towards that.

You may swap at most two slots, and only where a slot is plainly impossible for this business. Say which and why. You may also add a section the business cannot work without, such as a festival's lineup or a restaurant's menu. That is not a swap. Keep the register, the type system, the palette and the section order unless the user or an existing brand requires otherwise. Take moves, not looks: the result should not be identifiable as a copy of any reference, so change the content, the imagery and the details freely.

When recipes disagree, the type system decides size and weight, the palette decides colour, the Surfaces slot decides radius, and the Copy section below decides wording. Add weights to the font URL if you need them.

If a slot needs proof you do not have, such as a testimonial, a logo wall or a statistic, read Proof in `references/copy.md`. If this is the user's real business, never invent customers or numbers: fill the slot with what you can truthfully show. If you invented the business yourself, its customers are part of the same fiction, so keep them plausible and small and list them in your closing note.

## What to build for this app surface

1. App shell: `nav.sidebar-nav/sticky-index-rail`
2. Data table: `app.data-table/key-value-list`
3. Charts: `app.chart/scatter-frontier`
4. Controls: `app.form-control/raised-segmented-track`
5. Overlays: `app.command-palette/cmdk-dialog`
6. Empty state: `app.empty-state/illustration-stack`
7. Numerals: `type.numerals/price-large-unit-small`
8. Surfaces: `surface.card/hairline-text-card`
9. Surface ladder: `atmosphere.light-surface-ladder/neutral-page-white-card`
10. Hover: `motion.hover-state/ring-grow`

## Type system

**IBM Plex Sans** with **IBM Plex Sans**. Engineered grotesque with slab-cut details; suits enterprise pages that want authority at a smaller size.
- Display: 48px, phone 34px, weight 450, tracking -0.018em, leading 1.12. These sizes suit a short headline. Past about 30 characters, drop towards 48 to 56px.
- Text: 16px/1.6. UI: IBM Plex Sans 14px 500. Label: 400, sentence case
- Load: https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400..500&display=swap https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&display=swap

## Palette

From Biome: bg #ffffff, surface #f5f6f8, text #17181c, muted #353841, accent #0065da. Keep its structure and value steps. You may move the accent's hue to suit the business, but not the ground.

## Copy

Voice: **institutional**. Headline shape: **name it: category plus audience or place**. Both are explained in `references/copy.md`, under Choose a voice and Six shapes.

These decide whether the page reads as written by a person:

- **No paired fragments.** `Good coffee. Better days.` and `Keep the thought. Lose the busywork.` are the strongest sign of generated copy: 14 of 15 generated headlines against 5 of 81 real ones. Write one plain sentence containing a noun only this business has.
- **Headings say what is in the section.** Choose one approach for the page: literal (`What's on the menu`, `What a crown costs`), a claim, or a heading that runs on into a greyer sentence. `Around here.` and `Good to know.` tell the reader nothing. Read your headings alone, in order: they should make sense as a contents list.
- **Drop the full stop.** 28% of real H1s end in one, and 85% of generated headings do. Leave it off unless the heading is a complete sentence you mean as one.
- **Facts beat mood.** Every sentence should carry a number, a name, a place or an opinion that could only belong to this business. Cut `a little`, `find your`, `thoughtful`, `crafted`, `with care`, `what comes next`, `in motion`, `room to`.
- **Pick a customer, not a category.** A thin brief is your chance to choose. Before writing anything, decide exactly who this is for and write down three facts only this business could state: a number, a place, and a policy or an opinion. Put one in the H1. The shape `<what it is> for <one narrow kind of customer>` beats any mood line, and it should be a line a competitor could not use unchanged.

## Motion

Keep this surface quick. Data does not animate in on load. Controls answer the pointer in about 150ms, and open states settle in about 200ms. Keep it to what helps someone work.

## Density and edges

Decide each section's density on purpose. Density belongs inside real content, while the chrome around it stays calm. Cut any chip, dot, label or divider a visitor could not name a job for. A gap should separate two ideas, not fill time. Never box the page: grounds and bands reach the viewport edge, with no rail lines down the sides and no dead strips at 1920 wide.

**Plain ruled rows are a default now, so treat them as one.** Rows of date, name and note on hairlines look tidy once and redundant by the second time. Use at most one plain list on a page. Anything else that is a list gets a real treatment: give each row its own object, such as a thumbnail, a small drawing or a proportional bar; let size carry value; plot items on a real axis or timeline; or make rows open, or show an image that follows the pointer.

## References

Study what each is doing. Open them if you can browse. Do not reproduce them.

**Bauhaus Clock** (saas, gold) https://bauhausclock.com/
- Doing: Sells a $19 clock screensaver like a luxury watch, treating macro dial renders and native-quality settings panels as the product story.
- Why it feels made: Every surface obeys one 30px radius on a cool grey ground while colour lives only inside product tiles, and the sticky capsule, gloss CTA and ring selectors are tuned to the standard of native macOS chrome.
- If imitated badly: Gloss buttons, frosted capsules and neumorphic toggles turn into dated skeuomorphism unless the renders beneath them are this detailed.

**Aniket** (portfolio, gold) https://unfunnyket.com/
- Doing: A personal page that is almost pure typography on four hairline rails, with one WebGL ribbon as its only flourish.
- Why it feels made: Everything hangs on rails only 7 percent black and sizes never exceed 19px, so the spacing and the single iridescent ribbon read as confident editing.
- If imitated badly: At this size any sloppy spacing is exposed, and without the ribbon and real writing the page collapses into a plain text resume.

## Recipes

Each is taken from a real page. Sizes are exact on purpose, so start from them. Class names in the snippets are short, so rename them to avoid collisions when you combine recipes.

### App shell: sticky-index-rail (seen on Stripe Pricing, Cognition, Zed Blog)

*Feeling: a long page that remembers where you are.*

A sticky column of links beside long content. Stripe's pricing rail is 222px wide with 15px links on a 27px pitch, 15/600 group heads and the active link in accent. Its list scrolls inside itself, masks out at the base above a hairline, and ends with one pinned link and a circled arrow. Cognition has no top bar at all: a 20px mark and a text list stuck at the left, with the active link in accent and a tick hung outside. Mirim indents the active item 14px and adds an arrow. Use it on pricing, long guides and case studies. Avoid it on pages with fewer than about five sections.

```css
.wrap{max-width:1064px;margin:0 auto;padding:64px 0;display:grid;grid-template-columns:222px 1fr;gap:32px}
.rail{position:sticky;top:64px;align-self:start;height:calc(100vh - 88px);display:flex;flex-direction:column}
.list{flex:1;overflow:auto;scrollbar-width:none;padding-bottom:40px;
  -webkit-mask:linear-gradient(#000 calc(100% - 64px),transparent);mask:linear-gradient(#000 calc(100% - 64px),transparent)}
.list h4{font:600 15px/27px var(--font-text);margin-top:12px}.list h4:first-child{margin-top:0}
.list a{display:block;font-size:15px;line-height:27px;color:var(--ink-2);transition:color .12s}
.list a:hover{color:var(--ink)}.list a[aria-current]{color:var(--accent);font-weight:500}
.pin{display:flex;align-items:center;gap:8px;padding-top:12px;box-shadow:inset 0 1px 0 var(--line);font-size:15px;font-weight:500;color:var(--accent)}
```

```js
const ls=[...document.querySelectorAll('.list a')];
const io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting){ls.forEach(a=>a.removeAttribute('aria-current'));
  document.querySelector(`.list a[href="#${e.target.id}"]`)?.setAttribute('aria-current','true')}},{rootMargin:'-20% 0px -70% 0px'});
document.querySelectorAll('main section').forEach(s=>io.observe(s));
```

### Data table: key-value-list (seen on radix data list)

*Feeling: a record card.*

A definition list for one thing. Muted labels in a fixed column, values beside them. Geist's docs state the rule well: one record's metadata is not a two-column table. Use real `dl` markup. Give IDs a mono face and a copy icon, because that is what people do with them. Do not use it for many records, which belong in a table.

**Recipe.** Definition list for one record: 88 to 120px muted label column, 14px values, 12px row gap, items centred; status as a soft 12/500 badge, IDs in mono with a copy icon, links in accent. Use on detail pages instead of a two-column table.

```css
.kv{display:grid;grid-template-columns:96px 1fr;gap:12px 16px;align-items:center}
.kv dt{color:var(--ink-2)}
.kv dd{margin:0;display:flex;gap:6px;align-items:center}
.id{font:400 13px var(--font-mono,ui-monospace,monospace)}
```

### Charts: scatter-frontier (seen on OpenRouter rankings, AA)

*Feeling: trade-offs, laid out.*

Two measures per item. Shade the attractive quadrant, draw the frontier, and label the notable points directly. Artificial Analysis labels most dots and states the log axis in its title. Keep dots at 8 to 10px with a surface ring. Provide a table view, because dense scatters hide exact values.

**Recipe.** Two-measure scatter: 8 to 10px dots coloured by owner, direct labels on notable points, shaded target quadrant, dotted frontier line, 11 to 12px axis titles with units, log axis stated in the title, frontier toggle, table view.

### Controls: raised-segmented-track (seen on Attio Pricing, Claude Pricing, Exa)

*Feeling: a physical switch, satisfying and clear.*

The most used control in the set, with 16 analyst rows. A tinted track, a white chip that sits proud. Use it to switch a view or a billing period among two to five options. The chip gets a hairline and a 1px shadow on neutral tracks. Claude's soft tray drops the edge entirely on a warm track, at 48 tall with 14px radius and a 4px inset.

Size every segment to the longest label, so that the chip does not change width as it moves. Slide the chip between positions at 150 to 200ms. Exa carries a 10px mono hint under each label, and pricing pages put the saving in the label, both of which remove a line of explanation. Use `role=radiogroup`.

**Recipe.** Track 32 to 48 tall, 6 to 14px radius, 4 to 7% ink fill, 3 to 4px inset; active chip in surface colour with hairline and 1px shadow, inactive second ink, no dividers. Equal widths to the longest label. Labels may carry a small saving chip.

```css
.seg{display:inline-grid;grid-auto-flow:column;grid-auto-columns:1fr;padding:4px;border-radius:12px;background:var(--fill-active)}
.seg button{height:32px;padding:0 16px;border:0;border-radius:8px;background:none;font:500 14px var(--font-text);color:var(--ink-2);transition:color .15s}
.seg button[aria-checked=true]{background:var(--bg);color:var(--ink);box-shadow:0 0 0 1px var(--line),0 1px 2px rgba(0,0,0,.06)}
.seg.tray{border-radius:14px;background:color-mix(in srgb,var(--ink) 5%,var(--bg))}
.seg.tray button{height:40px;font-size:13px;border-radius:10px}
.seg.tray button[aria-checked=true]{box-shadow:none}
```

### Overlays: cmdk-dialog (seen on geist menu, geist cmd, shadcn command)

*Feeling: everything is one keystroke away.*

Centre it at about 18vh, not the true middle, so that the list has room to grow downward and the input does not move as results change. Fix the width at 640. Rows are 40 tall, with the highlight moved by arrow keys and hover alike. Name commands with verbs and records with nouns. The footer shows the result count and what Enter will do, which removes fear. Items are verbs in Title Case or sentence case, placeholders name the scope.

Wrap each label in a single span. My first build put text and `<mark>` straight into a flex row with a gap, and every highlighted word split apart.

**Recipe.** Modal 640 wide at 18vh, 12px radius, hairline plus deep shadow, light scrim. Input 52 tall with 16px text, 12px group labels, 40px rows with 16px icon and right keycaps, 8px radius active fill, footer with result count and Enter action.

```css
.scrim{position:fixed;inset:0;background:color-mix(in srgb,var(--ink) 24%,transparent)}
.pal{position:fixed;left:50%;top:18vh;translate:-50% 0;width:min(640px,calc(100vw - 32px));max-height:60vh;display:grid;grid-template-rows:auto minmax(0,1fr) auto;background:var(--bg);border-radius:12px;overflow:hidden;box-shadow:0 0 0 1px var(--line),0 2px 4px rgba(0,0,0,.04),0 24px 64px -16px rgba(0,0,0,.28)}
.q{display:flex;align-items:center;gap:10px;height:52px;padding:0 16px;border-bottom:1px solid var(--line)}
.q input{flex:1;min-width:0;border:0;outline:0;background:none;font:400 16px var(--font-text);color:var(--ink)}
.list{overflow:auto;padding:8px;scrollbar-width:none}
.g{font:500 12px/16px var(--font-text);color:var(--ink-2);padding:8px 8px 4px}
.o{display:flex;align-items:center;gap:10px;height:40px;padding:0 8px;border-radius:8px}
.o .k{margin-left:auto;display:flex;gap:3px}
.o[aria-selected=true]{background:var(--fill-active)}
.o mark{background:none;color:inherit;font-weight:600}
.foot{display:flex;align-items:center;gap:16px;height:40px;padding:0 16px;border-top:1px solid var(--line);font-size:12px;color:var(--ink-2)}
```

```html
<div class=o role=option aria-selected=true><svg/><span>Create <mark>inv</mark>oice</span><span class=k><kbd>⌘</kbd><kbd>N</kbd></span></div>
```

### Empty state: illustration-stack (seen on atlassian empty, carbon empty states, Glossier cart)

*Feeling: friendly, a product with a mascot.*

Use only with an illustration system the brand truly owns. Atlassian's 160px spot art comes from one. Glossier's giant pale smiley shows that a single brand glyph can do it. A stock line drawing does more harm than an icon.

**Recipe.** Centred: 80 to 160px brand illustration, 20/600 title, 14px muted copy at 400px, 32px primary, secondary beside it, tertiary link. For first-run and permission errors in products with a real illustration system.

### Numerals: price-large-unit-small (seen on Raycast Pricing, Warp Pricing, Vercel Pricing)

The standard for good pricing. Seen on 6 sites.

**Use it for:** Any plan card.

**Avoid it for:** Metered pricing with several rates: use quiet-rate-stack.

**Recipe:** Price 36-64px in the display sans, weight 500-700, tracking -0.02 to -0.05em; unit 14-16px on the same baseline in grey or mono, 4-10px gap. The word Custom takes the same size so columns align. Reserve a fixed line above for billing notes so all prices sit level.

**Why it works:** The reserved note line is what most clones miss. A plan with no billing note jumps up by a line and the row of prices stops aligning.

```css
.price { font: 500 56px/1.1 var(--font-display); letter-spacing: -.03em; }
.price small { font: 400 14px/1 var(--font-mono); letter-spacing: 0; color: var(--ink-3); margin-left: 6px; }
.note { min-height: 20px; } /* reserved on every card, so prices stay level */
```

<a id="quiet-rate-stack"></a>

### Surfaces: hairline-text-card (seen on Neon Docs, Factory, Meta AI)

*Feeling: a well-kept index.*

An outline card with text only, for docs indexes, capability lists and pointers. Use 1px at `--line`, radius 4 to 16, padding 16 to 28, a 12px label, a 16 to 20px title and one muted line. Keep it short, about 160px tall, and drop the icon tile. Numbering it, as in a `01` label set in small caps or mono, gives a row order without decoration. On hover, darken the border and leave the fill alone. Avoid it for marketing features, where the reader needs evidence rather than a label.

### Surface ladder: neutral-page-white-card (seen on Warp Pricing, Vercel Pricing, Cal.com Pricing)

*Feeling: printed and exact. Feels like a well-set specification sheet.*

**Use it for:** Developer platforms and precise SaaS. The default for a light product page. **Avoid:** Warm consumer brands, where pure neutrals feel like a hospital.

Page #fafafa, raised sheet #fff, hover #f2f2f2, hairline #e6e6e6 or black 8%. Text #171717 and #4d4d4d. No tint, one accent at most, no shadow at rest. Separation is 2% lightness plus a line, so it feels printed.

Tiny hue shifts are allowed and can be an identity: #fbfdfd with a faint mint cast, or #f9f9fb and #f0f0f3 with a faint lilac one.

```html
<style>
/* grey page, white sheet, one hairline. nothing else, across the whole page */
:root{--bg:#fafafa;--surface:#fff;--hover:#f2f2f2;--line:#e5e5e5;--ink:#171717;--ink-2:#666;--ink-3:#8f8f8f}
.sheet{display:grid;grid-template-columns:repeat(3,1fr);margin:40px;background:var(--surface);border:1px solid var(--line);border-radius:12px}
.sheet>div{padding:28px;border-left:1px solid var(--line);color:var(--ink-2);height:320px}
.sheet>div:first-child{border-left:0}
.sheet h3{color:var(--ink);font-weight:500;font-size:14px}
</style>
<div class="sheet"><div><h3>Starter</h3>For one forwarder.</div><div><h3>Team</h3>For desks across time zones.</div><div><h3>Network</h3>For large forwarders.</div></div>
```

### Hover: ring-grow (seen on Claude, Anthropic News, Speakeasy)

*Feeling: tactile, unhurried.*

The button does not move. Its ring grows. Claude takes `0 0 0 1px` to 2px in 0.1s, and steps its label to full ink. Slack thickens an inset ring from 1px to 2px over 0.42s. Anthropic's news page steps the fill one tone and adds a 1px ring in that same tone. Use it for warm, editorial product sites. `box-shadow` takes no space, so nothing around it shifts, which a real border cannot do. For any pill colour, an inset `0 0 0 999px` shadow at 10 percent black works as a universal darken.

```css
.ring{color:var(--ink-2);box-shadow:0 0 0 1px var(--line);transition:box-shadow .1s ease-in-out,color .1s ease-in-out}
.ring:hover{color:var(--ink);box-shadow:0 0 0 2px var(--line)}
```

After the build, `shoot.mjs` compares the page with this hand and reports any drift. A copy of this hand is in `.frontend-craft/hand.md`, so reread the recipes while you build.