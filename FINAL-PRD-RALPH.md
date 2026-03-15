# InSync Physical Therapy Website PRD

## RALPH Format

This document uses a practical `RALPH` structure for execution:

- `R` = Reality
- `A` = Audience
- `L` = Language
- `P` = Pages
- `H` = Handoff

It consolidates the full project context from the provided files into one build-ready source of truth.

---

## R — Reality

### 1. Business Objective

InSync Physical Therapy needs a modern, minimal, high-trust clinic website that functions as a lead generation engine for New York City patients.

The site is not a scheduling platform.

The site must:

- establish clinical credibility quickly
- generate inbound leads from Google Search and local SEO
- reduce dependence on Zocdoc paid acquisition
- clearly explain services, conditions treated, and differentiators
- convert visitors into appointment requests

Core comprehension requirement:

- the first screen should explain the clinic within roughly `5 seconds`
- users should immediately understand what InSync is, where it is located, what it treats, and how to contact it

### 2. Business Context

Current acquisition sources:

- referrals
- Zocdoc
- Google reviews

Target future acquisition sources:

- organic Google search
- branded search
- local SEO
- AI-assisted discovery tools like ChatGPT, Perplexity, Google SGE-style search, and voice assistants

### 3. Core Conversion Model

The ideal user journey:

1. User searches for a problem or provider in NYC
2. User lands on a relevant page
3. User immediately understands what InSync does, where it operates, and why it is credible
4. User sees services, injuries treated, insurance signals, clinician authority, and locations
5. User submits a lead form
6. Reception follows up to book evaluation

### 4. Strategic Positioning

This site should not feel like:

- a generic wellness studio
- a PT mill
- a tech startup pretending to be healthcare
- a brochure site full of vague copy

It should feel like:

- premium but clinical
- minimal but specific
- local and credible
- performance-aware
- trusted by active New Yorkers

### 5. Competitive Insight

The project references and audits point to a clear market opportunity:

- many PT sites use vague wellness language
- many clinics fail to show trust signals in the first screen
- many sites are weak at local SEO and problem-based messaging
- athletes and active patients want clinicians who understand training, not clinicians who just tell them to stop
- New Yorkers care about insurance, neighborhood convenience, privacy, one-on-one care, and specificity

### 6. Non-Negotiables

- mobile-first
- fast load
- clear CTA hierarchy
- semantic HTML and structured data
- no bloated UI
- no generic “care/wellness/health” messaging without specifics
- every page must move the user toward `Request Appointment`

### 7. Brand Reality From The Actual Assets

The PDFs do contain enough information to define the core website brand direction.

What is now clear:

- the business card establishes the intended active logo system more clearly than the broader brand deck
- the 20-page brand PDF contains multiple logo concepts, legacy marks, and alternate color explorations
- the website should not treat all of those options as equally valid

Working conclusion for the build:

- use the logo system shown on the separate business card PDF as the primary website logo reference
- treat the older green-and-blue dotted `inSync` mark as legacy and do not use it on the site
- treat the deck's `New Logo V1` as exploratory, not primary
- treat the deck's `New Logo V2` as the closest match to the business card and therefore the correct visual direction

This is also consistent with the most recent meeting note:

- the business card logo was explicitly confirmed again as the correct logo

---

## A — Audience

### 1. Primary Audience

Primary target users:

- New York City adults roughly age 20 to 50
- young professionals
- active individuals
- recreational athletes
- office workers with pain, mobility, or overuse issues

### 2. Secondary Audience

- post-surgical patients
- chronic pain patients
- runners
- combat sports athletes and grapplers
- people transitioning from rehab back into strength training

### 3. Geographic Focus

Primary geography:

- Brooklyn
- Bryant Park
- broader Manhattan and NYC search intent

Neighborhood relevance matters. Search behavior often includes hyperlocal phrasing such as:

- physical therapy brooklyn
- physical therapist bryant park
- PT near Grand Central
- sports rehab Park Slope
- back pain treatment NYC

### 4. Audience Pain Points

From the research files, the recurring pain points are:

