# Stack

Most real requests happen inside React, Next.js, Tailwind and shadcn/ui. This chapter carries the rest of the skill into those tools: how to read a codebase before touching it, how to get tokens, fonts, images, themes and motion right, and how to stop the kit deciding what the page looks like.

Everything marked with a number was measured. Corpus figures come from 826 graded sites joined to what their pages actually loaded. Recipes were built in a small proof app and shot once with `shoot.mjs`, on 6 November 2026, against next 16.4.5, react 19.3.0, tailwindcss 4.3.5, shadcn 4.23.0, @base-ui/react 1.9.0, motion 14.10.1, gsap 3.15.1, @gsap/react 2.1.2 and next-themes 0.4.6. These tools change quickly. Where this chapter and the installed code disagree, the installed code wins, so run the checks in [Check the versions](#check-the-versions).

**Contents.** [The stack does not set the look](#the-stack-does-not-set-the-look) · [First moves in an existing codebase](#first-moves-in-an-existing-codebase) · [Choosing a stack when nothing exists](#choosing-a-stack-when-nothing-exists) · [Check the versions](#check-the-versions) · [Tokens](#tokens) · [shadcn](#shadcn) · [Fonts](#fonts) · [Images](#images) · [Dark mode](#dark-mode) · [Server and client components](#server-and-client-components) · [Motion in React](#motion-in-react) · [Hydration faults](#hydration-faults) · [File structure](#file-structure) · [Performance budgets](#performance-budgets) · [Verify](#verify) · [Before you call it done](#before-you-call-it-done)

## The stack does not set the look

Half the gold tier runs on Next. Share of sites by detected platform:

| Tier | Sites | Next | Framer | Webflow | WordPress | Shopify | None of these |
|---|---|---|---|---|---|---|---|
| Gold | 147 | 49% | 5% | 4% | 5% | 2% | 30% |
| Silver | 369 | 24% | 27% | 5% | 7% | 5% | 31% |
| Expressive | 138 | 20% | 17% | 7% | 7% | 4% | 41% |
| Reject | 172 | 12% | 29% | 3% | 8% | 12% | 35% |

The list was curated toward product companies, so this does not show that Next causes quality. It shows that the stack puts no ceiling on it. Cal.com, Polar, Resend, Better Auth, Dishoom, Blue Bottle, A24 and Gagosian all run on it and share nothing visually: a tight display face with UI chips inside the headline, a black page of dense billing interface, a serif on black with a rendered object, a ruled README layout, an engraved food brand on cream, moody product photography with wide uppercase labels, film stills with enormous titles, a newspaper listing.

What collapses pages is accepting defaults, because every default in these tools is a decision someone else made for no particular brand. In our rejects, 63 of 172 reasons use the words template, stock, default, generic or kit. In gold, 43 of 147 cards warn that the page would turn into a template if its precision slipped. The stack is where those defaults live, so most of this chapter is about replacing them on purpose.

## First moves in an existing codebase

The skill's rule is to extend, not redesign. Doing that well means reading before you write. Spend your first few commands here:

```bash
grep -E '"(next|react|tailwindcss|@tailwindcss/[a-z]+|shadcn|@base-ui/react|radix-ui|@radix-ui/[a-z-]+|motion|framer-motion|gsap|@gsap/react|next-themes|lucide-react)"' package.json
ls components.json tailwind.config.* postcss.config.* pnpm-lock.yaml yarn.lock bun.lock* 2>/dev/null
grep -rln '@theme\|@tailwind\|--background\|--primary' src app styles 2>/dev/null
grep -rn 'next/font\|@font-face\|fonts.googleapis\|@fontsource' src app 2>/dev/null | head
ls src/components components packages 2>/dev/null
grep -rhoE '#[0-9a-fA-F]{6}\b' src app 2>/dev/null | sort | uniq -c | sort -rn | head -20
```

The last line is the most revealing. A few colours used hundreds of times means a real system. Forty colours used twice each means drift, which you should report and not add to.

| You find | It means | Do this |
|---|---|---|
| `@import "tailwindcss"` and `@theme` | Tailwind v4 | The recipes below apply directly |
| `tailwind.config.*` with `theme.extend`, `@tailwind base`, `hsl(var(--primary))` | Tailwind v3 | Add tokens to the config. Do not upgrade unasked. Next ships a v3 guide at `node_modules/next/dist/docs/01-app/02-guides/tailwind-v3-css.md` |
| `components.json` | shadcn. Read `style`, `baseColor`, `rsc` and `aliases` | `shadcn add` follows this file. Copy local conventions |
| `@base-ui/react` imports in `components/ui` | Base UI primitives | Compose with the `render` prop |
| `radix-ui` or `@radix-ui/*` imports | Radix primitives | Compose with `asChild` |
| MUI, Chakra, Mantine or similar | A theme object owns the look | Work in that theme. Do not add Tailwind |
| CSS Modules or styled-components | The project has an answer already | Keep it |
| `framer-motion` imports | The older package name for Motion | Keep the imports |
| A `pages/` directory | Pages Router | `_app` and `_document` replace `layout.tsx`. The `02-pages` docs apply |
| `packages/ui` | A monorepo design system | Tokens and components live there. Change them there |

Then, in this order:

1. **Shoot the current page before you change it,** with `node <skill-dir>/scripts/shoot.mjs http://localhost:3000 --out .shots/before`. You now have a baseline and a view of what the product really looks like, which is often different from what its code suggests.
2. **Open the page nearest to yours** and copy its rhythm: container, section padding, heading sizes, how it uses cards.
3. **Use what exists.** Never write a second Button. Add a variant to the one that exists. If a value appears twice in your work, it belongs in a token, and if a token already holds something close, use that token. Use the project's package manager, its icon set, its motion library and its fonts.
4. **Keep the brand out of scope.** Fonts, palette, radius and nav stay as they are unless the request is about them. Do not deal a palette or a type system for a product that has one. The sampler is still useful for what the codebase has no opinion on, such as the layout of a new section.
5. **Raise craft inside the limits.** Most of what makes a page feel designed needs no redesign: real content in the frames, spacing that follows one scale, hierarchy from small differences, every state finished, motion in the existing language.
6. **Report what you noticed but left alone.** One line per item.

For a Next app, expect `next dev` to write an `AGENTS.md` at the project root. It tells agents to read the docs bundled in `node_modules/next/dist/docs/`, which is good advice and is covered next. It will show up in the diff. `agentRules: false` in `next.config` turns it off.

## Choosing a stack when nothing exists

If there is a repo, the repo has already chosen. Without one, choose by what the page has to do. Do not reach for a framework out of habit, because a framework costs 137 kB of gzipped JavaScript before you add anything, and every recipe in `references/motion/` already runs as written in plain HTML.

| Situation | Build | Why |
|---|---|---|
| One page, a thin brief, or anything that must open from a file | HTML, CSS, one small module | No hydration to manage, no build to fail, `shoot.mjs` works on the folder |
| The user names React, Next, Tailwind or shadcn | That, exactly | Their words win |
| Several pages sharing a nav, footer and data, or a CMS, auth or checkout | Next App Router | Layouts, data and image handling earn their cost |
| App screens behind a login with no search traffic | Vite and React, or Next if the rest of the product is | `shadcn init -t vite` supports it. Drop `next/font` and `next/image`, see [Fonts](#fonts) |
| A content site with a few interactive islands | Plain, or Astro | Astro is on 3% of gold sites, so this is a sensible minority choice |

Thirty percent of gold sites run none of the platforms we detect. That group includes Elyx at 0.12 MB of CSS and JavaScript, mymind at 0.47 MB, and Fabrica Partners at 9 requests, along with heavier pages from Stripe and Apple. Some of those are custom builds and not hand-written HTML, so read the number as "a platform is optional", not "plain is best".

A plain page is not a dead end. Tokens in CSS variables move into `globals.css` unchanged, and each section becomes a component. Starting plain and porting is usually faster than fighting a toolchain while the design is still wrong.

## Check the versions

Models tend to write the API from a year ago. Between versions of these tools, several things changed that compile fine or fail quietly. Check before you cite anything:

```bash
npm view next version; npm view tailwindcss version; npm view shadcn version; npm view motion version; npm view gsap version
ls node_modules/next/dist/docs/01-app/          # the docs for the exact version installed
npx shadcn@latest init --help                   # flags and defaults change between releases
```

Things that have moved and catch people out:

| Older habit | Now | What goes wrong |
|---|---|---|
| `<Image priority>` | `preload`, or `loading="eager"` or `fetchPriority="high"`. `priority` is deprecated since Next 16 | A deprecation you never see |
| `quality={90}` | Must be listed in `images.qualities`, which defaults to `[75]` | Served at 75 with only a dev warning |
| `postcss.config.mjs` | A new app uses the `@tailwindcss/turbopack` loader in `next.config.ts`. Older apps use `@tailwindcss/postcss`. Both work | Adding the second one |
| `import { cn } from "@/lib/utils"` | New shadcn components import `cn` from the `cn` package. `lib/utils.ts` re-exports it | Rewriting a file that was fine |
| `asChild` everywhere | New shadcn defaults to Base UI, which uses `render` | A type error, or a nested button |
| `data-[state=open]:` | `data-open:`, from `shadcn/tailwind.css`. It matches Base UI and Radix | Styles that never apply |
| `import { motion } from "framer-motion"` | `"motion/react"` | A second copy of the library |
| `next build` route size table | Gone. It lists routes only | No warning about weight, see [Performance budgets](#performance-budgets) |

A new `next.config.ts` also sets `cacheComponents: true` and `partialPrefetching: true`. That changes one thing for you: routes are kept in React's `<Activity>`, covered under [Cleanup](#cleanup-and-strict-mode).

## Tokens

One file holds the system. The element chapters use nine names: `--bg`, `--surface`, `--ink`, `--ink-2`, `--ink-3`, `--line`, `--accent`, `--font-display` and `--font-text`. Keep those names, so any recipe from those chapters drops straight in. Then point shadcn's names at them, so kit components follow. Four layers do this.

```css
/* src/app/globals.css */
@import "tailwindcss";
@import "tw-animate-css";          /* only if the project uses shadcn */
@import "shadcn/tailwind.css";     /* only if the project uses shadcn */

@custom-variant dark (&:is(.dark *));

/* Layer 1: the system. Dealt values go here and nowhere else. */
:root {
  --bg: #...;  --surface: #...;
  --ink: #...;  --ink-2: #...;  --ink-3: #...;
  --line: color-mix(in srgb, var(--ink) 9%, transparent);
  --accent: #...;  --accent-ink: #...;
  --radius: 0.375rem;
}
.dark {
  --bg: #...;  --surface: #...;
  --ink: #...;  --ink-2: #...;  --ink-3: #...;
  --line: color-mix(in srgb, var(--ink) 14%, transparent);
  --accent: #...;  --accent-ink: #...;
}

/* Layer 2: shadcn's names, pointed at the system. Registry components read these. */
:root {
  --background: var(--bg);          --foreground: var(--ink);
  --card: var(--surface);           --card-foreground: var(--ink);
  --popover: var(--bg);             --popover-foreground: var(--ink);
  --primary: var(--ink);            --primary-foreground: var(--bg);
  --secondary: var(--surface);      --secondary-foreground: var(--ink);
  --muted: var(--surface);          --muted-foreground: var(--ink-2);
  --accent-kit: var(--surface);     --accent-kit-foreground: var(--ink);
  --destructive: #...;
  --border: var(--line);  --input: var(--line);  --ring: var(--accent);
}

/* Layer 3: utilities for anything that changes with the theme. */
@theme inline {
  --color-background: var(--background);   --color-foreground: var(--foreground);
  --color-card: var(--card);               --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);         --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);         --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);     --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);             --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent-kit);       --color-accent-foreground: var(--accent-kit-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);  --color-input: var(--input);  --color-ring: var(--ring);

  --color-ink: var(--ink);  --color-ink-2: var(--ink-2);  --color-ink-3: var(--ink-3);
  --color-line: var(--line);  --color-brand: var(--accent);  --color-brand-ink: var(--accent-ink);

  --font-display: var(--font-display);
  --font-text: var(--font-text);
  --font-sans: var(--font-text);
  --font-heading: var(--font-display);

  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 2);
}

/* Layer 4: the static scale. Plain @theme, because none of it changes with the theme. */
@theme {
  --text-display: 3.5rem;
  --text-display--line-height: 1.08;
  --text-display--letter-spacing: -0.02em;
  --text-display--font-weight: 400;

  --spacing-section: 6rem;
  --container-page: 72rem;
  --ease-settle: cubic-bezier(0.22, 1, 0.36, 1);
  --default-transition-duration: 200ms;
  --default-transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

@layer base {
  * { @apply border-border outline-ring/50; }
  html { @apply font-sans; }
  body { @apply bg-background text-foreground; }
}
```

The values in layer 4 are examples: take type and rhythm from your dealt system. Why it is built this way:

- **`--accent` means two different things.** In this skill it is the brand colour. In shadcn it is the faint tint behind a focused menu item, used by `focus:bg-accent` in every stock menu. Map brand onto shadcn's `--accent` and each hovered menu row turns solid brand. So the kit's meaning is renamed to `--accent-kit`, and the brand is exposed as `bg-brand`, `text-brand`. Registry components keep working, and your accent stays scarce.
- **`@theme` and `@theme inline` differ in one way.** Plain `@theme` writes `--color-x` onto `:root` and the utility reads that variable. `inline` writes the value straight into the utility: `.bg-b { background-color: var(--y) }`. Use `inline` for anything that points at another variable, so it resolves where it is used, including inside a nested `.dark` region. Use plain `@theme` for fixed values you want available as variables.
- **Only layer 1 changes between themes.** Everything else derives from it, so a theme is seven lines.
- **Keep dealt values in hex.** Stock shadcn tokens are `oklch`. The build rewrites those into hex plus `lab()` under `@supports`, which is harmless in a browser but breaks `shoot.mjs`'s contrast check. See [Verify](#verify).
- **Change `--spacing` only on purpose.** It is the multiplier behind every numeric utility, so `p-4` is `calc(var(--spacing) * 4)`. Moving it changes the density of the whole app in one line, which is occasionally just what you want.
- **Hover is already touch-safe.** Tailwind v4 wraps `hover:` in `@media (hover: hover)`, so you do not need the wrapper the motion chapters use in plain CSS.

Each namespace generates utilities, so a token is the way to teach Tailwind your system:

| Namespace | Gives you | Note |
|---|---|---|
| `--color-*` | `bg-`, `text-`, `border-`, `ring-` and more | `/80` opacity modifiers work on variables |
| `--font-*` | `font-display` | |
| `--text-*` | `text-display` | Add `--line-height`, `--letter-spacing` and `--font-weight` sub-keys and one class carries all four. `leading-*` and `tracking-*` still override it |
| `--spacing-*` | `py-section`, `gap-section` | Named steps beside the multiplier |
| `--container-*` | `max-w-page` | |
| `--radius-*`, `--shadow-*` | `rounded-*`, `shadow-*` | |
| `--ease-*` | `ease-settle` | |
| `--animate-*` | `animate-wipe` | Put `@keyframes` inside `@theme` |
| `--breakpoint-*` | `md:` and so on | |
| `--default-transition-duration` | Every `transition-*` utility | Stock is 150ms. The measured median on controls is 200ms |

**Remove the palette only on a fresh, kit-free project.** `--color-*: initial` deletes Tailwind's colours, so `bg-blue-500` no longer compiles, and a model cannot drift off the system. It is a strong guard. It also deletes `white` and `black`: `text-white` and `bg-black/10` stop generating, with no error, and stock shadcn's dialog scrim is `bg-black/10`. In a shadcn project, keep the palette and keep yourself honest.

## shadcn

### What stock is today

`npx shadcn@latest init -d` writes a `base-nova` style on Base UI with a neutral base colour, Lucide icons, Geist through `next/font`, and `--radius: 0.625rem`. Other bases (`radix`, `aria`) and styles (nova, vega, maia, lyra, mira, luma, sera, rhea) exist. A preset is someone else's set of defaults, so choosing a different one is not a decision about your brand.

Every component is copied into `components/ui/`. Those are your files, and editing them is the intended way to use the kit, so do not wrap them in a second layer of components.

### What the default gives away

No single value marks a page as kit. Geist is in the top two families on 7% of gold sites, and it is a fine typeface. Pure grey ink is on 64% of gold sites, so stock's zero chroma is not the problem either, and you should not tint your neutrals just to look different. The giveaway is the set of decisions arriving together, unchanged, on every element.

| Part | Stock | Top sites | Decide |
|---|---|---|---|
| Button height | `h-8`, 32px | 63% are 40px or taller, 7% exactly 32. Gold median 40 | Marketing 36 to 44. Keep 32 in dense apps |
| Button padding | `px-2.5`, 10px | Median 16, 12 to 20 | Scale with the height |
| Radius | 10px on Button, Input and Tabs | 10px is on 4% of buttons. 0, 4, 8 and pills are all commoner | Choose from `elements/surface.md`, then nest |
| Card | `rounded-xl`, `ring-1 ring-foreground/10`, 16px padding, 14px text | Gold large radius 12, 8 to 20 | Pick one device per boundary. Often no card |
| Focus | `ring-3 ring-ring/50` | | A 2px outline with an offset reads as sharper |
| Hover | `hover:bg-primary/80` | 77% of main CTAs that change do so by fill, median 200ms | A chosen tone step or the brand colour, not an 80% wash |
| Transition | `transition-all` on Button, Tabs and Badge | | `transition-colors`. `all` also fights GSAP |
| Overlay | `bg-black/10` plus backdrop blur, `zoom-in-95` | Blur is rare on top sites | Remove the blur. Tint the scrim from `--ink` |
| Tabs | Grey pill tray | | `variant="line"` is built in |
| Display type | Same family as body, via `--font-heading` | | The dealt display face |

Measured across 2,875 buttons on 341 gold and silver sites, not one has the current stock size and radius together (32px, 14px, weight 500, 10px padding, 10px radius). Not one has the earlier stock size (36, 14, 500, 16) with a 6 to 10px radius. Four sites do use that earlier size, and each changed the radius: Expo to a 36px pill, ClickHouse to 4px, Render to 2px, a museum site to 0. Render's near-square black buttons show how little it takes: same dimensions, different product. Likewise, counting sites with two or more stock Tailwind neutrals among their top eight fills and text colours gives 0 of 147 gold, 23 of 369 silver.

Reading real pages sharpens this. Cal.com's card warns that without its display face the pricing page would fall into a default shadcn template, and that is accurate: remove the type and only near-stock neutrals are left. Dub's pricing page, one of the silver sites with stock neutrals, stays above template on page rails, product-coloured icons and exact tables. egghead, a reject, was rejected as stock Tailwind treatment. And GPT-6's baseline dashboard, which uses no kit at all, comes out as white hairline cards with soft shadows, one radius and a purple accent, so avoiding the package does not avoid the look. Deciding does.

### Three depths

Choose how far to go. The right depth depends on the job, and going deeper is not always better.

| Depth | What you change | Use it for |
|---|---|---|
| Tokens only | `globals.css`, fonts | A screen inside an existing product, an internal tool |
| Tokens and components | Plus edits to `components/ui/*` | A new product or brand built on shadcn |
| Primitives only | Marketing sections are plain markup. shadcn appears only for Dialog, Dropdown, Select, Accordion | Landing pages |

Primitives-only is the right default for a landing page. A nav, hero, feature section, pricing table and footer need no kit, and that is where the kit's composition would otherwise show. Reach for a primitive where accessibility is hard to get right: focus trapping, menus, listboxes. Tabs and Dialog together cost 42 kB. Treat registry blocks the same way. They are useful for wiring, such as sidebar collapse and keyboard behaviour, but pasting one in brings the kit's layout with it.

### Restyle order

Work from what the most screens share, because each step makes the next one smaller.

1. **Tokens and fonts.** This moves every component at once, and replaces Geist with the dealt family.
2. **Button.** It is on every screen and is the first thing judged.
3. **Input, Select and Textarea, together.** They sit beside buttons, so they share height, radius and focus style.
4. **Card, or delete it.** Read `elements/surface.md` first. Many sections need no box at all.
5. **Overlays, as one recipe.** Dialog, Sheet, Popover and Dropdown should share a surface, a shadow and a scrim. Change them together.
6. **Tabs, Badge, Accordion.**
7. **Table and Sidebar,** when the product is an app.

Stock density suits a dense app. For a dashboard, 32px controls and 14px text are defensible, so spend your effort on surfaces and data, and do not simply scale everything up.

### Before and after

Button, for a marketing page with near-square corners. Dropping the press nudge is a choice, and keeping it is fine too.

```diff
- rounded-lg ... transition-all outline-none ...
-   focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50
-   active:not-aria-[haspopup]:translate-y-px
+ rounded-md ... transition-colors outline-none ...
+   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring

- default: "bg-primary text-primary-foreground hover:bg-primary/80"
+ default: "bg-primary text-primary-foreground hover:bg-brand hover:text-brand-ink"

- size default: "h-8 gap-1.5 px-2.5 ..."
+ size default: "h-10 gap-2 px-4 ..."
```

Give Input the same height, radius and focus, or the form will drift. Card, as a tonal panel with one boundary device:

```diff
- rounded-xl bg-card ... ring-1 ring-foreground/10 [--card-spacing:--spacing(4)]
+ rounded-xl bg-card ... [--card-spacing:--spacing(6)]
```

### Composing correctly

- **A link that looks like a button.** Use `<Link className={buttonVariants()}>`. It renders a plain `<a>`. The alternative, `<Button render={<Link />} nativeButton={false}>`, renders `<a role="button">`, which tells screen readers a navigation link is a button.
- **A trigger built from your Button.** `<DialogTrigger render={<Button variant="outline" />}>` on Base UI, `asChild` on Radix. Read the installed `dialog.tsx` to see which you have.
- **Server pages can use Button.** Its file has no `"use client"`, and Base UI brings its own boundary. `buttonVariants()` can be called on the server.
- **State styles.** Use `data-open:`, `data-active:` and `data-checked:`, which `shadcn/tailwind.css` defines for both primitive libraries.
- **Do not overwrite your edits.** `shadcn add` skips identical files. Avoid `--overwrite` once you have restyled, and use `shadcn add button --diff` to look at upstream changes.
- **Icons.** Import each Lucide icon by name. A thinner stroke, such as `[&_svg]:stroke-[1.5]`, is a quick way to step away from the stock weight. Read `elements/media.md` before choosing a set.

## Fonts

Fonts are where the sampler's work gets lost. `init` writes Geist into `layout.tsx`, the model builds on it, and the deal never reaches the page. Change this first.

Gold and silver sites load a median of two families across four font files (two to six), and 84% of those files are woff2. Stay inside that.

| The dealt font comes from | Route |
|---|---|
| Google, with fallback metrics | `next/font/google` |
| Google, and the build warns `Failed to find font override values` | `next/font/local` with the latin woff2 |
| Fontshare, a foundry, or the client's licence | `next/font/local` |
| A plain site | `@font-face`, preload, metric fallback |
| Vite | `@fontsource-variable/<family>`, or `@font-face` |

### Next

```tsx
// src/app/layout.tsx
import localFont from "next/font/local";
import { Family_Name } from "next/font/google";   // the dealt family, spaces become underscores
import "./globals.css";

const display = localFont({
  src: "../fonts/display-variable.woff2",
  weight: "200 700",                              // the file's real range, or weights get clamped
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: "Times New Roman",          // for a serif. The default is Arial
});
const text = Family_Name({ subsets: ["latin"], variable: "--font-text", display: "swap" });

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- **Keep the classes on `<html>`.** Tailwind's theme layer defines `--font-display` too, and the unlayered next/font class on the root element is what wins.
- **Name the variables `--font-display` and `--font-text`,** so element-chapter recipes work unchanged.
- **Variable Google fonts need no `weight`.** Static ones do.
- **Extra axes are opt-in.** `axes: ["wdth"]` adds them, and only `wght` is included by default. `data/fonts.jsonl` lists each family's axes, and 79 of its 521 families have one beyond weight. Each axis adds bytes, so include one only if you use it.
- **`preload: false`** on a face that is not on the first screen, such as a mono used only in code samples.

### The missing fallback

`next/font` prevents layout shift by generating a fallback face matched to the real font's metrics. For Google fonts it looks these up in a table, and newer families are not in it. The build prints one warning, skips the fallback and carries on. 68 of the 489 Google families in `data/fonts.jsonl` have no entry (14%). Adding the 7 Fontshare families, 14 of the 53 families used by our type systems need the local route.

So read the build output. `next/font/local` computes metrics from the file itself, which fixes this. To get a Google family's latin file:

```bash
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36'
curl -s -A "$UA" 'https://fonts.googleapis.com/css2?family=Family+Name:wght@200..900&display=swap' > font.css
awk '/\/\* latin \*\//{f=1} f&&/src:/{print;exit}' font.css | grep -o 'https://[^)]*woff2' | xargs curl -so src/fonts/family-latin.woff2
```

The user agent matters, because Google serves older formats to clients it does not recognise. For Fontshare, the `css` URL in `data/fonts.jsonl` lists the woff2 URL, which needs `https:` added at the front.

### Plain sites

Do by hand what `next/font` does: self-host, preload what the first screen uses, and match the fallback.

```html
<link rel="preload" href="/fonts/display.woff2" as="font" type="font/woff2" crossorigin>
```

```css
@font-face {
  font-family: "Display"; src: url(/fonts/display.woff2) format("woff2");
  font-weight: 200 700; font-display: swap;
}
@font-face {
  font-family: "Display Fallback"; src: local("Times New Roman");
  size-adjust: 122.98%; ascent-override: 78.06%; descent-override: 26.02%; line-gap-override: 6.51%;
}
:root { --font-display: "Display", "Display Fallback", serif; }
```

`crossorigin` is required even on your own domain, because fonts load in CORS mode, and without it the preload is wasted and the file downloads twice. Those four numbers belong to one specific font, so generate your own. This script reproduces `next/font`'s output to two decimals:

```python
# pip install fonttools brotli
# python3 fallback.py font.woff2 "Arial"     or "Times New Roman" for a serif
import sys
from fontTools.ttLib import TTFont
BASE = {"Arial": 934.5116 / 2048, "Times New Roman": 854.3953 / 2048}
SAMPLE = "aaabcdeeeefghiijklmnnoopqrrssttuvwxyz      "       # weighted for letter frequency and word length
f = TTFont(sys.argv[1]); upm = f["head"].unitsPerEm; h = f["hhea"]; cmap = f.getBestCmap(); w = f["hmtx"]
size = sum(w[cmap[ord(c)]][0] for c in SAMPLE) / len(SAMPLE) / upm / BASE[sys.argv[2]]
print(f"size-adjust:{size:.2%}; ascent-override:{h.ascent/upm/size:.2%}; "
      f"descent-override:{-h.descent/upm/size:.2%}; line-gap-override:{h.lineGap/upm/size:.2%};")
```

### Subsetting and axes

```bash
pyftsubset font.woff2 --flavor=woff2 --layout-features='*' --output-file=latin.woff2 \
  --unicodes='U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
```

`--layout-features='*'` keeps kerning, ligatures and tabular figures, which the default set can drop. Sites with non-English copy need their own ranges, and `next/font` handles those through `subsets`.

Numbers from one 51 kB variable serif:

| Version | Size |
|---|---|
| Original | 50.6 kB |
| Subset to latin | 40.2 kB |
| Subset, weight axis limited to 300 to 500 | 43.8 kB |
| Subset, single static weight | 17.3 kB |

Narrowing an axis saved nothing, so do not spend time on it. Removing it did. If the page truly uses one weight, a static cut is less than half the size, and from about three weights a variable file wins. The median variable family in the deck is 40 kB for latin. Pin a weight with `fonttools varLib.instancer font.woff2 wght=400 -o static.ttf`, then subset.

Use one optical size axis well before adding a second family. Check `shoot.mjs`'s `fonts:` line every time, because a font that failed to load looks almost right.

## Images

`next/image` gives you sizing, modern formats and lazy loading, but only if the box is reserved. Blue Bottle's first load frame shows why that matters: the hero photo has not arrived, yet the nav, headline, button and everything below are already in their final places, so the image lands in a waiting box and nothing moves.

```tsx
import Image from "next/image";
import shop from "@/assets/shop.jpg";                  // static import: size and blur come for free

<div className="relative aspect-[16/8] overflow-hidden rounded-xl bg-muted">
  <Image src={shop} alt="The bench at the workshop" fill preload placeholder="blur"
    sizes="(min-width: 1200px) 1152px, 100vw" className="object-cover" />
</div>
```

- **`fill` needs a positioned parent with a real ratio,** and that parent's `aspect-*` is what reserves the space.
- **Always pass `sizes` with `fill`.** Without it the browser assumes the image spans the viewport and downloads something far too large for a thumbnail. This is the commonest wasted weight on a Next site.
- **One first-screen image gets `preload`.** It writes a `<link rel="preload">` with the whole `srcset`. Next's docs suggest `loading="eager"` or `fetchPriority="high"` in most other cases, and warn against `preload` when different images can be the largest element at different widths. Everything below the fold stays lazy by default.
- **Quality is an allowlist.** `images: { qualities: [75, 90] }` before `quality={90}` has any effect. The default 75 is fine for most photos. A 66 kB JPEG came out as a 34 kB WebP at 1920 wide.
- **Remote images** need `images.remotePatterns`. Add `formats: ["image/avif", "image/webp"]` if you want AVIF, which is smaller and slower to encode.
- **Skip `next/image` for SVG, logos, and small icons.** Use `<img>` or inline SVG. `next/image` does not rasterise SVG, and optimising it needs `dangerouslyAllowSVG`.
- **Do not blur transparent cut-outs.** The placeholder fills the whole box. Use a matching `bg-*` instead, or `placeholder="empty"`.
- **Different crops per device or theme:** `getImageProps()` with `<picture>`, described in the image API docs. Do not swap on `useEffect`, which flashes.
- **Product shots built in HTML need none of this.** Read the foundations of `elements/product.md` first. Many frames should be real interface, not images.

`output: "export"` has no image server, so it needs `images.unoptimized` or a custom loader. On Vite or plain HTML, write `<img>` with `width` and `height`, plus `srcset` and `sizes`, because those attributes are what reserve the box.

## Dark mode

First decide whether the page needs a toggle at all. Most marketing pages commit to one ground, and the sampler deals one. A dark register is a design decision. A toggle is a feature with a maintenance cost, since every image, shadow and screenshot needs checking twice.

| Need | Do this | Cost |
|---|---|---|
| One theme | Delete the `.dark` block and the provider | None, and flash is impossible |
| Follow the OS, no control | Put the dark values in `@media (prefers-color-scheme: dark)`, and set `color-scheme: light dark` | No JavaScript |
| Toggle in a shadcn project | next-themes, already installed by `init` | About 1.5 kB, and a provider |
| Toggle with no dependency | The inline script below | A few lines |
| The server must know the theme | Read a cookie in the inline script. Calling `cookies()` in the root layout loses static rendering for the whole app | |

Why flash happens: the server does not know the preference, so it sends a default, and anything that corrects this in `useEffect` runs after paint. `useLayoutEffect` is still too late on a slow connection, because the HTML paints before React arrives. Only a script that runs during HTML parsing, before first paint, can prevent it.

### With next-themes

```tsx
// components/theme-provider.tsx
"use client";
import type { ComponentProps } from "react";
import { ThemeProvider as NextThemes } from "next-themes";
export function ThemeProvider(props: ComponentProps<typeof NextThemes>) { return <NextThemes {...props} />; }
```

```tsx
// layout.tsx
<html lang="en" suppressHydrationWarning className={...}>
  <body>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  </body>
</html>
```

`suppressHydrationWarning` is needed because the library changes `<html>` before React arrives, and it applies to that one element only. `disableTransitionOnChange` stops every colour easing at once when the theme flips, which otherwise looks like a slow fade across the page. `attribute="class"` matches the `dark` custom variant.

Do not read the theme to choose what to render, because the server cannot know it and that is a hydration mismatch. Render both versions and let CSS pick. That removes the usual `mounted` state:

```tsx
<Button variant="ghost" size="icon" aria-label="Toggle colour theme"
  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
  <SunIcon className="hidden dark:block" />
  <MoonIcon className="dark:hidden" />
</Button>
```

### With no dependency

This works in a Next `<head>` through `dangerouslySetInnerHTML`, or directly in a plain page:

```html
<script>
(function(){try{var s=localStorage.getItem('theme');
var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.classList.toggle('dark',d)}catch(e){}})()
</script>
```

Add `color-scheme: light` and `dark` on the two themes so scrollbars and form controls follow. In Next, keep `suppressHydrationWarning` on `<html>`. Next's docs warn that in development a Strict Mode remount strips attributes a script set on `<html>`, so re-apply in a `useLayoutEffect` if a dev server loses the theme. Production is unaffected. A strict Content Security Policy blocks inline scripts unless you use a nonce.

Dark values are not the light values inverted. Border alpha rises (gold light precision 0.07, dark precision 0.10), and shadows mostly stop working, so depth moves to tone steps. Shoot both themes.

## Server and client components

Keep sections as Server Components, and put motion and interaction in small client leaves. `"use client"` marks a boundary: that file and everything it imports join the browser bundle. A section passed in as `children` does not, because it is rendered on the server and arrives as finished output. That is what lets one small wrapper animate a large server-rendered section.

```tsx
// Before: the whole page becomes client code, so all its copy and components ship as JavaScript.
"use client";
export default function Page() { return <motion.main ...><Hero /><Pricing /></motion.main>; }
```

```tsx
// After: the page and sections stay on the server. Only the wrapper is client code.
import { Reveal } from "@/components/motion/reveal";
export default function Page() { return <main><Hero /><Reveal><Pricing /></Reveal></main>; }
```

| You want | Server Component | Client leaf |
|---|---|---|
| Transitions, CSS keyframes, scroll-driven CSS | Yes | |
| `animate` with plain values, through `motion/react-client` | Yes | |
| `useAnimate`, `useInView`, `useGSAP`, any handler or state | | Yes |
| A function prop such as `onAnimationComplete` | Not across the boundary | Yes |

`import * as motion from "motion/react-client"` lets a Server Component render a motion element with no directive of its own. It is convenient for simple cases, and it has the same trap as every `initial`, covered next. Props that cross the boundary must be serialisable, so plain objects are fine and functions are not. Context providers need a client wrapper that takes `children`, like the theme provider above, and they should sit as deep in the tree as they can.

## Motion in React

Read `references/motion/foundations.md`, Recipes 1 and 12, first. Everything there still applies: one engine per element, never GSAP and Motion on one page, content complete before anything moves. What the stack adds is hydration. On a server-rendered page there is a gap between first paint and JavaScript being ready, and this creates three problems: content can be invisible if JS fails, a flash can occur when JS arrives, and animation can start late.

### The trap in `initial`

Motion renders `initial` into the server HTML. This component:

```tsx
<motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>...</motion.h1>
<motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>...</motion.p>
```

ships this, captured from a production build:

```html
<h1 style="opacity:0;transform:translateY(24px)">...</h1>
<p style="opacity:0">...</p>
```

If the bundle is blocked, slow or throws during hydration, the page is blank. Screen scrapers see nothing either. This is the standard snippet in every tutorial and the one a model will write without thinking, so do not use `initial` to hide content that matters. It stays fine for things that only exist after interaction, such as a dialog, a toast or a list item being added, because no server HTML is involved.

### Four routes

Pick per moment, cheapest first. The kB figures are measured on top of a Next page.

| Route | Starts at | Added | If JS fails | Use for |
|---|---|---|---|---|
| CSS keyframes | First paint | 0 | Plays normally | Most first screens |
| Reveal with `motion/react-mini` | Scroll into view | 4.3 kB | Content stays visible | Below the fold, sparingly |
| Gate and GSAP | Hydration and fonts | 48 kB | Watchdog shows it within 2 s | A composed hero, SplitText, pins, scrub |
| Motion components | Hydration | 31 to 52 kB | Depends on `initial` | Layout, exit and gestures in product UI |

Or no entrance at all. Foundations calls this "no hold": the first screen is simply there, and motion begins with scroll. It is the right choice for reading-first sites and it is fast.

### Route 1: CSS keyframes

Since keyframes ship in the stylesheet, they start at first paint, with no wait for hydration and nothing that can strand. On a server-rendered page this often beats a JavaScript intro on timing as well as on cost.

```css
@theme {
  --animate-wipe: wipe 1.1s var(--ease-settle) both;
  --animate-fade: fade .6s linear .5s both;
  @keyframes wipe { from { clip-path: inset(-20% 100% -20% 0%); } to { clip-path: inset(-20% 0% -20% 0%); } }
  @keyframes fade { from { opacity: 0; } }
}
```

```tsx
<h1 className="motion-safe:animate-wipe">...</h1>
<p className="motion-safe:animate-fade">...</p>
```

The lead wipes and the follower only fades, so the two have different roles. `motion-safe:` wraps the class in `prefers-reduced-motion: no-preference`, so reduced motion gets the finished page. Swap these beats for your signature (`foundations.md`, Recipe 8).

### Route 2: gate and GSAP

This is Recipe 1 from foundations, ported. It has three parts. The server HTML stays complete: `data-hold` hides content only after the inline script has run.

```tsx
// layout.tsx: inside <html suppressHydrationWarning>, which is needed because this script changes its class
const gate = `(function(h){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;h.classList.add('motion-pending');window.motionWatchdog=setTimeout(function(){h.classList.remove('motion-pending');h.classList.add('motion-late')},2000)})(document.documentElement)`;

<head><script dangerouslySetInnerHTML={{ __html: gate }} /></head>
```

```css
.motion-pending [data-hold] { visibility: hidden; }
```

```tsx
// components/motion/hero-motion.tsx
"use client";
import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);                       // and ScrollTrigger, SplitText, once, at module level

declare global { interface Window { motionWatchdog?: ReturnType<typeof setTimeout> } }

export function HeroMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP((_ctx, contextSafe) => {
    const h = document.documentElement;
    let live = true;
    const start = contextSafe!(() => {              // created after an await, so it must be context-safe
      if (!live) return;
      clearTimeout(window.motionWatchdog);
      if (h.classList.contains("motion-late")) return;
      h.classList.add("motion-on");
      try {
        gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
          gsap.timeline()
            .fromTo("[data-lead]", { clipPath: "inset(-20% 100% -20% 0%)" },
              { clipPath: "inset(-20% 0% -20% 0%)", duration: 1.1, ease: "expo.inOut", clearProps: "clipPath" })
            .from("[data-follow]", { opacity: 0, duration: 0.6, ease: "none" }, 0.5);
        });
      } catch (err) { console.error(err); h.classList.remove("motion-on"); }
      h.classList.remove("motion-pending");
    });
    document.fonts.ready.then(start);
    return () => { live = false; };
  }, { scope: root });

  return <div ref={root}>{children}</div>;
}
```

```tsx
// sections/hero.tsx: a Server Component
<HeroMotion>
  <h1 data-hold data-lead className="font-display text-display">{site.headline}</h1>
  <p data-hold data-follow className="text-ink-2">{site.sub}</p>
