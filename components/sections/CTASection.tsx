"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Heading, Typography } from "@/components/common";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Link from "next/link";

export function CTASection() {
  const { ref, isVisible, variants } = useScrollReveal({ threshold: 0.2 });
  const imageVariants = useScrollReveal({ threshold: 0.2, variant: "fade" });

  return (
    <section ref={ref} className="py-12 md:py-20 lg:py-32 px-4 w-full">
      <div className="container mx-auto max-w-7xl">
        <div className="glass-dark rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - SVG Graphic */}
            <motion.div
              ref={imageVariants.ref}
              initial="hidden"
              animate={imageVariants.isVisible ? "visible" : "hidden"}
              variants={imageVariants.variants}
              className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative w-full max-w-md aspect-square">
                <img
                  src="/assets/images/cta-graphic.svg"
                  alt="CTA Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Right Column - CTA Content */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={variants}
              className="space-y-6 text-center lg:text-left order-1 lg:order-2"
            >
              <Heading as="h2" className="mb-4">
                If you can dream it, we can make it.
              </Heading>
              <Typography variant="lead" className="mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                We believe in thinking big and starting small. Let's discuss your
                project and bring your vision to life.
              </Typography>
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={variants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Let's Discuss
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="ghost" size="lg">
                    View Our Work
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

