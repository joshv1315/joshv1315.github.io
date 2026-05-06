# joshuavijayasegar.com

Personal website for Joshua Vijayasegar, hosted on GitHub Pages at [www.joshuavijayasegar.com](https://www.joshuavijayasegar.com).

## Stack

- **HTML** — single-page layout (`index.html`)
- **CSS** — custom properties, flexbox/grid, mobile-responsive (`styles.css`)
- **TypeScript** — project cards rendered dynamically (`src/main.ts`)

No frameworks. `dist/main.js` is compiled and deployed automatically via GitHub Actions on every push to `main`.

## Development

Requires Node.js with TypeScript:

```bash
npm install
npm run build      # compile src/main.ts → dist/main.js
npm run watch      # recompile on save
```

## Adding a project

Edit the `projects` array in `src/main.ts` and push — CI handles the build and deploy.

## Hosting

Hosted via GitHub Pages at `joshv1315.github.io` with a custom domain at `www.joshuavijayasegar.com`. DNS is configured with a CNAME `www → joshv1315.github.io` plus A records for the apex domain.