</HeroMotion>
```

**To run any recipe from `references/motion/`,** put its body where the timeline sits, inside the `matchMedia` branch, and let `scope` resolve its selectors. Import from npm rather than the CDN table, and use one version of GSAP across plugins. The GSAP plugins live at `gsap/ScrollTrigger`, `gsap/SplitText` and so on, and all are free.

**The price is real, so hold as little as you can.** A CDN gate fails fast, because the engine is simply undefined and the catch lifts it. In a bundle, a blocked script means nothing runs at all, so the 2 second watchdog is the only release. Hold only the lead and support, leave the nav and image visible, and if the first screen must never wait, use Route 1. With JavaScript off the inline script does not run, so nothing is held.

### Route 3: Reveal

A reveal that never hides anything on the server, for below the fold. Use it on the few things that should arrive, not on every block.

```tsx
// components/motion/reveal.tsx
"use client";
import { useEffect, useLayoutEffect, type ReactNode } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { useAnimate } from "motion/react-mini";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  useLayoutEffect(() => {                           // script writes the start state, so no JS means no hiding
    const el = scope.current;
    if (reduce || !el || el.getBoundingClientRect().top < innerHeight) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
  }, [reduce, scope]);

  useEffect(() => {
    if (inView && scope.current?.style.opacity === "0") {
      animate(scope.current, { opacity: 1, transform: "translateY(0px)" }, { duration: 0.7, ease: [0.22, 1, 0.36, 1] });
    }
  }, [inView, animate, scope]);

  return <div ref={scope} className={className}>{children}</div>;
}
```

The position check skips anything already on screen at hydration, which would otherwise flash away and back after a reload partway down the page. `motion/react-mini` is 4 kB because it drives the browser's own animation engine, and the full `useAnimate` from `motion/react` costs 31 kB. A `useInView` import adds under 1 kB, since it tree-shakes. For scroll-linked effects, `animation-timeline: view()` (`foundations.md`, Recipe 11) is free.

### Route 4: Motion components

Motion is the right tool where animation follows component state: a list reordering, a panel resizing, a dialog with an exit, a drag.

```tsx
"use client";
import { AnimatePresence, motion } from "motion/react";

