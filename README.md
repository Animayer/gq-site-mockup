# Griffin & Quill

Design mockup for Griffin & Quill LLC, a new South Carolina edtech studio. This is a review site for the owner. It is not a launch, and it is not deployed to griffinandquill.com.

Plain static HTML, CSS, and a small JavaScript file. No build step, no framework, no analytics, no cookies, and no third-party scripts except Google Fonts. It can be published as-is on GitHub Pages or Cloudflare Pages by serving this folder.

## Preview locally

From this folder:

```bash
python3 -m http.server 8742
```

Open [http://127.0.0.1:8742](http://127.0.0.1:8742).

`404.html` is the page GitHub Pages and Cloudflare Pages show for unknown URLs. Python's `http.server` does not do that, so open [http://127.0.0.1:8742/404.html](http://127.0.0.1:8742/404.html) to review it.

Merriweather and Lato load from Google Fonts when you are online. Offline, the pages fall back to Georgia and Arial.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Tutoring | `tutoring.html` |
| Classroom resources (TPT) | `resources.html` |
| EdTech / Worlds | `worlds.html` |
| For schools and districts | `schools.html` |
| About | `about.html` |
| Contact | `contact.html` |
| FAQ | `faq.html` |
| Privacy Policy (draft) | `privacy.html` |
| Terms of Use (draft) | `terms.html` |
| 404 | `404.html` |

Shared files: `css/styles.css`, `js/main.js`, `favicon.svg`.

JavaScript only opens the mobile menu and shows a thank-you note on forms. Forms do not send anywhere.

## Placeholders that need real content

- **Logo.** Header and footer use a box labeled "Logo coming soon". The About page repeats it. The gryphon-and-quill mark is still with a human artist. Do not drop in AI art.
- **Mascot.** Boxes are labeled "Mascot art coming soon". Do not name the mascot on the site until the trademark check is finished. Do not use AI art.
- **Founder bio.** The About page says `[Founder bio TBD]`. Do not add a school or employer name until the real bio is approved.
- **Pricing.** Every tutoring price is an example. Real rates, session length, and group size are not set.
- **TPT links.** "View on TPT" and "Follow our TPT store" use `href="#"`. Replace them with the live store URLs. Product cards are sample titles for the layout, not a catalog.
- **Free sample.** The Resources callout is a placeholder until a real freebie exists on TPT.
- **Email.** `hello@griffinandquill.com` is a placeholder. There is no street address and no phone number on purpose.
- **Legal pages.** Privacy and Terms show the banner "Draft placeholder, pending attorney review." The privacy page states that the kids' games are designed to collect no personal data (COPPA-minded). A lawyer still has to review both pages.
- **Games.** The History world teaser, scene boxes, and the three game cards (Westward Expansion, Economic Systems, Two Sources) are placeholders. Nothing is playable.
- **Testimonials.** The home strip is labeled as example quotes. They are not reviews and not real customers.
- **Forms.** Consult, newsletter, waitlist, schools inquiry, and contact all stop on the page with "Thanks! (mockup: form not connected)". Wire them up only on the real site.
- **Search engines.** Pages send `noindex`, and `robots.txt` disallows everything. Remove both before any public launch.
- **Fonts.** Decide whether Google Fonts stay or the font files are hosted with the site.

## Brand

- Navy `#1F2A44`, gold `#B8860B`, cream `#FAF6EA`, charcoal `#2B2B2B`, burgundy `#7A2E2E`.
- Gold is used for borders, shadows, and the History planet. It is not used for text, because gold on cream does not pass WCAG AA.
- Titles: Merriweather. Body: Lato.
