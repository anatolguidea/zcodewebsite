"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import { Heading, Typography } from "@/components/common";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Hero() {
  const { ref, isVisible, variants } = useScrollReveal({ threshold: 0.2, triggerOnce: false });
  const imageVariants = useScrollReveal({ threshold: 0.2, triggerOnce: false, variant: "fade" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen min-h-[100dvh] flex items-center px-4 py-12 md:py-20 md:py-32 overflow-hidden w-full"
      style={{ 
        paddingTop: `calc(3rem + env(safe-area-inset-top, 0))`,
        paddingBottom: `calc(3rem + env(safe-area-inset-bottom, 0))`
      }}
    >

      {/* Content Container - Two Column Layout */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text and CTA */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            className="space-y-8 text-left"
          >
            <Heading as="h1" className="mb-6 text-white drop-shadow-lg">
              Best <span style={{ color: "#557170" }}>Digital</span> Factory for Fast, Secure, Reliable{" "}
              <span style={{ color: "#557170" }}>Websites</span>
            </Heading>

            <Typography variant="lead" className="mb-8 text-white/90 drop-shadow-md">
              Performance is key today. JAMStack offers simple solutions to build
              high-performant & future-proof sites, apps, or eCommerce stores.
              We'll assist you all the way to grow your business smoothly with
              limitless possibilities.
            </Typography>

            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={variants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" className="shadow-lg">
                Let's Chat
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30"
              >
                Our Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - SVG Graphic */}
          <motion.div
            ref={imageVariants.ref}
            initial="hidden"
            animate={imageVariants.isVisible ? "visible" : "hidden"}
            variants={imageVariants.variants}
            className="relative flex items-center justify-center lg:justify-end z-10"
          >
            <div className="relative w-full max-w-lg aspect-square z-10">
              <img
                src="/assets/images/hero-graphic.svg"
                alt="Digital Factory Illustration"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Icon - Bottom Center */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-0 right-0 z-20 flex justify-center"
      >
        <motion.button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
          aria-label="Scroll down"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm font-medium">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}