<AnimatePresence>
  {open && <motion.div key="panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}
</AnimatePresence>
```

`initial` is safe here because the panel is not in the server HTML. `layout` and `layoutId` give you the FLIP animations that are slow to write by hand. `LazyMotion` with `m` from `motion/react-m` and `domAnimation` saves about 15 kB (36.7 against 51.5), which is worthwhile if a whole product uses it and not worth the ceremony on a landing page. `MotionConfig reducedMotion="user"` near the root makes transforms respect the OS setting. Check `useReducedMotion()` where you branch by hand.

### Route changes

Use React's `<ViewTransition>` before reaching for an exit animation library. Next's App Router treats navigations as transitions, so wrapping a thumbnail and its destination in `<ViewTransition name={...}>` morphs one into the other with no configuration and no exit bookkeeping. Without browser support, the page simply changes. See `node_modules/next/dist/docs/01-app/02-guides/view-transitions.md` and `references/motion/transitions.md`. We confirmed that React 19.3 exports it but did not run it in a browser.

### Cleanup and Strict Mode

Development runs every effect twice, on purpose, to expose cleanup bugs. Anything that leaks there leaks in production on navigation.

- **`useGSAP` reverts what it records:** tweens, timelines, ScrollTriggers, SplitText and `gsap.matchMedia()` created inside its callback, including their inline styles. Use it in preference to `useEffect` and `gsap.context()`.
- **Anything created later is not recorded by default.** Wrap handlers and async callbacks in `contextSafe`. The `fonts.ready` wait above is the common case. The `live` flag stops a stale callback after unmount.
- **Listeners you add yourself** need a returned cleanup function.
- **`scope` keeps selectors inside the component.** Without it `gsap.from("h1")` hits the whole document.
- **Never leave `transition-all` on a GSAP target.** Stock Button, Badge and Tabs have it, and a CSS transition will chase every tween frame (`foundations.md`, Recipe 12). Change it to `transition-colors` or wrap the element.
- **Do not put `transition` on `<html>` or `*`** when you use `disableTransitionOnChange`.
- **SplitText** replaces the element's children, which React owns. Create it in the effect and let the context revert it. On a server page this still means the server HTML is the unsplit text, which is what you want.
- **Under Cache Components, routes live in `<Activity>`.** Next's docs say effects are cleaned up when a route is hidden and recreated when it returns, while state and refs survive. An intro written in an effect will therefore replay on Back. Guard it: `const played = useRef(false)`, return early if set, and set it in the timeline's `onComplete`, not at the start, or Strict Mode's double run will skip the animation in development. We read this in the docs and did not test it in a browser.

## Hydration faults

Hydration means React repeats the render in the browser and expects the same output. When the output differs, it throws away the server work or leaves a flash. Generated pages hit a few of these constantly, because realistic data tempts you into non-deterministic code.

| Cause | Typical case | Fix |
|---|---|---|
| `Math.random()` in render | Generated chart data, mock sparklines | Fixed arrays in `content/`. Seed it if you must generate |
| `Date.now()`, `new Date()` | "Updated 2 minutes ago" | A fixed value for a mock, or a client leaf after mount |
| Locale formatting with no locale | `n.toLocaleString()` | `Intl.NumberFormat("en-US")`, always with a locale |
| `typeof window` in render | Different markup per side | CSS, or a client leaf after mount |
| Invalid nesting | `<div>` inside `<p>`, `<a>` inside `<a>` | Fix the markup. The browser repairs it and the trees differ |
| Theme or preference in render | Icon chosen by theme | Render both, let CSS choose |

Keep mock product data as literal values. It looks real, it renders the same everywhere, and it satisfies the skill's rule that the frames hold something specific. To catch locale bugs early, run `TZ=UTC LANG=ja_JP.UTF-8 next dev`, as Next's docs suggest.

## File structure

A small landing page needs very little. Keep the shape that makes each thing findable.

```
src/
  app/
    layout.tsx       fonts, <html>, gate script, providers, metadata
    page.tsx         the order of the sections, and nothing else
    globals.css      the four token layers, a few base rules
  content/
    site.tsx         all copy, prices, hours, mock product data
  components/
    sections/        nav.tsx  hero.tsx  features.tsx  pricing.tsx  faq.tsx  footer.tsx
    motion/          hero-motion.tsx  reveal.tsx      the only client code on the page
    ui/              shadcn files, edited in place, only the ones in use
  assets/            imported images, so next/image knows their size
  fonts/             woff2 for next/font/local
```

- **`page.tsx` reads like the page score.** Seven imports and seven tags. If it has logic, that belongs in a section.
- **Content sits apart** because the skill writes copy first, and it makes real data easy to find and swap. Use `.tsx` and not `.ts`: `lint.mjs` reads visible copy only from markup files, so generic phrases in a `.ts` file pass unseen.
- **One file per section** matches how you will critique it, and lets several agents work at once.
- **`motion/` holds every `"use client"` that exists for animation.** A glance at the folder tells you what the page ships.

Do not add `hooks/`, `types/`, `constants/` and `utils/` folders to a page that has nothing to put in them.

## Performance budgets

The corpus does not support the claim that top sites are light. Decoded CSS and JavaScript across a full scroll, third-party tags included:

| Group | Median | Middle half | Requests, median |
|---|---|---|---|
| Gold | 4.2 MB | 2.2 to 6.9 | 147 |
| Silver | 3.6 MB | 1.8 to 7.2 | 105 |
| Reject | 2.2 MB | 1.3 to 5.2 | 78 |
| Gold and silver on Next | 5.7 MB | 3.5 to 9.3 | |
| Gold and silver on Framer | 2.2 MB | 1.6 to 3.6 | |
| Gold and silver on Shopify | 12.4 MB | 8.1 to 18.4 | |

Weight does not separate the tiers, and if anything runs the wrong way. A Next page can still be small: Elisa Breyer Archive 0.47 MB, Roy Jad 0.64, Paco Coursey 0.73. So a byte budget will not make a page feel expensive. What does is the first second: the page arrives complete, in its final position, and responds at once. Spend your budget protecting that.

What things cost on Next, gzipped, as measured on a production build. A modern browser needs 137 kB before you add anything. There is also a 39 kB `noModule` polyfill that modern browsers skip.

| Added to the page | kB |
|---|---|
| `useAnimate` from `motion/react-mini`, with `useInView` | 4.3 |
| `useAnimate` from `motion/react` | 31.2 |
| `LazyMotion`, `m`, `domAnimation` | 36.7 |
| shadcn Tabs and Dialog | 42.0 |
| GSAP, ScrollTrigger, SplitText, `useGSAP` | 48.0 |
| A `motion` component | 51.5 |

Budgets for a landing page. The motion, shift and first-screen lines come from `foundations.md`. The others are our judgement, since the corpus does not measure them.

| Budget | Limit |
|---|---|
| Motion libraries | 60 kB, one engine |
| Primitives and client components | About 45 kB |
| Layout shift | 0 |
| Readable first screen, worst case | 2.5 s |
| Fonts | Two families, four files, about 120 kB |
| First-screen image | About 200 kB at 1920 wide, one preload |
| Third-party tags | After load: `next/script` with `strategy="lazyOnload"` |

`next build` no longer prints route sizes, so measure against a running production server. The sum below includes the polyfill.

```bash
curl -s localhost:3100/ | grep -o '/_next/static/[^"\\]*\.js' | sort -u \
  | while read f; do curl -s "localhost:3100$f" | gzip -9 | wc -c; done | paste -sd+ - | bc
```

What keeps a page feeling expensive, in order of how much it costs when it goes wrong:

- **Nothing moves after paint.** Boxes reserved for images, a metric-matched fallback for fonts, no banner pushing the page down.
- **Text is there at once,** unless you held it on purpose, and then only briefly.
- **Controls respond in one frame.** Hover and press belong in CSS, which has no hydration gap. A button that ignores you until JavaScript loads feels broken.
- **Animate `transform`, `opacity` and `clip-path`.** Blur under 25% of the viewport, and off on phones.
- **Keep `"use client"` at the leaves.** It is the single most effective bundle control you have.

## Verify

`shoot.mjs` takes a URL. Folder mode serves static files, so it cannot run a Next app.

```bash
node_modules/.bin/next dev -p 3100 &  DEV=$!
curl -s -o /dev/null localhost:3100/            # compile first, or the load strip shows the compile
node <skill-dir>/scripts/shoot.mjs http://localhost:3100/ --out .shots --wait 3500
node <skill-dir>/scripts/lint.mjs src
kill $DEV                                       # your own process, by its PID
```

Add `devIndicators: false` to `next.config` so the dev badge stays out of your frames, and `.shots` to `.gitignore`. Without `--out`, shots go to `./.shots`. Shoot each route you built, not only `/`.

**Use dev and production for different questions.** A dev server shows hydration errors, which production hides, so run the sheet there while building. Dev also double-runs effects and can drop `<html>` attributes, so judge the load strip and all weight on a production build: `next build`, then `next start -p 3100`, then the same shoot command.

**Reading the report on a stack page:**

- **`console errors`** is your hydration check. The expected number is 0.
- **`text never visible while scrolling`** and **`under prefers-reduced-motion`** are your motion gating checks. Both must be 0.
- **`fonts:`** should name your dealt families. The names may look odd, since `next/font/local` can report a family named after your variable, such as `display`. What matters is the absence of `NOT LOADED`.
- **`low-contrast text runs`** can be a false alarm. The check parses computed colours as sRGB numbers, so `oklch()` and `lab()` values produce nonsense. On our proof it reported 1.5:1 for text whose real ratio was about 17:1. Ratios clustered between 1.0 and 1.5 on clearly legible text are this bug. Hex tokens compute to `rgb()`, which it reads correctly, which is one more reason to keep them.
- **The sheet comes out in your host's colour scheme** when the theme is `system`. Shoot the other one too: `--eval "document.documentElement.classList.toggle('dark')" --name other-theme`.
- **Overlays are closed at load.** Open one to see it: `--eval "document.querySelector('[data-slot=dialog-trigger]').click()" --name dialog`.

**Check that the page survives without JavaScript, with no browser at all:**

```bash
curl -s localhost:3100/ | grep -c 'opacity:0'
curl -s localhost:3100/ | sed 's/<script.*//' | grep -o '<h1[^>]*>[^<]*'
```

The first should be 0 for anything that is real content, and the second should print your headline. This takes a second and catches the `initial` trap on any page.

`lint.mjs` scans everything under the path and skips `node_modules` and dot folders such as `.next`. Run it on `src`, not on a single folder, or `no motion at all` fires because your motion lives elsewhere. `transition-all` as a class is not one of its checks, so grep for that yourself after restyling.

## Before you call it done

- `next/font` or `@font-face` loads the dealt families, and nothing still says Geist unless you chose it.
- The build log has no `Failed to find font override values`.
- No raw hex or stock colour in a component. Every value comes through a token.
- Button, Input and Select share height, radius and focus style. Hover answers in about 200ms.
- No `transition-all` remains on anything GSAP touches.
- The brand colour reaches `--color-brand`, and menus still use the quiet kit tint.
- Links are `<a>`, buttons are `<button>`, and no `<a role="button">` navigates.
- Every image has a reserved box and `sizes`. One image is preloaded.
- `curl` shows the headline in the HTML, with no `opacity:0` on content.
- `console errors`, hidden text and reduced-motion hidden text are all 0.
- Both themes are shot, or the page has one theme on purpose.
- `"use client"` appears on leaves only. `page.tsx` and sections are server code.
- Route weight is measured on a production build.
