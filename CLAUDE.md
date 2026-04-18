# CLAUDE.md — joshuavijayasegar.com

Personal website for Joshua Vijayasegar. Single-page, no framework.

## Structure

```
index.html          # entry point — static layout, references dist/main.js
styles.css          # all styles (CSS custom properties, no preprocessor)
src/main.ts         # TypeScript source — renders project cards from data array
dist/main.js        # compiled output — committed, not gitignored
imgs/               # images (pic_of_josh.jpg is the profile photo)
files/              # static assets (resume PDF)
```

## Key conventions

- **No frameworks.** Vanilla HTML, CSS, TypeScript only.
- **No build pipeline at runtime.** `dist/main.js` is committed so GitHub Pages can serve it directly without a CI build step.
- **Single page.** Everything lives in `index.html`. No routing.
- **Design tokens** are CSS custom properties in `:root` at the top of `styles.css`. Change colors/fonts there.
- **No secrets in the repo.** Use GitHub Actions secrets for any credentials.

## Adding a project

1. Add an entry to the `projects` array in `src/main.ts`
2. Run `npm run build` to recompile → `dist/main.js`
3. Commit both files

## Hosting

GitHub Pages, served from `joshv1315.github.io`. Custom domain (`www.joshuavijayasegar.com`) to be added once domain is purchased. DNS setup: CNAME `www → joshv1315.github.io` plus A records for apex domain.

## Owner

Joshua Vijayasegar — `joshv1315@gmail.com` — GitHub: `joshv1315`
