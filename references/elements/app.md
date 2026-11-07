# App

Working software is the one thing on the web people look at all day. A landing page gets forty seconds and can afford a gesture. A console gets eight hours, so any gesture turns into noise by lunchtime. Good app UI is calm because it is exact: one row height, two text sizes, a neutral frame, colour only where it means something, and a state designed for every moment the data is not perfect. This chapter teaches density, information hierarchy and how real sidebars, tables, dashboards, charts, forms, empty states, command palettes and modals are built.

It holds 123 canonical variants, clustered from 419 analyst rows across 248 sites. The strongest variants of each element were checked against real frames and re-measured in pixels. 31 demo pages covering 86 variants were rebuilt and rendered, 32 of those variants were compared side by side with the real thing, and 22 code blocks were pulled back out of this chapter and rendered as written. That work is where the corrections and mistake lists come from. The same variants live in `data/elements/app.jsonl`, which is what the sampler deals from. Recipes here use only `--font-display`, `--font-text`, `--ink`, `--ink-2`, `--ink-3`, `--bg`, `--surface`, `--line` and `--accent`, plus the derived tokens below, so any palette and type system drops in. Hex values appear only where they are neutral greys, status defaults or measured facts about a site. Treat them as evidence, not as a palette to copy.

**Contents.** [How software stays calm](#how-software-stays-calm) · [What we measured](#what-we-measured) · [Derived tokens](#derived-tokens) · [Eight app systems](#eight-app-systems)

- **[App sidebar](#app-sidebar):** [workspace sidebar](#1-workspace-sidebar) · [filled active tree](#2-filled-active-tree) · [dark compact rail](#3-dark-compact-rail) · [indicator bar rail](#4-indicator-bar-rail) · [nested guide tree](#5-nested-guide-tree) · [quiet text rail](#6-quiet-text-rail) · [icon rail](#7-icon-rail) · [contextual subnav](#8-contextual-subnav) · [onboarding library rail](#9-onboarding-library-rail) · [meta right rail](#10-meta-right-rail) · [tool palette panel](#11-tool-palette-panel)
- **[Data table](#data-table):** [workbench table](#1-workbench-table) · [hairline table](#2-hairline-table) · [zebra numeric table](#3-zebra-numeric-table) · [grouped header table](#4-grouped-header-table) · [bar behind row](#5-bar-behind-row) · [ledger rows](#6-ledger-rows) · [feature matrix](#7-feature-matrix) · [mono spec table](#8-mono-spec-table) · [parameter list](#9-parameter-list) · [two-line entity list](#10-two-line-entity-list) · [ranked leaderboard](#11-ranked-leaderboard) · [key-value list](#12-key-value-list) · [row selection states](#13-row-selection-states) · [expandable tree rows](#14-expandable-tree-rows) · [status badge set](#15-status-badge-set) · [pagination footer](#16-pagination-footer) · [fade show more](#17-fade-show-more) · [filter toolbar](#18-filter-toolbar) · [avatar stack](#19-avatar-stack)
- **[Dashboard layout](#dashboard-layout):** [inset console](#1-inset-console) · [floating panels](#2-floating-panels) · [analytics column](#3-analytics-column) · [kpi tab strip](#4-kpi-tab-strip) · [kpi tile row](#5-kpi-tile-row) · [status page column](#6-status-page-column) · [three-pane tool](#7-three-pane-tool) · [query split panes](#8-query-split-panes) · [resizable panes](#9-resizable-panes) · [app header bar](#10-app-header-bar) · [underline tab row](#11-underline-tab-row) · [card header slots](#12-card-header-slots) · [report chart grid](#13-report-chart-grid) · [docs three column](#14-docs-three-column) · [specimen page](#15-specimen-page) · [ruled guide grid](#16-ruled-guide-grid) · [generated tile gallery](#17-generated-tile-gallery)
- **[Chart](#chart):** [line with fade area](#1-line-with-fade-area) · [single line with reference](#2-single-line-with-reference) · [uptime strip](#3-uptime-strip) · [time bars with brush](#4-time-bars-with-brush) · [small multiples](#5-small-multiples) · [stacked share bars](#6-stacked-share-bars) · [monochrome area](#7-monochrome-area) · [direct label chips](#8-direct-label-chips) · [sorted entity bars](#9-sorted-entity-bars) · [scatter with frontier](#10-scatter-with-frontier) · [donut or gauge](#11-donut-or-gauge) · [tabular tooltip](#12-tabular-tooltip) · [chart card frame](#13-chart-card-frame) · [dark grid time series](#14-dark-grid-time-series) · [thin meter](#15-thin-meter) · [bump chart](#16-bump-chart) · [flat treemap](#17-flat-treemap) · [tinted choropleth](#18-tinted-choropleth) · [inline sparkline](#19-inline-sparkline)
- **[Form control](#form-control):** [outlined field](#1-outlined-field) · [input group](#2-input-group) · [filled underline field](#3-filled-underline-field) · [underline only field](#4-underline-only-field) · [label left form](#5-label-left-form) · [parameter grid form](#6-parameter-grid-form) · [validation state](#7-validation-state) · [raised segmented track](#8-raised-segmented-track) · [hairline segmented](#9-hairline-segmented) · [inverted thumb toggle](#10-inverted-thumb-toggle) · [joined segments](#11-joined-segments) · [toggle switch](#12-toggle-switch) · [dense settings list](#13-dense-settings-list) · [choice tile](#14-choice-tile) · [checkbox and radio stack](#15-checkbox-and-radio-stack) · [filter chip row](#16-filter-chip-row) · [prompt composer](#17-prompt-composer) · [docked ask bar](#18-docked-ask-bar) · [thin slider](#19-thin-slider) · [usage estimator](#20-usage-estimator) · [calendar picker](#21-calendar-picker) · [centered auth card](#22-centered-auth-card) · [split auth panel](#23-split-auth-panel) · [otp slots](#24-otp-slots) · [inline edit field](#25-inline-edit-field) · [dense app buttons](#26-dense-app-buttons) · [micro feedback](#27-micro-feedback)
- **[Empty state](#empty-state):** [centered icon stack](#1-centered-icon-stack) · [illustration stack](#2-illustration-stack) · [left headline with actions](#3-left-headline-with-actions) · [route list empty](#4-route-list-empty) · [voice-led empty](#5-voice-led-empty) · [inline placeholder](#6-inline-placeholder) · [shortcut list empty](#7-shortcut-list-empty) · [all clear state](#8-all-clear-state) · [skeleton loading](#9-skeleton-loading) · [inline progress](#10-inline-progress) · [semantic callout](#11-semantic-callout)
- **[Command palette](#command-palette):** [command dialog](#1-command-dialog) · [inline command list](#2-inline-command-list) · [keyboard search trigger](#3-keyboard-search-trigger) · [dropdown action menu](#4-dropdown-action-menu) · [context menu](#5-context-menu) · [combobox field](#6-combobox-field) · [keyboard chips](#7-keyboard-chips)
- **[Modal and sheet](#modal-and-sheet):** [form dialog](#1-form-dialog) · [alert confirm](#2-alert-confirm) · [data modal](#3-data-modal) · [one fact notice](#4-one-fact-notice) · [split offer modal](#5-split-offer-modal) · [side sheet](#6-side-sheet) · [bottom drawer](#7-bottom-drawer) · [toast stack](#8-toast-stack) · [tooltip chip](#9-tooltip-chip) · [anchored popover](#10-anchored-popover) · [corner consent card](#11-corner-consent-card) · [equal choice dialog](#12-equal-choice-dialog)
- [Before you call it done](#before-you-call-it-done)

## How software stays calm

Eight rules account for most of the distance between a real console and a generated one.

**One row pitch.** Choose one number and let nav rows, menu items, table rows and control heights snap to it or to a simple relation of it. shadcn runs 32px controls on a 36px pitch across sidebar, menu and toolbar, and that repetition is most of why it reads as designed. A page with 32, 36, 38, 40 and 44 feels loose even when each is reasonable.

**Two text sizes do almost everything.** 14px for content, 12 or 13px for labels and meta. Add 16 for card titles and one large numeral for a KPI. Hierarchy comes from weight and ink step, not from size. If a screen uses more than four sizes, it is a marketing page wearing an app costume.

**The frame is neutral, and colour has a job.** Chrome is greyscale. Accent marks the one primary action and the data series that matters. Status colour means state and nothing else. Linear, Vercel and Attio put almost no hue in their shells, which is why a single red badge is instantly legible. Colour every icon and nothing can be seen.

**Alignment beats boxes.** Numbers right aligned with tabular figures, text left aligned, one shared left edge. A table with good alignment needs no vertical rules. Every line you remove lets the data come forward.

**States are the design.** Hover, focus, selected, disabled, loading, empty, error, no permission, one row, ten thousand rows, a name 60 characters long. The happy path is about a fifth of the work. A generated UI shows only the happy path, and that is why it collapses on contact with data.

**The frame never moves.** Only content scrolls. Sidebars stay, table headers stick, a spinner does not change a button's width, a loaded table does not shift the page. Stability reads as quality long before anyone can say why.

**Say what the number is.** Every figure carries its unit, period and comparison. "+12.5%" alone is decoration. "12.5% vs previous 90 days" is information.

**Motion stays out of the way.** Hover at 150 to 200ms, press at 100 to 150ms. Menus and dialogs at 150 to 240ms. No entrance animation on data, no scroll reveals, no count-up on numbers somebody is trying to read. The 516 probed sites hover rows at a median of 200ms, and only half of them respond to hover at all, so a row that answers at 150ms already feels quick.

## What we measured

Analysts estimated rails and rows from screenshots and tended to read them small. Every figure below was re-measured from real frames at 1440 wide. Use these, not your instincts: generated apps run rails too narrow and rows too tight.

| Site | Rail width | Row pitch | Row text | Current row |
|---|---|---|---|---|
| shadcn sidebar block | 256 | 36 (32 plus 4 gap) | 14 | 7% ink fill |
| shadcn dashboard | 288 including gutters | 36 | 14 | none shown |
| Linear docs | 280 | 33 | 14 | 6% white fill |
| Vercel docs | 288 | 37 | 14 | white fill with hairline |
| Stripe API | 280 | 32 | 14 | pale accent fill, 500 weight |
| Carbon | 256 | 32 | 14 | full-bleed grey plus 3px bar |
| Primer | 300 | 36 docs, 32 component | 16, 14 | 6% fill plus 4px bar |
| Perplexity | 240 | 41 | 14 | no fill |
| Polaris dev docs | 276 | 32 | 14 | white fill plus 3px bar |

| Table | Row height | Text | Note |
|---|---|---|---|
| Attio feature matrix | 57 parent, 45 child | 15, 13 | sticky plan row above |
| shadcn dashboard | 53 | 14 | head 41 on #f5f5f5 |
| Anthropic News | 53 | 14 | head 48, mono caps |
| Cursor blog | 53 | 16 | no head |
| Artificial Analysis | 45 | 13 | head 73, two tiers |
| Geist table | 40 | 14 | zebra |
| Primer DataTable | 37 | 13 | 1px rules |
| Plausible | 36 | 14 | bar or zebra behind |
| Atlassian compact | 28 | 14 | sortable head |

So the density ladder is 28, 36, 44, 53, and above 64 for two-line rows. 53 is far more common in good product than a model expects. Carbon documents the same idea as row sizes of 24, 32, 48 and 64.

Controls in app context: Primer and Atlassian 32, shadcn 36 (32 inside input groups), Geist 40, Carbon 40, Stripe contact forms 48. Across gold sites buttons run 34 to 44 with a median of 40, but that counts marketing pages. Inside an app, use 32 or 36. Radii run 6 to 8 for controls and 8 to 14 for cards. Median border alpha is 0.08 in gold, 0.07 in light precision, 0.10 in dark precision. Transitions cluster at 150 to 200ms.

Tone steps, sampled from frames:

| Site | Shell | Panel | Hover or selected |
|---|---|---|---|
| shadcn | #fafafa | #ffffff | head #f5f5f5, hover #fafafa |
| Plausible | #fafafa | #ffffff | active KPI #f6f6f6 |
| Cursor | #f8f8f6 | #f2efea | button #edeae5 |
| Linear | #08090b | #151716 | divider #242527 |
| Grafana | #060709 | #111419 | #23262d |
| Spotify | #000000 | #121212 | #1f1f1f |

Scrims measured from dimmed pages: Airbnb 40% black, Our Place about 38% warm ink, Plausible about 60%. Light theme palettes dim at 24 to 40%; 60% suits a drill-down that fully replaces the page.

## Derived tokens

Add these once. Everything below reads them, and because they mix from the palette, a warm palette gets warm fills with no further work.

```css
:root{
  --fill-hover:color-mix(in srgb,var(--ink) 4%,transparent);
  --fill-active:color-mix(in srgb,var(--ink) 7%,transparent);
  --line-strong:color-mix(in srgb,var(--ink) 18%,transparent);
  --focus:color-mix(in srgb,var(--accent) 24%,transparent);
  /* Status. Raw hue for marks and tints, the -ink version for text. */
  --ok:#17b58a; --warn:#f0a91e; --bad:#e5484d;
  --ok-ink:color-mix(in oklab,var(--ok) 65%,var(--ink));
  --warn-ink:color-mix(in oklab,var(--warn) 60%,var(--ink));
  --bad-ink:color-mix(in oklab,var(--bad) 80%,var(--ink));
  /* Series, derived from any accent. See the chart section. */
  --s1:var(--accent);
  --s2:oklch(from var(--accent) .72 clamp(.13,c,.16) calc(h + 150));
  --s3:oklch(from var(--accent) .48 clamp(.13,c,.16) calc(h - 50));
  --s4:oklch(from var(--accent) .72 clamp(.13,c,.16) calc(h + 240));
  --s5:color-mix(in srgb,var(--ink) 22%,var(--bg));
}
body{font:400 14px/20px var(--font-text)}
.num,td.r{font-variant-numeric:tabular-nums}
```

Keep status hues raw for bars, dots and tints, and darkened for text. My first build darkened them everywhere, and the status banner came out grey-green and dull next to the real mint one. A tint needs a chromatic source: tint the raw hue, then put dark same-hue text on it.

Use `--ink-2` for labels and secondary cells and keep `--ink-3` for placeholders and disabled text, because a third-level grey rarely clears 4.5:1 at 12px.

## Eight app systems

Variants only work as a system. A floating black panel shell with Carbon's square fields and a pastel donut reads as a sample book. Choose one row, then take every surface on the screen from it. Two products built from different rows should look unrelated, and that is the point, so let the deal or the brief decide rather than a favourite.

| System | Pitch | Radius | How regions separate | Current state | Colour use | Reference |
|---|---|---|---|---|---|---|
| Inset console | 36 | 8 to 12 | Tinted shell, white inset card, hairlines | 7% ink fill | Ink as primary, accent only in data | shadcn, Attio, Vercel |
| Dark instrument | 33 | 6 to 8 | Tone steps of +7 to +13 levels | 6% white fill | Second ink everywhere, accent rare | Linear, Raycast, Resend |
| Report sheet | 36 | 8 | White cards on faint grey, tiny shadow | Tinted cell, 2px underline | One hue plus a tint per panel | Plausible |
| Enterprise grid | 32 to 48 | 0 to 6 | Rules and grey fills | Bar plus fill | One strong blue, status colours | Carbon, Primer, Atlassian |
| Monitoring wall | 32 | 4 to 12 | Panels one step above near-black | Accent at 15% | One warm accent, bright data lines | Grafana |
| Media panels | 8px gutters | 8, pills | Black gutters between panels | White text, solid pills | Content supplies the colour | Spotify |
| Warm ledger | 53 | 8 to 10 | 1px warm rules, no boxes | Outdented band on hover | Ink plus one warm accent | Anthropic News, Cursor |
| Soft consumer | 41 to 48 | 16 to 32 | Warm fills, wide radii | Plain text or soft fill | One brand colour, friendly objects | Airbnb, Perplexity |

## App sidebar

A sidebar has to answer two questions at a glance, all day: where am I, and where else can I go. It must hold its shape as the product grows from eight items to eighty, and it must disappear when someone is working.

What separates great from cheap is restraint in the rows and honesty in the width. Great rails are wider than you expect, 256 to 288, with 14px text in second ink and one quiet current state, so the list reads as a single calm column. They group with small muted labels and whitespace, pin account and settings to the base, and let the list fade under the pinned block as it scrolls. Cheap rails are 200 wide, use a coloured pill for the active row, a different icon colour per item, and a collapse arrow nobody asked for.

Measured ranges: width 240 to 300 with most at 256 to 288; row pitch 32 to 37; text 14; icons 14 to 16 with 8 to 12px gap; group labels 12 to 13 at 400 to 600; active fill 5 to 7% ink, or a pale accent. See [What we measured](#what-we-measured) for each site.

<!-- v:app.app-sidebar/workspace-sidebar -->
### 1. Workspace sidebar

*Feeling: a tidy desk, the product's home.*

The default for any SaaS or AI product with accounts and projects. A workspace switcher sits on top, primary destinations come next with no label, named groups follow, and settings plus the user block pin to the base. Do not use it for documentation, where a search-first tree serves better.

Sit the rail straight on a 2 to 4% tinted shell with no right border, because the tone step already draws the edge. Rows are 32 tall with a 4px gap, so the pitch is 36. Icons sit in second ink and turn full ink on the current row. Attach counts at the right in 12px tabular type. On phones the rail becomes a drawer behind a top bar, and on narrow desktops it collapses to a 48px icon rail.

**Recipe.** Product rail 256 to 288 wide on a 2 to 4% tinted shell, no border. Head: 32px logo tile, workspace name 14/500, 12px plan line, up-down chevron. Rows 32 tall with 4 gap, 16px icons, 14px labels, 12px muted group labels. Footer: avatar, name, email.

**Seen on** shadcn sidebar-07 view, shadcn dashboard-01 view, Linear, Attio, shadcn sidebar07, 6 sites in all. **Suits** light-precision; devtool, saas, ai.

```css
.side{position:sticky;top:0;height:100dvh;display:flex;flex-direction:column;padding:8px;background:var(--surface)}
.switch{display:flex;align-items:center;gap:8px;height:48px;padding:0 8px;border-radius:8px}
.logo{width:32px;height:32px;border-radius:8px;background:var(--ink);color:var(--bg);display:grid;place-items:center}
.switch b{display:block;font-weight:500;line-height:18px}
.switch small{display:block;font-size:12px;line-height:16px;color:var(--ink-2)}
.group{display:grid;gap:4px;padding:8px 0}
.group h6{font:500 12px/32px var(--font-text);height:32px;color:var(--ink-2);padding:0 8px;margin-bottom:-4px}
.item{display:flex;align-items:center;gap:8px;height:32px;padding:0 8px;border-radius:6px;color:var(--ink);text-decoration:none}
.item svg{width:16px;height:16px;color:var(--ink-2)}
.item:hover,.switch:hover{background:var(--fill-hover)}
.item[aria-current]{background:var(--fill-active);font-weight:500}
.item[aria-current] svg{color:var(--ink)}
.item .n{margin-left:auto;font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums}
.foot{margin-top:auto}
```

<!-- v:app.app-sidebar/filled-active-tree -->
### 2. Filled active tree

*Feeling: a well-indexed reference.*

The docs and API rail. Search with a shortcut chip sits on top, because people arrive knowing the word they want. Use it when there are more than about 25 pages. Keep it out of a product shell, where the tree's length would dominate the work.

Set rows at 14/400 with 32 to 37 pitch and chevrons at the far right of expandable groups. Stripe fills the current row with pale accent and 500 weight. Vercel uses a white fill with a hairline on a #fafafa rail, which reads as a raised key. Both work because exactly one row in sixty is filled. Fade the bottom of the list with a mask, which tells people it scrolls without showing a scrollbar.

**Recipe.** Docs or reference rail 240 to 288 wide: search field with shortcut chip on top, 12 to 13px muted group labels, 14/400 rows at 32 to 37 pitch, chevrons on groups, bottom scroll fade. Current row filled: 6px radius, 5 to 7% ink or pale accent, weight 500.

**Seen on** Vercel docs, Stripe API docs, Geist intro, Vercel docs gs, Stripe docs, 7 sites in all. **Suits** light-precision; devtool, finance.

```css
.rail{width:280px;height:100dvh;display:flex;flex-direction:column;padding:12px;background:var(--surface)}
.rail .list{flex:1;min-height:0;overflow:auto;scrollbar-width:none;mask-image:linear-gradient(#000 calc(100% - 56px),transparent)}
.rail h6{font:400 13px/20px var(--font-text);color:var(--ink-2);padding:16px 8px 4px}
.rail a{display:flex;align-items:center;justify-content:space-between;height:32px;padding:0 8px;border-radius:6px;color:var(--ink);text-decoration:none}
.rail a[aria-current]{background:color-mix(in srgb,var(--accent) 10%,var(--bg));color:var(--accent);font-weight:500}
```

<!-- v:app.app-sidebar/dark-compact-rail -->
### 3. Dark compact rail

*Feeling: instrument panel at night.*

For developer tools and anything used in long sessions. Linear's rail is the reference: near-black page, a 1px divider at 10% white, group labels at 12px, and every row in second ink so nothing shouts. Grafana's version adds a warm accent fill at 15% on the current row, which suits monitoring where orientation has to survive a glance.

Solid 15px glyphs hold their weight here. My first build used 1.6px outline icons, and in muted ink on black they thinned to nothing beside the real rail's filled marks. Use solid icons on dark, or raise outline icons a full ink step. Pin the product switcher to the bottom behind a rule and fade the list into it.

**Recipe.** Dark rail 280 wide on near-black, 1px divider at 10% white, 64px brand head. 12px muted group labels, 14px rows in second ink at 33 pitch, 15px solid glyphs. Active row 6% white, 6px radius. Switcher pinned bottom behind a rule; list fades under it.

**Seen on** Linear docs, Linear dev docs, Grafana explore, Modal docs, carbon shell header. **Suits** dark-precision; devtool, saas, other.

```css
.rail{display:flex;flex-direction:column;width:280px;height:100dvh;border-right:1px solid var(--line)}
.brand{display:flex;align-items:center;gap:10px;height:64px;padding:0 16px 0 22px;border-bottom:1px solid var(--line);flex:none}
.list{flex:1;min-height:0;overflow:auto;padding:16px 12px 24px;scrollbar-width:none;mask-image:linear-gradient(#000 calc(100% - 56px),transparent)}
.list h6{font:400 12px/16px var(--font-text);color:var(--ink-2);padding:8px 10px 6px}
.list h6:not(:first-child){margin-top:16px}
.item{display:flex;align-items:center;gap:12px;height:33px;padding:0 10px;border-radius:6px;color:var(--ink-2);text-decoration:none}
.item:hover{color:var(--ink);background:color-mix(in srgb,var(--ink) 4%,transparent)}
.item[aria-current]{color:var(--ink);background:color-mix(in srgb,var(--ink) 6%,transparent)}
.pin{flex:none;border-top:1px solid var(--line);padding:12px}
```

<!-- v:app.app-sidebar/indicator-bar-rail -->
### 4. Indicator bar rail

*Feeling: dependable, enterprise, nothing to misread.*

A grey fill on the current row plus a 3 to 4px accent bar. Use it where people navigate deep settings or the product must meet strict contrast rules, because the bar survives high-contrast modes and greyscale printing where a tint alone would vanish. It is the Primer, Carbon and Atlassian answer. In a light consumer product it can feel corporate.

Primer sets the bar outside the fill with a small gap; Carbon runs it flush against a full-bleed row. Choose one and keep it. Rows are 32 tall, groups split by a 1px divider.

**Recipe.** Settings or enterprise rail: 14px rows 32 tall, 6px radius, 6% grey fill on the current row plus a 3 to 4px accent bar outside or flush with the fill. 12/600 muted group labels, 1px dividers between groups. Holds dense admin screens with many sections.

**Seen on** primer nav list, carbon left panel, atlassian layout, GitHub contributors, GitHub org repos. **Suits** light-precision; devtool, other.

```css
.item{position:relative;display:flex;align-items:center;height:32px;margin-left:8px;padding:0 8px;border-radius:6px;color:var(--ink);text-decoration:none}
.item:hover{background:var(--fill-hover)}
.item[aria-current]{background:var(--fill-active);font-weight:600}
.item[aria-current]::before{content:"";position:absolute;left:-8px;top:4px;bottom:4px;width:4px;border-radius:2px;background:var(--accent)}
.group{padding:8px 0}.group+.group{border-top:1px solid var(--line)}
.group h6{font:600 12px/20px var(--font-text);color:var(--ink-2);padding:4px 16px}
```

<!-- v:app.app-sidebar/nested-guide-tree -->
### 5. Nested guide tree

*Feeling: a clear outline of something deep.*

Use for file trees and docs with real depth. Indent children 16px beside a 1px vertical guide, which shows parentage without extra icons. Stop at three levels. Past that, use a breadcrumb or a new page. Keep rows 28 to 32 tall so the deeper rows do not feel smaller. Open only the branch that holds the current page, or the list becomes a wall.

**Recipe.** Open group reveals children indented 16px beside a 1px vertical guide at 8 to 10% ink. Rows 28 to 32 tall, 13 to 14px, chevron rotates 90 degrees in 150ms. Only the current branch stays open. File trees add 16px icons and 16px per depth.

**Seen on** Linear start guide, shadcn collapsible. **Suits** dark-precision, light-precision; saas, devtool.

```css
.sub{margin-left:15px;padding-left:10px;border-left:1px solid var(--line);display:grid;gap:2px}
.sub .item{height:28px;font-size:13px}
.item svg.chev{margin-left:auto;transition:transform .15s}
[aria-expanded=true]>svg.chev{transform:rotate(90deg)}
```

<!-- v:app.app-sidebar/quiet-text-rail -->
### 6. Quiet text rail

*Feeling: a printed contents page.*

No fills and no icons. The current page is shown by ink colour alone. Use it for short docs or marketing-adjacent reference where the rail should be nearly invisible. Avoid it when the list exceeds a screen, because with no fill the eye loses its place. Framer's developer docs go furthest, with 13px group names, 12px children and a 22px pitch on pure black.

**Recipe.** Text-only docs rail with no fills: 13 to 14/500 group heads in ink, 13 to 14/400 items in muted ink at 26 to 42 pitch, active shown by ink or accent text alone, 1px right rule optional. Lowest chrome of the set, for short docs.

**Seen on** geist tabs, tremor table, Stripe elements examples, Framer dev. **Suits** light-precision, dark-precision; devtool, saas.

<!-- v:app.app-sidebar/icon-rail -->
### 7. Icon rail

*Feeling: a tool palette, maximum canvas.*

A 48px column of 16px glyphs. Hoppscotch uses it beside a second contextual rail, so the app can show three panes on a laptop. It also serves as the collapsed form of a full rail. Every icon needs a tooltip and a real accessible name. Do not start a new user here, because icons alone teach nothing, so default to expanded and let people collapse.

**Recipe.** 48px icon rail, 16px glyphs in second ink, 6px radius hover chip, active 2px accent edge, labels in tooltips. Use beside a second contextual panel in tools, or as the collapsed state of a 256 rail with its toggle at the bottom.

**Seen on** shadcn sidebar, Hoppscotch home. **Suits** light-precision; devtool.

```css
.irail{width:48px;display:grid;align-content:start;gap:4px;padding:8px 0;border-right:1px solid var(--line)}
.irail a{width:48px;height:48px;display:grid;place-items:center;color:var(--ink-2);position:relative}
.irail a[aria-current]{color:var(--ink)}
.irail a[aria-current]::before{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--accent)}
```

<!-- v:app.app-sidebar/contextual-subnav -->
### 8. Contextual subnav

*Feeling: a filter drawer that stays open.*

A second-level list inside the page: saved views on an issue tracker, or an in-page index on a long report. OpenRouter's rankings page uses a 200px list with a pale accent current row, and it scrolls the page rather than changing it. Keep it visually lighter than global nav. Two rails of equal weight read as a mistake. Skip it when a page has fewer than four sections.

**Recipe.** Second-level nav beside content, 160 to 256 wide: 14px rows 32 to 36 tall with 16px outline icons, tinted current row at 6px radius, small footer actions. Lists filters, saved views or in-page sections and sits inside the page under global nav.

**Seen on** OpenRouter rankings, GitHub issues. **Suits** light-precision; ai, devtool.

<!-- v:app.app-sidebar/onboarding-library-rail -->
### 9. Onboarding library rail

*Feeling: helpful, a shelf waiting to be filled.*

When a rail would otherwise be empty, put the first steps in it. Spotify shows two prompt cards one tone step above the panel, each with one action. Perplexity places a small card between groups. It works because the card sits where the content will appear, so it explains the space. Remove each card when it is done. One upsell in a rail is tolerable, three is an ad column.

**Recipe.** Rail panel 332 wide holding a 16/700 title and round add button, then 8px-radius prompt cards one tone step up with 14/700 title, one line and a white 32px pill. Legal and language pinned at the base. The rail teaches before it has content.

**Seen on** Spotify, Perplexity. **Suits** dark-precision; other.

<!-- v:app.app-sidebar/meta-right-rail -->
### 10. Meta right rail

*Feeling: the spec sheet beside the document.*

Facts about the thing on the page: stats, topics, licence, a small download sparkline. GitHub's About column and Hugging Face's model rail both run 296 to 380 wide. Use it when a record has many short properties. Stack it below content under 900px, with the most useful facts first. Do not put primary actions here, because people look to the header for those.

**Recipe.** Right column 296 to 380 wide beside main content: 14/600 section heads, key-value rows 13 to 14px at 24 pitch, 12px topic chips, small sparkline with count, 1px dividers. Facts only, no actions beyond a link.

**Seen on** GitHub repo, HF model card. **Suits** light-precision; devtool, ai.

<!-- v:app.app-sidebar/tool-palette-panel -->
### 11. Tool palette panel

*Feeling: the workbench.*

For canvas tools: searchable sections of tools or properties. Density is the point, so type drops to 11 to 13px and rows to 22px. That is correct only here, where a pointer works at speed and every item is seen repeatedly. Keep sections collapsible and remember their state.

**Recipe.** Editor side panel 215 to 280 wide: search on top, collapsible 11 to 12px bold sections, grid of 26px tool glyphs or 13px label plus checkbox rows at 22 pitch, pinned more button. Flat, 1px dividers, no shadows.

**Seen on** drawio. **Suits** light-precision; other.

### Mistakes that cheapen a sidebar

- **A rail narrower than 240.** Generated sidebars default to 200 to 220, labels truncate, and the whole app feels cramped. Real rails run 256 to 288.
- **A saturated pill on the current row.** It becomes the loudest thing on the screen and competes with the page's primary action. Use a 5 to 7% ink fill.
- **Coloured icons.** A rainbow of 16px glyphs is the fastest way to look like a template. Keep one ink step for all of them.
- **Pitch that does not match the rest of the app.** If nav is 36 and menus are 32 and table rows are 40, nothing feels related.
- **Thin outline icons on dark in second ink.** They disappear. This was my own first mistake on the dark rail.
- **A visible scrollbar.** Hide it and use a bottom fade, or the list reads as a web page rather than a panel.
- **Bold on hover.** Weight changes reflow text and rows jitter. Change the fill. Set the current row's weight only.
- **Nothing pinned at the base.** Settings and the account should be where the hand expects them, not at the end of a list.

## Data table

A table exists so that someone can compare values down a column and find one row among many. Everything follows from that: columns must align, numbers must line up digit under digit, and the row must be traceable across the full width.

What separates great from cheap is what the table refuses to add. Great tables have no vertical rules, one quiet horizontal rule or a faint zebra, right-aligned tabular numerals, muted headers that stay out of the way, and one sort arrow where the sort actually is. They give long text a deliberate ending. Their status cells use a word plus a small mark. Cheap tables centre everything, set headers in bold caps on a dark fill, box every cell, colour whole rows, and use proportional figures, so $1,111.00 and $9,999.00 do not align.

The first decision is whether it is a table at all. Rows that share columns and get compared are a table. Rows with one title, a sentence and an action are a list, so use the two-line entity list. One record's properties are a key-value list.

Measured ranges: rows 28 to 57 with clusters at 36, 44 and 53; cells 13 to 14; headers 12 to 14 at 500 to 600 in second ink; rules 1px at 6 to 12% ink; zebra 2 to 3% ink; cell padding 8 to 16; hover 3 to 4% ink at 150 to 200ms. Wrapper radius 6 to 12.

Three rules hold for all variants:

```css
table{width:100%;border-collapse:collapse;font-size:14px}
th{font-weight:500;color:var(--ink-2);text-align:left;white-space:nowrap}
td.r,th.r{text-align:right;font-variant-numeric:tabular-nums}  /* numbers, dates with a fixed format, money */
```

Keep decimals consistent in a column, so $1,180.00 sits over $42,100.00. Right-align a numeric header with its column. Let the table wrapper scroll sideways on phones, and hold the first column in place when there are many columns.

<!-- v:app.data-table/workbench-table -->
### 1. Workbench table

*Feeling: a place to get through a queue.*

The full app table with selection, status, actions and paging. Use it as the main body of a screen where people act on rows. Do not use it for read-only data, where the checkboxes and menus become clutter.

Real row height here is 53 in shadcn's dashboard, taller than analysts estimated, and that air is what keeps a heavy table calm. 48 works too. The head row carries a 4% fill so it reads as chrome, and the whole table sits in a 12px hairline wrapper with `overflow:hidden`. Put the tabs and filter controls above and the selection count and pager below, so the table's own frame stays clean. Primary cell at 500, IDs and dates in second ink, amount right aligned in full ink.

**Recipe.** Full app table: 40px head on 4% ink fill, rows 48 to 53, 14px cells, 1px rules at 8% ink, checkbox and action columns, status badges, 3% hover fill, 12px radius wrapper. Tabs or toolbar above, selection count and page controls below.

**Seen on** shadcn dashboard-01 view, flowbite adv tables, carbon data table, flowbite tables. **Suits** light-precision; devtool, saas.

```css
.wrap{border-radius:12px;box-shadow:inset 0 0 0 1px var(--line);overflow:hidden}
th{height:40px;padding:0 12px;font-size:13px;background:var(--fill-hover);border-bottom:1px solid var(--line)}
td{height:48px;padding:0 12px;border-bottom:1px solid var(--line);white-space:nowrap}
tbody tr:last-child td{border-bottom:0}
tbody tr:hover td{background:var(--fill-hover)}
.who{font-weight:500}.mut{color:var(--ink-2)}
.pager{display:flex;justify-content:space-between;align-items:center;padding:12px 4px;color:var(--ink-2);font-size:13px}
```

<!-- v:app.data-table/hairline-table -->
### 2. Hairline table

*Feeling: a clean page from a good annual report.*

The quietest full table: rules only, no fill, no box. Use it for read-only data inside a page or card, such as invoices on a detail page. Row 44 to 53, cells 14/400, header 13 to 14/500. The bottom rule alone does the separating. A bold total in a footer row is the one flourish allowed.

**Recipe.** Quiet table with no outer box: 44 to 53px rows, 14/400 cells, 13 to 14/500 header, 1px rules at 8 to 12% ink only, no zebra, no vertical rules, numerals right aligned and tabular, optional bold total row in the footer.

**Seen on** atlassian dynamic table, radix themes table, geist table, tremor table, HF model card, 6 sites in all. **Suits** light-precision; devtool, saas, ai.

```css
table.h th{height:44px;padding:0 16px 0 0;border-bottom:1px solid var(--line-strong)}
table.h td{height:48px;padding:0 16px 0 0;border-bottom:1px solid var(--line)}
table.h tfoot td{font-weight:600;border-bottom:0}
```

<!-- v:app.data-table/zebra-numeric-table -->
### 3. Zebra numeric table

*Feeling: fast to scan, a spreadsheet with manners.*

No rules at all. Alternate rows carry a 2 to 3% fill with a 4 to 6px radius on their ends. Use it for many numeric columns at a tight 36 to 40px pitch, where rules at every row would turn into stripes of ink. Zebra helps the eye stay on a row across a wide gap, which matters most when text is on the left and numbers far right.

Sample the tint: Geist's band is #fafafa on white, Plausible's #f7f7f7. If you can see it clearly on a good monitor it is too strong.

**Recipe.** Dense numeric table without rules: 36 to 40px rows, 14/400, alternate rows at 2 to 3% ink with 4 to 6px radius, 12/500 muted headers, 16px favicon plus name, right-aligned tabular numbers, one active sort arrow.

**Seen on** geist table, Plausible sources, Plausible pages. **Suits** light-precision; saas, devtool.

```css
table.z th{height:36px;padding:0 8px;font-size:12px;font-weight:600;color:var(--ink-2);text-align:right}
table.z td{height:36px;padding:0 8px;text-align:right;font-variant-numeric:tabular-nums}
table.z th:first-child,table.z td:first-child{text-align:left}
table.z tbody tr:nth-child(odd) td{background:color-mix(in srgb,var(--ink) 3%,transparent)}
table.z tbody td:first-child{border-radius:4px 0 0 4px}
table.z tbody td:last-child{border-radius:0 4px 4px 0}
```

<!-- v:app.data-table/grouped-header-table -->
### 4. Grouped header table

*Feeling: a serious leaderboard.*

When columns fall into families, such as cost, speed and reliability, give them a two-tier head. Artificial Analysis does this with group labels over column labels and unit lines at 11px, and vertical rules only between groups. Those rules carry meaning, so they earn their place where a rule per column would not. A 4x16 colour tab before each name ties a row to its owner without colouring the row.

Centring numerals is acceptable here only because each column holds a single unit and the values are short. For money with different magnitudes, right-align.

**Recipe.** Wide comparison table: two-tier head on a tinted fill, 12/600 group row over 12/600 column row with 11px unit lines, vertical 1px rules only between groups, rows 40 to 45, 12 to 13px, 4x16 entity colour tab before the name, centred tabular numerals.

**Seen on** AA leaderboard, Postman. **Suits** light-precision, dark-precision; ai, devtool.

```css
thead{background:var(--fill-hover)}
th{font-weight:600;font-size:12px;line-height:16px;padding:8px 12px;border-bottom:1px solid var(--line);text-align:center}
th small{display:block;font-weight:400;font-size:11px;color:var(--ink-2)}
.g th{padding-bottom:0;border-bottom:0;text-align:left}
.gl{border-left:1px solid var(--line)}
td{height:40px;padding:0 12px;text-align:center;border-bottom:1px solid var(--line);font-variant-numeric:tabular-nums}
.n{display:flex;align-items:center;gap:8px;font-weight:600}
.n i{width:4px;height:16px;border-radius:2px;background:var(--c)}
```

<!-- v:app.data-table/bar-behind-row -->
### 5. Bar behind row

*Feeling: a table that is also a chart.*

Plausible's signature. Each label sits on a tinted bar scaled to its value, so magnitude reads before you read a number. Use it for ranked breakdowns of up to about ten rows: sources, pages, countries. Use one tint per panel, which gives a dashboard colour without hurting legibility.

The bar lives in the label column only and stops short of the value, so the number always has clean ground. My first version placed long labels past the end of short bars and it still read fine, because text runs on its own layer above the bar. Scale from the top value at about 75% of the column, and give the smallest rows a 2px minimum width.

**Recipe.** Ranked list where each label sits on a tinted bar scaled to its value: 36px pitch, 32px bar, radius 4, 10% tint, value right aligned at 14/500 in its own column. Bars stop short of the values. One tint per panel.

**Seen on** Plausible Live Dashboard. **Suits** light-precision; saas.

```css
.row{display:flex;align-items:center;justify-content:space-between;gap:16px;height:32px;margin-bottom:4px}
.lab{position:relative;flex:1;min-width:0;height:32px;display:flex;align-items:center;padding:0 8px}
.lab::before{content:"";position:absolute;inset:0 auto 0 0;width:calc(var(--v)*1%);min-width:2px;border-radius:4px;background:color-mix(in srgb,var(--tint,var(--accent)) 10%,var(--bg))}
.lab span{position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.row b{font-weight:500;font-variant-numeric:tabular-nums;width:56px;text-align:right;flex:none}
```

<!-- v:app.data-table/ledger-rows -->
### 6. Ledger rows

*Feeling: a well-set index, editorial and exact.*

A list that uses table discipline without looking like software. Anthropic's news archive and Cursor's blog keep every row on a shared column grid, with 1px rules and no box. Use it for archives, changelogs, press and any list where people browse rather than operate. Cursor sets it at 53px and 16px inside a warm panel; analysts read 36 and 13, so trust the larger figures.

Two details make it. Long text fades on a mask rather than ending in an ellipsis, and the hover band outdents 16px beyond the rules, so the row seems to lift out of the grid. I matched the real frame almost pixel for pixel using only these two moves.

**Recipe.** Editorial list on a shared column grid: 53px rows, 1px rules, 11px mono caps headers or none, 13 to 14px cells, bold title, long text fading on a 40px mask rather than an ellipsis. Hover draws an 8px-radius band outdented 16px past the rules.

**Seen on** Cursor Blog, Anthropic News, MetaLab Work, Supabase Blog, FWA Wire. **Suits** warm-neutral, dark-precision, light-precision, expressive; editorial, agency, ai, devtool.

```css
.led{--cols:minmax(0,2.3fr) minmax(0,2fr) minmax(0,1.6fr) 120px 40px;display:grid}
.row{position:relative;display:grid;grid-template-columns:var(--cols);gap:24px;align-items:center;height:53px;color:inherit;text-decoration:none;border-bottom:1px solid var(--line)}
.row.head{height:48px;font:500 11px/1 var(--font-mono,ui-monospace,monospace);letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}
.row:not(.head)::before{content:"";position:absolute;inset:-1px -16px;border-radius:8px;box-shadow:inset 0 0 0 1px var(--line);background:var(--fill-hover);opacity:0;transition:opacity .15s}
.row:not(.head):hover::before{opacity:1}
.row>*{position:relative;min-width:0}
.clip{white-space:nowrap;overflow:hidden;mask-image:linear-gradient(90deg,#000 calc(100% - 40px),transparent)}
@media(max-width:760px){.led{--cols:1fr 96px}.row>:nth-child(2),.row>:nth-child(3),.row>:nth-child(5){display:none}}
```

<!-- v:app.data-table/feature-matrix -->
### 7. Feature matrix

*Feeling: a fair comparison, easy to trust.*

The pricing comparison table. Attio keeps 60 rows scannable with two row sizes: parents at 57 tall and children at 45, smaller, greyer and indented. Claude and Warp show that the marks matter most. A yes is a small filled disc, a no is a thin grey x, and the weight difference alone lets you scan a column without colour.

My first render used full-ink discs at 15px and 15px labels in full ink, and it looked heavier than Attio. The real table sets everything one ink step down, with discs in a slate at about 74% ink and a highlight column at only 2%, so the recommended plan glows rather than shouts. Also watch specificity: a `th{text-align:center}` on the table will centre your first column.

**Recipe.** Comparison table: first column 240 wide, parent rows 57 tall at 15px, child rows 45 tall at 13px, muted and indented 16px. Yes is a 14px filled disc with white tick, no a 10px thin x. Recommended column holds a 2% tint.

**Seen on** Claude Pricing, Warp Pricing, Attio Pricing. **Suits** light-precision, warm-neutral; ai, devtool, saas.

```css
.m{width:100%;border-collapse:separate;border-spacing:0;table-layout:fixed}
.m th,.m td{text-align:center;border-bottom:1px solid var(--line);padding:0 12px}
.m tbody{color:color-mix(in srgb,var(--ink) 82%,var(--bg))}
.m tbody th{font-weight:400;text-align:left}
.m .p th,.m .p td{height:57px;font-size:15px}.m .p th{color:var(--ink-2);font-weight:500}
.m .s th{height:45px;padding-left:28px;font-size:13px;color:var(--ink-2)}.m .s td{height:45px}
.m tbody td:nth-child(4){background:color-mix(in srgb,var(--ink) 2%,transparent)}
.yes{display:inline-grid;place-items:center;width:14px;height:14px;border-radius:50%;background:color-mix(in srgb,var(--ink) 74%,var(--bg));color:var(--bg)}
.no{color:var(--ink-3);width:11px;height:11px;display:inline-block}
```

<!-- v:app.data-table/mono-spec-table -->
### 8. Mono spec table

*Feeling: a datasheet.*

Mono type, dashed or hairline separators, numbers right aligned, the final column bold. Hugging Face's compute pricing blanks repeated names so that instances read as groups, a printer's trick. Use it for prices per instance, API limits and props. Dashed rules are acceptable here because the page is a spec, not a chart.

**Recipe.** Reference table in mono 13 to 14px: 37 to 44px rows, dashed or hairline separators, right-aligned numbers, final price column bold, repeated names blanked so instances read as groups. Props version: 1px border, 6px radius, 12px muted header, type chips.

**Seen on** Stripe appearance, primer blankslate, primer form control, Hugging Face Pricing, Stripe elements examples, 6 sites in all. **Suits** light-precision; devtool, finance, ai.

```css
.mono{width:100%;border-collapse:collapse;font:400 14px var(--font-mono,ui-monospace,monospace)}
.mono th{font-weight:400;text-align:right;padding:0 12px;height:36px;color:var(--ink-2);font-size:12px;background:var(--fill-hover)}
.mono td{text-align:right;padding:0 12px;height:40px;border-bottom:1px dashed var(--line-strong)}
.mono th:first-child,.mono td:first-child{text-align:left}
.mono td:last-child{font-weight:600}
.mono tr.rep td:first-child{color:transparent}
```

<!-- v:app.data-table/parameter-list -->
### 9. Parameter list

*Feeling: reference writing at its best.*

When each row needs a sentence, a table squeezes it. Stripe's API docs stack a bold mono name, a muted type and a description, with a rule between, then let nested attributes expand. Beside it, a small bordered summary table with a tinted head row gives the fast lookup. Use the pair for reference docs.

**Recipe.** Stacked reference: mono 14px bold name, 12px muted type beside it, description 14 to 16px below, 1px rules between, nested child-attributes toggle. Better than a table when descriptions run to sentences. Pair with a bordered summary card in the right column.

**Seen on** Stripe API docs. **Suits** light-precision; finance.

```css
.p{border-top:1px solid var(--line);padding:16px 0}
.p b{font:600 14px var(--font-mono,ui-monospace,monospace)}
.p i{font:400 12px var(--font-text);color:var(--ink-2);margin-left:8px}
.p p{color:var(--ink-2);margin-top:4px}
.ref{border-radius:8px;box-shadow:inset 0 0 0 1px var(--line);overflow:hidden}
.ref h6{font:600 12px/32px var(--font-text);text-transform:uppercase;padding:0 12px;background:var(--fill-hover);border-bottom:1px solid var(--line);color:var(--ink-2)}
```

<!-- v:app.data-table/two-line-entity-list -->
### 10. Two-line entity list

*Feeling: a feed you can work through.*

When items are titles with metadata rather than cells, drop the columns. GitHub's issue list, OpenRouter's model list and Hugging Face's hub all do this. Title at 15 to 16/500 with labels inline, a 12px meta line, trailing counts aligned right. Either rules inside one bordered box, or separate hairline cards. OpenRouter's cards are about 143 tall with 8px gaps at real size, and offer a list and table toggle for people who do want columns.

**Recipe.** List rows instead of columns: 16 to 40px leading icon or thumbnail, 15 to 16/500 title with inline 12px pills, 12px muted meta line, trailing counts. 64 to 96px tall, rules inside one 6 to 8px box, or separate hairline cards 8 to 20px apart.

**Seen on** OpenRouter models, HF models, shadcn item, GitHub issues, GitHub pulls, 7 sites in all. **Suits** light-precision; devtool, ai.

```css
.list{border-radius:8px;box-shadow:inset 0 0 0 1px var(--line)}
.r{display:grid;grid-template-columns:16px minmax(0,1fr) auto;gap:12px;padding:12px 16px;border-top:1px solid var(--line)}
.r:first-child{border:0}.r:hover{background:var(--fill-hover)}
.r b{font-weight:500;font-size:15px;line-height:22px}
.r p{font-size:12px;line-height:18px;color:var(--ink-2)}
.m{display:flex;gap:16px;color:var(--ink-2);font-size:12px}
```

<!-- v:app.data-table/ranked-leaderboard -->
### 11. Ranked leaderboard

*Feeling: a scoreboard.*

Rank, logo, name, owner, volume, delta. Two columns of it fill a page section on OpenRouter. Use it on overview pages. The delta is 12px and coloured by direction, but the arrow or sign carries it too, so it survives colour blindness. Use a sortable table when people need to reorder it.

**Recipe.** Two-column ranked list: rank numeral, 20px logo, 14/500 name, muted owner, right-aligned volume and 12px delta coloured by direction. Sorted descending, no headers. Use on overview pages where the rank is the message.

**Seen on** OpenRouter rankings. **Suits** light-precision; ai.

<!-- v:app.data-table/key-value-list -->
### 12. Key-value list

*Feeling: a record card.*

A definition list for one thing. Muted labels in a fixed column, values beside them. Geist's docs state the rule well: one record's metadata is not a two-column table. Use real `dl` markup. Give IDs a mono face and a copy icon, because that is what people do with them. Do not use it for many records, which belong in a table.

**Recipe.** Definition list for one record: 88 to 120px muted label column, 14px values, 12px row gap, items centred; status as a soft 12/500 badge, IDs in mono with a copy icon, links in accent. Use on detail pages instead of a two-column table.

**Seen on** radix data list. **Suits** light-precision; devtool.

```css
.kv{display:grid;grid-template-columns:96px 1fr;gap:12px 16px;align-items:center}
.kv dt{color:var(--ink-2)}
.kv dd{margin:0;display:flex;gap:6px;align-items:center}
.id{font:400 13px var(--font-mono,ui-monospace,monospace)}
```

<!-- v:app.data-table/row-selection-states -->
### 13. Row selection states

*Feeling: a clear mode change.*

Hover is a 3 to 4% fill. Selected is a pale accent fill with a 2px edge. When rows are selected, the toolbar swaps for a contextual bar with the count and bulk actions, in one strong fill so that nobody misses the mode. Carbon uses its accent, and solid ink works just as well. Keep the bar the same height as the toolbar so that the table does not jump.

**Recipe.** Row states: hover 3 to 4% ink fill at 150ms; selected pale accent fill with a 2px left edge; a contextual bar replaces the toolbar with a count, bulk actions and cancel, in one strong fill so the mode is obvious.

**Seen on** atlassian dynamic table, geist table, carbon data table. **Suits** light-precision; devtool, saas.

```css
tr[aria-selected=true] td{background:color-mix(in srgb,var(--accent) 7%,var(--bg))}
tr[aria-selected=true] td:first-child{box-shadow:inset 2px 0 0 var(--accent)}
.sel{display:flex;align-items:center;gap:12px;height:44px;padding:0 8px 0 16px;border-radius:8px;background:var(--ink);color:var(--bg)}
.sel .sp{flex:1}
.sel button{height:32px;padding:0 10px;border:0;border-radius:6px;background:color-mix(in srgb,var(--bg) 14%,transparent);color:var(--bg);font:500 13px var(--font-text)}
```

<!-- v:app.data-table/expandable-tree-rows -->
### 14. Expandable tree rows

*Feeling: detail on demand.*

A row opens in place to show more, on a faint inset fill. Use it when people need detail occasionally and must keep their place. If they need it every time, show it. Folder lists use the same mechanics with icons and depth indents. Animate the height over 200ms, and rotate the chevron rather than swapping icons.

**Recipe.** Rows that open in place: 32 to 40px, chevron at left rotating 90 degrees, detail inset on a 2 to 4% fill with key-value pairs, height eased 200ms. Folder version uses 16px icons, 16px indent per depth, trailing commit line and time.

**Seen on** Vercel docs gs, GitHub repo, carbon data table, Grafana dashboards, Geist collapse, 6 sites in all. **Suits** light-precision, dark-precision; devtool.

<!-- v:app.data-table/status-badge-set -->
### 15. Status badge set

*Feeling: small, exact signals.*

The cell vocabulary of an app. Two forms cover nearly everything: a soft tint with dark same-hue text, and a hairline chip with a small dot. Use the hairline form in tables, where many coloured pills would wash the column in colour; shadcn's dashboard does this with quiet outlined chips. Use the soft form for one badge in a header. Text always names the state, and a spinner may stand in for the dot on running states. Geist's guidance is the same: never colour alone.

**Recipe.** Status pills 20 to 22 tall, 12/500, 6 to 8px padding, full or 6px radius: subtle tint with dark same-hue text, or hairline with a 7px dot. Optional 12px icon or spinner. Colour maps to state only and the text always names the state.

**Seen on** shadcn badge, Geist badge, Geist status dot. **Suits** light-precision; devtool.

```css
.st{display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 8px 0 6px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--line);font-size:12px;font-weight:500;color:var(--ink-2)}
.st i{width:7px;height:7px;border-radius:50%;background:var(--ok)}
.st.late i{background:var(--bad)}.st.open i{background:var(--warn)}
.soft{display:inline-flex;height:20px;align-items:center;padding:0 6px;border-radius:4px;font-size:12px;font-weight:500;background:color-mix(in oklab,var(--ok) 16%,var(--bg));color:var(--ok-ink)}
```

<!-- v:app.data-table/pagination-footer -->
### 16. Pagination footer

*Feeling: a quiet end to the table.*

Workbench tables want a compact footer: selection count at left, rows per page and page N of M at right, with icon buttons. Public lists want a centred numbered pager, with the current page solid. Keep the control height at 32 and use tabular numerals so nothing shifts between pages. Disabled arrows stay visible at the ends so the layout holds.

**Recipe.** Table ending: left a selection count at 13px muted, right a rows-per-page select, page N of M and four 32px icon buttons; or a centred numbered pager with 32px squares, 6px radius, current page solid. Tabular numerals so width never jumps.

**Seen on** atlassian dynamic table, HF models, GitHub issues, shadcn pagination, Geist pagination. **Suits** light-precision; devtool, saas, ai.

```css
.pg{display:flex;justify-content:center;gap:4px;align-items:center}
.pg a{min-width:32px;height:32px;display:grid;place-items:center;padding:0 6px;border-radius:6px;color:var(--ink);text-decoration:none;font-variant-numeric:tabular-nums}
.pg a[aria-current]{background:var(--ink);color:var(--bg)}
.pg a.t{color:var(--ink-2)}
```

<!-- v:app.data-table/fade-show-more -->
### 17. Fade show more

*Feeling: a page that respects your scroll.*

For tables embedded in docs or marketing. Show about ten rows, fade the last two to the page colour, and float a pill on the seam. Vercel's Geist uses it. In an app with real data, use pagination, because people need to know how long the list is.

**Recipe.** Long table or code truncated: last two rows fade to page colour across 80px, and a 32px hairline pill with chevron overlaps the fade at centre. Keeps docs pages short without pagination. Reveal in place and keep scroll position.

**Seen on** geist table. **Suits** light-precision; devtool.

```css
.fade{position:relative;max-height:420px;overflow:hidden}
.fade::after{content:"";position:absolute;inset:auto 0 0;height:80px;background:linear-gradient(transparent,var(--bg));pointer-events:none}
.more{position:absolute;left:50%;bottom:8px;translate:-50% 0;z-index:1;height:32px;padding:0 14px;border:0;border-radius:16px;background:var(--bg);box-shadow:inset 0 0 0 1px var(--line-strong);font:500 14px var(--font-text);color:var(--ink)}
```

<!-- v:app.data-table/filter-toolbar -->
### 18. Filter toolbar

*Feeling: everything within reach, nothing shouting.*

All controls one height, 32px. Search grows to fill, labelled filters show their current value in bold, so state reads without opening anything. Artificial Analysis's `Status: Current` chips are the model. Put the sort and view toggle after the filters and the count at far right. On phones keep search and collapse the rest behind one Filter button with a count.

**Recipe.** Bar above a list with every control 32px: search field grows, then labelled filters with bold value, sort select, list or table view toggle, count at right, 8px gaps. Active filters show as removable chips with a clear-all.

**Seen on** OpenRouter models, Snohetta People, HF models, Dishoom Locations, flowbite table headers, 12 sites in all. **Suits** light-precision, warm-neutral, bold-colour, illustrated; devtool, ai, architecture, food-drink.

```css
.bar{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.s{flex:1;min-width:200px;display:flex;align-items:center;gap:8px;height:32px;padding:0 10px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--line-strong);color:var(--ink-3)}
.f{height:32px;display:inline-flex;align-items:center;gap:6px;padding:0 10px;border-radius:8px;background:var(--fill-hover);color:var(--ink-2);font-size:13px}
.f b{font-weight:600;color:var(--ink)}
```

<!-- v:app.data-table/avatar-stack -->
### 19. Avatar stack

*Feeling: people, at a glance.*

Overlap 24 to 32px circles by 8px with a 2px ring in the surface colour, so they separate on any ground. End with a +N circle. The ring must match the row's fill, including hover, or it shows as a stray white halo. Use an opaque fill and stack the first member on top: with a transparent fill and default order, my letter avatars showed their neighbours through them and lost half their initials. Show five faces at most, since past that the count is the information.

**Recipe.** Overlapping 24 to 32px circles, -8px overlap, 2px ring in the surface colour, trailing +N count on 6% ink at 12/500. Letter fallback is 11px initials on grey. Status dot 10px at the corner with the same ring.

**Seen on** shadcn avatar, Geist avatar. **Suits** light-precision; devtool.

```css
.stack{display:flex}
.stack>*{position:relative;width:32px;height:32px;border-radius:50%;box-shadow:0 0 0 2px var(--bg);margin-left:-8px;background:color-mix(in srgb,var(--ink) 7%,var(--bg));display:grid;place-items:center;font-size:11px;font-weight:500}
.stack>:first-child{margin-left:0;z-index:3}.stack>:nth-child(2){z-index:2}.stack>:nth-child(3){z-index:1}
```

### Mistakes that cheapen a table

- **Proportional figures.** Without `font-variant-numeric:tabular-nums`, digits do not stack and the column looks broken. This is the single cheapest fix in the chapter.
- **Centred text.** Only short uniform values may centre. Text left, numbers right.
- **Bold caps headers on a dark fill.** The header is the least important text in the table. Use second ink at 500.
- **Rows too tight.** 32px with 14px text and full borders is a spreadsheet. If you cannot justify the density, use 48.
- **Rules plus zebra plus box.** Pick one separator.
- **Colour in every status cell.** Twelve solid pills in a column read as a rash. Use hairline chips with a small dot.
- **Ellipsis on everything.** Prefer a fade, or give the column room. Never truncate an ID or an amount.
- **A selector that beats your alignment.** In my matrix a broad `th{text-align:center}` centred the first column, and in the status demo `.svc div{}` silently restyled a child strip. Scope table rules tightly.
- **Empty cells left blank.** Use a thin dash in third ink, so that a missing value does not look like a loading failure.
- **Hover that only changes the cursor.** Half of probed rows do nothing on hover. A 4% fill helps the eye track a row across a wide table.

## Dashboard layout

A dashboard exists to answer one question fast: is everything fine, and if not, where do I look. It is a triage surface. It leads with the verdict, shows the trend that explains it, then gives the rows to act on. That order, number then line then table, is why shadcn's block and Plausible feel familiar on first sight.

What separates great from cheap is editing. A great dashboard has a point of view: four to six numbers chosen by someone who knows the job, one chart, one list. Each number states its period and comparison. The frame stays still and quiet. A cheap dashboard is a pile of widgets: twelve cards of equal weight, an icon in a tinted circle on every tile, a donut because there was room, random sparklines, and "+12%" attached to nothing. When every tile is equal, nothing is important.

Choose the shell from the job. Use a sidebar when people move between many areas. Use a single column when the report is the whole product. Use a narrow column when the page must be read under stress. Use panes when the work itself is a tool.

Measured ranges: shell gutter 8; content padding 16 to 24; gaps 16 to 24; app header 48 to 64; KPI values 18 to 32 at 600; cards 8 to 14 radius; status column 640 to 720; report column 1088. Plausible's cards are white on #fafafa with a tiny shadow and no border. shadcn's use hairlines at about 8% ink.

<!-- v:app.dashboard-layout/inset-console -->
### 1. Inset console

*Feeling: a clean workbench.*

The modern SaaS default. The shell is a faint tint, the rail sits on it, and the main area is one white card, inset 8px, with a 12px radius. That single move separates navigation from work with no vertical rule, and it is why the layout feels current. Header 48 with a sidebar toggle, a 16px divider, the page title, and actions at right. Content runs four KPI tiles, one chart card, then a tabbed table.

Use it for any B2B product. Avoid it in a consumer media app, where it reads as admin. Rebuilding it took very little code, and it matched the real frame at first render, so spend your time on the content: my first pass broke on the semantics of the deltas, not on the layout.

**Recipe.** Shell at 2 to 4% tint, 256 rail, main as a white inset card: 8px margin, 12px radius, hairline. 48px header with sidebar toggle, title, actions. 24px padding, 16px gaps: four KPI tiles, one chart card, tabs, table.

**Seen on** shadcn dashboard-01 view, shadcn sidebar-07 view. **Suits** light-precision; saas, devtool.

```css
body{background:var(--surface)}
.shell{display:grid;grid-template-columns:256px minmax(0,1fr);min-height:100dvh}
.main{margin:8px 8px 8px 0;background:var(--bg);border-radius:12px;box-shadow:0 0 0 1px var(--line);min-width:0}
.top{display:flex;align-items:center;gap:8px;height:48px;padding:0 16px;border-bottom:1px solid var(--line)}
.top .sep{width:1px;height:16px;background:var(--line);margin:0 4px}
.body{padding:24px;display:grid;gap:16px}
.kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
@media(max-width:1000px){.shell{grid-template-columns:1fr}.side{display:none}.main{margin:0;border-radius:0;box-shadow:none}.kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.body{padding:16px}}
```

<!-- v:app.dashboard-layout/floating-panels -->
### 2. Floating panels

*Feeling: an appliance, dark and solid.*

Spotify's shell: pure black behind, panels at #121212 with 8px gaps and 8px radius, a top bar directly on the black. The gutters do the separating, the panels hold the content, and only the panels scroll, so the frame never moves. Use it for media, audio and consumer tools where content supplies the colour. It looks empty without real artwork. My gradient placeholders were obviously placeholders next to album covers, so this shell demands real media.

Inactive inner cards sit at #1f1f1f, a second clear step. The main panel may start one step lighter at the top and settle over 240px.

**Recipe.** Black shell, 8px gaps: 332 library panel, flexible main, thin right rail, each one tone step up with 8px radius. 64px top bar sits on the shell. Only panels scroll, so the frame never moves. Suits media and consumer apps.

**Seen on** Spotify. **Suits** dark-precision; other.

```css
body{height:100dvh;overflow:hidden;display:grid;grid-template-rows:64px minmax(0,1fr);padding:0 8px 8px;background:#000}
.bay{display:grid;grid-template-columns:332px minmax(0,1fr) 32px;gap:8px;min-height:0}
.p{background:var(--surface);border-radius:8px;min-height:0;overflow:auto;scrollbar-width:none}
.main{padding:24px 40px;background:linear-gradient(color-mix(in srgb,var(--ink) 12%,var(--surface)),var(--surface) 240px)}
@media(max-width:800px){body{height:auto;overflow:auto}.bay{grid-template-columns:minmax(0,1fr)}.lib,.side{display:none}}
```

<!-- v:app.dashboard-layout/analytics-column -->
### 3. Analytics column

*Feeling: one honest report.*

No sidebar. A single 1088 column on faint grey: a filter row, a chart card with KPI tabs, then pairs of tabbed cards at 534 each, with 20px gaps. White cards, radius 8, a shadow so small it only softens the edge. Plausible proves that a whole analytics product fits on one scroll. Use it when the product is one report, or for a shared public dashboard.

Every panel uses the same header, so a page of eight panels reads as one object. That repetition is the design.

**Recipe.** One 1088px column on faint grey: filter row, full-width chart card with KPI tabs, then pairs of 534px tabbed cards, 20px gaps. White cards, radius 8, tiny shadow, no border. No sidebar, because the report is the app.

**Seen on** Plausible Live Dashboard. **Suits** light-precision; saas.

```css
body{background:var(--surface)}
.col{max-width:1088px;margin:0 auto;padding:20px 16px 64px}
.card{background:var(--bg);border-radius:8px;box-shadow:0 1px 2px rgba(0,0,0,.05)}
.pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:20px}
.panel{padding:12px 20px 20px}
@media(max-width:800px){.pair{grid-template-columns:1fr}}
```

<!-- v:app.dashboard-layout/kpi-tab-strip -->
### 4. KPI tab strip

*Feeling: every number is a door.*

Make the KPIs the chart's tabs. Six cells sit inside the chart card, and the active one drives the plot below. This removes a separate metric picker and ties number to line. The active cell gets a 3% fill and the dividers beside it hide, a detail that keeps the row from looking chopped. Labels are 12/500 caps, values 18 to 20/600. Use real buttons with `aria-pressed`.

**Recipe.** KPIs as the chart's tab bar: 6 equal cells inside the card, 12/500 caps label, 18 to 20/600 value, 12px delta with arrow, 1px dividers, active cell 3% fill at radius 8. Clicking swaps the series below.

**Seen on** Plausible Live Dashboard. **Suits** light-precision; saas.

```css
.kpis{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));padding:8px}
.kpi{position:relative;display:block;text-align:left;background:none;border:0;padding:8px;border-radius:8px;color:var(--ink);font-family:var(--font-text)}
.kpi+.kpi::before{content:"";position:absolute;left:-1px;top:8px;bottom:8px;width:1px;background:var(--line)}
.kpi[aria-pressed=true]{background:var(--fill-hover)}
.kpi[aria-pressed=true]+.kpi::before{display:none}
.kpi span{display:block;font-size:12px;line-height:16px;font-weight:500;color:var(--ink-2);letter-spacing:.02em;text-transform:uppercase}
.kpi[aria-pressed=true] span{color:var(--ink)}
.kpi strong{font:600 18px/24px var(--font-text);font-variant-numeric:tabular-nums;margin-right:8px}
.kpi em{font-style:normal;font-size:12px;color:var(--ink-2);font-variant-numeric:tabular-nums}
@media(max-width:800px){.kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.kpi::before{display:none}}
```

<!-- v:app.dashboard-layout/kpi-tile-row -->
### 5. KPI tile row

*Feeling: the verdict, in four numbers.*

Four equal tiles with a muted label, one large tabular value and a delta line. Never add an icon in a tinted circle: it says nothing and is the mark of a template. Give the delta a period, because a number without a comparison cannot be judged.

Keep direction and meaning apart. The arrow shows which way the number moved, and the colour shows whether that is good. My first build coloured a rise in outstanding invoices green and drew a falling arrow beside a rising overdue count. Both are lies a real finance user would spot at once. If a change is neither good nor bad, leave the arrow in third ink.

Use full numbers where they fit, such as $318,402, and compact only when width forces it. Do not mix units across a row without labels. Four across, two across on phones.

**Recipe.** Four equal tiles, 16 gap, 1px hairline, 12 radius, 20px padding: 13px muted label, 28 to 32/600 tabular value, 12px delta naming its comparison period. Arrow shows direction, colour shows good or bad. Never more than 4 across.

**Seen on** shadcn dashboard-01 view, Resend. **Suits** light-precision, dark-precision; saas, devtool.

```css
.kpi{padding:20px;border-radius:12px;box-shadow:inset 0 0 0 1px var(--line)}
.kpi span{display:block;font-size:13px;color:var(--ink-2)}
.kpi strong{display:block;font:600 28px/36px var(--font-display);letter-spacing:-.02em;margin-top:4px;font-variant-numeric:tabular-nums}
.kpi em{display:flex;align-items:center;gap:4px;font-style:normal;font-size:12px;line-height:16px;color:var(--ink-2);margin-top:8px}
.kpi em svg{width:14px;height:14px;color:var(--ok)}    /* improving */
.kpi em.bad svg{color:var(--bad)}                       /* getting worse */
.kpi em.flat svg{color:var(--ink-3)}                    /* moved, but neither */
```

<!-- v:app.dashboard-layout/status-page-column -->
### 6. Status page column

*Feeling: calm under pressure.*

A narrow column with no navigation, because people arrive here anxious and need one sentence first. OpenAI's is the reference: logo and subscribe, a mint banner with a 1px green border, then one bordered panel of services with 90-day strips. Vercel's uses a solid banner and blue bars. Keep it static and light, since it must load when everything else is on fire.

The banner's tint must stay chromatic. Tint the raw status hue, not a darkened one, or it turns grey. State the words first and let the colour confirm them.

**Recipe.** Single 640 to 720 column: logo and subscribe, tinted banner with a 1px status border stating the state, one bordered panel of services with 90-day strips, then incident history. No nav, no sidebar. Readable during an outage.

**Seen on** OpenAI Status, Vercel Status, GitHub Status, Linear Status, Figma Status, 7 sites in all. **Suits** light-precision, dark-precision, illustrated; devtool, saas, ai, finance.

```css
.col{max-width:702px;margin:0 auto;padding:32px 16px 64px}
.banner{border:1px solid var(--ok);border-radius:8px;overflow:hidden;margin-bottom:24px}
.banner h2{display:flex;align-items:center;gap:8px;padding:16px;font:500 16px/24px var(--font-text);background:color-mix(in oklab,var(--ok) 16%,var(--bg))}
.banner p{padding:16px}
.panel{border:1px solid var(--line);border-radius:8px}
.svc{padding:14px 16px 16px;border-top:1px solid var(--line)}
```

<!-- v:app.dashboard-layout/three-pane-tool -->
### 7. Three-pane tool

*Feeling: a real instrument, nothing wasted.*

Hoppscotch and draw.io fill the viewport edge to edge: icon rail, work pane, side panel, top bar, status bar. Flat, 1px dividers, no shadows, no card radius, and each pane scrolls on its own. Use it when the product is a tool rather than a report. Density rises here, with 12 to 13px text being correct. The empty pane should teach, as the shortcut list does.

**Recipe.** Tool frame filling the viewport: 48px icon rail, main work pane, 350px side panel, top bar, status bar, 1px dividers, no shadows, 12 to 13px type, tabs per document. Each pane scrolls alone.

**Seen on** drawio, Hoppscotch home. **Suits** light-precision; other.

```css
.tool{display:grid;grid-template:48px minmax(0,1fr) 28px / 48px minmax(0,1fr) 350px;height:100dvh}
.tool>header{grid-column:1/-1;border-bottom:1px solid var(--line)}
.tool>footer{grid-column:1/-1;border-top:1px solid var(--line);font-size:12px}
.tool>*{min-height:0;min-width:0;overflow:auto}
.tool>aside{border-left:1px solid var(--line)}.tool>nav{border-right:1px solid var(--line)}
```

<!-- v:app.dashboard-layout/query-split-panes -->
### 8. Query split panes

*Feeling: ask, then see.*

Input and result as two stacked panes in one rounded panel, with a small sub-nav. Grafana Explore stacks query over graph. Replicate puts input left and output right, with Preview and JSON tabs and a Form, JSON, code tab strip on the input side. Use it for any tool where a person configures something and looks at the result. Keep the run control in one fixed place, and the result in view while editing.

**Recipe.** Query above and result below, or input left and output right, inside a 12px-radius panel: 150px sub-nav, ghost toolbar for split, add, time range and refresh, stacked panes with their own titles. Preview and JSON tabs on output. Stack on phone.

**Seen on** Grafana explore, Replicate model. **Suits** dark-precision, light-precision; devtool, ai.

<!-- v:app.dashboard-layout/resizable-panes -->
### 9. Resizable panes

*Feeling: the layout is yours.*

Hairline seams with a hit area wider than the line, an optional 12x16 grip, and minimum widths. Save the sizes per user. The seam is 1px to look at and 9px to grab, using a pseudo-element, because a 1px target is unusable. Do not add it to fixed reports, where nobody needs to resize anything.

**Recipe.** Panes in a hairline 8px-radius frame split by 1px rules, optional 12x16 grip on the seam, hit area 8px wider than the line, minimum widths to stop collapse. Each list scrolls inside with a thin overlay thumb and keeps its position.

**Seen on** shadcn resizable, shadcn scroll. **Suits** light-precision; devtool.

```css
.seam{position:relative;width:1px;background:var(--line);cursor:col-resize}
.seam::after{content:"";position:absolute;inset:0 -4px}
.seam:hover{background:var(--accent)}
```

<!-- v:app.dashboard-layout/app-header-bar -->
### 10. App header bar

*Feeling: a thin rail of context.*

48 to 56 tall. Toggle, divider, breadcrumb, then actions. Parents are muted, the current page is 500, and separators are 14px chevrons with about 6px gaps. Collapse long trails to an ellipsis menu. Carbon's dark 48px header uses square icon cells with 1px dividers, which suits enterprise suites with a product switcher. A second tier of tabs is fine, a third is not. Do not repeat the page title both here and in the content.

**Recipe.** Bar 48 to 56 tall: sidebar toggle, 16px hairline divider, 14px breadcrumb with muted parents and 500 current, actions right. Dark version uses 48px square icon cells. Add a second tier of 14px tabs only when sections need it.

**Seen on** carbon shell header, shadcn breadcrumb, flowbite navbar, shadcn separator. **Suits** light-precision, dark-precision; devtool, other.

```css
.crumb{display:flex;align-items:center;gap:6px;color:var(--ink-2)}
.crumb a{color:inherit;text-decoration:none}
.crumb [aria-current]{color:var(--ink);font-weight:500}
```

<!-- v:app.dashboard-layout/underline-tab-row -->
### 11. Underline tab row

*Feeling: sections of one thing.*

Tabs for peers within a page. The active 2px line sits exactly on the 1px rule below the row by using a -1px margin, so nothing shifts. Inside cards use 12/500 caps, as Plausible does, with the rule spanning the card. For view switching with fewer than five options, use a segmented control instead.

**Recipe.** Section tabs 40px high, 14/500 with 16px padding, or 12/500 caps inside cards. Inactive second ink, active ink with a 2px underline sitting on the row's 1px rule, so nothing jumps. Disabled at 40%.

**Seen on** shadcn tabs, geist tabs, atlassian tabs, Plausible Live Dashboard. **Suits** light-precision; devtool, saas.

```css
.tabs{display:flex;gap:16px;border-bottom:1px solid var(--line)}
.tabs button{height:40px;background:none;border:0;border-bottom:2px solid transparent;margin-bottom:-1px;font:500 14px var(--font-text);color:var(--ink-2)}
.tabs button[aria-selected=true]{color:var(--ink);border-color:var(--ink)}
```

<!-- v:app.dashboard-layout/card-header-slots -->
### 12. Card header slots

*Feeling: tidy settings.*

A small grid in the card header: title and description at left, one action at top right. Settings pages and detail groups repeat this dozens of times, so get it once. Pair a description only with cards that need it, and leave the others alone so that the description means something. Skip the card when the group is a single row.

**Recipe.** Card with a header grid: 16/600 title and 14px muted description left, ghost action top right, 24px internal spacing, footer rule; small size uses 16px padding. Media version bleeds a 16:9 image at top. For settings and detail groups.

**Seen on** shadcn card. **Suits** light-precision; devtool.

```css
.card{border-radius:12px;box-shadow:inset 0 0 0 1px var(--line);padding:20px}
.head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:16px}
.head h3{font:500 16px/24px var(--font-display)}
.head p{font-size:13px;line-height:18px;color:var(--ink-2)}
```

<!-- v:app.dashboard-layout/report-chart-grid -->
### 13. Report chart grid

*Feeling: a printed analyst report.*

Two or three columns of equal chart cards, each with a title, source and export and table icons. Artificial Analysis runs pages of these, and they hold because palette and scales repeat. Name each chart by its metric or finding. Keep cards the same height per row, and let the page lead with one larger chart. Do not use it for a live operating view, where one chart should lead.

**Recipe.** Reports page of 2 or 3 column chart cards with hairline borders, 14px title, source badge, export and table icons top right, shared palette and scales. Title states the metric or finding, and card heights align per row.

**Seen on** AA. **Suits** light-precision; ai.

<!-- v:app.dashboard-layout/docs-three-column -->
### 14. Docs three column

*Feeling: settled, a place to read.*

Left nav, 640 to 720 content, right page index, sticky bar on top. The fixed measure keeps reading comfortable while the rails hold context. Drop the right rail below 1200 and the left below 900. Do not use it for product screens, where the measure is too narrow for tables.

**Recipe.** Fixed docs shell: 220 to 300 left nav, 640 to 720 content, 200 right page index with active heading in ink, 64px sticky top bar, 1px rule beside nav. Right column may hold a small promo card.

**Seen on** shadcn menubar. **Suits** light-precision; devtool.

<!-- v:app.dashboard-layout/specimen-page -->
### 15. Specimen page

*Feeling: a design system showing its work.*

For component docs and internal kits. A hairline well with a centred control, a footer strip that discloses code, and anatomy figures with numbered pins. Stripe's appearance docs draw dashed leaders from real rendered controls to class names, which is the strongest version. Keep demos real and interactive rather than pictures.

**Recipe.** Design system page: each demo in a 1px bordered well, 8 to 12px radius, centred control, 48px show-code footer strip; anatomy diagrams with numbered pins and leader lines; do and don't pairs with 4px green or red top bars.

**Seen on** Stripe appearance, Geist colors, geist modal, geist empty, Geist tooltip, 17 sites in all. **Suits** light-precision, mono-technical, gradient-light; devtool, other, finance, saas.

<!-- v:app.dashboard-layout/ruled-guide-grid -->
### 16. Ruled guide grid

*Feeling: blueprint, engineered.*

A visible layout grid with hairlines and plus marks at intersections. Geist ships it as a component. Solid cells clip the guides, so content appears to sit in the grid. Use it sparingly on developer marketing and docs home pages. In a working app it is decoration.

**Recipe.** Layout grid with 1px guide lines between cells, plus marks at intersections, 13px cell numbers top left, dashed version, solid cells that clip the guides. For docs and landing sections that want a visible engineering grid.

**Seen on** Geist grid. **Suits** light-precision; devtool.

<!-- v:app.dashboard-layout/generated-tile-gallery -->
### 17. Generated tile gallery

*Feeling: a bright community shelf.*

A browse grid where each tile derives a gradient from its item, as Hugging Face Spaces does, so a page of user-made things has colour without curation. Use it for galleries and catalogs of user content. Keep text white and bold, and check contrast per tile. It does not belong beside data.

**Recipe.** Grid of 190px tiles with a generated gradient per item, 12 to 16px radius, white 16/700 title, small status pill, author and count footer at 12px. Colour comes from the item, so scanning feels like browsing. Expressive, not for data.

**Seen on** HF spaces. **Suits** bold-colour; ai.

### Mistakes that cheapen a dashboard

- **Twelve equal tiles.** Rank them. One chart should be bigger than the rest.
- **An icon in a tinted circle on each KPI.** The label already says what it is.
- **Deltas with no period.** Always say compared with what.
- **Colour on the wrong axis.** Up is not always good. Rising costs, churn and overdue counts are bad news. See KPI tile row.
- **Charts added for texture.** If a chart does not change a decision, delete it.
- **The page scrolling under the rail.** Only the content region scrolls. Keep the header and rail fixed.
- **Grid columns that can blow out.** Use `minmax(0,1fr)`, or a long table will widen the whole page. Several of my demos overflowed on phones until every grid track used it.
- **Text buttons wrapping in a header.** My header's date range and primary button wrapped at phone width. Set `white-space:nowrap` and drop the secondary control instead.
- **Fake product shots in the shell.** Lorem ipsum, "Acme", and round numbers everywhere. Use believable names and awkward numbers, because real data is what makes the density look right.

## Chart

A chart is a claim about data. It must let someone see the shape and read the values, and it must not imply anything the numbers do not support. Decoration is a failure here, not a style.

What separates great from cheap is honesty and restraint. Great charts have real scales, thin marks, recessive grids, labels in text ink, a title that names the metric and unit, and one hue doing the work. Cheap charts have a smooth purple gradient wave with no axis, a donut with nine slices, a 3D look, a legend far from the data, and numbers that came from nowhere.

**Rules of honesty.** Hold to these on every chart, including mock data on a marketing page.

1. **Compute the scale.** Bars and areas start at zero. Tick values come from the data through a nice-number function. Never hand-place a curve.
2. **Label what you plot.** Axis values, unit, period. A chart with no numbers is an illustration. If it is schematic, say so in a caption, as my rebuild of Stripe's experience curves does. shadcn's default dashboard area chart has no y axis at all, so add one.
3. **Do not smooth measured data.** Straight segments show what happened. Plausible connects points with straight lines. A spline overshoots and draws peaks and dips that never occurred, which is the most common lie in generated dashboards. Use monotone interpolation at most. Bump charts are the exception, since only order matters.
4. **Mark incomplete periods.** The current week is not a crash. OpenRouter hatches the unfinished bar, and my rebuilds use a grey bar or hatched extension. Without this, every live chart ends in a false collapse.
5. **Missing is not zero.** Break the line or use a grey no-data bar. Resend's status page greys components that lack data.
6. **One y axis.** Two measures get two charts, or both indexed to 100 at the start.
7. **Share scales across small multiples,** or the comparison they exist for is false.
8. **State log scales in the axis title,** as Artificial Analysis does.
9. **Colour follows the entity.** Filtering must not repaint survivors.
10. **Use real data or say it is a sample.** With no data, show an empty state. Do not fill the hole with a wiggle.

**Choose the form by the job.**

| The reader needs | Use | Not |
|---|---|---|
| One number now | KPI tile with delta | A one-bar chart |
| A trend | Line, area if single series | Bars with 300 points |
| Weekly volume | Bars filling the band | A smooth line |
| Compare named items | Sorted bars, or bar behind row | Donut |
| Parts over time | Stacked bars, 5 series at most | Stacked area with 12 |
| One ratio against a limit | Meter | A two-slice pie |
| Availability by day | Uptime strip | A line at 99.9 |
| Two measures per item | Scatter with direct labels | Dual axes |
| The same measure across many items | Small multiples | Twelve lines |
| Exact lookup | Table | Any chart |

Measured ranges: lines 1 to 2px; grids 1px at 5 to 8% ink, or none; axis labels 10 to 12px in second ink; plot heights 150 to 340; bars either fill the band with a 1 to 2px gap for dense time series, or stay 16 to 24 thick for named items; legends use 8 to 10px squares; tooltip rows 12px.

**Series colour.** Default to emphasis: one accent line, everything else in grey. Most of the strongest charts in this set use one hue plus grey. For up to four series use `--s1` to `--s4` from the tokens, then `--s5` as a grey Other. A simple hue rotation is not safe. At similar lightness, two of five test accents fell to a separation of 4 under simulated colour blindness. Alternating light and dark slots fixed it: the set above held at 12 or more on all five accents. Its light slots sit under 3:1 on white, so a legend, tooltip and table view are mandatory. On dark surfaces raise the lightness values to .82, .62 and .82. Never use red and green alone: they are status colours, and they are the first pair to collapse.

**The kit.** About 30 lines, no library. It gives true scales, thinned labels, hover and a tooltip. Everything below uses it. Keep this code inside a function or module. My first stacked chart declared `const top` at script level, which collides with `window.top`, and the whole script silently failed to parse.

```js
function nice(max,n=5){const raw=max/n,s=10**Math.floor(Math.log10(raw)),m=raw/s,step=(m>5?10:m>2?5:m>1?2:1)*s;return{step,top:Math.ceil(max/step)*step}}
const el=(t,a={},p)=>{const e=document.createElementNS('http://www.w3.org/2000/svg',t);for(const k in a)e.setAttribute(k,a[k]);p&&p.append(e);return e};
const txt=(p,x,y,s,c,anchor='start')=>{const t=el('text',{x,y,class:c,'text-anchor':anchor},p);t.textContent=s;return t};
// lineChart(host,{x:[labels],series:[{name,values,color,area,w}],fmt,h,right,ref})  host must have no padding
function lineChart(host,o){const svg=el('svg',{class:'plot'});host.append(svg);
  const tip=document.createElement('div');tip.className='tip';tip.hidden=true;host.style.position='relative';host.append(tip);
  const draw=()=>{svg.innerHTML='';const W=host.clientWidth,H=o.h||240,right=o.right,L=right?8:44,R=right?44:12,T=8,B=26;
    svg.setAttribute('viewBox',`0 0 ${W} ${H}`);svg.setAttribute('width',W);svg.setAttribute('height',H);
    const{step,top:hi}=nice(Math.max(...o.series.flatMap(s=>s.values)),o.ticks),n=o.x.length,X=i=>L+(W-L-R)*i/(n-1),Y=v=>H-B-(H-B-T)*v/hi,fmt=o.fmt||(v=>v.toLocaleString());
    for(let v=0;v<=hi+1e-9;v+=step){el('line',{x1:L,x2:W-R,y1:Y(v),y2:Y(v),class:v?'grid':'base'},svg);txt(svg,right?W-R+8:L-8,Y(v)+4,fmt(v),'tick',right?'start':'end')}
    const every=Math.max(o.xEvery||1,Math.ceil(n/Math.floor((W-L-R)/64)));   // thin labels by width, not by count
    o.x.forEach((d,i)=>{if(i%every==0)txt(svg,X(i),H-8,d,'tick',i==0?'start':i>n-every?'end':'middle')});
    const defs=el('defs',{},svg);
    o.series.forEach((s,k)=>{const d=s.values.map((v,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(v).toFixed(1)).join('');
      if(s.area){const g=el('linearGradient',{id:'g'+k,x1:0,x2:0,y1:0,y2:1},defs);el('stop',{offset:0,'stop-color':s.color,'stop-opacity':.14},g);el('stop',{offset:1,'stop-color':s.color,'stop-opacity':0},g);el('path',{d:d+`L${X(n-1)} ${Y(0)}L${X(0)} ${Y(0)}Z`,fill:`url(#g${k})`},svg)}
      el('path',{d,fill:'none',stroke:s.color,'stroke-width':s.w||2,'stroke-linejoin':'round'},svg)});
    if(o.ref!=null)el('line',{x1:L,x2:W-R,y1:Y(o.ref),y2:Y(o.ref),class:'ref'},svg);
    const cross=el('line',{y1:T,y2:H-B,class:'cross',visibility:'hidden'},svg),dots=o.series.map(s=>el('circle',{r:4,fill:s.color,stroke:'var(--bg)','stroke-width':2,visibility:'hidden'},svg));
    svg.onpointermove=e=>{const i=Math.round((e.clientX-svg.getBoundingClientRect().left-L)/(W-L-R)*(n-1));if(i<0||i>=n)return;
      cross.setAttribute('x1',X(i));cross.setAttribute('x2',X(i));cross.setAttribute('visibility','visible');
      dots.forEach((c,k)=>{c.setAttribute('cx',X(i));c.setAttribute('cy',Y(o.series[k].values[i]));c.setAttribute('visibility','visible')});
      tip.hidden=false;tip.innerHTML=`<b>${o.x[i]}</b>`+o.series.map(s=>`<div><i style="background:${s.color}"></i><span>${s.name}</span><em>${fmt(s.values[i])}</em></div>`).join('');
      const tw=tip.offsetWidth;tip.style.left=Math.min(W-tw-4,Math.max(4,X(i)+(X(i)+tw+24>W?-tw-12:12)))+'px';tip.style.top=T+6+'px'};
    svg.onpointerleave=()=>{tip.hidden=true;cross.setAttribute('visibility','hidden');dots.forEach(c=>c.setAttribute('visibility','hidden'))}};
  draw();addEventListener('resize',draw)}
```

```css
.plot{display:block;overflow:visible}
.plot .grid{stroke:var(--line)}
.plot .base{stroke:var(--line-strong)}
.plot .tick{font:400 12px/1 var(--font-text);fill:var(--ink-2);font-variant-numeric:tabular-nums}
.plot .cross{stroke:var(--line-strong)}
.plot .ref{stroke:var(--ink-3);stroke-dasharray:3 3}
```

Build dates from real `Date` objects. My first pass built labels from strings and produced a date axis that ran 1 Aug, 15 Aug, 1 Aug, 15 Sep. Nothing errors when this happens. You only see it if you read the render.

<!-- v:app.chart/line-with-fade-area -->
### 1. Line with fade area

*Feeling: a truthful pulse.*

The default time series. Plausible's is the reference: a 2px line with straight segments, a fill that fades from about 14% to clear, gridlines so faint they are nearly felt, and a zero baseline. Use it for one metric, or one metric plus a grey previous period. Avoid two filled areas that overlap: the mix turns muddy, as Tremor's default shows, so fill only the primary series.

**Recipe.** One metric over time: 2px line with straight segments, fill from 14% accent to clear, 1px grid at 5 to 8% ink, 12px tabular y labels on a nice scale from 0, 5 to 7 x labels, crosshair and tooltip on hover, 240 to 340 tall.

**Seen on** Plausible Live Dashboard, Tremor area chart. **Suits** light-precision; saas.

```js
lineChart(document.getElementById('c'),{x:dates,h:220,fmt:v=>v?'$'+v/1000+'k':'$0',series:[
  {name:'Previous period',values:prev,color:'var(--ink-3)',w:1.5},
  {name:'This period',values:now,color:'var(--accent)',area:true}]});
```

<!-- v:app.chart/single-line-reference -->
### 2. Single line with reference

*Feeling: instrument, one needle.*

A stat and a thin line, for hero product shots and dark dashboards. Resend sets a 1px line, a whisper of fill, a dashed reference and an axis on the right, with the reference tick brightened so that the threshold reads as a fact. Dashed is correct here, because dashes mean a target rather than data. Name the threshold in a tooltip or caption. This form suits a narrow panel, and the right axis keeps the latest value next to the labels.

**Recipe.** Stat above a minimal plot: 11px caps label, 24/400 value, 1px line with 6% fill fading to surface, dashed reference line, right axis at 10px with the reference value brightened, no gridlines. On dark, a black panel at radius 24. Label the threshold.

**Seen on** Resend. **Suits** dark-precision; devtool.

```js
lineChart(c,{x:days,h:240,right:true,ref:3000,fmt:n=>n>=1000?(n/1000)+'k':n,series:[{name:'Sent',values:v,color:'var(--accent)',area:true,w:1}]});
```

<!-- v:app.chart/uptime-strip -->
### 3. Uptime strip

*Feeling: ninety days of good behaviour.*

The status page's signature, with nine sites in the set. Ninety bars, one per day. Analysts read the bars at 2.5px, but measured from frames OpenAI's are 5px with a 2px gap on a 7px pitch, and Vercel's are 6px with a 3px gap, 34 tall. Use CSS grid so that it fills any width. Fill calm days with one colour, mark incidents, and grey out days with no data. Vercel uses blue for the calm state, which keeps amber and red distinct under red-green colour blindness and is worth copying. Each bar needs a title with the date and state. Do not use it for anything except availability by day.

**Recipe.** Ninety daily bars per service: bar 5 to 6px wide, 2 to 3px gap, 14 to 34 tall, radius 1. One calm fill, amber and red for incident days, grey for no data. Name left, uptime percent right, 90 days ago and Today at the ends.

**Seen on** OpenAI Status, Vercel Status, GitHub Status, Supabase Status, Stripe Status, 9 sites in all. **Suits** light-precision, dark-precision, illustrated, warm-neutral; devtool, ai, saas, finance.

```css
.strip{display:grid;grid-auto-flow:column;grid-auto-columns:1fr;gap:2px;height:14px}
.strip i{border-radius:1px;background:var(--ok)}
.strip i.w{background:var(--warn)}.strip i.b{background:var(--bad)}.strip i.n{background:var(--line-strong)}
```

<!-- v:app.chart/time-bars-with-brush -->
### 4. Time bars with brush

*Feeling: zoom into the part that matters.*

Weekly bars filling their bands, axis on the right, and a thin overview strip below with a draggable window, as on GitHub's contributors page. Use it for long histories. Grey the current partial week. Use 5 ticks in `nice()`: with 4, a max of 206 rounded to 300 and a third of my plot sat empty. Solid hairline gridlines read cleaner than GitHub's dashed ones, because dashes should mean something.

**Recipe.** Weekly bars filling their bands with 2px gaps, radius 2, single hue, right axis 12px, title plus range subtitle. Thin 44px area brush below with the selected window tinted. Current incomplete period drawn in grey, never as a drop.

**Seen on** GitHub contributors. **Suits** light-precision; devtool.

```js
function bars(host,o){const svg=el('svg',{class:'plot b'});host.append(svg);
  const draw=()=>{svg.innerHTML='';const W=host.clientWidth,H=o.h,R=44,B=26,T=8,P=W-R,{step,top:hi}=nice(o.top||Math.max(...o.v)),n=o.v.length,bw=P/n,Y=v=>(H-B)-(H-B-T)*v/hi;
    svg.setAttribute('width',W);svg.setAttribute('height',H);svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
    for(let v=0;v<=hi;v+=step){el('line',{x1:0,x2:P,y1:Y(v),y2:Y(v),class:v?'grid':'base'},svg);txt(svg,P+8,Y(v)+4,v.toLocaleString(),'tick')}
    o.v.forEach((v,i)=>{el('rect',{x:i*bw+1,width:bw-2,y:Y(v),height:Y(0)-Y(v),rx:2,class:o.part===i?'part':''},svg);
      if(i==0||o.x[i]!=o.x[i-1])txt(svg,i*bw+bw/2,H-8,o.x[i],'tick','middle')})};
  draw();addEventListener('resize',draw)}
/* .b rect{fill:var(--accent)} .b rect.part{fill:color-mix(in srgb,var(--ink) 16%,var(--bg))} */
```

<!-- v:app.chart/small-multiples -->
### 5. Small multiples

*Feeling: fair comparison at a glance.*

One small chart per entity, all on one scale. It is the honest answer to twelve tangled lines. GitHub's contributor cards keep bars, axes and period identical, so height compares across cards. Pass the same `top` to every panel. Label months only where the month changes, or the axis repeats itself: mine printed Aug twice until I did.

**Recipe.** Grid of 2 to 3 columns of small chart cards, one entity each: name or avatar, total, mini bars in one hue. Every panel shares the same y max and x range, so heights compare directly. Labels only at month starts.

**Seen on** GitHub contributors. **Suits** light-precision; devtool.

<!-- v:app.chart/stacked-share-bars -->
### 6. Stacked share bars

*Feeling: the whole, and what it is made of.*

Weekly volume by category. Keep the largest stable series on the baseline, since only that one can be read accurately. Limit to four named series plus a grey Other, with a 1px surface gap between segments. OpenRouter stacks more than that, and it works only as a texture of growth, not as a way to read a series. Put a Linear and Log toggle at top right. Draw the projected remainder of the current week as a hatch above the real value, and add it to the legend.

**Recipe.** Weekly stacked bars, 1 to 2px surface gap between segments, 4 to 5 series then Other in grey, legend above, 12px axis, linear or log toggle top right. Partial current period hatched above its real value. Keep series order stable.

**Seen on** OpenRouter rankings. **Suits** light-precision; ai.

```html
<svg width=0 height=0 style=position:absolute><defs><pattern id=hatch width=6 height=6 patternUnits=userSpaceOnUse patternTransform=rotate(45)>
<rect width=6 height=6 fill="color-mix(in srgb,var(--ink) 6%,var(--bg))"/><rect width=2 height=6 fill="color-mix(in srgb,var(--ink) 22%,var(--bg))"/></pattern></defs></svg>
```

<!-- v:app.chart/monochrome-area -->
### 7. Monochrome area

*Feeling: quiet, the brand stays neutral.*

Two areas in one ink. It suits a greyscale product where colour is reserved for status. It is a weak default as seen in the source: no y axis, smoothed curves and overlapping fills. Keep the look and fix those three things. Prefer one area plus a thin comparison line.

**Recipe.** Two overlaid areas in one ink at 30 and 60% fill, thin line on top, range segmented control top right, 12px dates. Add a y axis with values, which the source omits. Use straight or monotone segments, because smooth splines invent peaks.

**Seen on** shadcn dashboard-01 view. **Suits** light-precision; saas.

<!-- v:app.chart/direct-label-chips -->
### 8. Direct label chips

*Feeling: an annotated figure from a good report.*

The label sits on the data, so the eye never travels to a legend. Stripe's climate page uses filled chips on thin leaders, and one dashed accent series with an open-ring start and a bordered note. Use it for two to five series in editorial and report contexts, with the chips spread so that leaders do not cross. Start the curves apart and keep space at the top. My first version began all curves at the same height, so the top chip collided with them. If you drop numeric ticks you are drawing a schematic, and you must say so.

**Recipe.** Lines labelled on the plot, no legend: filled 12/600 chips on 1px vertical leaders into each curve, single pale axes, 11px caps axis titles. Highlight series dashed in accent with an open-ring terminus and a bordered note. State when schematic.

**Seen on** Stripe Climate. **Suits** gradient-light; finance.

```js
// One chip: a leader from the curve to a filled label. Size the rect from the text.
const px=X(t),py=Y(f(t)),w=name.length*6.6+16;
h('line',{x1:px,y1:py,x2:px,y2:chipY<py?chipY+24:chipY,stroke:color});
h('circle',{cx:px,cy:py,r:2.5,fill:color});
h('rect',{x:px-w/2,y:chipY,width:w,height:24,rx:4,fill:color});
```

<!-- v:app.chart/sorted-entity-bars -->
### 9. Sorted entity bars

*Feeling: a league table you can see.*

Bars sorted by value, one entity each, coloured by owner. Artificial Analysis gives each lab a fixed colour across hundreds of charts, so readers learn them. Put the value on the cap. Rotate labels 45 degrees only if there are too many for horizontal bars, which are usually better. If all bars share one owner, use one colour. Avoid it past about 30 items, where a table reads better.

**Recipe.** Vertical bars sorted descending, one entity per bar, 16 to 24px thick, 4px gap, hairline grid, 45 degree labels with logo, value on the cap. Colour follows the owner, so the same owner keeps its colour. New items get a small tag.

**Seen on** AA. **Suits** light-precision; ai.

<!-- v:app.chart/scatter-frontier -->
### 10. Scatter with frontier

*Feeling: trade-offs, laid out.*

Two measures per item. Shade the attractive quadrant, draw the frontier, and label the notable points directly. Artificial Analysis labels most dots and states the log axis in its title. Keep dots at 8 to 10px with a surface ring. Provide a table view, because dense scatters hide exact values.

**Recipe.** Two-measure scatter: 8 to 10px dots coloured by owner, direct labels on notable points, shaded target quadrant, dotted frontier line, 11 to 12px axis titles with units, log axis stated in the title, frontier toggle, table view.

**Seen on** OpenRouter rankings, AA. **Suits** light-precision; ai.

<!-- v:app.chart/donut-or-gauge -->
### 11. Donut or gauge

*Feeling: one share, at a glance.*

Use a donut only for a few parts of one whole with clearly different sizes. Put the total in the centre and list percentages beside it, with a 2px surface gap between segments. Close values cannot be compared by angle, so use ranked bars there. A semicircle gauge suits one ratio against a limit, though a thin meter does the same job in less space.

**Recipe.** One ratio or under 6 shares: donut with 60% inner radius, 2px surface gaps, 32/300 total in the centre, legend with percentages at the side; or a 12px semicircle arc over a grey track. Use ranked bars when values are close.

**Seen on** carbon simple charts. **Suits** light-precision; other.

<!-- v:app.chart/tabular-tooltip -->
### 12. Tabular tooltip

*Feeling: precise, right where you are looking.*

Every chart needs a hover layer. Rows are a 2px-rounded swatch, a muted label and a right-aligned tabular value, under a date heading. A crosshair snaps to the nearest point, and dots get a 2px surface ring so they stay visible over the line. Flip the card before it hits the right edge. Include the unit. On touch, a tap holds it. Do not put the tooltip's only copy of a value there without a table view.

**Recipe.** Hover card: surface fill, 1px hairline, 8px radius, soft shadow; 12px rows with swatch, muted label and right-aligned tabular value, date heading at 500. Crosshair 1px at 18% ink, dots 8px with a 2px surface ring. Flip near the right edge.

**Seen on** carbon simple charts. **Suits** light-precision; other.

```css
.tip{position:absolute;min-width:168px;padding:8px 10px;background:var(--bg);border-radius:8px;box-shadow:0 0 0 1px var(--line),0 8px 24px -8px rgba(0,0,0,.18);font-size:12px;line-height:18px;pointer-events:none}
.tip b{display:block;font-weight:500;margin-bottom:2px}
.tip div{display:grid;grid-template-columns:8px 1fr auto;gap:8px;align-items:center;color:var(--ink-2)}
.tip i{width:8px;height:8px;border-radius:2px}
.tip em{font-style:normal;color:var(--ink);font-variant-numeric:tabular-nums}
```

<!-- v:app.chart/chart-card-frame -->
### 13. Chart card frame

*Feeling: a chart with its paperwork in order.*

The container. Title at left, with a unit subtitle under it. At right, a small toolbar with a table view, an expand and a menu. Legend below the plot or under the title. Footnote with the source. Carbon's table-view icon deserves copying on every chart, because it makes the numbers reachable by keyboard and screen reader. Size the card to include the x axis band, or it clips. Do not add toolbars to sparklines or small multiples, where they repeat as noise.

**Recipe.** Chart container: 16 to 20px padding, 14 to 16/600 title left, unit subtitle, three 16px toolbar icons right for table view, expand and more, legend of 8px squares below the plot, 1px grid, footnote with source. White on a tinted page.

**Seen on** carbon simple charts. **Suits** light-precision; other.

```css
.legend{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:12px;color:var(--ink-2)}
.legend i{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:6px}
```

<!-- v:app.chart/dark-grid-timeseries -->
### 14. Dark grid time series

*Feeling: a control room.*

Grafana's panel. On dark, a visible grid in both directions helps people read exact times and values, and raw jagged data stays raw because the jaggedness is the signal. A small toggle changes the chart type. Use it for operations and monitoring. Do not smooth it, and do not bring it into a light marketing page.

**Recipe.** Monitoring panel one step above near-black: 1px bright line, 1px grid at 6% white both ways, 12px muted axes, 14/500 title, segmented chart-type toggle at right with active in accent text. Dense and unsmoothed.

**Seen on** Grafana explore. **Suits** dark-precision; devtool.

<!-- v:app.chart/thin-meter -->
### 15. Thin meter

*Feeling: how far along, how close to the limit.*

A track and a fill with the label and value above it. Use it for quotas, usage and progress. Colour shifts to warning and danger near the limit. Hairline ticks mark plan thresholds. Do not use a meter for an unbounded value, which has no limit to fill towards.

**Recipe.** Progress against a limit: 4 to 8px track at 10% ink, full radius, ink or accent fill, 14/500 label left and tabular value right above it. Width animates 500ms. Fill shifts to amber then red past thresholds; hairline ticks mark stops.

**Seen on** Geist progress, shadcn progress. **Suits** light-precision; devtool.

```css
.meter{display:grid;gap:6px}
.meter div{display:flex;justify-content:space-between;font-size:14px}
.meter b{font-weight:500}.meter span{color:var(--ink-2);font-variant-numeric:tabular-nums}
.meter i{display:block;height:6px;border-radius:3px;background:var(--fill-active);overflow:hidden}
.meter i::after{content:"";display:block;height:100%;width:var(--v);background:var(--ink);border-radius:3px;transition:width .5s}
```

<!-- v:app.chart/bump-chart -->
### 16. Bump chart

*Feeling: who overtook whom.*

Rank over time, on named columns. Pale curves with one or two highlighted. Use it only for rank. Curves are fine here since no value is implied between columns.

**Recipe.** Rank over time: smooth curves across 5 to 6 named columns, one highlighted in ink and the rest pale, rank labels at left, category pills above. Curves are safe here because only order matters. Say rank, not value.

**Seen on** AA. **Suits** light-precision; ai.

<!-- v:app.chart/flat-treemap -->
### 17. Flat treemap

*Feeling: a market map.*

Tiles sized by share. Label a tile only if the text fits, and put the rest in the tooltip. Good for a quick sense of concentration, poor for comparing two values.

**Recipe.** Share by area: flat tiles with 4px radius and 2px gaps, solid fills, white 12/500 labels only where they fit, value in the tooltip, grouped by category colour. For many small parts where exact comparison matters less.

**Seen on** OpenRouter rankings. **Suits** light-precision; ai.

<!-- v:app.chart/tinted-choropleth -->
### 18. Tinted choropleth

*Feeling: where it comes from.*

One hue, more is darker, and no data stays neutral. Plausible pairs the map with tabs for countries, regions and cities, because a map shows pattern and a list shows values. Normalise by population when it matters, or the map only shows where people live.

**Recipe.** Map inside a tabbed card about 480 wide: sequential tints of one hue from 10 to 100%, thin surface borders, places without data stay neutral. Tabs switch to a ranked list, which carries the exact values.

**Seen on** Plausible Live Dashboard. **Suits** light-precision; saas.

<!-- v:app.chart/inline-sparkline -->
### 19. Inline sparkline

*Feeling: a small trend beside a fact.*

A word-sized chart with no axes, placed beside a number that gives its scale. GitHub's repository list and Hugging Face's download count use it. It is the only chart allowed to drop its axes, and only when a number and period sit next to it. A sparkline alone on a card is decoration.

**Recipe.** Trend beside a row: 110x30 line or area in one hue, no axes, inside a table or meta rail next to a count and a period label. The number carries the scale and the sparkline carries only the shape.

**Seen on** GitHub org repos. **Suits** light-precision; devtool.

### Mistakes that cheapen a chart

- **A spline through measured data.** It invents peaks. Use straight segments.
- **No y axis.** Without values, it is a drawing. Hiding the axis to look clean is the commonest generated mistake.
- **Date labels from strings.** Mine ran out of order, and nothing warned me. Use real dates.
- **Labels that collide on phones.** Mine overlapped at 390 wide until the kit thinned them by available width. Thin by pixels, not by count.
- **Reading width from a padded element.** My plot overflowed its card by 40px because `clientWidth` includes padding. Put padding on a wrapper.
- **Status colours for categories, or red and green as the only signal.**
- **A top tick far above the data.** Use 5 ticks in `nice()` and let the top sit near the max.
- **Dashed gridlines.** Dashes mean projection or threshold. Grids are solid hairlines.
- **A legend for one series.** The title already says what it is. For two or more series, keep the legend close.
- **Overlapping translucent areas.** Fill the primary series only.
- **Numbers on every point.** Label the end or the extreme, and let the tooltip carry the rest.
- **Coloured axis text.** Text stays in text ink. A swatch beside it carries identity.

## Form control

A control has to show what it is, what it holds, and what state it is in, in a space about 36px tall. Forms are where people give you something, so they must feel safe: the label stays visible, errors say how to fix the problem, and nothing is lost.

What separates great from cheap is state coverage and one consistent geometry. Great controls share a height, a radius and a focus ring, so a select, an input and a button line up on one baseline. Their focus state is clear without being a glow, their error state is specific, their disabled state keeps the layout. Labels sit above and stay there. Cheap forms use placeholder text as the label, a different height per control, a 2px saturated border on everything, a thick blue glow on focus, and a red toast that says "Invalid input".

Measured ranges: controls 32 to 40, up to 48 on public contact forms; radius 6 to 8, 0 to 4 in enterprise systems, 12 to 20 for composers; border 1px at 12 to 18% ink; label 12 to 14 at 500 to 600 with 6 to 8 gap; helper 12 to 13; field gap 16 to 24; focus ring 2 to 3px at 15 to 25%. shadcn's input group measures 32 tall in its docs, not the 36 analysts read, and its standalone controls measure 36.

Always use real inputs and a real `label for`, and give every control a visible focus style via `:focus-visible` or `:focus-within`. Text inputs need `font-size:16px` on phones, or iOS zooms the page on focus. In grids and flex rows give inputs `min-width:0`, because they carry an intrinsic width of about 20 characters. My dialog clipped its fields at phone width until I did.

<!-- v:app.form-control/outlined-field -->
### 1. Outlined field

*Feeling: plain and trustworthy.*

The default. Label above, input, helper below. This pattern fits almost everything, so use it unless the deal says otherwise. I drew the edge with an inset box-shadow rather than a border, because the focus state then changes colour and adds a ring without shifting a pixel. A very faint outer shadow gives the control the slightest lift off the page, which shadcn and Stripe both do.

**Recipe.** Label 13/500 above, 6px gap, input 36 to 40 tall, 6 to 8px radius, 1px inset line at 18% ink, 14px text, third-ink placeholder, 12px helper below. Focus: accent line plus 3px ring at 24%. 16 to 24px between fields.

**Seen on** atlassian textfield, geist select, primer form control, shadcn textarea, Vercel Contact Sales, 13 sites in all. **Suits** light-precision, warm-neutral; devtool, saas, food-drink.

```css
.fld{display:grid;gap:6px;align-content:start}
.fld>label{font-size:13px;font-weight:500;line-height:16px}
.fld small{font-size:12px;line-height:16px;color:var(--ink-2)}
.in{width:100%;min-width:0;height:36px;padding:0 12px;border:0;border-radius:8px;background:var(--bg);color:var(--ink);font:14px/20px var(--font-text);box-shadow:inset 0 0 0 1px var(--line-strong),0 1px 2px rgba(0,0,0,.03);outline:0;transition:box-shadow .15s}
.in::placeholder{color:var(--ink-3)}
.in:hover{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 30%,transparent)}
.in:focus{box-shadow:inset 0 0 0 1px var(--accent),0 0 0 3px var(--focus)}
.in:disabled{background:var(--fill-hover);color:var(--ink-3);box-shadow:inset 0 0 0 1px var(--line)}
select.in{appearance:none;padding-right:32px;background-repeat:no-repeat;background-position:right 10px center}
```

Set the focus ring at about 24% alpha. At 40% my ring read as a glow. Native selects need their own chevron through `background-image`, so they match inputs.

<!-- v:app.form-control/input-group -->
### 2. Input group

*Feeling: one control that knows its context.*

Currency symbols, units, domains, search icons, copy buttons and shortcut chips all belong inside one border. The trick is that the outer box takes the edge and focus ring, using `:focus-within`, and the input inside is borderless. Keep addons in second ink at 14px. Use a tinted addon with a divider when the prefix is fixed data, such as a URL scheme, and bare inline text when it is a unit.

**Recipe.** Prefix, suffix and actions inside one 36px border: $ or icon at 12px inset, muted unit, trailing 28px ghost button, or tinted scheme addon with a divider. Focus ring wraps the whole group, never the inner input. Textarea adds a 12px footer line.

**Seen on** geist input, shadcn input group, atlassian textfield, Geist intro, Apple Retail, 8 sites in all. **Suits** light-precision, photo-led; devtool, saas, ai, ecommerce.

```css
.grp{display:flex;align-items:center;height:36px;border-radius:8px;background:var(--bg);box-shadow:inset 0 0 0 1px var(--line-strong);transition:box-shadow .15s}
.grp:focus-within{box-shadow:inset 0 0 0 1px var(--accent),0 0 0 3px var(--focus)}
.grp input{flex:1;min-width:0;height:100%;border:0;background:none;outline:0;padding:0 8px;font:14px var(--font-text);color:var(--ink)}
.grp>span{padding-left:12px;color:var(--ink-2)}.grp>span.e{padding:0 12px 0 0}
.grp button{width:28px;height:28px;margin-right:4px;border:0;border-radius:6px;background:none;color:var(--ink-2);display:grid;place-items:center}
.pre{display:flex;height:36px;border-radius:8px;box-shadow:inset 0 0 0 1px var(--line-strong);overflow:hidden}
.pre span{display:flex;align-items:center;padding:0 12px;background:var(--fill-hover);border-right:1px solid var(--line);color:var(--ink-2)}
```

<!-- v:app.form-control/filled-underline-field -->
### 3. Filled underline field

*Feeling: engineered, institutional.*

Carbon's field: a grey fill, square corners, one bottom line. It reads as a form in a serious system, and it is unusually legible on white. Use it with square buttons and a 24px rhythm. It clashes with rounded product UI, so commit to the whole system.

**Recipe.** Enterprise field: 40px tall, 3 to 4% grey fill on white, 0 radius, 1px bottom border only, 12px label above, 12px helper below. Focus swaps to a 2px accent inset outline. Forms stack at 24px rhythm with square 48px buttons.

**Seen on** carbon text input, carbon forms, carbon modal, carbon search. **Suits** light-precision; other, devtool.

```css
.u{width:100%;height:40px;padding:0 16px;border:0;border-bottom:1px solid var(--ink-3);border-radius:0;background:color-mix(in srgb,var(--ink) 4%,var(--bg));font:14px var(--font-text);color:var(--ink);outline:0}
.u:focus{outline:2px solid var(--accent);outline-offset:-2px}
```

<!-- v:app.form-control/underline-only-field -->
### 4. Underline only field

*Feeling: a line on good paper.*

No box. A single rule under a label or placeholder. Agencies and editorial sites use it because a form becomes typography. Sora's 62px search is one black rule that sets the column width for the page. Do not use it in a dense tool: boxes help people see where to click.

**Recipe.** No box: one 1px ink or grey bottom rule, 12px label above or 18px placeholder, optional icon, 60px tall in hero search. Focus thickens the rule or shows a small cursor mark. For editorial and agency forms, never dense admin.

**Seen on** MetaLab Contact, Sora. **Suits** dark-precision, light-precision; agency, ai.

<!-- v:app.form-control/label-left-form -->
### 5. Label left form

*Feeling: a contract.*

Labels in their own 190px column, inputs at 44 to 48. Stripe's contact page sets this inside a 608 wide card under a three-step underline stepper, so a short form reads like a document and the shared edge scans quickly. Stack it under 700px. Skip it in dense tools, where the label column wastes width.

**Recipe.** Two columns: 14/600 labels in a 190px column, 336px inputs at 44 to 48 tall, 1px border, 4px radius, focus 2px accent with a faint halo. Reads as a contract. Suits contact sales and long account forms on wide screens.

**Seen on** Stripe Contact Sales. **Suits** gradient-light; finance.

```css
.lf{display:grid;grid-template-columns:190px minmax(0,336px);gap:16px 24px;align-items:center}
.lf label{font-weight:600}.lf input{height:48px;padding:0 12px;border:1px solid var(--line-strong);border-radius:4px;font:14px var(--font-text)}
@media(max-width:700px){.lf{grid-template-columns:minmax(0,1fr);gap:6px}}
```

<!-- v:app.form-control/parameter-grid-form -->
### 6. Parameter grid form

*Feeling: a control surface for experts.*

Replicate's playground labels each field with its mono parameter name and type, shows the default underneath, and pairs sliders with number boxes. Grafana joins a tinted label cell to a 32px input in a two-up grid, which packs ten parameters into a small area. Use these only for technical tools, where the names are the vocabulary.

**Recipe.** Dense tool form: mono parameter name plus type tag, 12px default hint below, or a 12/600 label cell on a one-step fill joined to a 32px input, 4px radius, two-up grid. Sliders pair with a number box showing min and max.

**Seen on** Replicate model, Grafana explore. **Suits** light-precision, dark-precision; ai, devtool.

```css
.pg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 8px}
.pf{display:grid;grid-template-columns:120px minmax(0,1fr);gap:4px}
.pf span{display:flex;align-items:center;height:32px;padding:0 8px;border-radius:4px;background:var(--fill-hover);font-size:12px;font-weight:600}
.pf input{height:32px;padding:0 8px;border:0;border-radius:4px;box-shadow:inset 0 0 0 1px var(--line-strong);font:13px var(--font-mono,ui-monospace,monospace);background:none;color:var(--ink);min-width:0}
```

<!-- v:app.form-control/validation-state -->
### 7. Validation state

*Feeling: specific help, no scolding.*

Geist, shadcn and Atlassian converge on the same recipe: 1px danger edge, a soft ring, and a small message with an icon directly under the field, replacing the helper. Tie it to `aria-invalid` and `aria-describedby`. Say what to do, as in "Enter 9 digits after GB". Validate on blur or submit. Red appearing mid-word feels hostile. Disabled controls change tone only, so nothing moves.

**Recipe.** Invalid: 1px danger border plus 3px ring at 16%, 12 to 13px danger message with a 14px circled icon 6px below, replacing the helper. Validate on blur or submit, not while typing. Disabled is 4% fill and third ink with layout unchanged.

**Seen on** shadcn textarea, geist select, geist input, shadcn checkbox, Geist error, 10 sites in all. **Suits** light-precision; devtool, saas.

```css
.in[aria-invalid=true]{box-shadow:inset 0 0 0 1px var(--bad),0 0 0 3px color-mix(in srgb,var(--bad) 16%,transparent)}
.err{display:flex;gap:6px;align-items:center;font-size:12px;line-height:16px;color:var(--bad-ink)}
.err svg{width:14px;height:14px}
```

<!-- v:app.form-control/raised-segmented-track -->
### 8. Raised segmented track

*Feeling: a physical switch, satisfying and clear.*

The most used control in the set, with 16 analyst rows. A tinted track, a white chip that sits proud. Use it to switch a view or a billing period among two to five options. The chip gets a hairline and a 1px shadow on neutral tracks. Claude's soft tray drops the edge entirely on a warm track, at 48 tall with 14px radius and a 4px inset.

Size every segment to the longest label, so that the chip does not change width as it moves. Slide the chip between positions at 150 to 200ms. Exa carries a 10px mono hint under each label, and pricing pages put the saving in the label, both of which remove a line of explanation. Use `role=radiogroup`.

**Recipe.** Track 32 to 48 tall, 6 to 14px radius, 4 to 7% ink fill, 3 to 4px inset; active chip in surface colour with hairline and 1px shadow, inactive second ink, no dividers. Equal widths to the longest label. Labels may carry a small saving chip.

**Seen on** Attio Pricing, Claude Pricing, Exa, Warp Pricing, ElevenLabs Pricing, 13 sites in all. **Suits** light-precision, warm-neutral, dark-precision; ai, devtool, saas, finance.

```css
.seg{display:inline-grid;grid-auto-flow:column;grid-auto-columns:1fr;padding:4px;border-radius:12px;background:var(--fill-active)}
.seg button{height:32px;padding:0 16px;border:0;border-radius:8px;background:none;font:500 14px var(--font-text);color:var(--ink-2);transition:color .15s}
.seg button[aria-checked=true]{background:var(--bg);color:var(--ink);box-shadow:0 0 0 1px var(--line),0 1px 2px rgba(0,0,0,.06)}
.seg.tray{border-radius:14px;background:color-mix(in srgb,var(--ink) 5%,var(--bg))}
.seg.tray button{height:40px;font-size:13px;border-radius:10px}
.seg.tray button[aria-checked=true]{box-shadow:none}
```

<!-- v:app.form-control/hairline-segmented -->
### 9. Hairline segmented

*Feeling: compact, tool-like.*

The inverse of the raised track. Analysts described Geist's switch as a white pill on a grey track, but the frame shows the opposite: a white track with a hairline, and a #f2f2f2 fill on the active item. It sits more quietly on white pages and inside toolbars. Use it for small view toggles, source and output, linear and log, and three-state theme switches.

**Recipe.** White track with 1px hairline, 6px radius, 4px padding, 34 to 42 tall; active item 5 to 7% grey fill in ink, inactive second ink, no shadow. Full-width and icon-only forms with tooltips. The compact three-state theme switch lives here.

**Seen on** geist switch, Neon Docs, Railway Docs. **Suits** light-precision, warm-neutral; devtool.

```css
.line{display:inline-flex;padding:4px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--line)}
.line button{height:28px;padding:0 12px;border:0;border-radius:4px;background:none;font:500 13px var(--font-text);color:var(--ink-2)}
.line button[aria-checked=true]{background:var(--fill-active);color:var(--ink)}
```

<!-- v:app.form-control/inverted-thumb-toggle -->
### 10. Inverted thumb toggle

*Feeling: a big decision, stated plainly.*

A large pill with a solid ink thumb. Brilliant sizes it at 415 by 54, so it reads as choosing the page rather than a setting. Use once per page, for a choice that changes everything below it.

**Recipe.** Page-level choice: 415x54 full-pill track at 7% ink, half-width thumb in solid ink with inverted 16/600 label, inactive 40% grey. Bigger than usual so it reads as scoping the page. Two or three options.

**Seen on** Brilliant. **Suits** warm-neutral; education.

```css
.thumb{display:inline-grid;grid-auto-flow:column;grid-auto-columns:1fr;padding:4px;border-radius:27px;background:var(--fill-active);width:min(415px,100%)}
.thumb button{height:46px;border:0;border-radius:23px;background:none;font:600 16px var(--font-text);color:var(--ink-3)}
.thumb button[aria-checked=true]{background:var(--ink);color:var(--bg)}
```

<!-- v:app.form-control/joined-segments -->
### 11. Joined segments

*Feeling: a set of keys on one bar.*

Attached items with square inner corners. Use it for filters, split buttons and icon toolbars, where items belong to one action group. Anthropic's news filter fills the active segment with solid ink, and inactive ones with a warm grey. A gap of 1px in the page colour acts as the divider.

**Recipe.** Attached items sharing one seam: 32 to 36 tall, 8 to 10px outer radius, square inner corners, 1px divider, active solid ink or 7% fill. Covers filter bars, split buttons and toolbars. Fit 2 to 5 items; icons 16px in 32px squares.

**Seen on** Anthropic News, shadcn button group, shadcn toggle, GitHub pulls, GitHub repo. **Suits** light-precision, warm-neutral; devtool, editorial.

```css
.join{display:inline-flex}
.join button{height:36px;padding:0 16px;border:0;margin-left:1px;background:var(--fill-active);font:500 14px var(--font-text);color:var(--ink-2)}
.join button:first-child{border-radius:10px 0 0 10px;margin:0}
.join button:last-child{border-radius:0 10px 10px 0}
.join button[aria-checked=true]{background:var(--ink);color:var(--bg)}
```

<!-- v:app.form-control/toggle-switch -->
### 12. Toggle switch

*Feeling: on or off, immediately.*

Use a switch only when the change takes effect at once, like a light. In a form that needs saving, use a checkbox. Radix aligns the switch to the first line of its label, so that long labels stay tidy. The thumb travels at 140ms. Keep one accent for on. Do not put an on or off word inside the track.

**Recipe.** Track 28x16 to 44x24, full pill, accent when on, 7% ink off, white circular thumb with 1px ring, 140ms ease. Label sits 8px away and aligns to its first text line. A switch acts at once; use checkboxes in saved forms.

**Seen on** radix switch, Cal.com Pricing, Zed Pricing, Webflow Pricing, Sequoia, 9 sites in all. **Suits** light-precision, mono-technical, photo-led, warm-neutral; devtool, saas, agency, finance.

```css
.t{position:relative;width:28px;height:16px;border-radius:8px;background:var(--fill-active);box-shadow:inset 0 0 0 1px var(--line);transition:background .14s}
.t::after{content:"";position:absolute;left:2px;top:2px;width:12px;height:12px;border-radius:50%;background:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.2);transition:transform .14s}
input{position:absolute;opacity:0}
input:checked+.t{background:var(--accent);box-shadow:none}
input:checked+.t::after{transform:translateX(12px)}
input:focus-visible+.t{outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:app.form-control/dense-settings-list -->
### 13. Dense settings list

*Feeling: a lot of decisions, no strain.*

Radix's notification card puts title and sentence at left and a stack of labelled switches at right, one row per topic. It is the proof that density can be calm. Pitch about 100 to 110. Keep sentences to one or two lines at 12px. This beats a matrix when there are few channels.

**Recipe.** Settings card: 14/600 row title and 12px muted copy left, stacked 28x16 switches with 12/500 channel labels right, 1px dividers, 100 to 110px pitch, 24px card padding. Shows several decisions per row without a table.

**Seen on** Radix UI. **Suits** soft-pastel; devtool.

```css
.r{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:32px;padding:16px 0;border-top:1px solid var(--line)}
.r b{display:block;font-weight:600}
.r p{font-size:12px;line-height:16px;color:var(--ink-2);margin-top:2px}
.sw{display:grid;gap:8px;align-content:start}
label.s{display:flex;align-items:center;gap:8px;font-size:12px;line-height:16px;font-weight:500}
```

<!-- v:app.form-control/choice-tile -->
### 14. Choice tile

*Feeling: a clear decision with room to explain.*

A radio or checkbox grown into a tile, so that the whole area is the target and each option can explain itself. Use it for plans, shipping and other choices with consequences. Geist's selected tile is 70 tall, not the 64 analysts read, and tints title and description with the accent as well as the fill, which is what makes selection unmistakable. Apple's option tiles use a 2px accent edge alone. Use real inputs and `:has(input:checked)`.

**Recipe.** Whole tile is the target: 70px tall, 6 to 12px radius, 1px hairline, 14/500 title, muted second line, 16px radio or checkbox at right. Selected: 1px accent edge, 7% accent fill, tinted text, filled dot. Hover 4% ink. 12px gaps.

**Seen on** Geist choicebox, Bauhaus Clock, shadcn checkbox, shadcn radio, Apple MacBook Air Buy, 7 sites in all. **Suits** light-precision, illustrated; devtool, ecommerce, finance, saas.

```css
.tile{position:relative;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:70px;padding:12px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--line);cursor:pointer;transition:background .15s,box-shadow .15s}
.tile:hover{background:var(--fill-hover)}
.tile input{position:absolute;opacity:0}
.tile b{display:block;font-weight:500;line-height:24px}
.tile span{display:block;color:var(--ink-2);line-height:24px}
.m{flex:none;width:16px;height:16px;border-radius:50%;box-shadow:inset 0 0 0 1px var(--line-strong);transition:all .15s}
.tile:has(input:checked){background:color-mix(in srgb,var(--accent) 7%,var(--bg));box-shadow:inset 0 0 0 1px var(--accent)}
.tile:has(input:checked) b,.tile:has(input:checked) span{color:color-mix(in oklab,var(--accent) 86%,var(--ink))}
.tile:has(input:checked) .m{box-shadow:inset 0 0 0 1px var(--accent),inset 0 0 0 3.5px var(--bg);background:var(--accent)}
.tile:has(input:focus-visible){outline:2px solid var(--accent);outline-offset:2px}
```

<!-- v:app.form-control/checkbox-radio-stack -->
### 15. Checkbox and radio stack

*Feeling: nothing to think about.*

16px marks, 1px edge, solid ink when on. Align the mark to the first line of the label, not the middle of a two-line block. Group options inside `fieldset` with a `legend`. The label is part of the target. Past about six options, use a select or combobox.

**Recipe.** 16px box at 4px radius or circle, 1px line at 18% ink, checked solid ink with white tick or 8px dot, 14/500 label, 14px muted description, 8 to 12px gap, 12px between options. Focus ring outlines the box.

**Seen on** shadcn checkbox, shadcn radio, geist checkbox, atlassian form, Geist radio. **Suits** light-precision; devtool.

```css
.ck{display:grid;grid-template-columns:16px 1fr;gap:12px;align-items:start}
.ck i{width:16px;height:16px;margin-top:2px;border-radius:4px;box-shadow:inset 0 0 0 1px var(--line-strong);display:grid;place-items:center;color:var(--bg)}
.ck.on i{background:var(--ink);box-shadow:none}
.ck b{font-weight:500;display:block}.ck span{color:var(--ink-2);display:block}
```

<!-- v:app.form-control/filter-chip-row -->
### 16. Filter chip row

*Feeling: browsing, light on the hand.*

Filters as chips above a grid. Framer's templates use bare 13px tabs with a #1f1f1f active fill and no borders. Herzog & de Meuron use two chip styles for two taxonomies, which gives a neat way to encode a second dimension. Show a count. On phones, keep one scrolling row. Past about eight filters, use a filter menu.

**Recipe.** Row of 28 to 40 tall filters: active solid ink or 8% fill, others bare or hairline, 12 to 14px, count at right. Two taxonomies can use two chip styles. Scrolls sideways on phone with no wrap.

**Seen on** Linear Customers, Herzog & de Meuron, Tailscale Blog, Framer Templates, p5.js. **Suits** dark-precision, warm-neutral, mono-technical, bold-colour; saas, devtool, architecture, education.

<!-- v:app.form-control/prompt-composer -->
### 17. Prompt composer

*Feeling: an invitation to start.*

For AI products the input is the page. Perplexity's is 640 by 122 with about a 20px radius and a foot row of tools. The input is larger than any other control because it is the product, so give it 16px text and generous air. Show a mode control and model picker in the foot, send at far right, and darken the edge on focus rather than adding a coloured ring. Grow with content up to about 40% of the viewport. Enter sends, Shift+Enter breaks a line.

**Recipe.** AI input as the page's centre: 640 wide, 20px radius, 1px line at 18% ink, 16px placeholder, foot row with add button, 32px mode segment, model select, mic and 32px solid send disc. Grows to 40vh; focus darkens the edge.

**Seen on** Stripe, Perplexity, HF spaces. **Suits** gradient-light, light-precision, bold-colour; ai, finance.

```css
.c{display:flex;flex-direction:column;background:var(--bg);border-radius:20px;box-shadow:0 0 0 1px var(--line-strong),0 1px 3px rgba(0,0,0,.04);padding:16px 12px 12px;transition:box-shadow .15s}
.c:focus-within{box-shadow:0 0 0 1px color-mix(in srgb,var(--ink) 34%,transparent),0 2px 8px rgba(0,0,0,.06)}
.c textarea{width:100%;min-height:44px;padding:0 8px;border:0;outline:0;resize:none;background:none;font:400 16px/24px var(--font-text);color:var(--ink)}
.foot{display:flex;align-items:center;gap:8px}
.ib{width:32px;height:32px;border:0;border-radius:50%;background:none;color:var(--ink-2);display:grid;place-items:center}
.mode{display:inline-flex;padding:3px;border-radius:17px;background:var(--fill-active)}
.mode button{display:flex;align-items:center;gap:6px;height:28px;padding:0 10px;border:0;border-radius:14px;background:none;font:400 14px var(--font-text);color:var(--ink-2)}
.mode button[aria-pressed=true]{background:var(--bg);color:var(--ink);box-shadow:0 0 0 1px var(--line)}
.sel{margin-left:auto}.go{background:var(--ink);color:var(--bg)}
```

<!-- v:app.form-control/docked-ask-bar -->
### 18. Docked ask bar

*Feeling: help, always one line away.*

A composer pinned to the viewport base while the article scrolls behind. Resend and Fly use 576 wide, radius 16, with a small send button, aligned to the content column rather than the viewport, so offset the snippet when a rail sits to its left. Reformation's version is a square dock flush with the screen edge, with blur, and it suits a fashion register. Keep clear of chat widgets. Add bottom padding to the page so that it never hides the last line. Do not dock it over app screens with their own footer actions.

**Recipe.** Composer pinned to the viewport base over docs: 576x62, 16px radius, 1px line, 15px placeholder, shortcut hint, 24px circular send. Article scrolls behind it, full width on phone. A flush square dock with blur suits fashion search.

**Seen on** Reformation, Resend Docs, Fly.io Docs. **Suits** light-precision, illustrated, photo-led; devtool, fashion.

```css
.dock{position:fixed;left:50%;bottom:16px;translate:-50% 0;width:min(576px,calc(100vw - 32px));display:flex;align-items:center;gap:8px;padding:12px 12px 12px 16px;background:var(--bg);border-radius:16px;box-shadow:0 0 0 1px var(--line-strong),0 8px 24px -12px rgba(0,0,0,.2)}
```

<!-- v:app.form-control/thin-slider -->
### 19. Thin slider

*Feeling: fine adjustment.*

A 4 to 6px track with a 16px thumb. Give the thumb a 44px touch target on phones through a transparent pseudo-element. Show the value, and offer a number box when exact values matter. A slider alone is hard to land on a specific number.

**Recipe.** Track 4 to 6px, full radius, 8 to 10% ink, range in ink or accent, 16px white thumb with 1px edge and small shadow. Label left, tabular value right, number box for exact entry. Range uses two thumbs.

**Seen on** radix slider, Geist slider, shadcn slider. **Suits** light-precision; devtool.

<!-- v:app.form-control/usage-estimator -->
### 20. Usage estimator

*Feeling: the price, worked out with you.*

ElevenLabs replaces a thin slider with a 36px block that fills solid ink up to a thin grab bar, with the value beside the fill. Supabase's estimator uses numbered steps and rows with boxed mono tags and right-aligned totals. Use these on usage-priced products. Update the price live, and keep the total in view.

**Recipe.** Cost calculator: numbered steps, 36px tall radius 8 block slider filled solid ink to a thin grab bar with the value beside it, or a select that changes the price in place, estimate rail at right with boxed mono tags and right-aligned totals.

**Seen on** ElevenLabs Pricing, Supabase Pricing, Neon Pricing, Replit Pricing. **Suits** warm-neutral, light-precision, dark-precision; saas, ai, devtool.

```css
.block{position:relative;height:36px;border-radius:8px;background:var(--fill-hover);overflow:hidden}
.block i{position:absolute;inset:0 auto 0 0;width:var(--v);background:var(--ink)}
.block i::after{content:"";position:absolute;right:4px;top:10px;bottom:10px;width:2px;background:var(--bg);opacity:.6}
.block span{position:absolute;left:calc(var(--v) + 12px);top:8px;font-variant-numeric:tabular-nums}
```

<!-- v:app.form-control/calendar-picker -->
### 21. Calendar picker

*Feeling: dates without typing.*

An input-styled trigger opens a month grid. Cells are 32px. The selected day is solid ink. Ranges are a light band with solid caps. Put preset ranges beside the grid, because most people want last 30 days, not a date. Let people type too, and use tabular numerals so that columns align. Do not use a calendar for a birth date, where typing is faster.

**Recipe.** Trigger 36 tall with calendar icon and date or range; popover month grid of 32px cells, 14/400 numerals, selected solid ink at 8px radius, range as a 6% band with solid caps, muted outside days, ghost chevrons, presets at left.

**Seen on** shadcn calendar, Geist calendar. **Suits** light-precision; devtool.

```css
.cal{display:grid;grid-template-columns:repeat(7,32px);gap:2px 0;font-size:14px;text-align:center;font-variant-numeric:tabular-nums}
.cal button{height:32px;border:0;border-radius:8px;background:none;color:var(--ink);font:inherit}
.cal button:hover{background:var(--fill-hover)}
.cal .out{color:var(--ink-3)}
.cal .on{background:var(--ink);color:var(--bg)}
.cal .range{background:var(--fill-active);border-radius:0}
```

<!-- v:app.form-control/centered-auth-card -->
### 22. Centered auth card

*Feeling: a clean front door.*

384 wide, one card on a faint tint. SSO buttons first, a rule, then email and password, then a full-width solid submit. This rendered within a few pixels of shadcn's login block. The forgot link sits on the password label row, so it does not interrupt the column. Set `autocomplete` on every field. Keep legal text outside the card.

**Recipe.** Card 384 wide on a 4% tint, 14px radius, hairline, 24px padding: logo above, 20/600 title, muted line, 36px outline SSO buttons, or-rule, labelled 36px inputs, forgot link on the label row, solid 36px submit, 12px legal below.

**Seen on** shadcn login-03 view, shadcn card, shadcn auth blocks, Strava. **Suits** light-precision, photo-led; devtool, saas, health.

```css
body{background:color-mix(in srgb,var(--ink) 4%,var(--bg));display:grid;place-items:center;min-height:100dvh;padding:24px}
.w{width:min(384px,100%)}
.card{background:var(--bg);border-radius:14px;box-shadow:0 0 0 1px var(--line),0 1px 3px rgba(0,0,0,.04);padding:24px;display:grid;gap:12px}
.card h1{font:600 20px/28px var(--font-display);text-align:center}
.sub{color:var(--ink-2);text-align:center;margin-bottom:12px}
.btn{height:36px;display:flex;align-items:center;justify-content:center;gap:8px;border-radius:8px;border:0;background:var(--bg);box-shadow:inset 0 0 0 1px var(--line-strong);font:500 14px var(--font-text);color:var(--ink)}
.btn.p{background:var(--ink);color:var(--bg);box-shadow:none;margin-top:12px}
.or{display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;color:var(--ink-2);font-size:13px;margin:8px 0}
.or::before,.or::after{content:"";height:1px;background:var(--line)}
.card label{display:flex;justify-content:space-between;font-weight:500;margin:8px 0 -4px}
```

<!-- v:app.form-control/split-auth-panel -->
### 23. Split auth panel

*Feeling: welcome, with a view.*

Form on one side, image or product on the other. It gives room for brand on a first impression. Keep the form to the same controls as the app. Drop the image first on small screens. Skip it for a login people see daily, where the image only delays them.

**Recipe.** Two columns: left an email and password stack at 36px with an outline SSO button, right a full-height image or product panel at 10px radius. Same control sizes as the rest of the app. Drop the panel on phone.

**Seen on** shadcn login blocks. **Suits** light-precision; devtool.

<!-- v:app.form-control/otp-slots -->
### 24. OTP slots

*Feeling: a small ritual done right.*

Six joined slots with a dash between groups of three. It must be one real input underneath, with `autocomplete=one-time-code` and `inputmode=numeric`, so that paste and autofill work. Separate boxes that fight the keyboard are the classic failure.

**Recipe.** Six 36 to 44px square slots joined as one group, 1px hairline, 8px outer radius, centred tabular digits, active slot 2px ring, dash between groups of three. Paste fills all slots; submit on the last digit.

**Seen on** shadcn otp. **Suits** light-precision; devtool.

<!-- v:app.form-control/inline-edit-field -->
### 25. Inline edit field

*Feeling: the page is the form.*

Text that becomes an input on click. Atlassian keeps the row height identical in both states, so nothing jumps. Save on Enter or blur, and cancel on Esc. Show the pencil or hover fill so that people find it. Do not use it for changes across several fields, which need a form and a save.

**Recipe.** Read view is plain 14px text in a 32px row with 4% hover fill; click swaps to a bordered input with 24px confirm and cancel icon buttons floating bottom right. Esc cancels, Enter saves, errors replace helper text.

**Seen on** atlassian inline edit. **Suits** light-precision; devtool.

<!-- v:app.form-control/dense-app-buttons -->
### 26. Dense app buttons

*Feeling: small, firm, consistent.*

App buttons are smaller than marketing buttons: 32 by default with 24 and 40 as neighbours. Keep one primary per view. While loading, swap the icon for a spinner and keep the width, so that the layout holds. Disabled buttons need a reason nearby. Cancel sits left of the primary, and right-aligned footers read in order from secondary to primary.

**Recipe.** App button ladder 24, 32, 40: 14/500, 6 to 8px radius, primary solid ink or accent, secondary hairline, tertiary text, danger red. Loading keeps width and swaps the icon for a spinner. Cancel left of primary, 8px gap, right aligned.

**Seen on** Geist button, geist modal, Geist toast, atlassian modal, atlassian popup, 7 sites in all. **Suits** light-precision, mono-technical; devtool, saas.

```css
.b{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px;border:0;border-radius:6px;font:500 14px var(--font-text);white-space:nowrap;transition:background .15s}
.b.p{background:var(--ink);color:var(--bg)}
.b.s{background:var(--bg);color:var(--ink);box-shadow:inset 0 0 0 1px var(--line-strong)}
.b.s:hover{background:var(--fill-hover)}
.b.t{background:none;color:var(--ink-2)}
.b.d{background:var(--bad);color:#fff}
```

<!-- v:app.form-control/micro-feedback -->
### 27. Micro feedback

*Feeling: a light touch at the end of a page.*

Faces or thumbs in a small pill, revealing a text box after a reaction. Keep the send button disabled until there is input, and confirm in place. Use it once, at the end of a page, never as a popup.

**Recipe.** Inline feedback: a 13px one-line question with four 20px faces in a 40px hairline pill or two 24px thumbs; a reaction reveals a textarea and a send button that stays disabled until input. Sits at page end.

**Seen on** Geist feedback, Sora. **Suits** light-precision; devtool, ai.

### Mistakes that cheapen a form

- **Placeholder as label.** It disappears on input, and fails contrast. Keep a real label above.
- **Mixed heights.** A 40px input beside a 36px button looks accidental. One height per row.
- **A saturated 2px border on every field.** Reserve strong edges for focus and errors.
- **A big soft glow on focus.** Keep the ring at 2 to 3px and about 24%. Mine started at 40% and looked like a gaming keyboard.
- **Error text that blames.** Say what to do next.
- **Native controls left unstyled beside styled ones.** A default select next to a custom input is the first thing people notice.
- **Inputs without `min-width:0` in grids.** They overflow their cell on phones.
- **A switch inside a form with a Save button.** Use a checkbox.
- **Segments that change width.** The chip should glide, and the track should hold still.

## Empty state

An empty state is the first thing a new user sees, and the only moment a product can teach without getting in the way. It has to say what will be here, why it is not here yet, and what to do next, in that order.

What separates great from cheap is usefulness and proportion. Great empty states match their container: a table keeps its headers, a rail shows one line, a whole page gets a small centred stack. Copy is specific, the action is the real next step, and any illustration belongs to the brand. Cheap ones use a huge generic illustration of a person with a laptop, a headline such as "Nothing here yet!", and a button that goes nowhere. They also treat four different situations alike. First use, no results, cleared and error each need different words.

| Situation | Say | Offer |
|---|---|---|
| First use | What this area does | The create or import action |
| No results | Nothing matches these filters | Clear filters |
| All done | You are clear | Nothing, or the next area |
| Error | What failed, in plain words | Retry, then support |
| No permission | Who can grant it | Request access |
| Loading | Nothing, show the layout | Skeleton |

Measured ranges: padding 48 to 64; icon 24 to 54; title 16 to 20 at 500 to 600; body 14 to 16 at about 40ch; gaps 8 to 24; illustration 80 to 160 where used. Geist's icon sits in a 54px hairline tile, not bare as analysts read it, and that tile keeps the glyph from floating. Apple's bag buttons are 360 wide and 56 tall, not the 190 analysts read.

<!-- v:app.empty-state/centered-icon-stack -->
### 1. Centered icon stack

*Feeling: calm, helpful, unfussy.*

The default for product areas. Geist uses a 54px hairline tile holding a grey glyph, a 16px title, a muted line and one action, with a text link beneath. Primer uses a 32px glyph, a 20px title and a green primary. Use one action, and make it the primary only if it is the screen's main next step. With no fill and no illustration it fits any palette.

**Recipe.** Centred stack in a bordered 8 to 12 radius box, 48 to 64px padding: 54px hairline icon tile or 24 to 32px glyph, 16 to 20/500 title, 14px muted copy at 40ch, one action, optional link. No illustration, no fill.

**Seen on** geist empty, primer blankslate, atlassian empty, Hoppscotch home. **Suits** light-precision; devtool, saas.

```css
.box{display:grid;justify-items:center;align-content:center;text-align:center;min-height:348px;padding:48px 24px;border-radius:12px;box-shadow:inset 0 0 0 1px var(--line)}
.tile{width:54px;height:54px;display:grid;place-items:center;border-radius:10px;box-shadow:inset 0 0 0 1px var(--line);margin-bottom:24px;color:var(--ink-2)}
.box h3{font:500 16px/24px var(--font-display);margin-bottom:8px}
.box p{color:var(--ink-2);max-width:40ch;text-wrap:balance}
.acts{display:flex;gap:8px;margin-top:20px}
.lnk{display:inline-flex;gap:4px;align-items:center;margin-top:12px;color:var(--ink-2);text-decoration:none}
```

<!-- v:app.empty-state/illustration-stack -->
### 2. Illustration stack

*Feeling: friendly, a product with a mascot.*

Use only with an illustration system the brand truly owns. Atlassian's 160px spot art comes from one. Glossier's giant pale smiley shows that a single brand glyph can do it. A stock line drawing does more harm than an icon.

**Recipe.** Centred: 80 to 160px brand illustration, 20/600 title, 14px muted copy at 400px, 32px primary, secondary beside it, tertiary link. For first-run and permission errors in products with a real illustration system.

**Seen on** atlassian empty, carbon empty states, Glossier cart. **Suits** light-precision; saas, other, ecommerce.

<!-- v:app.empty-state/left-headline-cta -->
### 3. Left headline with actions

*Feeling: composed, the shop stays open.*

Apple treats the empty bag as a page, not an error: a left-aligned headline, one line, two large equal buttons, help, then a promo. The grid holds, so nothing feels broken. Use it for carts and account pages in commerce. Sign in comes first, since saved items might be waiting.

**Recipe.** Left aligned on the page grid: 40/600 plain statement, 17px line, two equal 56px buttons 360 wide, 12px radius, 15px gap, hairline then a help line, promo tile below. The page stays a page.

**Seen on** Apple Bag. **Suits** light-precision; ecommerce.

<!-- v:app.empty-state/route-list-empty -->
### 4. Route list empty

*Feeling: a good shop assistant.*

Instead of an apology, offer routes. Our Place's empty cart drawer asks where to start and lists five product rows with thumbnails. The rows are 66 tall with 16px gaps, and a full-width button sits in the sheet's footer. The rows need real images, since grey boxes in my rebuild looked unfinished at once. Use it in commerce and in any drawer that would otherwise be blank.

**Recipe.** Turns a dead end into navigation: 20 to 24/300 sentence, small caps label, stack of 66px bordered rows with thumbnail and name, 16px gaps, sticky full-width button at the sheet base, warm scrim behind.

**Seen on** Fromourplace cart, Allbirds cart, Kith cart. **Suits** warm-neutral, bold-colour, mono-technical; ecommerce, fashion.

```css
.sheet h2{font:400 24px/36px var(--font-display);margin-bottom:24px}
.sheet h6{font:600 11px/16px var(--font-text);letter-spacing:.08em;text-transform:uppercase;color:var(--ink-2);margin-bottom:12px}
.r{display:flex;align-items:center;gap:16px;height:66px;padding:0 16px;margin-bottom:16px;border:1px solid var(--ink);border-radius:4px;color:var(--ink);text-decoration:none}
.r:hover{background:var(--fill-hover)}
```

<!-- v:app.empty-state/voice-led-empty -->
### 5. Voice-led empty

*Feeling: the brand, talking to you.*

A line in the display face, a short sentence, one button. Olipop asks a playful question and Parachute uses a calm serif statement. It works when the brand has a voice. In a B2B tool, jokes in an empty state age quickly.

**Recipe.** Brand voice does the work: 40px display line in the site's own face, short friendly sub line, one pill or 34px button, about 48px gaps, no icon. For consumer carts and brand pages.

**Seen on** Parachutehome cart, Drinkolipop cart. **Suits** warm-neutral, bold-colour; ecommerce, food-drink.

<!-- v:app.empty-state/inline-placeholder -->
### 6. Inline placeholder

*Feeling: nothing to see, and that is fine.*

Small containers get small messages. Perplexity's rail shows a half-alpha line under each group. A filtered table keeps its header row, so people see that the structure still exists, and offers a clear-filters link in the sentence. Never drop a full illustration into a table.

**Recipe.** Keep the structure and fill one line: a table keeps its header and shows a centred 14/500 title with one 14px line and text link; rail groups show a half-alpha empty line. No icon, no card.

**Seen on** atlassian dynamic table, Perplexity, carbon empty states. **Suits** light-precision; saas, ai, other.

```css
.none{padding:56px 16px;text-align:center}
.none b{font-weight:500;display:block}
.none p{margin:4px auto 0;color:var(--ink-2)}
```

<!-- v:app.empty-state/shortcut-list-empty -->
### 7. Shortcut list empty

*Feeling: an expert's blank page.*

Hoppscotch's blank pane lists the four shortcuts that matter, labels right aligned against keycaps. It turns dead space into training. Use it in tools, for panes that are empty by default.

**Recipe.** Blank work pane teaches the keyboard: 3 to 4 rows with label right aligned at 12 to 13px muted and keycaps left, then one outlined docs link. Centred, no headline. Tools only.

**Seen on** Hoppscotch home. **Suits** light-precision; devtool.

```css
.k{display:grid;grid-template-columns:200px auto;gap:16px;align-items:center;font-size:13px;color:var(--ink-2)}
.k span:first-child{text-align:right}
```

<!-- v:app.empty-state/all-clear-state -->
### 8. All clear state

*Feeling: good news, quietly delivered.*

When there is nothing wrong, say so. OpenAI's banner splits into a tinted head and a white body, with a 1px green border. Cloudflare uses a small card with a check. Use the same component for a positive inbox zero. Do not celebrate it with confetti or a large illustration.

**Recipe.** Nothing wrong is a result: tinted banner with a 1px status border, 16px check disc, 15 to 16/500 statement, white body line; or a card with a 24px check and 20/600 title. State carried by tint and words.

**Seen on** OpenAI Status, Cloudflare Status. **Suits** light-precision; ai, devtool.

<!-- v:app.empty-state/skeleton-loading -->
### 9. Skeleton loading

*Feeling: the page is already here.*

Skeletons promise a layout. So they must match it: keep real table headers, use the real row height, vary the widths like real text. Flat 7% ink blocks with a slow pulse are enough. Do not use a moving shimmer gradient, which draws the eye and looks busy. Show skeletons only after about 300ms, or fast loads flash.

**Recipe.** Placeholders that match the final layout cell for cell: flat 7% ink blocks, 6px radius, widths varied 40 to 80%, real headers kept, pulse to 50% over 1.6s, none under reduced motion. Layout must not shift when data lands.

**Seen on** OpenRouter models, Geist skeleton, shadcn skeleton. **Suits** light-precision; devtool, ai.

```css
.sk{display:block;border-radius:6px;background:var(--fill-active)}
@media(prefers-reduced-motion:no-preference){.sk{animation:p 1.6s ease-in-out infinite}@keyframes p{50%{opacity:.5}}}
```

<!-- v:app.empty-state/inline-progress -->
### 10. Inline progress

*Feeling: working, in its place.*

For waits under a few seconds, keep the spinner where the work is. Pair it with a verb. Inside a button the spinner replaces the icon and the label stays. Past a few seconds, switch to a determinate bar with a time estimate.

**Recipe.** Short waits stay in place: 16px ring or spoke spinner, verb label 14/500, tabular amount right, 48px hairline row; inside buttons the spinner replaces the icon and width holds. Respect reduced motion.

**Seen on** shadcn spinner, Geist spinner. **Suits** light-precision; devtool.

```css
.spin{width:16px;height:16px;border-radius:50%;border:2px solid var(--line-strong);border-top-color:var(--ink-2);animation:s .8s linear infinite}
@keyframes s{to{transform:rotate(360deg)}}
```

<!-- v:app.empty-state/semantic-callout -->
### 11. Semantic callout

*Feeling: a note in the margin.*

An inline message inside the page. Geist's note uses a pale tint with dark same-hue text, never a saturated fill, and an outline form for neutral notes. shadcn's destructive alert colours the text only and leaves the border neutral. Use it for warnings, plan limits and gated actions. Reserve a full-width banner for things that affect the whole app.

**Recipe.** Inline note: 36px minimum, 6 to 8px radius, 16px icon, 14px text in dark same-hue ink on an 8 to 14% tint, never saturated; optional 14/600 title and trailing 28px action. Hairline version for neutral info.

**Seen on** geist note, Replicate model, shadcn alert, atlassian dropdown, HF model card. **Suits** light-precision; devtool, ai.

```css
.note{display:flex;align-items:center;gap:8px;min-height:36px;padding:8px 12px;border-radius:8px;background:color-mix(in oklab,var(--warn) 14%,var(--bg));color:color-mix(in oklab,var(--warn) 45%,var(--ink))}
.note.i{background:none;box-shadow:inset 0 0 0 1px var(--line);color:var(--ink-2)}
```

### Mistakes that cheapen an empty state

- **The same message for every situation.** First use and no results need different words.
- **A generic illustration.** It says template. An icon, or nothing, is better.
- **Exclamation marks and apologies.** Stay plain.
- **A button with no real next step.** If there is no action, do not invent one.
- **A shimmering skeleton that does not match the layout.** The shift when data lands is worse than a spinner.
- **Grey boxes where thumbnails should be.** Route lists depend on real images.

## Command palette

A command palette is a fast way to do anything without leaving the keyboard. It must open instantly, understand partial words, show what will happen before you press Enter, and leave you where you were.

What separates great from cheap is speed and precision. Great palettes open in under 100ms, with focus already in the input, show useful recent items before you type, group results, highlight the match, and show shortcuts so that people learn them. Cheap ones are a search box in a modal with a spinner, no keyboard highlight, and results that do not act.

The evidence here is thinner than the rest of the chapter. Only 9 analyst rows fell here and none caught a global palette open, so the recipe combines Geist's written guidance, shadcn's rendered list, and measurements from related menus. Geist's rules are worth keeping: bind Cmd+K on macOS and Ctrl+K elsewhere, never reuse that binding for a page filter, trap focus and return it on close, show a recent or default set when the input is empty, use an `aria-live` result count, and let Backspace on an empty input pop the page stack.

Menus and pickers share this family because they share its anatomy: a surface, rows, a highlight and shortcuts. Rows 32 to 40; 12px group labels; 4 to 8px padding; 6 to 8px radius on rows.

<!-- v:app.command-palette/cmdk-dialog -->
### 1. Command dialog

*Feeling: everything is one keystroke away.*

Centre it at about 18vh, not the true middle, so that the list has room to grow downward and the input does not move as results change. Fix the width at 640. Rows are 40 tall, with the highlight moved by arrow keys and hover alike. Name commands with verbs and records with nouns. The footer shows the result count and what Enter will do, which removes fear. Items are verbs in Title Case or sentence case, placeholders name the scope.

Wrap each label in a single span. My first build put text and `<mark>` straight into a flex row with a gap, and every highlighted word split apart.

**Recipe.** Modal 640 wide at 18vh, 12px radius, hairline plus deep shadow, light scrim. Input 52 tall with 16px text, 12px group labels, 40px rows with 16px icon and right keycaps, 8px radius active fill, footer with result count and Enter action.

**Seen on** geist menu, geist cmd, shadcn command. **Suits** light-precision, dark-precision; devtool, saas.

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

<!-- v:app.command-palette/inline-command-list -->
### 2. Inline command list

*Feeling: a small search inside a surface.*

The same list embedded in a page or popover. shadcn renders it in a 260 wide hairline card with a grey search field inset 8px. Primer's select panel uses this for choosing from long lists. Use it for pickers such as assignee, label or project. Use the dialog for global commands, and this for choosing from one list.

**Recipe.** Same list embedded: 260 to 400 wide in a hairline 12px card, 32px grey search field inset 8px, 12px group labels, 32px rows with active fill, shortcuts right. For pickers and blank pages.

**Seen on** shadcn command, primer select panel. **Suits** light-precision; devtool.

<!-- v:app.command-palette/kbd-search-trigger -->
### 3. Keyboard search trigger

*Feeling: a quiet hint that speed is available.*

A search field in the header showing its shortcut. Raycast's store uses a 476 by 50 field with two small keycaps. Railway's is 40 tall on a warm fill with one chip. Plausible teaches the slash key through its placeholder. The field opens the palette, so style it as a field. Geist swaps the chip for Esc once the field has text.

**Recipe.** Search field that teaches its shortcut: 32 to 50 tall, 1px line or 3% fill, 6 to 12px radius, 14 to 15px grey label, two 18 to 20px keycaps inset right. Opens the palette. Swap the chip for Esc once dirty.

**Seen on** Resend Changelog, Grafana explore, Plausible sources, Resend Blog, geist input, 7 sites in all. **Suits** dark-precision, light-precision, warm-neutral; devtool, saas.

```css
.tr{display:flex;align-items:center;gap:8px;width:100%;height:40px;padding:0 8px 0 12px;border:0;border-radius:8px;box-shadow:inset 0 0 0 1px var(--line);background:color-mix(in srgb,var(--ink) 3%,var(--bg));color:var(--ink-3);font:400 14px var(--font-text)}
.tr span{flex:1;text-align:left}
```

<!-- v:app.command-palette/dropdown-action-menu -->
### 4. Dropdown action menu

*Feeling: a tidy list of verbs.*

A 240 wide surface with 4px padding, 32px rows and a 6px radius highlight. Separators run edge to edge with a -4px margin. The shortcut sits right in third ink. Put destructive items last, after a separator, in danger text. Group by intent. Title it only when the object is not obvious.

**Recipe.** Menu 200 to 256 wide, 8px radius, hairline, soft shadow, 4px padding. Items 32 tall, 14px, 6px radius hover fill, 16px icon, right mono shortcut in third ink. 12/500 label, 1px separators at -4px margin. Destructive last in danger ink.

**Seen on** shadcn dropdown, atlassian dropdown, shadcn menubar, shadcn navmenu. **Suits** light-precision; devtool.

```css
.menu{width:240px;padding:4px;border-radius:8px;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 1px 2px rgba(0,0,0,.05),0 8px 24px -8px rgba(0,0,0,.14)}
.lb{font:500 12px/16px var(--font-text);color:var(--ink-2);padding:6px 8px}
.it{display:flex;align-items:center;gap:8px;height:32px;padding:0 8px;border-radius:6px}
.it:hover{background:var(--fill-hover)}
.it svg{color:var(--ink-2)}
.it span{margin-left:auto;font:400 11px var(--font-mono,ui-monospace,monospace);color:var(--ink-3)}
.it.d{color:var(--bad-ink)}.it.d svg{color:inherit}
.sp{height:1px;background:var(--line);margin:4px -4px}
```

<!-- v:app.command-palette/context-menu -->
### 5. Context menu

*Feeling: right where your hand already is.*

The same menu at the pointer. Open with no delay. Keep every action available elsewhere, since people cannot discover right click.

**Recipe.** Same menu at the cursor on right click, with submenus, checkbox and radio items, opening in under 100ms. Mirror every item in a visible overflow button, because right click cannot be discovered.

**Seen on** shadcn context. **Suits** light-precision; devtool.

<!-- v:app.command-palette/combobox-field -->
### 6. Combobox field

*Feeling: a select that lets you type.*

Use it when options exceed about ten. The menu matches the field's width. Show a check on the selected option, and a specific no-results line. Multi-select puts 24px chips inside the field, and the field grows by wrapping. Under about ten options, use a plain select.

**Recipe.** Field 36 to 40 tall with magnifier and up-down chevron, popover matching its width, 32 to 36px options, 16px accent check at right, 11px group headers, empty message. Multi version shows 24px chips with an x inside the field.

**Seen on** geist combobox, atlassian select, carbon dropdown. **Suits** light-precision; devtool, saas, other.

```css
.cb{display:flex;align-items:center;gap:8px;height:36px;padding:0 10px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--accent),0 0 0 3px var(--focus);background:var(--bg)}
.pop{margin-top:6px;padding:4px;border-radius:8px;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 8px 24px -8px rgba(0,0,0,.14)}
.chip{display:inline-flex;align-items:center;gap:4px;height:24px;padding:0 4px 0 8px;border-radius:4px;background:var(--fill-active);font-size:12px}
```

<!-- v:app.command-palette/kbd-chips -->
### 7. Keyboard chips

*Feeling: small, exact caps.*

Flat, not bevelled. Use a real `kbd` element, in an 11px mono face, at 20 tall with a 4px radius. Sequences sit 3px apart. Detect the platform and show Ctrl on Windows. Do not show chips for shortcuts that do not exist.

**Recipe.** Keycaps 20 tall, 11/500 mono, 5 to 6px padding, 4px radius, 6% ink fill or 1px line, no bevel, 3px apart. Use real glyphs for command, shift and return. Show Ctrl on Windows.

**Seen on** shadcn kbd. **Suits** light-precision; devtool.

```css
kbd{display:inline-grid;place-items:center;min-width:20px;height:20px;padding:0 5px;border-radius:4px;background:var(--fill-active);font:500 11px var(--font-mono,ui-monospace,monospace);color:var(--ink-2)}
```

### Mistakes that cheapen a palette

- **Any delay on open.** No fade longer than 100ms, no fetch before showing the shell.
- **An empty list before typing.** Show recents and suggestions.
- **Highlight that follows hover only.** Arrow keys must drive it.
- **Mixed verbs and page names without groups.** Group by what Enter will do.
- **Centring dead middle.** The input should not jump as results change.
- **Keycaps with bevels and gradients.** They look like a skeuomorphic toy.

## Modal and sheet

A modal stops the world, so it must be worth it. Use one when the task must be finished or dismissed before anything else makes sense. Everything else floats without blocking: sheets keep context, popovers answer a small question, and toasts report and leave.

What separates great from cheap is choosing the lightest layer and writing it well. Great dialogs have a verb in the title and on the primary button, a short body, a clear way out, and correct focus. Cheap ones ask "Are you sure?", offer OK and Cancel, stack a modal on a modal, open a popup three seconds after load, and hide the close button.

| Layer | Blocks | Use for | Width |
|---|---|---|---|
| Tooltip | Nothing | Naming an icon | Fits text |
| Popover | Nothing | A small detail or control | 256 to 300 |
| Toast | Nothing | Reporting something that happened | 356 |
| Side sheet | Dims, keeps context | Record detail, filters, carts | 400 to 480 |
| Dialog | Everything | A short task or a decision | 420 to 512 |
| Data modal | Everything | Drill-down from a dashboard | 885 |
| Full page | Replaces | Anything longer than about five fields | Page |

Measured ranges: radius 8 to 14 in product, 32 on consumer; scrim 24 to 60%; padding 16 to 24; title 18/600; footer buttons 32 to 36. Motion: 150 to 240ms with an ease-out on enter and shorter on exit. Scale from about .98, or slide 4 to 8px.

Every dialog needs: `role=dialog`, `aria-modal`, a labelled title, focus moved inside, focus trapped, focus returned on close, Esc to close, and body scroll locked. Use the native `<dialog>` element where you can, as it gives you most of this. Under 600px, centred dialogs become bottom sheets.

<!-- v:app.modal-sheet/form-dialog -->
### 1. Form dialog

*Feeling: a short, focused task.*

Radix sets 450 max width, an 18/500 title and a 14px description, and right-aligned Cancel and Save. Tremor adds a rule above the footer. Header, scrolling body and footer sit in a three-row grid, so a long form scrolls inside while the buttons stay. The primary label repeats the title's verb. Five fields is about the limit: past that, use a page.

Set `grid-template-columns:minmax(0,1fr)` on the dialog, or inputs push it wider than the viewport on phones. Mine clipped its fields until I did.

**Recipe.** Centred 450 to 512 wide, 12px radius, hairline, deep soft shadow, scrim 40% ink. 18/600 title, 14px description, 20px padding, 36px fields at 16px gaps, footer rule, Cancel then primary right aligned. Focus first field, Esc closes.

**Seen on** radix themes dialog, carbon modal, Tremor dialogs. **Suits** light-precision; devtool.

```css
.scrim{position:fixed;inset:0;background:color-mix(in srgb,var(--ink) 40%,transparent)}
.dlg{position:fixed;left:50%;top:50%;translate:-50% -50%;width:min(480px,calc(100vw - 32px));max-height:calc(100dvh - 48px);display:grid;grid-template-rows:auto minmax(0,1fr) auto;grid-template-columns:minmax(0,1fr);background:var(--bg);border-radius:12px;box-shadow:0 0 0 1px var(--line),0 24px 48px -12px rgba(0,0,0,.28)}
.hd{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;padding:20px 20px 0}
.hd h2{font:600 18px/24px var(--font-display)}.hd p{color:var(--ink-2);margin-top:4px}
.bd{padding:20px;display:grid;gap:16px;overflow:auto}
.ft{display:flex;justify-content:flex-end;gap:8px;padding:16px 20px;border-top:1px solid var(--line)}
@media(max-width:600px){.dlg{top:auto;bottom:0;translate:-50% 0;width:100%;border-radius:16px 16px 0 0}.ft .b{flex:1}}
```

<!-- v:app.modal-sheet/alert-confirm -->
### 2. Alert confirm

*Feeling: a clear pause before something permanent.*

Name the object in the title and the consequence in the body. Label the buttons with verbs: keep and void, never OK and Cancel. Focus goes to the safe action, because a stray Enter must not destroy anything. Use `role=alertdialog`, and do not close on an outside click. For very high stakes, ask people to type the name.

**Recipe.** Destructive confirm, 420 wide: 18/600 title naming the object, one sentence with the consequence, footer right with a soft fill keep button then a solid danger verb button. Focus lands on the safe action. No dismiss on outside click.

**Seen on** radix alert, flowbite modal. **Suits** light-precision; devtool.

```css
.dlg{position:fixed;left:50%;top:50%;translate:-50% -50%;width:min(420px,calc(100vw - 32px));padding:20px;background:var(--bg);border-radius:12px;box-shadow:0 0 0 1px var(--line),0 24px 48px -12px rgba(0,0,0,.28)}
.b{height:36px;padding:0 14px;border:0;border-radius:8px;font:500 14px var(--font-text);background:var(--fill-active);color:var(--ink)}
.b.d{background:var(--bad);color:#fff}
```

<!-- v:app.modal-sheet/data-modal -->
### 3. Data modal

*Feeling: zoom in, then step back.*

Plausible's expand opens the whole table in a modal, 885 wide, with search beside the title, a sticky header and zebra rows. The body is clipped mid-row, which tells you it scrolls. The heavier 60% scrim makes sense here, since the modal replaces the page. Plausible adds a 2px accent ring around the modal. Use it for drill-downs from a dashboard. Make the view linkable.

**Recipe.** Drill-down table over the dashboard: 885 wide, 12px radius, 48px from viewport edges, 18/600 title with a 256px search naming the / shortcut, sticky header, zebra 36px rows, body clipped mid-row to show it scrolls, load more at the end.

**Seen on** Plausible sources, Plausible pages. **Suits** light-precision; saas.

```css
.m{position:fixed;left:50%;top:48px;bottom:48px;translate:-50% 0;width:min(885px,calc(100vw - 32px));display:grid;grid-template-rows:auto minmax(0,1fr);grid-template-columns:minmax(0,1fr);padding:16px 28px 0;background:var(--bg);border-radius:12px;box-shadow:0 24px 48px -12px rgba(0,0,0,.3),0 0 0 2px var(--accent)}
.m header{display:flex;align-items:center;gap:16px;padding-bottom:16px;border-bottom:1px solid var(--line)}
.sc{overflow:auto;padding-top:12px;mask-image:linear-gradient(#000 calc(100% - 32px),transparent)}
.sc thead th{position:sticky;top:-12px;background:var(--bg)}
```

<!-- v:app.modal-sheet/one-fact-notice -->
### 4. One fact notice

*Feeling: a friendly tap on the shoulder.*

Airbnb tells you one thing with one object and one button. 393 wide, 32px radius, warm off-white. It only works with a real rendered object. My gradient tile in the same slot looked like a placeholder, so without real art, drop the object. Show it once, ever.

**Recipe.** Consumer notice: 393 wide, 32px radius, warm off-white, 40% scrim, 88px 3D object, 24/600 centred two-line statement, 48px full-width solid button inset 24px, small x. One fact, one action, shown once.

**Seen on** Airbnb. **Suits** photo-led; hospitality.

```css
.n{position:fixed;left:50%;top:50%;translate:-50% -50%;width:min(393px,calc(100vw - 32px));padding:72px 24px 24px;background:color-mix(in srgb,var(--ink) 4%,var(--bg));border-radius:32px;text-align:center}
.n h2{font:600 24px/26px var(--font-display);letter-spacing:-.01em;margin-bottom:24px;text-wrap:balance}
.n .go{width:100%;height:48px;border:0;border-radius:8px;background:var(--ink);color:var(--bg);font:600 16px var(--font-text)}
```

<!-- v:app.modal-sheet/split-offer-modal -->
### 5. Split offer modal

*Feeling: a shop's window card.*

The commerce popup: photo on one half, offer on the other. Nine sites use it, and the craft varies. Bonobos sets a blunt offer and a witty pair of answers, which is the good end. Timing does more than design here. Wait until someone has scrolled or viewed two pages. Make decline obvious, and remember the answer. In software, do not use it at all. In a store, start with the slim bar, footer or confirmation page that `commerce.md` asks for, and build this only if the brief requires a popup.

**Recipe.** Commerce capture: 520 to 800 wide, photo half, logo, 32 to 48px offer line, one email field, solid button, quiet decline link, 40 to 50% scrim. Delay it past first scroll. Declining must be as easy as accepting.

**Seen on** Seed, Bonobos, Parachutehome collection, Gorjana collection, Peakdesign collection, 9 sites in all. **Suits** photo-led, warm-neutral, light-precision; ecommerce, health, hospitality, ai.

<!-- v:app.modal-sheet/side-sheet -->
### 6. Side sheet

*Feeling: detail, with your place kept.*

A panel from the right. Use it to open a row without losing the list, for carts, or for filters. Our Place's cart is 422 wide with a 48px header, scrolling body, and a sticky bordered button in the footer. The scrim takes a warm tint from the page's ink rather than black. Primer's dialog offers a side sheet position and turns into a bottom sheet on narrow viewports. Geist advises keeping an always-visible close. Do not use it for a short confirmation, which is a dialog.

**Recipe.** Right panel 400 to 480 wide, full height, scrim 30 to 40%, 48px header with title and x, scrolling body, sticky footer action, slides in 240ms ease-out. Keeps list context. For record detail, carts and filters.

**Seen on** Fromourplace cart, primer dialog, shadcn sheet. **Suits** warm-neutral, light-precision; ecommerce, devtool.

```css
.sheet{position:fixed;inset:0 0 0 auto;width:min(422px,100%);display:grid;grid-template-rows:auto 1fr auto;background:var(--bg);box-shadow:-24px 0 48px -24px rgba(0,0,0,.25)}
.sheet>header{display:flex;justify-content:space-between;align-items:center;height:48px;padding:0 24px;border-bottom:1px solid var(--line)}
.sheet .body{padding:32px 24px;overflow:auto}
.sheet>footer{padding:16px;border-top:1px solid var(--line)}
```

<!-- v:app.modal-sheet/bottom-drawer -->
### 7. Bottom drawer

*Feeling: under your thumb.*

The phone's dialog. Add a grab handle, allow drag to dismiss, and respect the safe area. Keep actions at the bottom within reach. Do not use it on desktop, where a dialog or side sheet is the native form.

**Recipe.** Phone sheet from the base: full width, 16px top radius, 32x4 grab handle, title, one primary and Cancel, max 90dvh, drag to dismiss. Centred dialogs should become this under 600px.

**Seen on** Geist drawer. **Suits** light-precision; devtool.

```css
.drawer{position:fixed;inset:auto 0 0;max-height:90dvh;padding:8px 16px calc(16px + env(safe-area-inset-bottom));background:var(--bg);border-radius:16px 16px 0 0}
.drawer::before{content:"";display:block;width:32px;height:4px;margin:0 auto 12px;border-radius:2px;background:var(--line-strong)}
```

<!-- v:app.modal-sheet/toast-stack -->
### 8. Toast stack

*Feeling: a quiet receipt.*

A short report at bottom right. Stack by scaling the older ones behind, so that a burst does not fill the screen. Offer Undo instead of a confirm dialog when you can, which is the best use of a toast. Errors stay until dismissed. Use `aria-live=polite`. Never put the only copy of important information in a toast.

**Recipe.** Bottom right, 356 wide, 10px radius, hairline, soft shadow, 13/500 title, 13px muted line, 16px status icon, optional 24px Undo. Stacks peek 12px at scale .95. Auto-dismiss at 4 to 6s, pause on hover, errors persist.

**Seen on** Geist toast, shadcn sonner. **Suits** light-precision; devtool.

```css
.stack{position:fixed;right:24px;bottom:24px;width:min(356px,calc(100vw - 32px));height:120px}
.t{position:absolute;inset:auto 0 0;display:grid;grid-template-columns:16px 1fr auto;gap:10px;padding:14px 16px;background:var(--bg);border-radius:10px;box-shadow:0 0 0 1px var(--line),0 8px 24px -8px rgba(0,0,0,.16);transform-origin:bottom center}
.t:nth-child(2){transform:translateY(-12px) scale(.95);opacity:.9;z-index:-1}
.t:nth-child(3){transform:translateY(-24px) scale(.9);opacity:.6;z-index:-2}
.t b{font-weight:500;font-size:13px;line-height:18px;display:block}
.t p{font-size:13px;line-height:18px;color:var(--ink-2)}
```

<!-- v:app.modal-sheet/tooltip-chip -->
### 9. Tooltip chip

*Feeling: a whispered label.*

A dark chip that names an icon. It inverts the theme, which gives it contrast with no border. Wait 300ms on first hover, then show instantly for neighbours. It must appear on keyboard focus. Do not hide essential information here, since touch has no hover. If the text needs a link or runs past one line, use a popover.

**Recipe.** Near-black chip on light themes, 12/500, 6 by 10px padding, 6px radius, 8px rotated arrow, 4px off the trigger, 150ms fade with 2px slide, 300ms delay. One short phrase, no actions. Keyboard focus shows it too.

**Seen on** shadcn tooltip, carbon forms. **Suits** light-precision; devtool, other.

```css
.tip{position:relative;padding:6px 10px;border-radius:6px;background:var(--ink);color:var(--bg);font-size:12px;font-weight:500;line-height:16px}
.tip::after{content:"";position:absolute;left:50%;bottom:-4px;width:8px;height:8px;margin-left:-4px;background:inherit;transform:rotate(45deg);border-radius:1px}
```

<!-- v:app.modal-sheet/anchored-popover -->
### 10. Anchored popover

*Feeling: a small card, right there.*

Attached to its trigger with an 8px offset, and it flips at viewport edges. Hover cards preview a person or link after a 200ms wait. Use the native `popover` attribute for dismissal and layering where you can. If it holds a form longer than two fields, make it a dialog.

**Recipe.** Card attached to its trigger: 256 to 300 wide, 10px radius, hairline, two-layer soft shadow, 16px padding, 8px offset, flips at viewport edges, 150ms fade and 4px slide. Hover cards wait 200ms. Holds detail, never a form flow.

**Seen on** shadcn hover card, atlassian popup, Therabody, Geist feedback. **Suits** light-precision, warm-neutral; devtool, ecommerce.

```css
.pop{width:256px;padding:16px;border-radius:10px;background:var(--bg);box-shadow:0 0 0 1px var(--line),0 8px 24px -8px rgba(0,0,0,.16)}
```

<!-- v:app.modal-sheet/corner-consent-card -->
### 11. Corner consent card

*Feeling: a legal chore, handled with grace.*

A small fixed card that does not block the page. PostHog turns the cookie notice into a joke with a cut-out figure, and it became a brand moment. Stripe's chat card uses the same slot with overlapping avatars. Keep accept and decline equal in weight, because a dark pattern here costs trust.

**Recipe.** Fixed bottom-right card 344 to 390 wide, 4 to 12px radius, 16px bold title, short plain copy, close x, decline and accept equally visible. Personality allowed, such as a cut-out figure breaking the corner. Never blocks the page.

**Seen on** Stripe Payments, Rabbit, PostHog, PostHog Handbook, PostHog Pricing, 6 sites in all. **Suits** expressive, illustrated, gradient-light, bold-colour; saas, devtool, finance, brand.

<!-- v:app.modal-sheet/equal-choice-dialog -->
### 12. Equal choice dialog

*Feeling: a fair question.*

Two equal keys, no primary. Use it when neither answer is the right default, as with sound on entry. Either answer continues at once, and the choice is remembered. Do not use it where one answer is safer: that is an alert confirm.

**Recipe.** Two equal actions and no default bias: 414x170, compact title, one line of explanation, two 48px keys side by side, either answer continues. For permissions such as sound or motion on entry. Focus ring on the first.

**Seen on** cagdascecen.com. **Suits** expressive; portfolio.

### Mistakes that cheapen a modal

- **Are you sure?** Say what will happen. Buttons are verbs.
- **OK and Cancel.** They force people to reread the question.
- **Stacked modals.** If a modal needs a modal, it should be a page.
- **A popup on load.** Nothing has earned it yet.
- **Grid or flex children without a minimum of zero.** Dialog contents overflow on phones. This hit two of mine.
- **Scroll not locked.** The page moving behind a dialog looks broken.
- **A black scrim on a warm page.** Mix the scrim from `--ink`.
- **Focus left behind.** Keyboard users end up typing into the page under the dialog.
- **A long fade-in.** Over 240ms feels like lag.

## Before you call it done

Run this on any app screen.

**Density and rhythm**
- One row pitch across nav, menus, toolbars and tables.
- At most four text sizes. Secondary text in `--ink-2`, not in third-level grey.
- Rail 240 or wider, rows 32 or taller, table rows matched to the content.

**Data**
- Believable names and awkward numbers, not Acme and round thousands.
- Tabular numerals, right aligned, consistent decimals.
- Every KPI has a unit, a period and a comparison, and direction is separate from good or bad.
- Every chart has a computed scale, real labels, a zero baseline where it applies, a tooltip and a table view.
- Incomplete periods are marked and missing data is not drawn as zero.

**States**
- Hover, focus-visible, active, selected and disabled exist for every control.
- Loading, empty, no results and error exist for every data region.
- Long strings, zero rows and ten thousand rows have been considered.

**Frame**
- Only content scrolls. Nothing shifts on load or on selection.
- Every grid track uses `minmax(0,1fr)`, and inputs have `min-width:0`.
- At 390 wide: no sideways page scroll, tables scroll inside their wrapper, chart labels are thinned, dialogs become sheets, the rail becomes a drawer.

**Colour**
- Chrome is neutral. Accent appears on one primary action and in data.
- Status colours mean state, and always come with text.
- It still reads in greyscale.

**Render it and read it.** Most mistakes in this chapter threw no error. A date axis out of order, a green arrow on bad news, a clipped field, a broken highlight: all of them looked fine in code and were obvious in the image.