- not knowing which clinic is actually right for their injury
- distrust of chain clinics and PT mills
- frustration with short or impersonal sessions
- concern about whether insurance is accepted
- fear that providers will tell them to stop all activity
- confusion about whether a clinic works with athletes or active adults
- wanting a PT experience that is specific, efficient, and credible
- concern about being handed off to interns or rushed through high-volume treatment
- concern about lack of privacy in open-gym treatment environments

### 5. High-Intent Segments

The highest-converting audience segments are likely:

- sports injury patients
- back, knee, shoulder, and post-surgical patients
- active professionals who want to get back to training quickly
- patients looking for one-on-one, high-attention care

### 6. Athlete-Specific Opportunity

The BJJ and combat-sports research identifies a distinct trust wedge:

- athletes want providers who understand their sport
- they prefer modification and intelligent progression over blanket rest
- they respond to language around return to performance, movement analysis, and strength transition

This does not mean the site should become a combat-sports niche site.

It means the brand should communicate:

- sport-aware rehabilitation
- performance-informed care
- rehab-to-strength continuity

---

## L — Language

### 1. Messaging Principle

The website must communicate clearly within five seconds:

- what this clinic is
- where it is
- who it helps
- what problems it treats
- what action to take next

### 2. Core Brand Voice

The language should be:

- professional
- clinical
- minimal
- direct
- outcome-oriented
- locally relevant

Avoid:

- fluffy wellness copy
- startup jargon
- abstract motivational language
- generic claims with no proof

### 3. Core Positioning Statement

Recommended master positioning:

`Physical Therapy in NYC for orthopedic rehab, sports injury recovery, chronic pain treatment, and return-to-performance care.`

### 4. Hero Messaging Direction

Recommended homepage headline direction:

`Physical Therapy in NYC That Gets You Moving Again`

Recommended subheadline direction:

`Orthopedic rehabilitation, sports injury recovery, chronic pain treatment, and post-surgical care in Brooklyn and Bryant Park.`

### 5. Messaging Pillars

All page copy should reinforce these five pillars:

1. Specific problems treated
2. Clinical authority
3. Personalized one-on-one care
4. Advanced diagnostics and movement analysis
5. Clear path from rehab to full strength and activity

### 6. Language That Matches Real Search Behavior

The site should use real user language and tags around:

- back pain
- knee pain
- ACL rehab
- meniscus tear
- shoulder pain
- rotator cuff
- chronic pain
- post-surgical rehab
- sports injury
- running injury
- movement analysis
- strength and conditioning
- physical therapy brooklyn
- physical therapy bryant park

### 7. Trust Language

The first screen and repeated trust sections should explicitly reference:

- `9+ years experience` if verified
- `Doctor of Physical Therapy`
- `Touro University`
- accepted insurance
- Google reviews
- Brooklyn and Bryant Park locations
- ForceDecks / VALD performance testing if confirmed asset spelling is `ForceDecks`
- one-on-one care if that claim is operationally true
- a non-PT-mill positioning without using defensive or negative competitor language

### 8. Differentiation Language

The differentiators should be framed as:

- personalized treatment plans
- movement and strength diagnostics
- rehab that supports return to activity
- continuity into performance training with Piero Alessi

### 9. SEO and AI Readability Rules

Copy must be written for both humans and machines:

- descriptive H1s
- specific service names
- location-rich metadata
- FAQ sections
- schema markup
- short supporting paragraphs under clear headings

### 10. Copywriting Guardrails

- every section needs a clear user benefit
- no section should exist just to “fill the page”
- write problem-first, then solution, then trust, then CTA
- use local and condition-based phrasing naturally
- use patient language like `one-on-one`, `sports-specific`, `return to training`, and `insurance accepted` where accurate
- avoid slang-heavy phrasing on core pages, but use it selectively in FAQs or future niche landing pages

---

## P — Pages

### 1. Sitemap

Recommended site architecture:

1. Home
2. About
3. Services
4. Locations
5. Insurance & Reviews
6. Contact / Request Appointment

Recommended utility content to support SEO and AI discovery:

