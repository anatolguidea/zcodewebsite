"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Palette,
  Smartphone,
  Zap,
  Shield,
  Code,
  Rocket,
} from "lucide-react";
import { Card, Button, SectionTitle } from "@/components/ui";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Globe,
    title: "JAMstack Websites",
    description:
      "Develop custom landing pages for a variety of products & apps. Rest assured you will get our help in every step.",
    features: [
      "Fast & Secure",
      "SEO Optimized",
      "Mobile Responsive",
      "Modern Design",
    ],
    color: "primary",
  },
  {
    icon: ShoppingCart,
    title: "JAMstack eCommerce",
    description:
      "Increase your sales with a fast and engaging shopping experience. With the power of the latest JAMStack technologies.",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Analytics Dashboard",
      "Customer Support",
    ],
    color: "primary",
  },
  {
    icon: Palette,
    title: "UI UX Design",
    description:
      "Every design and interaction we create is a love letter for our customers; our mission is to translate your dreams & ideas into design.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "Progressive Web App",
    description:
      "Offering great solutions for building Fast & Reliable JAMStack Progressive Web Applications (PWA).",
    features: [
      "Offline Support",
      "Push Notifications",
      "App-like Experience",
      "Cross-platform",
    ],
    color: "primary",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Boost your website's speed and performance with our optimization services. We ensure your site loads in under 2 seconds.",
    features: [
      "Core Web Vitals",
      "Image Optimization",
      "Code Splitting",
      "Caching Strategies",
    ],
    color: "primary",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description:
      "Keep your website secure and up-to-date with our comprehensive maintenance and security services.",
    features: [
      "SSL Certificates",
      "Regular Updates",
      "Backup Solutions",
      "Security Monitoring",
    ],
    color: "primary",
  },
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Need something unique? We build custom solutions tailored to your specific business needs and requirements.",
    features: [
      "Custom APIs",
      "Third-party Integration",
      "Database Design",
      "Scalable Architecture",
    ],
    color: "primary",
  },
  {
    icon: Rocket,
    title: "Consulting & Strategy",
    description:
      "Get expert advice on your digital strategy, technology stack, and implementation roadmap.",
    features: [
      "Technical Consulting",
      "Architecture Planning",
      "Team Training",
      "Best Practices",
    ],
    color: "primary",
  },
];

export function ServicesPageContent() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span style={{ color: "#557170" }}>Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business
              grow and succeed in the modern digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle align="center" subtitle="What We Offer">
              Comprehensive Solutions
            </SectionTitle>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="glass" hover className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="p-4 rounded-lg bg-primary-500/20 mb-4 w-fit">
                        <Icon className="w-8 h-8 text-primary-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 flex-grow">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-500 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="ghost" size="sm" className="w-full mt-auto">
                        Get Started
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-dark rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your
              business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
              <Button variant="ghost" size="lg">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

