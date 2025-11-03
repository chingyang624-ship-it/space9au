# SEO 优化文档

## 已实现的优化

### 1. 独立的 Meta 信息
每个页面现在都有独立的 `<title>` 和 `<meta description>`：

- **首页** (`/`)
  - Title: "SPACE9 Casino - Australia's No.1 Online Casino App | iOS & Android"
  - Description: "Australia's most trusted online casino with slots, live dealer games, and sports betting..."

- **关于页面** (`/about`)
  - Title: "About SPACE9 Casino - Australia's Trusted Online Casino"
  - Description: "Learn about SPACE9 Casino, Australia's #1 trusted online casino..."

- **BK8 页面** (`/bk8`)
  - Title: "BK8 Casino Malaysia - Slots, Live Casino & Esports Betting"
  - Description: "BK8 Malaysia's premier online casino with live dealer games..."

- **促销页面** (`/promotions`)
  - Title: "SPACE9 Promotions & Bonuses - Exclusive Casino Offers"
  - Description: "Discover SPACE9's exclusive promotions, welcome bonuses..."

- **赞助商页面** (`/sponsor`)
  - Title: "Sponsors & Partners - SPACE9 Casino"
  - Description: "Discover SPACE9 Casino's official sponsors and partners..."

### 2. 结构化数据 (Schema.org)
使用 JSON-LD 为每个页面添加了结构化数据：
- WebSite schema for 首页
- Organization schema for 关于页面
- GamingWebsite schema for BK8 页面
- WebPage schema for 其他页面

### 3. 性能优化
- ✅ 所有图片已添加 `loading="lazy"` 属性
- ✅ 为 Hero 部分的图片添加了懒加载
- ✅ GameTabs 中的提供商图片优化

### 4. 移动优化
- ✅ 添加了 `viewport-fit=cover` 用于 notch 手机支持
- ✅ 添加了 `mobile-web-app-capable` meta 标签
- ✅ 添加了 `apple-mobile-web-app-status-bar-style`
- ✅ 添加了 `theme-color` meta 标签

### 5. Sitemap 和 Robots
- ✅ 创建了 `sitemap.xml` 包含所有主要页面
- ✅ 更新了 `robots.txt` 指向 sitemap

## 技术实现

### useSEO Hook
在 `client/hooks/useSEO.ts` 中创建了一个可复用的 SEO hook：

```typescript
useSEO({
  title: '页面标题',
  description: '页面描述',
  keywords: '关键词',
  canonicalUrl: 'https://space9au.net/page',
  schema: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    // ... 结构化数据
  }
});
```

### 如何在新页面中使用
1. 在页面组件中导入 hook
2. 在 `useEffect` 中调用 `useSEO()`
3. 提供页面特定的 meta 信息

```typescript
import { useSEO } from '@/hooks/useSEO';

useEffect(() => {
  useSEO({
    title: '页面标题',
    description: '页面描述',
    // ... 其他配置
  });
}, []);
```

## 建议的进一步优化

1. **创建博客页面**
   - 为博客文章添加 BlogPosting schema
   - 添加 author、datePublished、dateModified

2. **添加更多结构化数据**
   - AggregateOffer schema 用于促销
   - Event schema 用于特殊活动

3. **性能监控**
   - 使用 Web Vitals 监控 LCP, FID, CLS
   - 添加性能指标跟踪

4. **高质量内容**
   - 为每个页面添加更丰富的内容
   - 添加常见问题解答 (FAQ) schema

5. **外部链接**
   - 构建高质量的反向链接
   - 在行业相关网站上提及

## 验证 SEO

### 检查清单
- [ ] 使用 Google Search Console 验证网站
- [ ] 检查 Google PageSpeed Insights
- [ ] 使用 Schema.org 验证工具检查结构化数据
- [ ] 在 Mobile-Friendly Test 中测试

### 工具
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev
- Schema.org Validator: https://validator.schema.org
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