- FAQ content embedded across core pages or in dedicated sections
- condition clusters inside Services

### 2. Navigation

Primary nav:

- Home
- Services
- Locations
- Insurance
- About
- Contact

Persistent CTA:

- `Request Appointment`

Simple-nav variant supported by meeting notes:

- Home
- Treatments / Services
- Team
- Locations
- Contact

Implementation rule:

- keep navigation light
- if space becomes tight on mobile, keep `Request Appointment` as the persistent CTA rather than a standard nav item

### 3. Homepage Structure

#### Hero

Must include:

- clear H1
- subheadline with services + location
- primary CTA
- visible phone contact or call action
- doctor image if available
- at least 3 trust signals

Hero copy rule:

- keep the text short and literal
- let imagery and layout carry weight instead of long explanation

#### Trust Bar

Examples:

- 9+ Years Experience
- Doctor of Physical Therapy
- Touro University
- Brooklyn + Bryant Park

#### Services Overview

Feature:

- Orthopedic Rehabilitation
- Sports Injury Recovery
- Chronic Pain Treatment
- Post-Surgical Rehabilitation
- Manual Therapy
- Movement Analysis
- Strength & Conditioning

#### Technology Section

Feature VALD / ForceDecks as a differentiator:

- strength diagnostics
- movement testing
- return-to-performance benchmarking

#### Insurance Section

Insurance logos or a clean accepted-insurance grid.

Presentation preference from meeting notes:

- avoid cluttered or oversized insurance-logo walls
- if logos feel visually messy, use a restrained text-forward list or simplified grid

#### Reviews Section

Google review highlights with star/rating support if available.

#### Locations Section

Brooklyn and Bryant Park with concise context.

#### Final CTA

Short, direct, repeated:

`Request Appointment`

### 4. About Page

Goals:

- build authority
- humanize the clinic
- explain care philosophy

Include:

- Dr. Hassan bio
- credentials
- treatment philosophy
- one-on-one care model
- performance-minded rehab
- team section including Piero Alessi

### 5. Services Page

This is the most important SEO page after Home.

Structure it by user problem and treatment outcome, not vague categories.

Recommended service blocks:

- Orthopedic Rehabilitation
- Sports Injury Rehabilitation
- Chronic Pain Treatment
- Post-Surgical Rehabilitation
- Manual Therapy
- Movement Analysis
- Strength and Conditioning Transition

Each service block should contain:

- service title
- one-sentence outcome
- 2 to 4 supporting bullets
- who it is for
- CTA
- where useful, a short note on how treatment is personalized for active adults, runners, or athletes

### 6. Conditions Layer Inside Services

To improve search relevance, services content should mention common high-intent conditions such as:

- back pain
- knee pain
- shoulder pain
- ACL rehab
- meniscus injuries
- rotator cuff injuries
- labral issues
- plantar fasciitis
- post-operative recovery

### 7. Locations Page

Must answer:

- where the clinic is
- which neighborhoods it serves
- how to request an appointment

Include:

- Brooklyn location
- Bryant Park location
- neighborhood proximity language
- transit or convenience cues if available
- lead CTA on each location block

### 8. Insurance & Reviews Page

Purpose:

- remove friction
- answer practical questions
- build social proof

Include:

- accepted insurance list or logos
- note on verification process if needed
- Google reviews
- patient trust copy
- FAQ around insurance and evaluation
- reassurance around session quality, individual attention, and clinic experience if operationally accurate

### 9. Contact / Request Appointment Page

This is the conversion endpoint.

Must include:

- short and low-friction form
- contact details
- clear expectation of follow-up
- location selection
- condition/injury dropdown or free-text field

Recommended fields:

- name
- phone
- email
- preferred location
- primary concern
- insurance provider
- message

Operational rule:

- the page should clearly frame this as an appointment request, not instant booking
- clinic staff verifies insurance and follows up manually

### 10. FAQ Requirements

Suggested FAQ set:

- Who should see a physical therapist?
- What injuries do you treat?
- Do you accept insurance?
- Do I need a referral?
- How long is a session?
- Which NYC locations do you serve?
- Do you work with athletes?
- Can I continue training while in physical therapy?

