# Wizard Alchemy Codes & Guides

Astro static SEO site for Wizard Alchemy Roblox codes and guides.

## MVP Pages

- `/` - Wizard Alchemy Codes
- `/wizard-alchemy-race-tier-list/` - Race Tier List
- `/wizard-alchemy-beginner-guide/` - Beginner Guide
- `/wizard-alchemy-potions/` - Potions Guide
- `/wizard-alchemy-materials/` - Materials Guide
- `/wizard-alchemy-discord-trello-wiki/` - Discord, Trello and Wiki Links

Support pages for AdSense readiness are also included:

- `/about/`
- `/contact/`
- `/privacy-policy/`
- `/terms/`
- `/cookie-policy/`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static output is generated in `dist/`.

## Deployment

This project is intended for Cloudflare Pages.

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

Set `PUBLIC_SITE_URL` during deployment if the production domain is not:

```text
https://wizardalchemycodes.com
```

## Content Maintenance

Update shared site dates in:

```text
src/data/site.ts
```

Update working codes in:

```text
src/data/codes.json
```

Keep the full operating plan in:

```text
docs/PROJECT_PLAN.md
```
