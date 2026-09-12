# Glink Int — Self Storage & Moving Services Website

A professional, fully responsive marketing website for **Glink Int**, a UAE-based self-storage and moving services company. The site is designed to convert visitors into enquiries and WhatsApp conversations.

## What's inside

- **Homepage** with hero, trust bar, storage solutions, pricing, why-choose-us, moving services, 4-step process, business storage, about, FAQ (10 questions) and contact sections
- **Contact form** powered by Netlify Forms (AJAX submission, honeypot spam protection, success/error states)
- **WhatsApp click-to-chat** integration — header button, hero button, floating bubble, footer and form. All WhatsApp CTAs hide automatically until a number is configured
- **SEO** — optimized title/meta for UAE storage and moving keywords, Open Graph tags, JSON-LD `SelfStorage` structured data, sitemap and robots.txt
- **Privacy Policy** and **Terms & Conditions** pages (noindex)

## Technologies

- [TanStack Start](https://tanstack.com/start) (SSR) + React 19 + TanStack Router v1
- [Tailwind CSS 4](https://tailwindcss.com) (CSS-first `@theme` configuration)
- TypeScript (strict mode)
- Vite 7, deployed on [Netlify](https://netlify.com)

## Getting started

```bash
npm install
npm run dev      # Start dev server on port 3000
npm run build    # Production build
```

## Editing business content

All company details, prices, phone numbers and contact information live in one file:

```
src/config/site.ts
```

There you can set the phone number, WhatsApp number (international format, no `+`), email, address, Google Maps embed URL and all pricing. Fields left empty hide the corresponding buttons automatically. See `AGENTS.md` for full documentation.

Note: phone/WhatsApp are placeholders (`+971 XX XXX XXXX`) until real details are added.