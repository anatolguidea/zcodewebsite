import { PageWrapper } from "@/components/layout";
import { BlogPageContent } from "@/components/pages/BlogPageContent";

export const metadata = {
  title: "Blog",
  description:
    "Read our latest articles, insights, and resources on web development, design, and digital strategy.",
};

export default function BlogPage() {
  return (
    <PageWrapper>
      <BlogPageContent />
    </PageWrapper>
  );
}

