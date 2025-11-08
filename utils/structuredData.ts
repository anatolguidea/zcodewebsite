/**
 * Generate structured data (JSON-LD) for SEO
 */

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

interface WebSiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description?: string;
  publisher?: {
    "@type": string;
    name: string;
  };
}

interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(
  name: string = "YourBrand",
  url: string = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo?: string,
  description?: string,
  socialLinks?: string[]
): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    ...(logo && { logo }),
    ...(description && { description }),
    ...(socialLinks && socialLinks.length > 0 && { sameAs: socialLinks }),
  };
}

/**
 * Generate WebSite schema
 */
export function generateWebSiteSchema(
  name: string = "YourBrand",
  url: string = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description?: string
): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    ...(description && { description }),
    publisher: {
      "@type": "Organization",
      name,
    },
  };
}

/**
 * Generate Breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Article schema (for blog posts)
 */
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  image?: string,
  datePublished?: string,
  dateModified?: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    ...(image && { image }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(author && {
      author: {
        "@type": "Person",
        name: author,
      },
    }),
  };
}

