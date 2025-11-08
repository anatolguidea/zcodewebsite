"use client";

import { useEffect, useRef, useState } from "react";
import { Variants } from "framer-motion";
import {
  scrollRevealVariants,
  fadeInVariants,
  slideUpVariants,
  slideDownVariants,
  scaleVariants,
  getVariants,
} from "@/utils/animations";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  variant?: "default" | "fade" | "slideUp" | "slideDown" | "scale";
  customVariants?: Variants;
}

/**
 * Enhanced scroll reveal hook with Framer Motion integration
 * Returns ref and animation state for use with motion components
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
    variant = "default",
    customVariants,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Get appropriate variants based on selection
  const getAnimationVariants = (): Variants => {
    if (customVariants) return getVariants(customVariants);

    const variantMap = {
      default: scrollRevealVariants,
      fade: fadeInVariants,
      slideUp: slideUpVariants,
      slideDown: slideDownVariants,
      scale: scaleVariants,
    };

    return getVariants(variantMap[variant]);
  };

  return {
    ref,
    isVisible,
    variants: getAnimationVariants(),
  };
}

