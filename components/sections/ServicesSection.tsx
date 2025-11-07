"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Palette, Smartphone } from "lucide-react";
import { Card, Link } from "@/components/ui";
import { SectionTitle } from "@/components/ui";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Globe,
    title: "JAMstack Websites",
    description:
      "Develop custom landing pages for a variety of products & apps. Rest assured you will get our help in every step.",
  },
  {
    icon: ShoppingCart,
    title: "JAMstack eCommerce",
    description:
      "Increase your sales with a fast and engaging shopping experience. With the power of the latest JAMStack technologies.",
  },
  {
    icon: Palette,
    title: "UI UX Design",
    description:
      "Every design and interaction we create is a love letter for our customers; our mission is to translate your dreams & ideas into design.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web App",
    description:
      "Offering great solutions for building Fast & Reliable JAMStack Progressive Web Applications (PWA).",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle align="center" subtitle="What We Offer">
            Our Services
          </SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
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
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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

