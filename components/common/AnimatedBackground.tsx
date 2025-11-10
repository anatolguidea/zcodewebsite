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
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating orbs with cyan/gray-cyan colors */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
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
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
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
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-12"
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
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-10"
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

