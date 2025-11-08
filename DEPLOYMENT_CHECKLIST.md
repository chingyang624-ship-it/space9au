# SPACE9 Casino Netlify Deployment Checklist

## Pre-Deployment

- [ ] All pages tested locally (`npm run dev`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] Code formatted correctly (`npm run format.fix`)
- [ ] Environment variables configured (`.env.local`)
- [ ] All images are loading correctly
- [ ] All links are working (internal and external)
- [ ] Mobile responsive design verified
- [ ] SEO metadata verified in browser DevTools

## Code Changes to Verify

- [ ] No console errors in browser
- [ ] No warning messages in build logs
- [ ] All pages have proper metadata
- [ ] Sitemap.xml generates correctly
- [ ] Robots.txt is accessible
- [ ] Favicon displays on all pages

## Environment Setup

### GitHub
- [ ] Code pushed to main branch
- [ ] Repository is public (or Netlify has access)
- [ ] Branch protection rules configured (optional)

### Netlify
- [ ] GitHub integration connected
- [ ] Build command: `npm run build`
- [ ] Publish directory: `.next`
- [ ] Environment variables added:
  - [ ] `NEXT_PUBLIC_APP_URL`
  - [ ] `NEXT_PUBLIC_AFFILIATE_URL`

## Configuration Files Verified

- [ ] `next.config.js` - Check image optimization settings
- [ ] `netlify.toml` - Check build configuration
- [ ] `tsconfig.json` - Check path aliases
- [ ] `.env.example` - Document all required variables

## SEO Verification

Before deploying, verify:
- [ ] Homepage has title and description meta tags
- [ ] All pages have unique titles
- [ ] All pages have descriptive meta descriptions
- [ ] Open Graph tags are present
- [ ] Twitter Card meta tags are present
- [ ] Canonical URLs are set correctly
- [ ] Structured data (JSON-LD) is valid
- [ ] Sitemap.xml includes all pages
- [ ] Robots.txt allows crawling

## Post-Deployment

### Initial Checks
- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Images loading correctly
- [ ] Styles applied correctly
- [ ] Navigation working
- [ ] Responsive design working on mobile

### Performance Checks
- [ ] Lighthouse score acceptable (>80)
- [ ] Core Web Vitals good
- [ ] Page load time acceptable (<3s)
- [ ] No 404 errors in console

### Content Verification
- [ ] All blog articles display correctly
- [ ] Links work (test at least 5)
- [ ] Forms submit (if applicable)
- [ ] CTA buttons clickable

### Analytics & SEO
- [ ] Google Search Console connected
- [ ] Sitemap submitted to Search Console
- [ ] Google Analytics tracking working (if installed)
- [ ] No crawl errors in Search Console

## Rollback Plan

If issues occur after deployment:
1. Revert to previous deployment in Netlify UI
2. Check deployment logs for errors
3. Fix locally and test thoroughly before redeploying
4. Monitor site status during rollback

## Ongoing Maintenance

After successful deployment:
- [ ] Set up monitoring alerts
- [ ] Schedule weekly SEO check
- [ ] Monitor Core Web Vitals monthly
- [ ] Update blog content regularly
- [ ] Review analytics monthly
- [ ] Keep dependencies updated

## Common Issues & Solutions

### Build Fails
**Solution**: Check build logs, verify dependencies, clear .next folder

### Pages Not Showing
**Solution**: Check next.config.js output directory, verify routes in app/

### Images Not Loading
**Solution**: Verify image paths, check next.config.js image settings

### Styles Not Applied
**Solution**: Check tailwind.config.ts paths, verify CSS imports

### Slow Performance
**Solution**: Enable caching in netlify.toml, optimize images, minimize CSS

## Support Resources

- Netlify Documentation: https://docs.netlify.com/
- Next.js Documentation: https://nextjs.org/docs
- Google Search Console: https://search.google.com/search-console
- Lighthouse: https://developers.google.com/web/tools/lighthouse
