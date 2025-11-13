"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Hero() {
  const { ref, isVisible, variants } = useScrollReveal({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden"
    >
      {/* Content Container - Two Columns */}
      <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Provided Layout */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          className="flex flex-col justify-center space-y-4 text-left"
        >
          <div className="space-y-2">
            <div className="inline-block">
              <div className="px-3 py-1 text-sm border border-primary/20 rounded-full bg-primary/5 text-primary mb-4 inline-block">
                Premium Web Development Services
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Zcode
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              <span className="inline-block h-10">Web Development Agency</span>
              <span className="animate-blink" aria-hidden="true">
                |
              </span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              We build exceptional digital experiences with cutting-edge
              technologies. From responsive websites to complex web
              applications, we bring your vision to life.
            </p>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 relative group overflow-hidden"
              href="#services"
            >
              <span className="relative z-10">Our Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 h-4 w-4 relative z-10"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md px-8 border-primary/20 hover:bg-primary/5 transition-colors"
              href="#contact"
            >
              Get a Quote
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
              <div className="bg-gradient-to-r from-primary to-blue-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code h-5 w-5 text-white"
                  aria-hidden="true"
                  focusable="false"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <span className="text-sm font-medium">Modern Technologies</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-violet-500/5 to-transparent border border-violet-500/10">
              <div className="bg-gradient-to-r from-violet-500 to-fuchsia-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap h-5 w-5 text-white"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-amber-500/5 to-transparent border border-amber-500/10">
              <div className="bg-gradient-to-r from-amber-500 to-rose-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield h-5 w-5 text-white"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <span className="text-sm font-medium">Quality Guaranteed</span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-border/40 flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full blur-sm opacity-70"></div>
              <img
                src="/assets/images/zCode-1.png"
                alt="zCode logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-background relative z-10"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <p className="font-medium">Chaoseye</p>
              <p className="text-sm text-muted-foreground">
                Founder & Lead Developer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Visual/Graphic area (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mt-8 md:mt-0"
        >
          <div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md group">
                <img
                  src="/assets/images/zCode-1.png"
                  alt="zCode"
                  className="w-full h-auto object-contain rounded-2xl transform transition-transform duration-300 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
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
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
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
