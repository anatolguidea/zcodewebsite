import { PageWrapper } from "@/components/layout";
import {
  Hero,
  ServicesSection,
  PortfolioSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </PageWrapper>
  );
}