### 11. Piero Alessi Integration

Piero should not be positioned as a side note.

He is a strategic differentiator for the rehab-to-performance story.

Use him in:

- About page team section
- Services page strength and conditioning transition block
- optional homepage section on return to strength

Messaging direction:

- world-class martial arts background
- NASM certification
- post-rehab progression
- structured return to strength and performance

Strategic note:

- combat-sport and athlete credibility is a real trust wedge
- this should inform supporting copy and future niche landing pages
- it should not dominate the main-site positioning

### 12. Content Priorities

Page priority order for build:

1. Home
2. Services
3. Contact
4. About
5. Insurance & Reviews
6. Locations

---

## H — Handoff

### 1. Build Goal

The build should produce a fast, minimal, trustworthy lead-generation website that is easy to scan, easy to maintain, and optimized for both local SEO and AI extraction.

### 2. Design Direction

Design should take cues from:

- minimal clinical websites
- premium editorial restraint
- strong spacing and typography
- high-contrast CTA structure

Not decorative. Not sterile. Not trendy.

The visual system should feel:

- clean
- quiet
- premium
- grounded

### 3. Brand Inputs Available

Confirmed brand asset inputs reviewed:

- logo and brand identity PDF exists
- business card PDF exists
- headshots exist per the PRD notes, though not present in the visible file list

### 4. Confirmed Brand Direction From The PDFs

The active website brand direction should follow the separate business card and the `New Logo V2` section of the brand deck.

Primary recommendation:

- use the `New Logo V2` symbol plus `InSync` wordmark as the site logo system
- use the business card lockup as the final authority when the deck and business card conflict

Do not use on the website:

- the old green dotted `inSync` logo
- the `New Logo V1` symbol
- the full exploratory palette as equal UI colors

Reason:

- the business card is the clearest real-world applied asset
- its mark matches `New Logo V2`, not the legacy logo and not `V1`
- this removes ambiguity for implementation

### 5. Logo System Decision

Primary logo for website header/footer:

- `New Logo V2` icon on the left
- `InSync` wordmark on the right
- dark navy text on light backgrounds
- white wordmark on navy backgrounds

Secondary usage:

- icon-only mark for favicon, social avatar, form success states, and small UI accents

Naming guidance:

- visual logo lockup can use the `PHYSIOTHERAPY & FITNESS` subline if needed in brand contexts
- website messaging, metadata, and SEO should continue using `InSync Physical Therapy`

This split is intentional because the business goal and all research docs are centered on physical therapy discovery, not a broader fitness brand promise.

Final website recommendation:

- keep the website visually aligned with the business card and `New Logo V2` artwork
- use a light, clean, white-first interface for the site
- use the logo artwork as branding, but keep the written website language plain and literal
- do not lean on `Physiotherapy & Fitness` as the main public-facing descriptor in page copy
- use `InSync Physical Therapy` as the primary written brand name across navigation, headings, metadata, schema, and CTAs

### 6. Confirmed Palette

The deck exposes a wide palette, but the website should use a narrowed subset based on the business card and `New Logo V2`.

Core colors to use in the website UI:

- `SpaceNavy` `#003D59` as the primary brand dark
- `LuxBlue` `#00262A` as a deeper support/background tone
- `NeoBlue` `#0EC5E6` as the main accent
- `perfectwhite` `#FFFFFF` as the dominant light canvas

Palette colors present in the deck but not recommended as core website colors:

- `HotPurple` `#2A338F`
- `redsea` `#780001`
- `sunnyred` `#F63700`
- `boboragne` `#FF8C00`

Those colors read as exploration colors from the identity deck, not as the most credible direction for a clinical website.

Recommended web usage:

- background base: white
- dark sections: SpaceNavy
- headings/body emphasis: SpaceNavy or LuxBlue
- CTA accent and small highlights: NeoBlue
- avoid bright orange, red, and purple in the main website UI

### 7. Confirmed Typography

The brand deck defines:

- `Articulat CF` as primary
- `Denton` as secondary

