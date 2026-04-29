# personal-website

Source for [jevancousins.com](https://jevancousins.com): a working journal of applied engineering. Astro 4, Tailwind, Vercel.

## Local

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static output in dist/
npm run test:e2e     # Playwright smoke + metadata suite
```

## Stack

- **Astro 4** with Tailwind CSS and a hand-rolled design system in `src/styles/global.css`
- **Source Serif 4** (display + body), **IBM Plex Sans** (UI / labels), **IBM Plex Mono** (technical metadata)
- **Playwright** for smoke and SEO-metadata checks (`tests/e2e/`)
- **Vercel** hosting; redirects in `vercel.json` keep old routes (`/now`, `/writing`, `/projects/*`) pointing to the new ones

## Site map

| Route        | Purpose                                                   |
| ------------ | --------------------------------------------------------- |
| `/`          | Journal cover: masthead, abstract, in-this-issue index    |
| `/papers`    | Working papers (case studies as preprints)                |
| `/notes`     | Working notes and literature reviews                      |
| `/reading`   | Currently reading, curriculum, reviews, French reading    |
| `/journal`   | Lab journal: reverse-chronological log                    |
| `/about`     | Long-form bio                                             |
| `/past-work` | Archived earlier work and certifications                  |

## CI and merging

- Every Vercel preview deploy triggers `qa.yml`, which runs the Playwright suite against the preview URL. The job is gated on the PR not being from a fork (`fork-check` job).
- Every non-draft PR is auto-flagged for auto-merge by `auto-merge.yml`. Squash-merges into `master` once `Playwright E2E` passes; the branch is then deleted.
- Open a PR as a draft if you want to hold it for manual review.
