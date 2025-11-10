"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-screen h-screen">
      {/* Floating orbs with cyan/gray-cyan colors - Smaller on mobile */}
      <motion.div
        className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-15 sm:opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(85, 113, 112, 0.4) 0%, transparent 70%)",
          top: "10%",
          left: "10%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
      
      <motion.div
        className="absolute w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full blur-3xl opacity-10 sm:opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(98, 205, 255, 0.3) 0%, transparent 70%)",
          top: "60%",
          right: "15%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, -40, 0],
                y: [0, -50, 0],
                scale: [1, 1.3, 1],
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
      
      <motion.div
        className="absolute w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full blur-3xl opacity-8 sm:opacity-12"
        style={{
          background: "radial-gradient(circle, rgba(179, 240, 229, 0.25) 0%, transparent 70%)",
          bottom: "20%",
          left: "50%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, 60, 0],
                y: [0, -40, 0],
                scale: [1, 1.1, 1],
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
      
      <motion.div
        className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full blur-3xl opacity-6 sm:opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(85, 113, 112, 0.3) 0%, transparent 70%)",
          top: "40%",
          right: "40%",
        }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: [0, -30, 0],
                y: [0, 40, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={
          prefersReducedMotion
            ? {}
            : {
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
    </div>
  );
}