Use them differently on the site:

- `Articulat CF` for navigation, headings, UI labels, trust badges, forms, and body copy
- `Denton` only as a restrained editorial accent for occasional pull quotes, testimonial highlights, or a short campaign phrase

Typography guidance from the assets:

- primary visual voice is clean, geometric, modern, and high-legibility
- the business card and logo applications rely on the sans-serif system, not the serif
- the serif should not dominate page structure

### 8. Confirmed Layout Direction

The visual assets point to a specific layout language:

- strong whitespace
- left-aligned hierarchy
- large, clean headlines
- navy-and-white contrast blocks
- sparse use of bright cyan accents
- editorial compositions with clean image crops
- premium clinical restraint rather than consumer-tech energy

Website layout implications:

- large hero with disciplined copy width
- sections separated by calm spacing, not heavy borders
- white as the default canvas
- navy used to create depth and anchor sections
- photography should feel real, human, and clinical, not stock-wellness
- motion should remain subtle and structured

Additional layout guidance from meeting notes:

- favor a scrolling, image-led page rhythm
- keep section descriptions short
- prefer visual communication over dense explanatory copy
- a sticky contact treatment can be used if it stays clean and unobtrusive

### 9. Brand Inconsistencies Still Present In The Files

The docs are much clearer now, but there are still real conflicts that should be acknowledged inside execution:

- brand deck uses `Physiotherapy & Fitness` while the project docs consistently use `Physical Therapy`
- business card PDF contact details differ from some mockup contact details inside the deck
- the deck includes placeholder/sample names such as `Maria John`
- the deck includes exploratory domains and emails that do not fully match the business card
- some brochure mockups reference a Lexington Avenue address that may not match the current Brooklyn/Bryant Park plan

For the build, use this hierarchy when files conflict:

1. business objective and PRD for positioning
2. business card PDF for active logo lockup and real contact styling
3. `New Logo V2` pages for brand system
4. the rest of the brand deck as exploratory or mockup reference only

Final execution preference:

- website UI should be light, simple, and highly readable
- copy should be plain-English and AI-friendly
- avoid brand jargon, abstract taglines, and decorative language
- the site should read like a high-trust clinic website, not a fashion brand deck
- images should do a large share of the communication workload

### 10. Visual and UX Requirements

- mobile-first responsive design
- immediate above-the-fold clarity
- repeated CTA placement
- scroll-friendly section rhythm
- lightweight assets
- no overloaded navigation
- visible trust markers early

### 11. Technical Requirements

- semantic HTML structure
- page titles and meta descriptions for each page
- schema markup
- fast performance with limited JavaScript
- compressed images
- crawlable content
- accessible form labels and focus states
- privacy policy
- terms of service
- healthcare disclaimer / HIPAA-aware contact disclaimer on forms

### 12. Technical Stack And Infrastructure

Confirmed / proposed implementation stack from project direction:

- frontend framework: `Next.js`
- UI library: `MUI`
- hosting target: `DigitalOcean`
- DNS / proxy layer: `Cloudflare`
- email provider: `Resend`

Architecture guidance:

- prefer a mostly static marketing site with minimal server logic
- use server actions or API routes only for lead form handling
- no database is required for MVP unless file uploads force it
- avoid unnecessary complexity such as auth, dashboards, or patient portals in phase one

Implementation note:

- the website should not lean too hard into generic `bento` patterns if they reduce clarity
- use structured cards and grids where useful, but keep the layout clinical and simple

### 13. Required Schema

At minimum:

- `MedicalBusiness`
- `Physician` or appropriate provider schema if accurate
- `LocalBusiness`
- `FAQPage`

