import { Metadata } from "next";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export function generateMetadata({
  title,
  description,
  image,
  path,
}: GenerateMetadataProps = {}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = path ? `${baseUrl}${path}` : baseUrl;
  const ogImage = image || "/og-image.jpg";

  return {
    title: title ? `${title} | YourBrand` : "YourBrand",
    description:
      description ||
      "A production-ready, high-performance website with minimal design and exceptional user experience.",
    openGraph: {
      title: title || "YourBrand",
      description:
        description ||
        "A production-ready, high-performance website with minimal design and exceptional user experience.",
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || "YourBrand",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title || "YourBrand",
      description:
        description ||
        "A production-ready, high-performance website with minimal design and exceptional user experience.",
      images: [ogImage],
    },
  };
}

