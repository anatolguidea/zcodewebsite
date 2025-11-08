"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import { Heading, Typography, GradientText } from "@/components/common";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Hero() {
  const { ref, isVisible, variants } = useScrollReveal({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/image2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(1px)",
        }}
      >
        {/* Modern Multi-Layer Overlay System */}
        
        {/* Layer 1: Base darkening with sophisticated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/60" />
        
        {/* Layer 2: Radial depth gradient for cinematic look */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, rgba(0,0,0,0.5) 100%)"
          }}
        />
        
        {/* Layer 3: Brand color color grading - modern tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#557170]/50 via-[#557170]/20 to-transparent" />
        
        {/* Layer 4: Side vignette for focus */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.6) 100%)"
          }}
        />
        
        {/* Layer 5: Subtle blur for depth and modern aesthetic */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        
        {/* Layer 6: Animated gradient overlay for dynamic feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        
        {/* Layer 7: Top highlight for modern depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        
        {/* Layer 8: Brand accent with subtle glow effect */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(85, 113, 112, 0.15) 50%, transparent 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          className="space-y-8"
        >
          <Heading as="h1" className="mb-6 text-white drop-shadow-lg">
            Best <span style={{ color: "#557170" }}>Digital</span> Factory for Fast, Secure, Reliable{" "}
            <span style={{ color: "#557170" }}>Websites</span>
          </Heading>

          <Typography variant="lead" className="max-w-2xl mx-auto mb-8 text-white/90 drop-shadow-md">
            Performance is key today. JAMStack offers simple solutions to build
            high-performant & future-proof sites, apps, or eCommerce stores.
            We'll assist you all the way to grow your business smoothly with
            limitless possibilities.
          </Typography>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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

