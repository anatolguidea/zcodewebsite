"use client";

import { PageWrapper } from "@/components/layout";
import {
  Hero,
  ServicesSection,
  PortfolioSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections";
import { GradualBlur } from "@/components/common";

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative">
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
        
        {/* Gradual Blur Effect at Bottom */}
        <GradualBlur
          target="page"
          position="bottom"
          height="6rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
    </PageWrapper>
  );
}