Suggested base schema:

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "InSync Physical Therapy",
  "medicalSpecialty": "PhysicalTherapy",
  "areaServed": "New York City",
  "availableService": [
    "Orthopedic Rehabilitation",
    "Sports Injury Rehabilitation",
    "Chronic Pain Treatment",
    "Post-Surgical Rehabilitation",
    "Movement Analysis",
    "Strength and Conditioning"
  ]
}
```

### 14. Metadata Direction

Homepage title example:

`Physical Therapy NYC | InSync Physical Therapy`

Homepage meta description example:

`Orthopedic rehabilitation, sports injury recovery, chronic pain treatment, and post-surgical physical therapy in Brooklyn and Bryant Park. Request an appointment with InSync Physical Therapy.`

### 15. Conversion Requirements

Every page should include at least one strong CTA.

Primary CTA:

- `Request Appointment`

Secondary CTA options:

- `Call the Clinic`
- `View Services`
- `Check Insurance`

### 16. SEO Strategy

Primary keyword themes:

- physical therapy NYC
- physical therapy Brooklyn
- physical therapy Bryant Park
- sports injury physical therapy NYC
- orthopedic rehab NYC
- chronic pain physical therapy NYC
- post surgical physical therapy NYC

Secondary keyword themes:

- back pain treatment NYC
- knee pain physical therapy Brooklyn
- shoulder rehab Manhattan
- ACL rehab NYC
- movement analysis NYC
- return to sport physical therapy NYC

Additional keyword targets from the supplied PRD:

- sports injury physical therapy NYC
- knee pain physical therapy
- shoulder injury rehab

SEO execution rules:

- each core page should target one primary intent cluster
- homepage should target clinic + city intent
- services page should target service + injury intent
- locations page should target neighborhood + clinic intent
- insurance page should target practical decision-making intent

Useful secondary language from research for future content, FAQs, and landing pages:

- `one-on-one physical therapy`
- `not a PT mill`
- `sports-specific physical therapy`
- `return to training`
- `ACL rehab`
- `rotator cuff`
- `meniscus tear`
- `labral tear`
- `plantar fasciitis`
- `private treatment`
- `accepts insurance`

Local vocabulary to work into SEO copy naturally where relevant:

- Brooklyn
- Manhattan
- Bryant Park
- Midtown
- Park Slope
- Grand Central
- Lower Manhattan
- UWS / UES only if location relevance is genuine

### 17. Lead Form Strategy

The lead form should prioritize completion, not complexity.

Form UX rules:

- keep it short
- show reassurance text
- confirm turnaround expectation
- avoid multi-step flows unless required
- state clearly that insurance will be verified before scheduling

Recommended fields:

- name
- email
- phone
- insurance provider
- injury / reason for visit

Optional advanced fields:

- upload insurance card

Operational note:

- file upload should only be added if it does not create unnecessary build or compliance overhead for MVP
- a simple text field for insurance plus manual follow-up may be the better first release

Recommended confirmation copy:

`We’ll review your request and contact you shortly to schedule your evaluation.`

### 18. Email Workflow

Recommended email flow:

1. patient submits contact form
2. admin notification is sent
3. patient receives confirmation email
4. clinic verifies insurance and contacts patient manually

Confirmed / proposed tool:

- `Resend`

Confirmed admin email for notifications:

- `insyncpt.manager@gmail.com`

Recommended patient confirmation copy:

`Thank you for contacting InSync Physical Therapy. A member of our team will reach out shortly.`

### 19. Proof Stack

The site’s proof hierarchy should be:

1. clinician credentials
2. clear services and conditions treated
3. accepted insurance
4. Google reviews
5. locations
6. diagnostics technology
7. rehab-to-strength continuity with Piero

### 20. Insurance Strategy

Confirmed accepted in-network insurance list provided for the PRD:

- Fidelis
- Medicare
- HIP
- NYC EPP
- GHI
- Aetna
- Cigna
- United Healthcare
- Blue Cross Blue Shield

Implementation guidance:

- show these in a clean grid, not an overdesigned carousel
- add a short note that benefits are verified before scheduling when needed
- do not overpromise coverage eligibility on the site
- be clear and practical about insurance because cost and acceptance are major trust factors in patient research

Asset status:

- standardized insurance badge files have been prepared and grouped for implementation
- current badge asset folder: `assets/logo-badges/`

Carousel / grid implementation rule:

- use fixed-height cards with centered logos
- do not stretch each logo to identical visual width
- preserve aspect ratio and allow natural whitespace so the section stays clean

### 21. Technology And Equipment Positioning

Additional technology and methodology mentioned in meeting materials:

- `Normatec`
- `VALD Force Plates`
- `VALD Dynamo`
- `HumanTrak`
- `Oxefit`
- `Graston Technique`
- `NASM` certification in relation to Piero

Usage rule:

- include technology only when tied to a patient-facing benefit
- group these under a simple assessment / recovery / performance framing
- avoid turning the site into a machine catalog

Badge/logo assets currently available for this section:

- `Normatec`
- `VALD Force Plates`
- `Oxefit`
- `Graston`
- `NASM`

### 22. Image And Media Direction

Image guidance from the meeting:

- prioritize real clinic and treatment imagery
- keep images bright, clean, and modern
- crop ceilings and excess dead space when needed
- improve lighting and clarity when needed
- remove visual clutter or distractions when editing
- do not use the former female staff member's face in published imagery
- hands-on treatment scenes and cropped treatment imagery are acceptable

Photo principle:

- credibility beats drama
- clean documentation beats generic lifestyle imagery

Current asset-library note:

- reviewed media library is organized under `assets/hassan-pt/`
- per-file grading and rename inventory live in `assets/hassan-pt/asset-review.md` and `assets/hassan-pt/asset-review.csv`
- strongest current website-safe assets are the male-patient assessment images and the prone treatment images where the female patient's face is not visible
- workout demo videos are lower-priority for the main website and better suited to future social or supporting use

Badge asset review result:

- all prepared badge files are currently `PNG`
- all are `RGBA`
- all are `400x200`
- this is suitable for a clean carousel or badge grid
- some logos have naturally different internal widths, so layout should normalize the container, not distort the image

### 23. Performance Goals

Target performance direction:

- page load under `1.5s` where practical
- LCP under `2s`
- CLS under `0.1`
- TTFB under `500ms` where infrastructure allows

### 24. Risks to Avoid

- vague copy that hides what the clinic actually does
- weak local relevance
- generic stock wellness aesthetic
- cluttered homepage
- too little trust above the fold
- overemphasis on tech without outcomes
- making Piero feel disconnected from the clinic offer
- mixing logo versions across the site
- using the brand deck's exploratory colors too literally in the production UI
- cluttered insurance presentation
- long explanatory paragraphs that slow scanning
- dim, messy, or poorly cropped clinic imagery
- making one-on-one or privacy promises the clinic cannot consistently deliver
- over-indexing the site toward combat sports on core pages at the expense of broader patient conversion

### 25. Recommended Execution Sequence

Phase 1:

- lock the website to the business-card / `New Logo V2` brand system
- implement the narrowed brand palette and typography rules above
- confirm exact service naming
- confirm insurance list
- confirm clinician credentials and years of experience

Phase 2:

- write final homepage copy
- write services page with problem-based structure
- write About, Contact, Insurance, and Locations pages
- write FAQ copy
- select and prep final photo set before final design lock

Phase 3:

- build responsive site
- implement schema and metadata
- integrate form handling
- optimize performance

Phase 4:

- QA mobile usability
- QA copy clarity
- QA CTA visibility
- QA local SEO signals
- QA accessibility basics
- QA image consistency and first-screen clarity

### 26. Development Setup

Recommended repo and environment setup:

- GitHub owner: `Fg111657`
- GitHub repository: `insyncmain_1`
- GitHub repository URL: `https://github.com/Fg111657/insyncmain_1`
- primary branches: `main` and `development`
- configure environment variables for `Resend`
- connect deployment target to `Cloudflare`
- deploy app to `DigitalOcean`
- keep badge/logo assets organized under `assets/logo-badges/`
- keep reviewed clinic media organized under `assets/hassan-pt/`

