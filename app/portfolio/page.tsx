import { PageWrapper } from "@/components/layout";
import { PortfolioPageContent } from "@/components/pages/PortfolioPageContent";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of successful projects including websites, eCommerce platforms, and web applications.",
};

export default function PortfolioPage() {
  return (
    <PageWrapper>
      <PortfolioPageContent />
    </PageWrapper>
  );
}

