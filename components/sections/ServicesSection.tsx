"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Palette, Smartphone } from "lucide-react";
import { Card, Link } from "@/components/ui";
import { SectionTitle } from "@/components/ui";
import { TiltCard } from "@/components/common";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { staggerContainer, staggerItem } from "@/utils/animations";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Tailored, high-performance websites built to your requirements and brand.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Secure, conversion-focused online stores with modern payment integration.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clean, accessible interfaces that elevate user experience and engagement.",
  },
  {
    icon: Smartphone,
    title: "Web Applications",
    description:
      "Scalable apps with authentication, dashboards, and data-driven features.",
  },
  {
    icon: Globe,
    title: "API Development & Integration",
    description:
      "Custom APIs and seamless integrations with critical third-party services.",
  },
  {
    icon: Smartphone,
    title: "Performance Optimization",
    description:
      "Improve speed, core web vitals, and SEO with targeted optimizations.",
  },
];

export function ServicesSection() {
  const { ref, isVisible, variants } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          <SectionTitle align="center" subtitle="What We Offer">
            Our Services
          </SectionTitle>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={staggerItem}>
                <TiltCard intensity={1}>
                  <Card variant="glass" hover className="h-full">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-lg bg-primary-500/20">
                        <Icon className="w-8 h-8 text-primary-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {service.description}
                      </p>
                      <Link
                        href="/services"
                        variant="minimal"
                        className="text-sm text-primary-400 hover:text-primary-300 mt-auto"
                      >
                        Read More →
                      </Link>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          className="text-center mt-12"
        >
          <Link href="/services" variant="default">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
