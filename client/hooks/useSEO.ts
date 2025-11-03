export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
  canonicalUrl?: string;
  schema?: Record<string, unknown>;
}

export function useSEO(config: SEOConfig) {
  // Update document title
  document.title = config.title;

  // Update meta description
  updateMetaTag('name', 'description', config.description);

  // Update keywords
  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords);
  }

  // Update OG tags
  updateMetaTag('property', 'og:title', config.title);
  updateMetaTag('property', 'og:description', config.description);
  updateMetaTag('property', 'og:url', config.canonicalUrl || window.location.href);

  if (config.ogType) {
    updateMetaTag('property', 'og:type', config.ogType);
  }

  if (config.ogImage) {
    updateMetaTag('property', 'og:image', config.ogImage);
  }

  // Update Twitter tags
  updateMetaTag('name', 'twitter:title', config.title);
  updateMetaTag('name', 'twitter:description', config.description);

  if (config.twitterHandle) {
    updateMetaTag('name', 'twitter:creator', config.twitterHandle);
  }

  // Update canonical URL (ensure it ends with / consistently)
  if (config.canonicalUrl) {
    updateCanonicalLink(config.canonicalUrl);
  }

  // Add JSON-LD structured data
  if (config.schema) {
    addStructuredData(config.schema);
  }
}

function updateMetaTag(type: 'name' | 'property', key: string, value: string) {
  let element = document.querySelector(`meta[${type}="${key}"]`) as HTMLMetaElement | null;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(type, key);
    document.head.appendChild(element);
  }
  
  element.content = value;
}

function updateCanonicalLink(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  
  link.href = url;
}

function addStructuredData(schema: Record<string, unknown>) {
  // Remove existing schema script
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new schema script
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
