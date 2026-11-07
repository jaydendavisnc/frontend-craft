# Copy

The words of a site, from a thin brief to the last error message. Generated copy is one of the fastest giveaways, and a thin brief gives you nothing to work with, so this chapter starts by inventing the business and ends with a check you can run on your own text.

**Evidence.** 48 contact sheets from gold and silver sites across 14 genres (24 of each tier), 43 full frames read for wording (35 gold or silver, 8 ungraded design system, cart and 404 pages), 48 more heroes read in montage, and the source text of all 32 baseline runs. Counts come from scripts over real strings: 826 page titles, 835 CTA labels from hover probes on 394 gold and silver sites, button text from 341 deep-pass sites, and H1 lengths from 314 sites. The corpus stores H1 length and not H1 text, so the headline shape figures come from 81 heroes transcribed and coded by hand (44 gold, 37 silver). Treat those as one reader's coding. Where the evidence is thin the section says so.

**About the examples.** Every example here was written for this chapter, and each exists to show a shape. Do not reuse its names, numbers or sentences. Lines in `code` marked as baseline are real output from models with no skill, shown as failures.

## Contents

- [Start here](#start-here)
- [Invent the business](#invent-the-business)
- [Choose a voice](#choose-a-voice)
- [Headlines](#headlines)
- [Section headings](#section-headings)
- [Subheads](#subheads)
- [Buttons and links](#buttons-and-links)
- [Nav labels](#nav-labels)
- [Feature titles and descriptions](#feature-titles-and-descriptions)
- [Proof](#proof)
- [Pricing copy](#pricing-copy)
- [FAQs](#faqs)
- [Footers](#footers)
- [Empty states, errors and forms](#empty-states-errors-and-forms)
- [Alt text](#alt-text)
- [Page titles](#page-titles)
- [Copy by genre](#copy-by-genre)
- [Sentence shapes to avoid](#sentence-shapes-to-avoid)
- [Self-check](#self-check)

## Start here

### Plain, specific, or decorated

A real site is made of two kinds of line.

- **Plain lines** label things so people can scan: nav, buttons, section headings, plan names, form labels.
- **Specific lines** state something true of this business only: a price, a year, a street, a method, a refusal, a named person.

Generated copy adds a third kind, the **decorated line**, which sounds written and carries no information. Delete it and the reader loses nothing. Most of this chapter is about moving decorated lines into one of the other two columns. Before you keep any line, ask which column it belongs to.

### How each model decorates

Each model decorates in its own way, and the fixes differ. Find yourself in this table.

| | GPT-6 baseline, 16 runs | Opus baseline, 16 runs |
|---|---|---|
| Decoration | Warmth | Wit |
| Headlines | Paired fragments in 14 of 15 marketing H1s: `Good coffee. Better days.` | Aphorisms and deadpan: `Heavy is just small, repeated.` |
| Tics | "a little" in 13 of 16 runs. "find your" 31 times. Warm filler such as thoughtful, crafted and with care at 16.8 per 1,000 words | Nobody, Nothing, Never at 2.1 per 1,000 words, against 0.45 for GPT-6. Every heading a punchline |
| Business names | Daybreak in 3 of 3 coffee runs, Folio twice, then Forma, Stride, Juniper, Solstice | Headway twice, then concept names built around a joke: Both Ends, Half Past Five, Ibid. |
| Buttons | `Find your strong`, `Come on in`, `Let's talk` | Themed: `Hand it over`, `Bar's loaded`, `Sign for it`, `Talk to the depot` |
| Page titles | An em dash in 16 of 16 titles, followed by a slogan in 12 | Mostly fine: `Saucer Coffee Bar, Alder Street` |
| Phrases flagged by `lint.mjs` | 1.23 per 1,000 words | 0.07 per 1,000 words |

The last row matters. The phrase list barely touches Opus, because that failure is in sentence shape and tone. A clean lint result tells you little about copy, so use the [self-check](#self-check) as well.

Opus has a stronger instinct than this table suggests. `Austin's after-work dentist.` names the trade, the place and the difference in four words, and it beats most of the corpus. The failure is doing that on every line of the page, until the page is a stand-up set. GPT-6 has the opposite gift: its FAQ answers and form copy are often clear and kind. Its failure is that nothing else on the page is about this business.

### What top sites do instead

These numbers should reset your sense of what a headline is.

- The gold H1 is 28.5 characters at the median (p25 16, p75 44, 98 sites). In the coded sample the median is 5 words.
- 60% of coded H1s tell a stranger what is being sold, and 78% on product sites. By the same reading, 6 of 29 baseline H1s do.
- 35% of coded H1s simply name the thing, with no wordplay at all.
- Paired fragments: 5 of 81 real headlines, against 14 of 15 for GPT-6. All five hold a claim or a fact.
- `Get started` is on 19% of deep-pass sites. Plain labels are normal at the top of the market.

Top sites are plainer than models expect, and they spend their effort on what fills the frames. A product page can afford a dull heading because a real interface sits under it. Your invented business has no fame to lean on, so plain and specific is the safe and strong choice.

### Order of work

1. Fill in the [business sheet](#the-business-sheet).
2. [Choose a voice](#choose-a-voice).
3. Write the boring parts first: hours, prices, what is included, how it works, the FAQ, the footer.
4. Write proof and features from what those parts gave you.
5. Write the headline last, then the page title.
6. Run the self-check.

Models begin at the headline and pour their effort into the one line that shows most. The facts live in the boring parts, so write those first and the headline will have something to say.

## Invent the business

If the brief is thin, do not ask. Invent one business and commit to it before writing a word of copy. Copy written from a sheet of facts comes out specific without effort. Copy written from a mood comes out as mood.

### The business sheet

Write these in your spec. Each field feeds a part of the page.

| Field | Write | Used in |
|---|---|---|
| Trade and customer | Plain words a neighbour would use | H1, page title |
| Name | See [naming](#naming) | Everywhere |
| Place | A real city and district, and where in it | H1, footer, title |
| Owner or founder | A name that fits the place, and one fact | About, proof, first person voice |
| Age | A year, and what happened that year | About |
| Scale | Seats, chairs, vans, staff, batch size, customers | Proof, about |
| Price | A believable anchor and how it is charged | Pricing, subhead |
| Hours or lead time | Exact, including when it is closed | Hero, footer |
| One position | Something they do that costs them something | Headline, about |
| One refusal | Something they will not do | FAQ, proof |
| Boring facts | Parking, access, allergens, insurance, returns, minimum order | FAQ, footer |
| Date | Today's season and year | Hero, announcement bar, footer |

Filled in, for a physiotherapy practice:

```
Trade      Physiotherapy for runners and people with desk jobs
Name       Ferris Physio (owner's surname plus the trade)
Place      Stoke Newington, London. First floor, above a pharmacy
Owner      Nia Ferris, 14 years in the NHS before opening
Age        Opened March 2019 with one treatment room, now three
Scale      Three physios, about 90 appointments a week
Price      GBP 68 first appointment (45 minutes), GBP 58 follow-up
Hours      Mon to Thu 7:30 to 19:30, Fri 7:30 to 15:00, closed weekends
Position   Every appointment is one to one, so no overlapping patients
Refusal    No block bookings or packages. Pay per visit
Boring     Stairs only, no lift. Bupa and Vitality accepted
Date       November, so heading into marathon training plans
```

None of this is clever. It gives you a hero line in minutes, and the FAQ already has its awkward question about the stairs.

**The position must cost something.** A believable stance has a downside the business accepts. Test it by writing the opposite: if a sensible competitor could proudly say the opposite, it is a real position. "We care about quality" fails, because nobody claims the reverse. "We close at two because we bake overnight" passes. Vitsœ sells furniture while arguing against replacing it. Golden Assisted Transportation refuses Medicaid, Medicare and insurance and says so in its pricing section. Are.na states how it makes money and what it will never do. These work because a customer can be put off by them.

### Naming

Real small businesses are named after people, places and trades, and they tend to say what they do. Of 60 local, food, clinic, hotel and architecture names in the corpus, 34 contain the trade, as in a dental practice with Dental in its name, and 14 use a person's name. Few are pleasant abstract nouns.

| Method | How | Good for |
|---|---|---|
| Surname plus trade | Owner's name and what they do | Clinics, law, trades, bakeries, builders |
| First name, possessive or casual | The owner's first name | Cafés, salons, single-person studios |
| Partners | Two surnames | Law, architecture, accounting |
| Place plus trade | District, street, river, landmark | Restaurants, hotels, shops |
| Initials | Three letters from a longer name | Accounting, engineering, professional firms |
| Plain descriptor | What it is, with one extra word of character | Transport, cleaning, trades |
| Object or coined word | One odd noun, or a made word | Software, consumer brands, studios |

Rules that matter:

- **Write ten names and strike the first five.** The first names you think of are the ones every run thinks of. Daybreak appeared in 3 of 3 GPT-6 coffee runs for that reason. Headway appeared twice for Opus.
- **Fit the place.** A surname should be plausible for that town and that trade's history. A founder in Hull and a founder in Dhaka should not share a name pool.
- **Local businesses should say their trade in the name or right beside it.** A stranger looking for a dentist will not guess what Juniper sells.
- **Do not build the name from the concept.** Both Ends and Half Past Five are good jokes that commit the whole page to the joke.
- **Software can be stranger.** An unusual noun is normal there, and the category line does the explaining.

You cannot check whether a name is taken without a search tool. Say so in your handoff, and treat every invented name as a placeholder.

### Sounding real rather than invented

Invented businesses give themselves away in predictable ways.

- **Everything is charming.** A real business is mostly ordinary. Keep one unusual fact and let the rest be dull. Opus pages fail here: every line of a coffee shop carries a quirk, so the page reads as a writer enjoying themselves.
- **Numbers are round or flattering.** Prefer 90 appointments to 100+. Include one fact that does not flatter: closed Mondays, a two-week wait, stairs and no lift.
- **Prices are guessed.** Anchor to what this trade charges in this city, then use the endings that trade uses. Cafés price in small steps, clinics in round tens or fifties, software per seat in tiers. A price off by a factor of two is the first thing a local reader notices.
- **The arithmetic fails.** A baseline law firm claimed 25 years, 15 attorneys and 1,200 clients, which is 48 clients a year across the whole firm. Multiply your numbers out before you print them. Seats times covers, staff times hours, price times customers.
- **The origin is a stub.** `We started daybreak with a simple idea` (baseline) says nothing. Give a date and an event.
- **Practical information is missing.** A page with a mission and no opening hours looks fake, and a customer would still have to phone. Local sites in the corpus earn trust with this material. Hibachi Guru lists what the host must provide and how allergies are handled. Lil Italy and Zahnarzt Wernitz give hours a full designed panel.
- **Locale is wrong.** Match spelling, currency, date and time format, phone format and address order to the place. European sites write hours in 24-hour form, and Lil Italy compresses them to 07 and 21. Write in the language of the brief, and of the place if the brief calls for it, as Magram does in French.
- **The date is wrong.** Put the real season and year on the page. Stores in the corpus were captured in November and most of them say so: Blue Bottle, Aesop, Patagonia and Boudin all lead with the season.

For phone numbers, use a range reserved for fiction where one exists (in the US, 555-0100 to 555-0199), or lead with a booking action. Use a real city and district, and do not attach an invented business to a real street number.

## Choose a voice

The sampler suggests a voice and a headline shape. Treat them as a nudge away from your default, and still choose deliberately. Left alone, GPT-6 writes as a kindly host and Opus as a dry columnist. The corpus has far more range than either.

| Voice | Sounds like | Seen on | Use for |
|---|---|---|---|
| Plain inventory | Stacked facts, almost a spec sheet | Golden Assisted, Vitsœ, Zed pricing, Bakstad | Services where people compare and need answers |
| Institutional | Complete, measured sentences in the third person or a calm "we" | Stripe, BCR, Work & Co, One Medical, Aman | Finance, law, enterprise, anything insured or regulated |
| Owner, first person | "I", direct, a little unpolished | Demitra Alexander CPA, Paco Coursey, Katja Ogrin | Solo practices, freelancers, one-person shops |
| Opinion | Picks a fight with the category and keeps it civil | Magram, Evenark, mymind, CleanShot, Framework | Challengers, studios, tools sold against a default |
| Host | Unhurried and sensory, full sentences | Heart & Soil, Sonder, Babylonstoren | Hospitality, weddings, flowers, gifts |
| Authored persona | A character with its own vocabulary | Dishoom | Brands with deep material. Hard, and close to a costume |
| Loud | Short, slangy, sometimes all caps | Deadstock Coffee, Hibachi Guru, solidcore | Youth, food trucks, gyms, events, merchandise |
| Dry | Understated wit, used rarely | Patagonia in places, Ramp in places | Confident brands, and only with a real product under it |

The same two-person bike repair workshop, in each voice:

| Voice | Hero line |
|---|---|
| Plain inventory | Bike repairs in Walthamstow. Same-week service. Fixed prices. |
| Institutional | Hale & Daughter services and repairs bicycles for riders across East London. |
| Owner | I've fixed bikes on this street since 2011. I'll tell you what yours needs before I touch it. |
| Opinion | We'd rather adjust your gears than sell you new ones. |
| Host | Wheel it in tonight and collect it on your way to work, clean and running quietly. |
| Authored | Purveyors of true wheels and well-oiled chains to the cyclists of E17. |
| Loud | FLAT TYRE? TEN MINUTES. TEN QUID. |
| Dry | We've seen what you did to that chain. We won't mention it. |

### How to choose

1. **Start from the reader's risk.** If getting it wrong hurts (health, law, money, children), use plain or institutional. People want to feel safe, and wit reads as carelessness there.
2. **Then ask who is speaking.** One identifiable person suggests owner voice. Outside portfolios, baseline pages almost never speak as an owner, so it is an easy way to sound real.
3. **Then ask what the purchase feels like.** Taste purchases can take host or opinion. Commodity purchases want plain inventory.
4. **If two voices fit, take the one further from your default.** Warm writers should try plain inventory or opinion. Dry writers should try institutional or host.

### Where voice is allowed

Voice belongs in the headline, the subhead, the about text, one footer line and a few captions. It stays out of nav, buttons, plan names, form labels, error messages and legal text, because people scan those and need them to mean what they usually mean. Dishoom writes a full persona through its paragraphs and captions, and its button still says to book a table. Follow that split, whichever voice you choose.

Spend wit like money. One joke on a page, somewhere low-stakes such as a footer or a caption, reads as confidence. A joke on every line reads as a writer who could not stop.

## Headlines

### Six shapes, and how often they appear

Hand-coded from 81 real heroes. Illustrative lines are invented.

| Shape | Share | What it does | Seen on | Illustrative |
|---|---|---|---|---|
| **Name it** | 35% | Category, plus audience or place | Resend, Linear, Increase, Brilliant, Golden Assisted | Bookkeeping for restaurants |
| **Brand line** | 22% | A compressed belief or mission | SpaceX, Signal, Dishoom, Monzo, Ramp, mymind | (see the warning below) |
| **Say what you get** | 17% | Verb and concrete result | Levels, Customer.io, Modern Treasury, Wispr Flow | Get paid the week you invoice |
| **What's current** | 16% | Product, season, launch, show | Blue Bottle, Aesop, Analogue, Sweetgreen, A24 | Winter loaves are back. Order by Thursday |
| **Take a position** | 7% | Says something is wrong | Buildkite, Evenark, CleanShot, Attio | Your rota shouldn't live in a group chat |
| **Wayfinding** | 2% | The plain word | Almeida, Babylonstoren | Pricing |

**The brand line is the trap.** It is the shape models imitate, because memorable taglines are what they have read most. Look at who uses it: Signal, SpaceX and Monzo can leave the product out because you already know them. The rest earn it with a photograph or a product directly beneath. Your invented business has no reputation, so a brand line in its H1 leaves the visitor with no idea what is on offer.

**For a thin brief, start with name it or say what you get.** Use what's current for stores. Take a position when the subhead names the product straight away. Move a brand line to the closing section or the footer, where the reader already knows who you are.

Within those shapes, range is wide. Bun defines itself in a plain sentence. Are.na writes a numbered definition with an empty slot for the reader. Bakstad states one long descriptive sentence and stops. Athletics says what it is in six words.

### By surface and genre

| Surface | Lead with | Evidence |
|---|---|---|
| Product landing | The category and who it is for, or the concrete result | Resend, Linear, Increase, Levels, Modern Treasury. 21 of 27 product H1s say what is sold |
| Store home | Whatever is current: the season, the drop, the sale | 8 of 12 store and brand heroes. Blue Bottle, Patagonia, Aesop, Curology |
| Product page | The product's name and what it does | Vitsœ leads with the shelving system's name and number. Analogue, Therabody |
| Pricing page | The word itself, or one plain sentence | Cursor and Claude both use the single word. Stripe and Mercury use one sentence |
| Local service | Trade and place, then what is different | Golden Assisted, Crescent Dental, Sam Hoult, Medusa622, Hibachi Guru |
| Restaurant or café | The food, the place or this month's menu. Often no claim at all | Dishoom, Sweetgreen, Boudin |
| Hotel | The place, the season, or a sensation | Aman, Babylonstoren, Sonder |
| Studio | One sentence on what you do, or the work first | Athletics, Work & Co, International Magic. BIG and Foster + Partners open on projects |
| Portfolio | Name and trade | Paco Coursey, Katja Ogrin |
| Theatre, museum, festival | What's on, with dates | Almeida, A24 |
| Nonprofit | A verb, a beneficiary, a scale | GiveDirectly, charity: water, Rewiring America |
| Professional firm | Who you act for and in what | BCR, Native Law, Bakstad |

Some surfaces want no headline. If the work or the listings are strong, as on BIG or The Marshall Project, show them and let a small label do the rest.

### Before and after

The left column is real baseline output. The right columns are illustrative.

| Brief | Baseline | Plain | With more edge |
|---|---|---|---|
| Law firm | `Clear counsel. Confident futures.` | Employment solicitors for staff in South Yorkshire | We only act for employees |
| Dentist | `A little care. A lot to smile about.` | Family dentist in South Austin, open until 7 | Scared of dentists? Tell us at booking |
| Project tool | `Great work. Less friction. More together.` | Project tracking for agencies with client work | Know by Tuesday which client work will slip |
| Candle store | `A little light. A slower life.` | Soy candles poured in Asheville, 40 hours each | Autumn batch: three scents, 200 of each |
| Fitness app | `BUILD A STRONGER YOU.` | Strength plans for three 30-minute sessions a week | Lift twice a week and still see progress |
| Festival | `FEEL IT. LIVE IT.` | 60 acts, three days, Margate, 12 to 14 June | Weekend tickets from GBP 95 until Friday |
| Project tool (Opus) | `Run on time.` | Timelines that show what a slip will hit | Know what's late before the meeting |

Notice that the plain version is often the better one. Write it first, every time. Often it can stay.

### Mechanics

- **Fit two lines at your H1 size.** Top sites use one or two lines. If your line needs three, cut it, or move detail to the subhead.
- **Sentence case is the default.** 20% of coded H1s are Title Case, mostly local services and older consumer brands. Title Case is a fine match for a formal firm. It reads older in software.
- **A full stop is a style choice.** 28% of coded H1s end in one. Decide once, and apply it to every heading on the page.
- **Check the claim.** "Fastest" needs a benchmark next to it, as on Bun. "Trusted" needs a reason to trust. Crescent Dental and Sam Hoult both open on the word trusted, and it is the weakest word on each page.

## Section headings

A reader scrolls by reading headings. Read yours alone, in order. They should tell the whole argument, or at least say what is in each section. There are three approaches, and a page should pick one.

| Approach | How | Seen on | Fits |
|---|---|---|---|
| **Literal** | Says what the section is | Golden Assisted, whose heads read like a customer's questions. Sam Hoult's price list | Services, local, health, anything practical |
| **Claim** | Each heading states one point | Bun, Render, Vitsœ's four stances | Software and products with an argument to make |
| **Run-in** | The heading runs on into a greyer sentence, so claim and detail share one block | Stripe, Linear, Attio, Increase | Long product pages, because it holds a rhythm for 15,000px |

The failure is the punchline heading. `Keep your distance.`, `Change here for everything else.` and `Arrivals.` are from one Opus page about project management, and a reader cannot tell that they mean capacity, integrations and customers. Label the section and put the wit in the sentence below, if it has to be anywhere.

The reverse failure is the mood heading: `A small habit. A lighter mind.` and `Good people. Great dentistry.` Turn it into the literal version: What's on the menu. How the first visit works. What a crown costs.

Top sites use plain closing headings too: Stripe closes a product page by asking whether you're ready to start. A closing section can be simple if it restates a concrete offer. Bun and Evenark show the better form: Bun's closing line points at the code the reader has open right now, and Evenark tells a nervous client that nothing has to be decided before the first call. Both address the real hesitation at that point in the page.

## Subheads

The deep pass gives gold subheads as 16 / 18 / 20px, about 550px wide, leading 1.3 to 1.5. At that size a line holds about 60 characters, and most subheads run to two lines, so plan for 100 to 130 characters. That length is derived from the measurements, since subhead text itself is not in the corpus.

A subhead does the job the headline left undone. Four patterns:

| Pattern | Formula | Seen on | Illustrative |
|---|---|---|---|
| **Definition** | Name is the category for the audience | Loops, Levels, Attio | Rotamint is rota software for independent restaurants. Staff swap shifts by text, and you approve once. |
| **Fact stack** | Three short facts, no verbs needed | Golden Assisted, solidcore, Function | 45 minutes. One to one. No block bookings. |
| **Mechanism** | How it works, in one breath | Tana, Wispr Flow, Resend | Point it at a Postgres table and it builds the index. Queries stay in SQL. |
| **Offer** | The terms | Function, Khan Academy, One Medical | GBP 68 for your first appointment. Most people need three or four. |

The most persuasive subhead in the corpus is six words long: “Door to door. Family owned. Private pay.” (Golden Assisted Transportation). Those three facts answer what a family arranging care actually wants to know. Compare `Good people. Great dentistry. Right here in Austin.` (baseline), which has the same rhythm and nothing a reader could check. Stacked fragments are fine when each one is a fact.

Avoid these:

- **Restating the headline in more words.** Use the space for the next fact.
- **Three vague nouns:** clarity, confidence and control. Replace with one concrete thing.
- **The trailing benefit:** so you can focus on what matters. Demitra Alexander CPA uses it, and any accountant could. Say what the reader actually gets back.

## Buttons and links

### What the data says

From 835 hovered CTAs on gold and silver sites (767 once nav items, log-ins, search and cookie controls are removed), plus button text from 341 deep-pass sites.

| Measure | Value |
|---|---|
| Main CTA length | Median 2 words, 82% at 3 or fewer |
| Nav CTA length | 93% at 3 or fewer |
| Most common button text | `Get started`, on 19% of deep-pass sites |
| Next | `Learn more` 12%, `Sign up` 11%, `Contact sales` 10%, `Log in` 8% |
| Leading verbs | get, start, contact, learn, book, sign, explore, shop, download, view |
| Labels using "my" | 0 of 767 |
| Labels using "Let's" | 2 of 767, against 20 uses across 15 GPT-6 pages |

So a plain label is correct. Do not try to be interesting in a button. A person reads it for one thing: what happens when I press this?

### By genre

| Genre | Primary labels seen | Secondary |
|---|---|---|
| Software | Get started, Start for free, Sign up, Book a demo, Download for Mac | Contact sales, Talk to sales, See how it works |
| Local service | Book a [named thing], Get a quote, Check availability, Call [number] | Rides for facilities, Get directions |
| Restaurant | Book a table, View menus, Order | Find a location |
| Store | Shop [category], Buy now, Add to bag, Shop the sale | Watch the film, Compare |
| Studio | See our work, Book a call, Contact us | See how we work |
| Culture | Buy tickets, Plan your visit, Become a member | Event information |
| Nonprofit | Donate, Give now, Join | Make a major gift |

### Rules

- **Verb plus object, and name the real object.** Book a table beats Reserve now because it says what you are reserving. Golden Assisted has a separate button for care facilities, which names who it serves.
- **Make the label promise what happens next.** If it opens a form, say so with the verb. If the next step is a phone call, put the number in the button, as Golden Assisted does.
- **Keep the theme out.** `Hand it over`, `Bar's loaded`, `Pass to Marcus` and `Talk to the depot` (baseline) force a reader to decode a control. Across 767 real labels almost none do this.
- **Keep warmth out.** `Find your happy place`, `Come on in` and `Find your everyday glow` (baseline) do not say what the button does. Real sites write "find your" on 5 of 767 labels, mostly with a concrete object: a plan, a screening, the nearest store.
- **The pair has a logic.** The primary does the thing. The secondary lowers the risk: see pricing, talk to a person, see how it works. Two primaries that both mean sign up waste the slot.
- **Add one line of reassurance under the main button if a real worry exists.** CleanShot gives a money-back period, Customer.io lists trial terms, Attio says no card is needed. Pick the one fact that removes the actual hesitation.
- **Repeat the same words for the same action.** If the hero says Book a visit, the nav and closing section say Book a visit.
- **Do not append an arrow out of reflex.** Only 35 of 2,161 button labels carry an arrow character in their text, though SVG icons were not counted.

Inline links should say where they go. `Learn more` is acceptable under a card, but a link that names its destination is better for scanning and for screen readers.

## Nav labels

People scan a nav for words they already know. Renaming them costs clicks and earns nothing, so this is the wrong place for voice.

| Business | Typical labels | Seen on |
|---|---|---|
| Software | Product, Solutions, Resources, Customers, Docs, Pricing | Stripe, Attio, Linear, Render |
| Developer tool | Docs, Guides, Blog, Changelog, Pricing, GitHub | Bun, Zed, Resend |
| Consumer health | What you get, what's tested or treated, Pricing, FAQs | Function, Levels, Ro |
| Local service | Services, About, FAQs, Contact, plus the phone number | Demitra Alexander CPA, Medusa622, Golden Assisted |
| Restaurant | Menus, Locations, Book, Order | Dishoom, Sweetgreen, Lil Italy |
| Store | The categories you sell | Patagonia, Felix Gray |
| Hotel | Stays or rooms, places, offers | Sonder, Aman, Le Saint Georges |
| Studio or portfolio | Work, About or Studio, Journal, Contact | Evenark, Motto, Katja Ogrin |
| Culture | What's On, Get Involved, Visit, Tickets | Almeida |
| Nonprofit | About, Evidence or Impact, Programs, Ways to give, Donate | GiveDirectly, charity: water |

- Solutions, Products, Product and Resources were the four most common hovered nav labels, 115 of 444, so a dull nav is normal.
- Add a label only when it is true of this business. Demitra Alexander's nav has Forms, because clients come for them. Native Law's nav names its attorney. Those small words prove a real business more than any tagline.
- Do not prefix with "Our". `Our menu`, `Our story`, `Our firm`, `Our people` run through the GPT-6 baseline. Write Menu, About, Team.
- Do not rename Pricing or Contact. `Fares`, `Say hello` and `House rules` (baseline) all make the visitor stop and guess.
- Put the page's main action at the right of the nav, in the same words as the hero. For local services, a phone number there is often the most useful thing on the page.

## Feature titles and descriptions

Layout lives in `elements/section-features.md`. This section covers the words.

A feature title is a label, so write it the way you would label a drawer: two to five words saying what it is or does. Gold item titles are 17 to 26px at weight 400 to 500, so they have no shouting to do. Keep titles parallel within a set: all noun phrases, or all verb phrases. Render's steps are all verbs. Levels' grid is all nouns.

A description is one or two lines that add what the title could not. Build it from at least one of these:

- **A named thing:** a real tool, ingredient, standard or place.
- **A number:** a limit, a duration, a quantity.
- **A mechanism:** how it does the thing.
- **A boundary:** what it does not do, or who it is not for.

| Before (generated style) | After (illustrative) |
|---|---|
| **Seamless integrations.** Connect the tools you already love. | **Slack and Google Calendar.** Shift swaps post to your staff channel and appear on calendars within a minute. |
| **Lightning fast.** Built for speed so you can move quickly. | **Search in under 20ms.** Tested on 40 million rows on a single 4-core instance. |
| **Personal care.** We treat every patient like family. | **Hour-long first visits.** Time for a full exam and X-rays, and for your questions. |
| **Crafted with care.** Every loaf is made by hand. | **36-hour rise.** Shaped by hand at 3am and baked in a stone-floor oven from 1958. |

Generated descriptions fail in two opposite ways. GPT-6 repeats the title with an adverb. Opus turns each description into a small joke, as in `Same deal, different logo.` A plain sentence serves the reader better than either.

Steps should describe what the customer does and then what happens, in the order it happens. Golden Assisted's three steps read as instructions from a person who has explained this many times. Avoid `01 Discover, 02 Design, 03 Deliver`, which describes every business on earth.

Case studies and project captions are specific by nature, so state the client, the job and the result. Bakstad captions each house with its place, its era and what changed. Vitsœ names the people in its stories.

## Proof

Proof is where generated pages become dishonest, and the problem is often a section that was drawn before anyone asked what could fill it. Start with proof that needs no customers.

### Proof that needs no customers

Each of these is available to a new business, and each is more convincing than a fabricated quote.

| Kind | Example of the move | Seen on |
|---|---|---|
| The product itself | A working demo, a real benchmark with its method, the real price list | Bun, Plausible, Sam Hoult |
| A guarantee or policy | Money back within a period. Quote before booking. Nothing booked until you confirm | CleanShot, Felix Gray, Golden Assisted, Patagonia |
| Credentials | Licences, background checks, standards, registration numbers | Golden Assisted, Brilliant, Warp |
| A named, reachable person | A founder's name with a direct email, or a call with a named person | Magram, Evenark, Native Law |
| Disclosed methods | How the thing is made or decided, in enough detail to be wrong | Vitsœ, Are.na, GiveDirectly |
| Time and place | Years in business, a list of places served, a running counter | Are.na's day count, Golden Assisted's list of towns, Dishoom's cafés |
| What you will not do | A refusal that costs money | Are.na, Golden Assisted |

ACME Cups shows a neat move: rather than a logo wall, it lists the cities where baristas use the cups. A list of places, schools, trades or neighbourhoods reads as proof and needs no famous brand.

### Proof that needs other people

| Form | How it is built | Seen on | Best for |
|---|---|---|---|
| Named executive quote | Logo, quote with a number in it, name, title | Lithic, Attio | B2B software |
| Public posts | Real posts with handle, date and a link to the original. Some are rough | Buildkite | Developer tools |
| First name and relation | First name plus a role such as a parent or a 7th grader | Brilliant | Education, consumer |
| Verified buyer | First name, initial, a verified tag, the product bought | Blue Bottle | Stores |
| Short stars | Very short lines, with no name | Function | Consumer, where volume is the proof |
| Named recipient | A person's story and what changed | GiveDirectly | Nonprofits |
| Customer stat | One logo and one result | Loops, Attio | Software with real numbers |
| Press and ratings | Mastheads, ratings bodies, independent surveys | Function, Heart & Soil, Monzo, GiveDirectly | Consumer, health, finance |

Buildkite's posts are convincing because they are uneven: one wanders through a point about self-hosting, another is five words and an emoji. Real praise is lopsided, and it usually comes attached to a detail. Brilliant's quotes each hold a small fact, a time or a task.

Write testimonials to the same standard:

- Put in a before and after, a number, or a detail only a customer would know.
- Vary the length a lot. Function's shortest is seven words.
- Let people sound like people: a qualification, a small complaint, a sentence that wanders.
- Avoid `They didn't just understand the law. They understood what mattered to us.` (baseline), and any quote that could praise a different company unchanged.

Keep section titles for proof plain. Nicole Heim uses a small label meaning in their words, Buildkite one short line, and most sites write about what customers say. Do not write a heading that claims more than the quotes show.

### Honest handling of invented proof

The line is whether a real person or organisation is attached to something you made up. Work out which case you are in.

**Case 1: the business is invented, from a thin brief.** The page is a design sample, and fictional customers on a fictional business deceive nobody, as long as the fiction is complete.

- Invent the customers and their companies too. Never use real company logos, real publication mastheads, real people, or real review marks such as Google, Trustpilot, Yelp or G2. A real name beside an invented claim is a false endorsement, and "trusted by Stripe" on a mock-up is still a false statement about Stripe.
- Keep it small. Two or three quotes rather than a wall, because each one must be replaced later.
- Prefer forms that are easy to swap: first name and relation, or first name and neighbourhood. An invented title at an invented company reads faker and adds nothing.
- Choose names that fit the town. Baseline pages fall into a stock cast: Daniel 16 times, Priya 13, Marcus 12, Alex 11, the surname Okafor on four different invented people, and pages with one Nordic, one Nigerian and one Japanese surname in a row. Real customers of a Leeds physio look like Leeds.
- Mark every invented item. Add an HTML comment such as `<!-- invented: replace before launch -->` at each one, and list them in your final note, as the core skill asks. If the page has a content file, keep them together there.

**Case 2: the business is real, or the user says this is their product.** Do not invent customers, quotes, ratings, awards, press, client counts or performance numbers, even as filler. They would become false claims the moment someone publishes the page, and fake testimonials are illegal in many places (the US FTC banned them by rule in 2024). Use only what the user gave you, build from the no-customers table, and leave the slot out where you have nothing. Then say in your final note which proof would help most, so they can supply it. A section designed with room for proof is better than a false one.

**Case 3: high-stakes claims, in either case.** Do not write outcome claims for health, legal or financial results. Avoid "cured", "won", "guaranteed returns", and invented patient or client stories. Use process, credentials and access instead. On a clearly fictional sample you may show the slot, but keep the content about the experience of the service.

### Stats

A row of four big numbers is one of the most faked sections on the web. One baseline law firm's row reads `25+ Years of experience`, `1,200+ Clients represented`, `15 Dedicated attorneys`, `One Shared commitment. You.`, which has every fault at once: round numbers, a plus sign, no source, and a punchline.

- Use a stat only if it is a fact about this business and the number would surprise someone.
- Give it a unit and a denominator: 40 million rows on a 4-core instance, or 9 of 10 patients seen within a week of calling.
- Prefer exact to round. Are.na counts days. charity: water and GiveDirectly show exact people reached, and Stripe gives reliability to three decimal places.
- Attach sources where a reader would ask. GiveDirectly names its studies and the press that covered them. Monzo reproduces an independent service survey, with its rivals' scores beside its own.
- If you have no real numbers on an invented page, leave the row out. A sentence with one believable number beats four tiles.

## Pricing copy

Layout for pricing lives in `elements/section-conversion.md`. The copy has one job, which is to let someone work out what they would pay without talking to anyone.

- **State the price and exactly how it is charged.** Attio gives per user, per month, billed annually under every number. Claude explains the discount and the amount billed up front in a line of small type. Function shows the daily figure and the annual charge right beneath it. Stripe gives the percentage plus the fixed fee per successful transaction.
- **Name plans plainly.** Free, Plus, Pro, Business, Enterprise, Max. The plan names in the frames opened are almost all from this short list. `Local`, `Express` and `Through service` (baseline) make a reader translate before comparing.
- **Give each plan one line saying who it is for.** Attio writes a For line per plan, and Claude's three lines describe how much you will use it. The second is often stronger, because people know their usage better than they know their company stage.
- **List what changes between plans.** After the first plan, write everything in the previous plan and then the differences, which Cursor, Raycast, Claude and Mercury all do. Lead with the limits people choose by: seats, credits, usage.
- **Plain CTAs.** `Get Plus`, `Continue with Pro`, `Start Free Trial`, `Talk to sales`. Using one label across all plans is fine too, as Claude does.
- **Put the fine print next to the price.** Zed puts its order-form threshold on the card. Raycast strikes through the monthly total. Hiding terms reads as a trick.
- **Make the arithmetic work.** Annual discount, per-seat math and totals must agree, and a reader will check.
- **Say what is free, and for how long.** Zed writes its free tier as forever, and its FAQ spells out how the trial ends.

For services without fixed prices, explain how the price is set. Golden Assisted's section on what a ride costs lists what affects the price, when you will be told it, and who you pay. For local trades and salons, a full price list is valuable content. Sam Hoult's menu of treatments and prices is the best thing on that site. Hibachi Guru states a per-person inclusion and a minimum spend, which saves a phone call.

For nonprofits, the equivalent is what a gift does. Suggested amounts, once or monthly, and where the money goes. GiveDirectly and charity: water both put the amount picker in the hero.

Avoid "perfect for", "everything you need to", and "custom solutions tailored to your needs". Write what a person gets.

## FAQs

**Heading.** Of eight FAQ headings opened, seven are literal: frequently asked questions (Attio, Function, Cal.com, Jasper), common questions (Nurx, Golden Assisted), or pricing FAQ (Warp). Magram's is a plain variation meaning the questions people ask us. Baseline runs wrote `Good questions. Simple answers.` or a near copy in 5 of 32 runs, which makes it one of the strongest fingerprints in the set. Use the literal heading.

**Questions.** Write the ones a nervous customer would ask, in their words, including the uncomfortable ones. Magram's four are how long, do I really own it, how much, and what if it doesn't work. Golden Assisted's cover stairs, larger passengers, insurance and whether drivers are background checked. Zed includes a question from someone who doesn't want to pay.

Source questions from the business sheet: the refusal, the boring facts, the price, the worst case. Four to eight on a landing page is plenty. Some sites write what-is-this questions for search, as Function, Jasper and Cal.com do. These are fine to include and they are not what convinces anyone.

**Answers.** Lead with the answer. Yes, no, a number or a date should come first, then the detail, then the limit.

Golden Assisted answers a yes-or-no question with yes, then names the ramp and the restraint system. Magram answers how long in a number, then says what fixes the scope. Zed's trial answer gives duration, balance and which ends first, and elsewhere its FAQ says plainly which enterprise features are planned and unavailable. That admission does more for trust than a line of reassurance could.

| Before (baseline style) | After (illustrative) |
|---|---|
| **Can I use my insurance?** Insurance benefits and participation vary by plan. Ask our team to check your coverage. | **Do you take insurance?** Yes: Delta, Cigna and Aetna PPO plans. We don't take HMO plans. Send your card before your visit and we'll tell you what you'll owe. |
| **What if I'm nervous?** You're welcome here, nerves and all. | **What if I'm nervous?** Tell us when you book. We'll give you a longer first appointment, and you can stop at any point. Sedation is available for an extra $180. |
| **How do I get started?** Getting started is easy! Just reach out. | **How soon can you see me?** Usually within a week. Same-day for pain, if you call before 10. |

Note that GPT-6's FAQ tone is good. The problem is that it refuses to state facts. Give it facts from the sheet and keep the kindness.

## Footers

Footers are for finding things and for legal duties, so most of the copy is plain. Of 357 tagged footers in gold and silver sites, analysts noted legal text on 144, social links on 121, a large wordmark on 57, a newsletter on 48, a tagline or blurb on 38 and a status indicator on 16. Those are mentions in spec notes, so they undercount, but the order is informative: a tagline is a minority feature.

**What belongs here, by genre.**

| Business | Footer must carry |
|---|---|
| Local | Address, hours, phone, email, map link. Zahnarzt Wernitz and Lil Italy give this real design space |
| Law | Regulator and registration, disclaimer that the site is not legal advice. Native Law states this in full, beside the contact details |
| Health | Disclaimer about medical advice, as Nurx places under its FAQ, plus crisis information where relevant |
| Finance | Who issues the product, deposit protection, risk text. Monzo, Function, Ramp and Wealthfront run long, and that length signals a real company |
| Nonprofit | Registration and tax details, financial disclosures. charity: water and GiveDirectly both have them |
| Software | Sitemap in columns, legal links, status where it exists. Linear's is a logo, five columns and a legal row |
| Theatre, museum | Box office, access information, funders, charity number, as on Almeida |
| Store | Help, shipping, returns, contact, country. Accepted payments on Deadstock |

Local duties vary by country. Structure Consulting Engineers, in Sydney, carries an acknowledgement of Traditional Owners. Follow the customs of the place in your sheet.

**One line of voice is enough.** Sonder writes one line under its logo. Dishoom's note on its B Corp status keeps its period manner. Patagonia sets out five flat commitments, each a checkable policy. Choose one such moment, or none.

Baseline runs overwrite here: `Counsel with purpose. Partnership that lasts.`, `A brighter kind of everyday.`, and a joke about paper cups. Avoid a tagline that repeats the hero, and "Made with love in [city]".

**Newsletters.** Plain labels lead: `Sign up` and `Subscribe` are the most common in the specs. What improves a signup is a promise of content and frequency. Sonder says monthly. Framework says how often. Replace stay in the loop with what you will send and how often.

**Details.** Use the current year. Every address and number should match the rest of the page. Name real policy pages only if you are building them, or mark them as stubs.

## Empty states, errors and forms

The evidence is thinner here, because the corpus is almost all marketing pages: design system documentation from Atlassian, Carbon and Vercel's Geist, a few live frames from Perplexity and Allbirds, and Work & Co's real 404. The rules below follow those sources plus plain reasoning. This copy is seen by people who are stuck, so it should sound calm and useful.

| State | Say | Illustrative |
|---|---|---|
| **Empty, first use** | What will appear here, and the one action to start | No invoices yet. Create your first one, or import a CSV. |
| **Empty, in a sidebar or list** | Two or three quiet words. Perplexity sets these in half-ink with no illustration | No projects |
| **No results** | What was searched, and how to widen it | No results for "rye" in Sandwiches. Search all menus. |
| **No access** | What is blocked, who can fix it | You don't have access to this report. Ask an admin for permission. |
| **Empty cart** | That it's empty, then useful routes | Your bag is empty. Bestsellers, New in, Gift cards. |
| **Field error** | What's wrong and how to fix it, next to the field | This email address is already in use. Log in instead. |
| **Form failure** | What happened, that their input is safe, what to do | We couldn't send this. Your message is saved. Try again, or call 020 7946 0123. |
| **Payment declined** | The reason if known, the next step, no blame | Your bank declined this card. Try another, or contact your bank. |
| **404** | Plain sentence, and a way out | This page doesn't exist. Go to the homepage. |
| **Success** | What happened and what comes next, with a time | Booked for Tuesday at 9:30. We've emailed you the address. |
| **Toast** | A short past tense verb, with undo if relevant | Project archived. Undo |
| **Destructive confirm** | Name the object and the consequence | Delete Riverside project? This removes 214 tasks and can't be undone. |
| **Loading** | Only if it takes more than a few seconds. Say what's happening | Importing 1,240 contacts |

Atlassian's pattern is the one to copy: a header naming the state, then a sentence giving the condition and who can act on it. Geist's example error is a single sentence. Work & Co's 404 is a single sentence and a link, sitting above its normal contact block, so the visitor can still reach the company.

Rules:

- **Do not joke when something has failed.** Wit at the moment of failure reads as not caring. This holds for every voice, including the ones allowed elsewhere.
- **Do not blame.** Avoid invalid, illegal, failed to and you must.
- **Do not apologise repeatedly.** One "sorry" is fine if we caused the problem. Fix-it information is what helps.
- **Keep the input.** Copy can only promise this if the form really does it. Build it that way.
- **Never expose codes alone.** Pair any code with a sentence.

**Forms.** Labels are nouns above the field. Placeholders show a format, as Sonder's `you@email.com` does, and they should not carry instructions, because they vanish on typing. Ask for the fewest things, and say why for anything sensitive: "we use your phone number only to confirm the booking". Button labels on forms say what is being sent. Golden Assisted's form opens with a human question about who the ride is for, then gives choices. That counts as voice inside a form, and it works because it is a real question with real answers. Replace submit with a verb and object: Request a quote.

**App screens.** Use the user's words for objects and keep verbs consistent: if the button says Archive, the toast says archived. Column heads are short nouns. Units sit in the header or the cell, not both. Dates and times follow the locale. Sample data inside a product shot is copy too, so write real-looking names, amounts and statuses using the rules in this chapter, and read `elements/product.md`.

## Alt text

The corpus has no alt text data, so this section rests on WCAG convention and on what baseline runs did. GPT-6 left 19 of 54 images empty and wrote mood captions on the rest, such as `A candle burning softly on a rustic wooden table`. Opus described images accurately and often beautifully, including on decorative ones.

Alt text replaces an image for someone who cannot see it, so write what the image contributes at that point on the page.

| Image | Write | Illustrative |
|---|---|---|
| Product | Name, the variant, the view | Hollis chore jacket in navy, front view |
| Food or a place, carrying information | What's there | Two sourdough loaves on the bakery counter |
| Person | Who they are on this page | Dr. Anneke Vos in the Nedlands practice |
| Logo | The company name only | Linear (never "Linear logo") |
| UI shot or chart | The takeaway | Revenue chart rising 18% from March to June |
| Linked image | The destination | Autumn collection |
| Decorative | Empty `alt=""` | |

- Omit "image of" and "photo of", because a screen reader already announces images.
- Keep to about one line. Long detail belongs in text on the page.
- Do not repeat the visible caption word for word.
- Describe what the image actually shows. If it is a gradient or a procedural render, mark it decorative and do not claim a photograph.
- Icon-only buttons need an accessible name, such as `aria-label="Open cart"`.
- Mood adjectives add nothing. Cut warm, soft and inviting.

## Page titles

Measured from 826 captured titles. Gold, 147 sites:

| Form | Share |
|---|---|
| `Brand \| descriptor` or `Descriptor \| Brand` | 42% |
| Brand or name alone | 20% |
| Hyphen | 10% |
| Colon | 9% |
| Middle dot | 5% |
| Em dash | 5% |
| En dash | 5% |
| A plain sentence | 3% |

Length is 18 / 38.5 / 53 characters at p25, median and p75. Where a separator exists, the brand comes first about two times in three: 81 to 30 in gold, 254 to 122 across gold and silver. Brand-only titles vary by group: 36% of culture sites, 26% of studios, 22% of stores, 20% of local and service sites, 12% of product sites.

GPT-6 put an em dash in 16 of 16 titles and a slogan after it in 12. The separator is uncommon, and the slogan is the bigger problem, because a title has to work in a browser tab and a search result.

- **Put a descriptor after the brand, not a slogan.** Say what a stranger would search for: Name, a separator, then the trade or category.
- **For local businesses, include trade and place.** This is the most consistent pattern in the set. Several put trade and town before the business name, as Sam Hoult and Cacao Bean do, which suits search. Hotels often add their town.
- **Keep it under about 55 characters** so it survives in search results.
- **Inner pages lead with the page.** Page name, separator, brand: Pricing, then the company.
- **Well-known brands and galleries can use the name alone.** Analogue, Gagosian and White Cube do. An invented business should not.
- **A short meta description helps.** The corpus does not capture these. Write one plain sentence, built from the subhead.

| Business | Generated | Better (illustrative) |
|---|---|---|
| Coffee shop | Daybreak, em dash, Good coffee. Better days. | Tallow Lane Coffee, Fremantle \| Espresso and toast from 6:30 |
| Dentist | Juniper Dental, em dash, A little care. A lot to smile about. | Family Dentist in South Austin \| Vos Dental |
| Software | Stride, em dash, Good work, moving forward. | Rotamint \| Rota software for restaurants |

## Copy by genre

Evidence varies. Software, finance and consumer health have many gold sites. Law has three silver sites and no gold, and bakeries have two silver sites, so those rows lean on adjacent local services.

| Genre | Reader's worry | Lead with | Voice | Details that make it real | Watch for |
|---|---|---|---|---|---|
| Law firm | Cost, being judged, losing | Who you act for, in what, where | Institutional or plain | Practice areas in real terms, fee model, named partners, first call terms, regulator | Outcome promises. Words like premier and strategic solutions |
| Dentist, clinic | Pain, cost, shame about delay | Trade, place, hours | Plain, warm in small doses | Insurers taken, prices, emergency slots, named clinicians, parking | Smile puns. "Your smile" as the subject of every sentence |
| Accountant, adviser | Mistakes, deadlines | Who you serve and what you file | Plain or owner | Deadlines, fixed fees, forms, software used, licence | Handling the numbers so you can focus on what matters |
| Bakery, café, restaurant | Is it good, is it open | Food, place, today | Host, loud, plain or owner | Bake times, sell-out times, dishes with prices, allergens, suppliers | Cosy abstraction, rituals, community, neighbourhood gem |
| Store | Fit, quality, returns | What's current, then categories | Follows the brand | Materials, sizes, shipping thresholds, returns, stock | Lifestyle filler. Describe the object |
| Developer tool | Will it work, will it scale | What it is, for whom | Plain, sometimes opinion | Install command, benchmarks with method, licence, limits, changelog | Marketing adjectives. Show the code |
| SaaS | Switching cost, team buy-in | Category and result | Institutional, opinion, plain | Integrations by name, real UI, trial terms, security standards | Team, workflow and collaboration with nothing attached |
| Fintech, banking | Is my money safe | Rate, product, protection | Institutional, sometimes playful | Rates with dates, who holds the money, fees, regulator text | Vague ease. Legal text is part of the design |
| Consumer health | Does it work, is it safe | What it does, cost, who's eligible | Plain, reassuring | Clinician names, what's tested, price, insurance, disclaimers | Outcome claims. Before and after promises |
| Hotel | Is it worth it | Place and season | Host | Room counts, distances, what's included, what's nearby, policies | Escape, sanctuary, curated experiences |
| Studio, agency | Will they get us | What you do, or the work | Opinion, institutional | Named clients, scope, results, who does the work | Ideas, stories, brands that matter |
| Portfolio | Are they good, are they available | Name, trade, availability | Owner | Named projects, role, year, contact | Passionate. Philosophy before work |
| Theatre, festival, museum | What's on, can I go | Dates, names, tickets | Plain, sometimes loud | Dates, venues, prices, access, age guidance, travel | Mood lines where the programme should be |
| Nonprofit | Where does the money go | Verb, beneficiary, scale | Plain, serious | Named programmes, audited numbers, share reaching people, registration | Sentimental language about the people served |

### The same slots in three genres

All invented. Notice how little they share beyond structure.

| Slot | Employment law firm, Sheffield | Postgres search extension | Bakery, Ballarat |
|---|---|---|---|
| H1 | Employment solicitors for staff in South Yorkshire | Full-text search inside Postgres | Sourdough and rye, baked overnight in Ballarat |
| Subhead | We act for employees facing dismissal, redundancy or discrimination. The first 30-minute call is free. | Quarry is an extension that replaces your search cluster. Add one index and query it with SQL. | Open Wednesday to Sunday from 7 until we sell out, usually around 1. |
| Button | Book a free 30-minute call | Read the docs | See this week's bread |
| Second action | How our fees work | `CREATE EXTENSION quarry;` | Order for tomorrow |
| Proof | Named solicitors with years qualified, regulator number from the client, fixed fee from a stated price | Benchmark with row count, hardware and method. Licence. Named limits | How many loaves a day, the mill's name, the age of the oven |
| Odd fact | We never act for employers | No support for geospatial queries yet | Closed Monday and Tuesday so the starter gets fed by someone rested |
| FAQ question | What if I've already signed something? | Does it work on managed Postgres? | Do you have anything gluten free? |
| Footer duty | Regulator line, complaints, company number | Licence, GitHub, status, changelog | Address, hours, allergen statement |

The law firm never jokes and leads with who it acts for, since a person who has just lost a job is reading it. The developer page is half code, because developers trust what they can run. The bakery needs the reader to know today's opening hours, and its charm comes from a true fact about the work.

## Sentence shapes to avoid

The quoted lines are real baseline output. Each shape can be used well in the right hands, as the notes show. The problem is frequency, and the fact that models use these shapes to avoid having anything to say.

| Shape | Baseline example | Why it reads as generated | Do this instead |
|---|---|---|---|
| Paired fragments | `Good coffee. Better days.` | The rhythm stands in for content. The nouns can be swapped for any business. 14 of 15 GPT-6 H1s | One plain sentence with a noun only you sell. Keep a pair only if each half is a fact or claim, as Ramp's and mymind's are |
| A little, a lot | `A little care. A lot to smile about.` | Diminutive warmth with no object. In 13 of 16 GPT-6 runs | Say the actual quantity: 45 minutes, two chairs |
| Adverb plus participle | `Thoughtfully sourced. Crafted with care.` | Claims a process and names none | Name the source, the temperature, the hours, the person |
| Denied alternative | `More than coffee. A little connection.` Also not just X, but Y, and `Less clinical. More comfortable.` | Rebuts something nobody claimed | State the second half alone. Levels and Brilliant each use a light version once. Twice on a page is a tic |
| The reveal | `Late projects aren't slow. They're waiting.` | A staged correction of the reader. Opus's favourite move | State the fact: most project delay is time spent waiting on someone |
| Deadpan refusal | `Nobody will explain the coffee.` | Attitude standing in for information. Opus runs at 2.1 per 1,000 words | Keep one refusal, and make it a real policy |
| Punchline tag | `You sat down. That was the hard part.` | A joke bolted to the end of a fact. Tiring by the third | End on the fact |
| Theme carried into labels | `Fares`, `Arrivals`, `Ask at the information desk` | A metaphor costume in words. The reader must translate | Pricing, Customers, Help. Drop the metaphor from everything people use to navigate |
| Find your, your new | `Find your happy place`, `Meet your new usual` | Addresses the reader as a lifestyle. 31 uses of "find your" in GPT-6 | Name the thing: See the menu |
| Stub origin story | `We started daybreak with a simple idea` | Every company's story, with the facts removed | A date, a person, an event |
| Abstract noun stack | `A legacy of trust. A commitment to what's next.` | Purpose, perspective, clarity, journey, chapter: no object in sight | Replace each abstract noun with a thing you could photograph |
| Universal coverage | `For all the ways you smile.`, `Room for every kind of team.` | Refuses to choose a reader | Pick one: for agencies with client work |
| Stat with a punchline | `One Shared commitment. You.` | A sentimental beat in a data row. Readers feel the manipulation | Real numbers, or no row |
| Stock section lines | `Good questions. Simple answers.` in 5 of 32 runs. `Come as you are.` in 4 | Same phrases recur between unrelated briefs | The literal heading: Frequently asked questions |
| Empty closing invitation | `Your next chapter starts here.`, `Let's find your way forward.` | The end of the page asks for nothing concrete | Restate the real offer: Book a free 30-minute call |
| Em dash habit | 3.8 per 1,000 words in GPT-6, 0.07 in Opus | A well-known machine signature | Use a full stop or a comma |

### Words to treat as questions

`lint.mjs` flags a list including seamless, elevate, unlock, empower, effortless, world-class, cutting-edge, everything you need, ready to get started, your journey, at the heart of, and we believe. Each hit asks whether you chose the word.

Real sites do use some of them. Astral and Asana use supercharge, and Stripe closes a page by asking if you're ready to get started. They get away with it because a real product and real numbers sit next to the word. You may keep one if the line beside it is specific. A page built from these words has nothing to stand on.

### Prose habits that also give it away

- Every sentence the same length, usually short.
- Triplets everywhere: fast, simple and secure.
- A one-word sentence for effect at the end of every paragraph.
- "We" as the subject of every sentence, where the customer never appears.
- Questions as headings in every section.
- Identical sentence patterns in every card of a row. Real items differ, so let their sentences differ.

## Self-check

Run this on your finished copy. Print the page's text first, then read it as a stranger. `lint.mjs` covers the phrase list, and these cover what it cannot see.

```bash
# Headings and buttons in page order, for checks 1 and 2.
# Approximate: it stops at inline tags and misses multi-line headings, so read the source for those
grep -oE '<(h1|h2|h3|button)[^>]*>[^<]+' index.html | sed 's/<[^>]*>//'
# Fingerprint counts. Any number above 1 or 2 needs a reason
grep -oiE 'a little|find your|thoughtful|crafted|with care|nobody|nothing|let.s ' index.html | sort | uniq -c
```

1. **Stranger.** Read only the H1 and subhead. Can you say what is sold, to whom and where?
2. **Headings alone.** Read every heading in order. Do they say what each section holds?
3. **Swap.** Replace the name with a competitor's. Which lines still work? Rewrite those, or make them plainer.
4. **Column check.** Pick five lines at random. Is each plain or specific? Delete or rewrite any that are decorated.
5. **Sheet.** Does every name, number and place trace to your business sheet? Multiply the numbers out.
6. **Phone call.** What would a customer still have to call to find out? Put it on the page: price, hours, parking, lead time, what happens next.
7. **Labels.** Do nav, buttons, plan names and form labels use the plain word?
8. **Shape count.** How many paired fragments, reveals, and punchline endings? Allow one or two on a page.
9. **Wit budget.** Count the jokes. Keep at most one. Remove any near a failure, a price or a form.
10. **First thought.** Is the name or headline the first one you thought of? If so, try again.
11. **Proof.** Is any real person, company, publication or review site attached to something invented? Remove it.
12. **Punctuation.** Any em dashes in the copy? Is the page title a descriptor rather than a slogan?
13. **Read aloud.** Would someone at this business say this to a customer? Change what they wouldn't.
14. **Handoff.** List every invented name, number, quote and policy in your final note.
