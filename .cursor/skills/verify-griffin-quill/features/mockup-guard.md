# Mockup guard

Every page says it is a design mockup, asks crawlers not to index it, and `robots.txt` disallows the whole site. Those three stay until the owner says to launch.

## Sub-features

- `guard-banner` shows the mockup sentence on every page, including the 404 page.
- `guard-noindex` keeps `<meta name="robots" content="noindex">` on every page.
- `guard-robots` serves `robots.txt` as `User-agent: *` and `Disallow: /`.

## How to get to it (user POV)

- Read the burgundy bar at the top of any page.
- View the page source and find the robots meta tag.
- Open `/robots.txt`.

## Driving it with Playwright

Preconditions:

- Doctor printed `doctor ok` for this origin.
- The expected strings live in `verify/catalog.mjs` as `copy.mockupBar` and `copy.robots`.

- **Read the bar.** Each `loads at` test expects `.mockup-bar` to read `Design mockup for owner review. Forms are not connected.`
- **Read the meta.** The same tests expect `meta[name="robots"]` to have content `noindex`.
- **Read robots.txt.** Run `npm run verify -- --grep "disallows"`. The body is exactly `User-agent: *` followed by `Disallow: /` and a trailing newline.
- **Proof.** The report rows for `robots.txt disallows every path` and any page-load test are green. Doctor also fetches these two responses before the browser run.

## Gotchas

- There is no `X-Robots-Tag` header. The meta tag is the check.
- Cloudflare does not change `robots.txt`, the stylesheet, or `js/main.js`. It does change HTML. Check the meta in the DOM after load, not a byte compare of the HTML.
- A crawler that honors `robots.txt` never fetches the pages. Playwright does not honor `robots.txt`, so the suite can still open them.
