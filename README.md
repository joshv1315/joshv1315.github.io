# joshuavijaysegar.com

Personal website for Joshua Vijayasegar, hosted on GitHub Pages at [www.joshuavijaysegar.com](https://www.joshuavijaysegar.com).

## Stack

- **HTML** — single-page layout (`index.html`)
- **CSS** — custom properties, flexbox/grid, mobile-responsive (`styles.css`)
- **TypeScript** — project cards rendered dynamically (`src/main.ts` → `dist/main.js`)

No frameworks. No build pipeline required at runtime — `dist/main.js` is committed alongside the source.

## Development

Requires Node.js with TypeScript:

```bash
npm install
npm run build      # compile src/main.ts → dist/main.js
npm run watch      # recompile on save
```

## Adding a project

Edit the `projects` array in `src/main.ts`, rebuild (`npm run build`), and commit both `src/main.ts` and `dist/main.js`.

## Hosting

Hosted via GitHub Pages. The `CNAME` file points to `www.joshuavijaysegar.com`.

To wire up the custom domain:
1. Purchase `joshuavijaysegar.com` from a registrar (Namecheap, Cloudflare, etc.)
2. Add a CNAME DNS record: `www` → `joshv1315.github.io`
3. Add an A record for the apex domain pointing to GitHub Pages IPs (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
4. Enable "Enforce HTTPS" in the GitHub Pages settings for the repo
