# Pavedeck — Ship-Ready Site

Static site + self-serve app prototype, ready to deploy to Vercel.

## Structure

```
pavedeck/
├── index.html          → marketing home (pavedeck.com)
├── product.html        → product page with embedded app screenshots
├── pricing.html        → pricing tiers
├── integrations.html   → integration list
├── about.html          → about / founder story
├── styles.css          → marketing site styles
├── logo.svg            → full logo lockup
├── mark.svg            → logo mark only
├── favicon.svg         → favicon
├── vercel.json         → Vercel config (clean URLs)
├── images/             → product page screenshots
│   ├── inventory.png
│   ├── photos.png
│   ├── pricing.png
│   └── vdp.png
└── app/                → self-serve app (pavedeck.com/app)
    ├── index.html
    ├── app.css
    ├── app.js
    └── favicon.svg
```

## Deploy to Vercel (drag-and-drop)

1. Go to https://vercel.com/new
2. Drag the entire `pavedeck/` folder onto the page
3. Click "Deploy"
4. Site is live at `pavedeck-xxx.vercel.app` in ~30 seconds

## Attach pavedeck.com (custom domain)

1. In Vercel: Project Settings → Domains → Add `pavedeck.com`
2. Vercel will show you DNS records (either nameservers or A/CNAME)
3. In GoDaddy: Domain → DNS → add the records Vercel gives you
4. Wait 5-60 minutes for propagation
5. SSL cert is automatic and free

## URLs after deploy

- `pavedeck.com` → marketing home
- `pavedeck.com/product` → product page
- `pavedeck.com/pricing` → pricing
- `pavedeck.com/integrations` → integrations
- `pavedeck.com/about` → about
- `pavedeck.com/app/` → self-serve app (login → demo dealer → inventory)
