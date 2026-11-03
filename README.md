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
  illustration. The `og:image` meta points to
  `images/hero-placeholder.svg`, which does not exist yet — replace it
  with a real hero image before any public launch, and do not claim a
  hero photo exists.
- Native Japanese check: NOT done. The pronunciation page is in English;
  any Japanese-language version still needs a native-speaker check and a
  separate publishing approval.
- Pricing decision: NOT made, except the $19–$29 pronunciation proposal
  marked "to decide". Other pages state no price.
- No referral codes on these pages. Referral payouts are omitted
  entirely; the checklist says terms and amounts vary by active offer.

## Technical notes

- Each page is one HTML file: no build step, no external JavaScript, no
  external fonts, inline CSS only, mobile-first.
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