Current project-state note:

- the repository is intended for version control, but the actual website build has not started yet
- do not add deployment automation until the first application scaffold is in place
- keep the current docs-and-assets state clean so the first build commit is intentional

Recommended version-control workflow once development starts:

1. create or sync local branch from `main`
2. create a feature branch for the current task
3. commit locally in small, clear increments
4. push feature branch to GitHub
5. merge into `development` for staging review
6. merge `development` into `main` for production deployment

Recommended local update workflow:

```bash
git checkout main
git pull origin main
git checkout -b feature/<task-name>
```

Recommended push workflow:

```bash
git add .
git commit -m "Describe the change"
git push -u origin feature/<task-name>
```

Recommended deploy flow once the app exists:

- `development` branch can be used for staging deployment on the server
- `main` branch should represent production-ready state
- Cloudflare should point the live domain to the production server only after the app is deployed and tested
- the server should pull from GitHub rather than receiving ad hoc file uploads

Server / Cloudflare implementation guidance:

- host the app on the DigitalOcean server
- keep DNS managed in Cloudflare
- point `insync-pt.com` and `www.insync-pt.com` through Cloudflare to the server IP
- use Cloudflare SSL in front of the origin and install a valid certificate on the server
- store deployment secrets and API keys on the server, not in the repo
- document the deploy command once the stack is scaffolded, ideally as a single pull-and-restart flow

