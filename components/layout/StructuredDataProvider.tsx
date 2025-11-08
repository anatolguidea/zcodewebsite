import { StructuredData } from "@/components/common";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/utils/structuredData";

/**
 * Provider component that adds structured data to the page
 */
export function StructuredDataProvider() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const siteName = "YourBrand";

  const organizationSchema = generateOrganizationSchema(
    siteName,
    baseUrl,
    `${baseUrl}/favicon.svg`,
    "A production-ready, high-performance website with minimal design and exceptional user experience."
  );

  const websiteSchema = generateWebSiteSchema(
    siteName,
    baseUrl,
    "A production-ready, high-performance website with minimal design and exceptional user experience."
  );

  return <StructuredData data={[organizationSchema, websiteSchema]} />;
}

