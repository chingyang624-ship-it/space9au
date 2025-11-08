# SPACE9 Casino Next.js Migration

## Overview

Successfully migrated SPACE9 Casino from React + Vite to Next.js 14 with App Router.

## Key Changes

### Framework Migration

- **Old**: React 18 + Vite + React Router (SPA)
- **New**: Next.js 14 + App Router (MPA with SSR)

### Project Structure Changes

#### Before (Vite + React Router)

```
client/
  pages/
    Index.tsx
    AboutUs.tsx
    Blog.tsx
    blog/
      HowToWinMoreOnlineCasino.tsx
      ...
  components/
    Header.tsx
    Footer.tsx
    ...
  hooks/
    useSEO.ts
```

#### After (Next.js App Router)

```
app/
  page.tsx                 # Home page
  about/page.tsx          # /about
  blog/page.tsx           # /blog
  blog/[slug]/page.tsx    # /blog/:slug
  promotions/page.tsx     # /promotions
  sponsor/page.tsx        # /sponsor
  layout.tsx              # Root layout with metadata
  sitemap.ts              # XML sitemap
  not-found.tsx           # 404 page
components/
  Header.tsx
  Footer.tsx
  HeroSection.tsx
  GameTabs.tsx
  ContentSection.tsx
  ui/
    tooltip.tsx
    toaster.tsx
    sonner.tsx
lib/
  utils.ts
global.css
middleware.ts
```

### Routing Changes

- React Router -> Next.js file-based routing
- `/blog` path remains the same
- Each page now has dedicated file in app directory
- Dynamic routes use `[slug]` pattern

### SEO Improvements

- **Server-side metadata**: Using Next.js Metadata API in layout.tsx
- **Per-page metadata**: Each page can export metadata
- **Dynamic sitemap**: Generated from sitemap.ts
- **Robots.txt**: Static robots.txt in public/
- **Structured data**: JSON-LD in layout and pages

### Client-side state management

- Removed React Router useSearchParams
- Using Next.js hooks for params and search params
- State management with useState for mobile menu

## Running the Project

### Development

```bash
npm run dev
# or
pnpm dev
```

### Production Build

```bash
npm run build
npm start
# or
pnpm build
pnpm start
```

### Testing

```bash
npm run test
```

### Type Checking

```bash
npm run typecheck
```

## Deployment

### Netlify

The project is configured for Netlify deployment:

- `netlify.toml` contains build configuration
- Next.js outputs optimized build
- Dynamic routes work automatically

**Steps to deploy:**

1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next` (handled by Next.js on Netlify)
5. Deploy!

## Key Benefits of Migration

1. **Better SEO**
   - Server-side rendering for all pages
   - Automatic metadata management
   - Better crawlability for search engines

2. **Improved Performance**
   - Smaller JavaScript bundles
   - Automatic code splitting
   - Built-in image optimization

3. **Better Developer Experience**
   - File-based routing
   - Simpler metadata management
   - Built-in API routes support

4. **Real MPA Architecture**
   - Each page is a true web page
   - Better initial page load
   - Individual page optimization

## File Structure Notes

- **'use client'** directives added to components with interactivity
- Client components: Header, GameTabs, About, Blog, Promotions, Sponsor
- Server components: Footer, HeroSection, ContentSection
- Global metadata in layout.tsx
- Each dynamic blog route loads article data from hardcoded object (can be replaced with database)

## Next Steps

1. ✅ Basic migration complete
2. 🔄 Test all pages and links
3. ⏳ Deploy to Netlify
4. ⏳ Monitor performance and SEO rankings
5. Consider: Database integration for blog articles
6. Consider: Blog article comments system
7. Consider: Newsletter signup functionality

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```
NEXT_PUBLIC_APP_URL=https://space9au.net
NEXT_PUBLIC_AFFILIATE_URL=https://space9au.com/RFGOOGLESEO99
```

## Troubleshooting

### Issue: Pages not loading

- Clear `.next` folder
- Run `npm install` again
- Check middleware.ts for redirect issues

### Issue: Styling not applied

- Ensure tailwind.config.ts paths are correct
- Check global.css imports
- Clear browser cache

### Issue: Link errors

- Use `next/link` instead of React Router `Link`
- For external links, use plain `<a>` tags or `target="_blank"`

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Sonner Notifications](https://sonner.emilkowal.ski)
