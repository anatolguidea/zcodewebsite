import { PageWrapper } from "@/components/layout";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

export const metadata = {
  title: "About Us",
  description:
    "Learn about our team, mission, vision, and values. Discover what drives us to create exceptional digital experiences.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutPageContent />
    </PageWrapper>
  );
}

