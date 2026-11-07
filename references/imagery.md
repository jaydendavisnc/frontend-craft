# Imagery

Read this before reaching for any image. It covers how to get images and what to do when you can't. For what good images look like, and for each treatment's recipe, use `elements/media.md`. Start with its six-line contract, because every route below depends on it.

**Contents.** [Find your route](#find-your-route) · [With image generation](#with-image-generation) · [Render your own set](#render-your-own-set) · [Without image generation](#without-image-generation) · [Real photos from the web](#real-photos-from-the-web) · [Plans by business](#plans-by-business) · [Finishing a set](#finishing-a-set) · [Before you ship](#before-you-ship)

## Find your route

Check what you actually have. Do not assume either way.

1. **The client supplied assets.** Use them, and ask for what is missing in your closing note.
2. **You have an image generation tool.** Use it for anything physical. Go to [With image generation](#with-image-generation).
3. **You can run a 3D renderer.** Look for Blender before you give up on photography (`/Applications/Blender.app`, or `blender` on the path). Go to [Render your own set](#render-your-own-set).
4. **You can browse the web and check files.** Go to [Real photos from the web](#real-photos-from-the-web).
5. **None of these.** Go to [Without image generation](#without-image-generation). This is not a fallback in the sense of a lesser page. Plenty of gold sites carry no photographs at all.

Software products rarely need any of this. A real interface built in HTML outranks any picture of one. See the foundations of `elements/product.md`.

The source sets the ceiling. In testing, no treatment lifted a weak image, and demos built on stock stand-ins looked clearly cheaper than the real sites beside them, whatever the CSS did. Spend your effort on what is in the frame.

## With image generation

The usual failure is not a bad image. It is six good images that do not belong together, each looking like a separate prompt.

### Plan the set before the first prompt

Write the six-line contract from `elements/media.md`, then list each image: where it sits, its ratio, its crop, and what the page needs from it. A list of four to seven images is usually enough. Fewer images used large read better than many used small.

Pick two distances and alternate them, for example a macro of material and a waist-up of work. A set made only of wide establishing shots feels like a brochure.

### Build one suffix and keep it word for word

Turn the contract into a fixed block. Change only the subject line between prompts.

```text
Subject: <one specific thing happening, with who, where and what is in their hands>

Fixed for every image in this set:
Photorealistic editorial photograph of a real place, shot on a 35mm lens at f/2.8.
Low window light from camera left, soft edges, warm shadows, no added fill.
Colour: muted, nothing more saturated than <accent>.
Real wear and imperfection: scuffed surfaces, uneven glaze, creased linen, natural skin.
Nobody looks at the camera. No text, no logos, no signage, no watermark.
Leave quiet space at <side> for page copy. Intended use: website photograph.
```

Name a real situation rather than a mood. "Barista pouring milk" gives you the stock photo everyone has. "Owner wiping down a chipped enamel counter at 6am, first delivery crates still stacked by the door" gives you a business.

### What to ask for, and what to avoid

| Ask for | Because |
|---|---|
| A specific time of day and light direction | Light is what ties a set together |
| Named materials and their condition | Wear reads as real. Generated images default to new and clean |
| One subject, in a real setting | Crowded scenes break down in the details |
| A stated ratio for the slot it fills | Cropping later loses the composition |
| Hands busy with something simple | Fewer fingers on show and fewer errors |

| Avoid | Because |
|---|---|
| Any text, logo, sign, label or menu board | It comes out as gibberish. Add type in HTML over a clean image |
| "Beautiful", "stunning", "cinematic", "award-winning" | These pull toward the generic look and add no information |
| Heavy background blur | Creamy blur on everything is the most recognisable generated look |
| Teal and orange grades, golden hour on every frame | Both read as a filter |
| Groups of smiling people facing the camera | Faces are where errors show, and it looks like stock |
| Perfectly symmetrical food or products | Nothing real sits that neatly |

### Make twice what you need, then cull

Generate about twice the list and reject hard. Look at each one at full size for these:

- Hands, teeth, ears, and any fingers wrapped around an object.
- Text-like marks on packaging, signs, screens and book spines.
- Objects that merge into each other, such as a cup growing out of a saucer.
- Repeated shapes that should vary, such as identical beans, tiles or leaves.
- Plastic skin and over-smooth surfaces.
- A frame a competitor could use unchanged. Reject it, however pretty it is.

If one frame keeps failing, change the subject instead of retrying it. Use an edit tool to fix a small flaw, and say exactly what must stay unchanged.

### Tool notes

- Generated files often land outside the project. Copy every image you use into the project folder, and reference it by relative path.
- Convert to WebP or AVIF if you can, and resize to about twice the display size. A 4MB PNG hero is a defect.
- Check each image in the shot page, not only on its own. A picture that looks good alone can fight the type beside it.

## Render your own set

A model with no image generator and access to Blender can make a better set than most stock photography. In testing, one run wrote a single scene file and rendered a cobalt mug, filter cones and kraft coffee bags, and the page looked art-directed, because everything shared one light by construction. That unity is the hard part of a photo set, and a render gets it for free.

- **One scene, one sun, many cameras.** Build one script that takes a shot name, so every image shares a light, a surface and a wall. Do not build a separate scene per image.
- **Model objects a render can do well.** Ceramics, glass, bags, bottles, tins, books, boxes, tools, packaging, architecture, furniture and hard products. Avoid people, hands, animals and food close-ups, because they fall into the uncanny or the plastic.
- **Light it like a photograph.** One hard sun at a low angle through a window shape gives long shadows and instantly reads as a real room. Evenly lit studio renders read as CGI.
- **Add imperfection on purpose.** Slight bevels on every edge, uneven glaze, creased paper, dust and roughness variation. Perfectly smooth surfaces are what give CGI away.
- **Put real labels on packaging.** Render the label as an HTML page, screenshot it, and map it on as a texture, so the type is correct and matches the site.
- **Preview cheaply, finish slowly.** Render small with few samples while composing, and only render the final at full size. Run it in the background.
- **Grade once, in one script,** with the same curve and fine grain on every frame, so nothing is done on the page.

Without Blender, three.js can do the same for one or two hero objects: render in a headless browser with path tracing or good environment light, and save a still. See `media.render-3d` in `elements/media.md`.

Say in your closing note that these are renders standing in for real photography.

## Without image generation

Never paper over a missing photo with a gradient box, an emoji, a stock icon in a circle, or a caption describing a picture that isn't there. Change what the page is made of.

### Move the weight to what you can make well

| Material | What it gives you | Chapter |
|---|---|---|
| Real information | Menus, hours, prices, directions, schedules and fine print read as a real place | `elements/section-info.md` |
| Type | A strong type system carries a page with no images at all | `elements/type.md`, `type.type-as-image` |
| Interface | The working product, or the working part of a business: a booking slot, a live stock count, a rate calculator | `elements/product.md` |
| Illustration | Line work, plan views, diagrams of how something is made | `media.illustration` |
| Procedural images | Contours, halftones, dither and fields, drawn in canvas or SVG from real data | `media.illustration` |
| 3D | A single object with real materials, rendered in three.js and baked to a still | `media.render-3d` |
| Colour | A considered ground and one surface change, carried as an identity | `references/color.md` |

### Rules that keep it honest

- **Draw what is true of the business.** A plan of the shop, a map of the neighbourhood, a diagram of the roast curve or the actual treatment steps. A decorative coffee bean is clip art. A diagram of how this shop brews is content.
- **Commit to one drawing language.** One line weight, one fill logic and one ratio across the page. Mixed styles look assembled.
- **Hold one strong object rather than many weak ones.** One well-lit render or one exact diagram beats six small icons.
- **Do not imitate a photograph.** CSS shapes pretending to be a cup, a person or a room look worse than leaving them out. Illustration should look like illustration.
- **Say so at the end.** Tell the user the page is built without photography, and which slots would most benefit from real pictures. If a slot truly needs a picture, hold its true ratio as described in `surface.panel/true-ratio-placeholder`, and name it in your closing note.

## Real photos from the web

Use this only when you can actually fetch and look at the file.

1. Prefer sources with clear licences, such as Unsplash, Pexels, Wikimedia Commons public-domain files, and museum open-access collections. Check the licence on the image's own page.
2. Download each image and look at it. Never use a URL from memory: remembered image links are usually dead or show something else.
3. Save it in the project rather than hotlinking, resize it, and treat the group as a set using `elements/media.md`. Sets from different photographers rarely match, so replace outliers instead of grading them harder. A grade narrows a set but cannot create one.
4. List sources and licences in your closing note, and say that these stand in for the business's own photographs.

Do not use anyone else's brand images, product shots or identifiable people from a real company's site. Do not present a stock person as a named customer or employee.

## Plans by business

Start here for the frames, then adapt. Each row works with or without generation.

| Business | With image generation | Without it |
|---|---|---|
| Cafe, restaurant, bakery | Hands and material close-ups, the room at a stated hour, one dish from directly overhead | The real menu set beautifully, hours and walking directions, a plan of the room, line drawings of how a thing is made |
| Shop, store | One object per image on one ground, same angle, same light | Rendered objects in three.js with one material system, large type, real specs and prices |
| Clinic, dental, health | The real room, staff at work, not smiling at camera, no stock handshake | Plain answers to what patients ask, real prices, next free appointment, a calm drawn plan of the visit |
| Law, finance, advisory | Portraits under one light, or none at all | Type, written substance, named people as text, real fee structures |
| Hotel, travel, venue | The place at two distances, in real weather | Maps, routes, rate tables, season calendars, drawn plans |
| Architecture, interiors | The work, large, with no overlays | Plans and sections as line drawing, a project index with real data |
| Photographer, artist | Their work is the page, so ask for it. Generate only clearly labelled stand-ins | The index as type, with ratio-true placeholders named in your closing note |
| Event, festival | One strong poster image | A real schedule, lineup and map, with type at scale |
| Nonprofit | Real work in progress, not posed gratitude | Where the money goes, in real numbers, with a map of the work |
| Software, AI | Usually nothing. Build the interface | Build the interface |

## Finishing a set

Before the page sees an image:

- **Lock two of four:** colour bias, brightness, setup, format. The measured targets are in `elements/media.md`.
- **Crop for the slot.** The subject should sit where the layout leaves room, not wherever it landed.
- **Reserve space** with `width` and `height`, or `aspect-ratio`, so nothing shifts on load.
- **Load well.** The hero gets `fetchpriority="high"` and is never lazy. Everything below the fold gets `loading="lazy"`. Use `srcset` if you can.
- **Write real `alt` text** that says what is in the image. Use an empty `alt=""` only for pure decoration.
- **Text over images** needs its own check. Look at the actual pixels behind the words on desktop and phone, and darken the image itself before you reach for a scrim.

## Before you ship

- Could a competitor use this exact image? Then it is not doing its job.
- Do all images look shot in the same week by the same person?
- Open each one at full size. Any melted hands, gibberish lettering or merged objects?
- Is every file in the project, at a sensible size, with no dead links?
- Does your closing note say which images are stand-ins?
