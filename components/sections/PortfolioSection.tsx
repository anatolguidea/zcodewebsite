"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, Link } from "@/components/ui";
import { SectionTitle } from "@/components/ui";
import { TiltCard } from "@/components/common";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { staggerContainer, staggerItem } from "@/utils/animations";

const projects = [
  {
    title: "Obie: Road to a Better And Faster Website",
    description: "Delivered 70% faster website, Improved UI and UX, Acquired by Lessonly",
    image: "/placeholder-project-1.jpg",
    link: "/portfolio/obie",
  },
  {
    title: "Redesign and develop MantisNLP website",
    description: "Blog Integration with Medium, Improved UI and UX, Dark mode integrated",
    image: "/placeholder-project-2.jpg",
    link: "/portfolio/mantis",
  },
  {
    title: "Redesign of Cloudcannon website",
    description: "Modern Design Implementation, Improved UI and UX",
    image: "/placeholder-project-3.jpg",
    link: "/portfolio/cloudcannon",
  },
];

export function PortfolioSection() {
  const { ref, isVisible, variants } = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-32 px-4 w-full">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
        >
          <SectionTitle align="center" subtitle="Our Recent Work">
            Portfolio Highlights
          </SectionTitle>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
            >
              <TiltCard intensity={1.2}>
                <Card variant="default" hover className="h-full overflow-hidden group">
                  <div className="relative h-48 bg-gradient-to-br from-primary-500/10 to-primary-700/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary-500/30">
                        {index + 1}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      variant="minimal"
                      className="text-sm text-primary-400 hover:text-primary-300"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          className="text-center mt-12"
        >
          <Link href="/portfolio" variant="default">
            View Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

