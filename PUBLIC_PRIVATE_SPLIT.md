# Public / private split

This repo is public, so these pages can be viewed and served.
It contains teaser / sales pages only.

Proprietary information — full guide content, audio drills,
final pricing, checkout, and delivery — does NOT live here.
It lives in a separate private repo, and is served only through
an API deployed from that private repo, with a buyer key.

A public page must never fetch a private repo directly, and must
never contain a token, key, or password. If an API base URL is
not configured, the page behaves exactly as it does now:
teaser only, "draft — not for sale yet", no delivery claim.

The private repo's name is deliberately not published in this
file, so a viewer of this public repo cannot find it from here.
