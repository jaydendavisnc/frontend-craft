# Imagery

Read this before reaching for any image. It covers how to get images and what to do when you can't. For what good images look like, and for each treatment's recipe, use `elements/media.md`. Start with its six-line contract, because every route below depends on it.

**Contents.** [Find your route](#find-your-route) · [With image generation](#with-image-generation) · [Render your own set](#render-your-own-set) · [Without image generation](#without-image-generation) · [Real photos from the web](#real-photos-from-the-web) · [Plans by business](#plans-by-business) · [Finishing a set](#finishing-a-set) · [Before you ship](#before-you-ship)

## Find your route

Pictures are what most generated pages lack, so this is the first job of a build, not the last. Check what you actually have. Do not assume either way. In one real run a model skipped this step, built without photographs, and the page looked correct and dead. The same brief with real photography looked like a different class of work.

1. **The client supplied assets.** Use them, and ask for what is missing in your closing note.
2. **You have an image generation tool.** Use it for anything physical, and ask first if it costs money. Go to [With image generation](#with-image-generation).
3. **You can run a script and reach the web.** Run `scripts/photos.py`. Go to [Real photos from the web](#real-photos-from-the-web).
4. **You can run a 3D renderer.** Look for Blender (`/Applications/Blender.app`, or `blender` on the path). Go to [Render your own set](#render-your-own-set). Use this as well as photographs when the business has an object worth owning, such as a card, a key, a bottle or a tool.
5. **None of these.** Go to [Without image generation](#without-image-generation). This is a real loss, so say so at the end.

Software products often need less of this, because a real interface built in HTML outranks a picture of one. But a software page of nothing but interface is its own template. People use software, and a strong picture of the world the product lives in can do what no screenshot can.

The source sets the ceiling. In testing, no treatment lifted a weak image. Spend your effort on what is in the frame.

### What excellent means

A picture earns its place if you can answer yes to these.

- **It has one subject.** You can say what it is in three words.
- **It has a calm zone.** There is room for type, or it can be cropped to make some.
- **It has real light.** One direction, with shadows. Flat, even light reads as stock.
- **It has a hand in it.** Wear, steam, ink, a chipped edge, a coffee ring. Something happened here.
- **Nobody is posing for you.** People look at their work, not at the camera.
- **It is sharp at twice the size you will show it.** Full-bleed needs at least 2400px wide. `scripts/imgset.py` warns you when it does not.

Reject anything with a laptop on a desk, people pointing at a screen, handshakes, a diverse team laughing at a salad, or a coin stack. Those are the stock photographs everyone has already seen.

### Search like a picture editor

Search for concrete subjects from this business's own world, several at once, and compare. For a clinic, `nurse adjusting a drip line`, `stethoscope on a steel tray` and `clinic corridor at night` will beat `healthcare professional` every time. For a developer tool, `developer at a desk at night`, `whiteboard covered in arrows`, `hands on a mechanical keyboard`. For a florist, `florist stripping rose stems`, `buckets of tulips at dawn`. These are examples only: take the method, never the trade or the subject. Try the verb, the material and the place. Libraries are uneven: some subjects have a superb set and others have nothing usable. Never change the business to suit the library. If the business's own world has no strong photographs, use renders, a smaller set of better pictures, or a type-led scene. If a library has several frames by one photographer from one shoot, take them, because they already belong together. That is worth more than a better topic.

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
- **Shoot on a transparent ground.** `film_transparent` and a shadow catcher plane give you an object you can set over anything, including over type. Lights with `use_shadow = False` stop soft area lights from staining the catcher with grey haze, so only the sun casts a shadow. Fade the alpha at the image's edges afterwards, or a faint rectangle shows on tinted grounds.
- **Lift the object off the ground.** A flat card on a plane casts almost no shadow and looks like a vector. Tilt it and raise it, and it casts a long soft shadow that gives the whole first screen its depth.
- **Metal needs something to reflect.** Put a long, thin area light exactly in the reflection path: reflect the camera vector about the surface normal and place the light along it. Without this, metal renders as flat grey or blows out to white.
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

`scripts/photos.py` searches Burst, Openverse (with a commercial-use filter) and the quality category of Wikimedia Commons, and draws one numbered contact sheet. Unsplash and Pexels block automated clients, so do not use them this way, and never try to get past a bot check.

```bash
python3 scripts/photos.py "<a person doing the work>" "<a macro of the material>" --out .frontend-craft/photos
python3 scripts/photos.py --get 3,7,12 --out .frontend-craft/photos --to assets/src
swift scripts/cutout.swift assets/src/<photo>.jpg assets/src/<photo>-subject.png
python3 scripts/imgset.py assets/src --to assets/img --grade warm
```

1. Open the sheet and read it at full size before choosing. Never pick from a title.
2. `--get` saves the originals and writes `CREDITS.md` with each picture's source and licence. Check the licence on the picture's own page before relying on it, because libraries change terms. Burst uses its own licence and Creative Commons on different pictures. CC BY and CC BY-SA need a credit on the page.
3. `cutout.swift` lifts the subject out on macOS 14 or newer, with no network. It writes a PNG the same size as the photograph, so the two layers register exactly. Look at the edges at full size. Clean silhouettes against plain grounds cut best.
4. `imgset.py` gives every picture the same curve and fine grain, writes 960, 1600 and 2400px WebP, and writes `manifest.json` with sizes, the average colour and a blurred placeholder. Use `srcset`, `sizes`, `width` and `height` on every image, and the placeholder as a CSS background, so nothing shifts or pops in.
5. Treat the group as a set using `elements/media.md`. Replace outliers instead of grading them harder. A grade narrows a set but cannot create one.
6. List sources and licences in your closing note, and say that these stand in for the business's own photographs.

Do not use anyone else's brand images, product shots or identifiable people from a real company's site. Do not present a stock person as a named customer or employee. Quotes go beside hands, tools and places, not beside a stranger's face.

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
