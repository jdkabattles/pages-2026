# Paid-information pages — DRAFT, ready to deploy, NOT live

A set of single-file static HTML pages. Copy the folder to a static host to
deploy. Nothing here is published, sold, or connected to a checkout.

## Files

- `index.html` — directory only, NOT a product. Links to the 5 product
  pages with a one-line description of each, and a note that products and
  checkout are not live yet.
- `american-pronunciation-for-japanese-learners.html` — American
  pronunciation for Japanese speakers. Draft product: 9 modules, 15-minute
  daily routine, intelligibility promise only (NOT accent elimination, NOT
  sounding native, no results guarantee). Proposed price $19–$29, marked
  to decide only.
- `blog-audience-growth-guide.html` — Growing a blog audience: answer
  first, hook second, headlines, retention structure, and an email list
  readers choose. No traffic numbers, no #1 ranking claim.
- `referral-bonus-checklist.html` — How to check referral bonus terms
  before you miss them: qualifying steps, order, deadlines, card/deposit
  rules, and caps. Brands are examples only, with a not-affiliated note.
- `japan-travel-5-day-guide.html` — 5-day Tokyo/Kyoto step-by-step guide:
  routes, reading signs/menus, and manners. No prices, hotel names, or
  timetables.
- `freelancer-budget-pricing-template.html` — Freelancer budget and
  pricing template guide: what to track, a four-sheet spreadsheet
  structure, and how to price a job. General information only, NOT
  personal financial advice, no tax advice, no earnings claims.
- `MARKETING.md` — where and how these could be marketed, as options
  to decide, not as live listings.

## Deliberately NOT live / NOT included

- No checkout, payment, Stripe, or buy link on any page.
- No email form, waitlist, or data collection on any page.
- No sales, testimonials, results, job, or earnings claims.
- Pronunciation audio: NOT recorded. The page states clearly that
  Jonathan will record his own voice later; no finished audio is claimed.
- Hero photos: NOT real photos. Each page uses a simple inline SVG
  illustration. The `og:image` meta now points to
  `images/hero-placeholder.svg`, which now exists as a simple 1200x630
  SVG placeholder — replace it with a real hero image before any public
  launch, and do not claim a hero photo exists.
- Native Japanese check: NOT done. The pronunciation page is in English;
  any Japanese-language version still needs a native-speaker check and a
  separate publishing approval.
- Pricing decision: NOT made, except the $19–$29 pronunciation proposal
  marked "to decide". Other pages state no price.
- No referral codes on these pages. Referral payouts are omitted
  entirely; the checklist says terms and amounts vary by active offer.

## Advanced methods (2026)

Added 2026-11-03. Content, claims, and draft status were NOT changed.
Every method below is progressive enhancement: with CSS/JS disabled the
pages still render as plain readable HTML, and with an unsupported
browser the new feature is simply ignored.

HTML:
- Skip link to `#main`, `<nav aria-label="Guide pages">`, `<main id="main">`,
  and `<article>` landmarks; heading order unchanged.
- JSON-LD on product pages: WebPage + Article only — NOT Product, NOT
  price/offers, because these are drafts, not for sale. Index gets
  WebPage only. No FAQPage was added because no page has a real FAQ
  section. No dates were invented, so no date fields are in the JSON-LD.
- `<script type="speculationrules">` prerendering internal links on
  moderate intent (hover). Chromium-only; other browsers ignore it.
  Internal links only; there is no checkout/form URL to exclude.
- `images/hero-placeholder.svg` now exists (1200x630 SVG), so the
  `og:image` path that was previously missing now resolves.
- Hero SVGs carry `fetchpriority="high"`. There is no `<img>` hero on
  any page, so no below-fold `<img>` exists to lazy-load; a real
  below-fold image added later must use `loading="lazy"`,
  `decoding="async"`, and explicit width/height/aspect-ratio, and the
  hero must never be lazy-loaded.

CSS (`assets/style.css`, one shared sheet; each page keeps only a tiny
critical inline block for the skip link and progress bar):
- `@layer base, components, utilities`; `@property --progress`
  (registered custom property, used for the progress bar);
  OKLCH colours with `light-dark()` theming; `clamp()` fluid type;
  container queries for the card grid; subgrid for index cards;
  `:has()` for card hover/focus states; `text-wrap: balance` on
  headings and `pretty` on body copy; logical properties
  (`margin-block`, `padding-inline`, `inset-inline`) for RTL readiness.
- `@view-transition { navigation: auto; }` with
  `view-transition-name` on the hero only.
- Scroll-driven animation (`animation-timeline: scroll()` /
  `view()`) for the thin reading-progress bar and heading reveals,
  transform/opacity only. A full
  `@media (prefers-reduced-motion: reduce)` block disables all of it
  to a static final state.
- Anchor positioning + Popover API glossary on the pronunciation page
  only (American R, American L, flap T). In browsers without popover
  support the definitions are plain visible text, not hidden.
- `@scope (guide-card)` for guide-card styles. No `!important`
  anywhere in the stylesheet.

JS (`assets/app.js`, one shared file, `type="module"`, no frameworks,
no external scripts, no tracking, no cookies; about 100 lines):
- Theme toggle: light / dark / system, stored in localStorage only.
  State is a single object created with properties in a fixed order;
  no properties are added later, for stable hidden classes.
- `<guide-card>` custom element for index cards only. It uses NO
  shadow DOM, so card text stays in the light DOM and remains
  indexable; article text is never moved into shadow DOM.
- Back-to-top button (IntersectionObserver on a top sentinel),
  copy-link buttons injected for H2 sections, and `<details>`
  aria-expanded sync, all via event delegation. Work is split with
  `scheduler.yield()` and a `setTimeout` fallback. JS also respects
  `prefers-reduced-motion` (no smooth scroll when reduced motion is set).

Deliberately NOT added, and why:
- No live 3D/WebGL hero, autoplay video, parallax hero, or
  scroll-hijacking/pinned scrub — these would break the first-paint
  budget and the existing Section 4 vetoes.
- No framework bundle, service worker, analytics, or external
  font/script/image — the pages must stay fast, offline-readable,
  and free of tracking.
- No `!important`, no checkout, no email form, no waitlist, no
  data collection, no new claims, and no invented dates or prices.
- Speculation rules, view transitions, scroll timelines, and anchor
  positioning are Chromium/newer-browser only in part; they are
  enhancements, never load-bearing, so older browsers still get the
  full page.

## Technical notes

- Each page is one HTML file plus shared `assets/style.css` and
  `assets/app.js`: no build step, no external JavaScript, no
  external fonts, mobile-first.
- Title tag, 120–155-character meta description, H1 matching the buyer
  query, answer in the first paragraph, H2 outline, and one next step
  at the end (a question or a reading step — no data collection).
- SVG heroes only: no photo, no 3D, no autoplay, no parallax, no GSAP.
  Every SVG has `role="img"` and an `aria-label`, plus width/height and
  an aspect ratio to avoid layout shift.
- `robots` meta includes `max-image-preview:large` on every page.
- Internal links run between the 5 product pages and back to `index.html`.
- Footer on every page: "Draft — not for sale yet. No checkout, no
  delivery, no refunds policy yet." plus a not-affiliated note where a
  brand is named.

## How to deploy (to decide)

Copy this folder to any static host, or deploy via GitHub Pages or
Cloudflare Pages. Note: GitHub Pages on a private repo is not free-tier,
so the deploy host is still to decide — do not assume a free private
GitHub Pages deploy. Before any live deploy, also decide: final prices,
delivery format, refund policy, real hero images, pronunciation audio,
and (for any Japanese-language version) the native-speaker check.