MVP technical exclusions:

- no Supabase
- no patient portal
- no online scheduling system
- no dashboard

### 27. Team And Content Inputs Still Needed

Still useful to confirm:

- TJ bio
- whether Mustafa should appear publicly on the site
- final approved headshots
- additional clinic and treatment photos
- final exported logo files

### 28. Open Items To Confirm Before Final Build

- exact insurance carriers to display
- final doctor bio details
- verified review count and star rating
- exact spelling and branding of the VALD / ForceDecks technology section
- final headshots and image assets
- final public-facing email address
- whether combat-sport specificity should remain implicit or become an explicit niche landing angle later

### 29. Confirmed Business Details

Confirmed public business details provided for the build:

- Brooklyn office: `1081 Gates Ave, Brooklyn, NY 11221`
- NYC office / Bryant Park: `55 W 39th St, 3rd Floor, Suite 303, New York, NY 10018`
- public phone: `929-419-4643`
- public domain: `insync-pt.com`

Website implementation rule:

- use these as the authoritative public-facing details unless newer information replaces them

### 30. Confirmed Business Understanding

What the business is:

- a high-trust local physical therapy clinic in NYC
- focused on lead generation, not digital scheduling
- serving active adults, professionals, athletes, and post-surgical patients

What matters most commercially:

- ranking for local search
- building trust quickly
- showing accepted insurance
- converting visits into qualified inquiries
- reducing dependence on Zocdoc over time

What creates real competitive advantage:

- clean clinical positioning instead of vague wellness branding
- rehab-to-performance continuity
- athlete-aware credibility without becoming a niche-only brand
- simple, direct copy that matches how patients actually search
- a bright, image-led, low-friction experience that is easy to scan fast
- practical trust signals around insurance, individual attention, and treatment quality
- speaking like real NYC patients without making the brand sound overly casual

### 31. Final Website Naming Recommendation

Use this naming structure consistently:

- brand name in copy: `InSync Physical Therapy`
- domain display: `insync-pt.com`
- logo artwork: use the approved logo lockup from the business card / `New Logo V2`

Do not make the site copy revolve around:

- `Physiotherapy & Fitness`
- conceptual brand language
- abstract slogans that weaken search clarity

Reason:

- `InSync Physical Therapy` is clearer for patients
- it is stronger for local SEO
- it is easier for AI tools to classify correctly
- it avoids jargon and keeps the offer obvious in the first few seconds

### 32. Final Product Definition

The InSync website should behave like a high-trust local acquisition funnel for modern NYC physical therapy.

It should communicate:

- clinical authority
- specificity
- local relevance
- personalized care
- athlete-aware progression

If executed correctly, a visitor should understand within seconds:

- what InSync does
- who it helps
- where it operates
- why it is different
- how to request an appointment

---

## Final Build Thesis

InSync should be positioned as a premium, clinically grounded NYC physical therapy practice for active adults who want clear answers, personalized rehab, and a direct path back to movement, work, training, and performance.
