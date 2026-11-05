# Khosheh Flower Shop | گل‌فروشی خوشه

Persian, right-to-left storefront landing page for Khosheh Flower Shop in Ahvaz. Built with Next.js and based on the supplied Sketch HTML export (`code.html`) and botanical design guidelines (`DESIGN.md`).

## Current features

- Full-width, responsive landing page with a cream navbar matching the original logo.
- Announcement banner, hero carousel, product rail, craft story, occasion cards, studio gallery, and footer.
- Automatic hero rotation and slide indicators; hero arrow buttons have been removed.
- GSAP product-rail navigation, reduced-motion support, and carousel timer cleanup.
- Local brand logo at `public/images/khosheh-logo.jpg` without an added border or circular crop.
- Persian typography using Vazirmatn, with Plus Jakarta Sans and Playfair Display available through `next/font`.

The delivery-coverage section and the daily-bouquet navigation item are currently removed. The landing page renders static content and does not require a running backend.

## Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 15, App Router |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Animation | GSAP, Motion |
| Icons | Material Symbols in the reference page; Lucide in other components |
| Backend integration | Prepared fetch client for an ASP.NET Core API |

## Run locally

Use Node.js 22 LTS and npm. From the repository root:

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

To build and serve the production version:

```bash
npm run build
npm run start
```

`npm run build` compiles the app and runs Next.js type checks. The existing `npm run lint` script uses `next lint`; a standalone ESLint configuration has not been set up yet. There is currently no automated test suite.

## Project structure

```text
src/
  app/
    page.tsx                       # Active home-page entry point
    layout.tsx                     # Persian RTL document, fonts and metadata
    globals.css                    # Global styles and reference overrides
  components/
    landing/
      ReferenceLanding.tsx         # Active reference renderer and interactions
      reference-markup.ts          # Serialized HTML used by the home page
    LandingPage.tsx                 # Earlier alternative implementation (inactive)
    Header.tsx                     # Earlier shared header (inactive on home page)
    Footer.tsx                     # Earlier shared footer (inactive on home page)
  lib/
    api.ts                         # Prepared API helpers
public/
  images/
    khosheh-logo.jpg                # Original supplied logo
code.html                          # Original design export and Tailwind scan input
DESIGN.md                          # Design guidelines
tailwind.config.ts                 # Theme colors and utility scan paths
next.config.ts                     # Remote-image settings and API rewrite
.env.local.example                 # Optional backend configuration template
```

## Editing the design

The active home page imports the static HTML string from `reference-markup.ts` and passes it to `ReferenceLanding`. The renderer preserves the exported markup using `dangerouslySetInnerHTML`; only trusted, repository-owned markup should be placed in that string. Never insert untrusted user content there.

- Edit `reference-markup.ts` to change the live page's text, links, images, or sections. Updating `code.html` alone does not update the rendered page.
- Edit `globals.css` for the full-width layout, navbar background, button states, and other scoped overrides.
- Edit `ReferenceLanding.tsx` for hero timing, indicators, and product-rail interactions.
- Keep `code.html` in the repository: Tailwind scans it for the original utility classes. For new classes in serialized markup, also add them to a scanned source or the Tailwind safelist if needed.

The original export remains a reference; the active markup includes the requested changes made after import. Most floral photos are externally hosted. Material Symbols and fonts also require network access when fetched or built.

## Optional ASP.NET Core API

Backend repository: [mansoureh69/Flower-shop](https://github.com/mansoureh69/Flower-shop).

Copy `.env.local.example` to `.env.local`. On Windows PowerShell:

```powershell
Copy-Item .env.local.example .env.local
```

Configure the backend origin without a trailing slash:

```dotenv
NEXT_PUBLIC_API_URL=https://localhost:7185
```

`src/lib/api.ts` contains helpers for login, registration, products, cart items, and orders. It attaches a bearer token from the browser's `khosheh_token` local-storage key when available. The current landing page does not call these helpers.

The API client uses `NEXT_PUBLIC_API_URL` directly when set; otherwise it makes relative requests. `next.config.ts` rewrites `/api/*` requests to the configured backend, defaulting to `https://localhost:7185`. Direct browser calls to a separate backend origin require appropriate CORS settings. Restart the development server after changing environment variables.

Variables prefixed with `NEXT_PUBLIC_` are public browser configuration, not a place for secrets.

## Deploy on Vercel

1. Push the repository to GitHub and import it into your Vercel account.
2. Select **Next.js** and use the repository root as the Root Directory.
3. Use `npm ci` to install dependencies and `npm run build` to build. Leave the Output Directory at its Next.js default.
4. If connecting the backend, set `NEXT_PUBLIC_API_URL` to its publicly accessible HTTPS origin for the intended environment. Localhost cannot reach your local backend from Vercel.
5. Deploy and check the page, local logo, external images, carousel, and button hover states.

The static landing page can be deployed without backend configuration. Redeploy after changing public environment variables. No successful Vercel deployment URL is currently recorded in this repository.

## Implementation status

The hero controls and product-rail navigation work. Product data, prices, ratings, cart count, contact information, delivery promises, and trust badges are static design content and should be verified before launch. Search, cart, add-to-cart actions, and newsletter submission are not connected to a backend. Several links retain the export's placeholder targets. Dedicated shop, product, cart, checkout, and account routes are not implemented yet.

## Git hygiene

`.gitignore` excludes dependencies, Next.js output, generated type files, caches, logs, test artifacts, local environment files, editor metadata, Vercel state, and local reference/draft files. Commit source code, public assets, `package-lock.json`, configuration, design references, and the environment example. Do not commit `.env.local` or deployment credentials.
