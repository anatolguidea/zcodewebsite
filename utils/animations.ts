"use client";

import { Variants } from "framer-motion";

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Base animation duration (keep under 300ms for minimal design)
 */
export const ANIMATION_DURATION = 0.3;
export const ANIMATION_DURATION_FAST = 0.15;
export const ANIMATION_DURATION_SLOW = 0.5;

/**
 * Easing functions for natural motion
 */
export const EASING = {
  easeOut: [0.4, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  easeOutCubic: [0.33, 1, 0.68, 1],
} as const;

/**
 * Scroll reveal variants for sections
 */
export const scrollRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Fade in variants
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Slide up variants
 */
export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Slide down variants
 */
export const slideDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Scale variants
 */
export const scaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Stagger children variants for lists/grids
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion() ? 0 : 0.1,
      delayChildren: prefersReducedMotion() ? 0 : 0.1,
    },
  },
};

/**
 * Stagger item variants (use with staggerContainer)
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Page transition variants
 */
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION,
      ease: EASING.easeInOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION_FAST,
      ease: EASING.easeInOut,
    },
  },
};

/**
 * Hover lift variants (subtle for minimal design)
 */
export const hoverLiftVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION_FAST,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Card tilt variants (parallax effect)
 */
export const cardTiltVariants = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: prefersReducedMotion() ? 0 : ANIMATION_DURATION_FAST,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Button click feedback variants
 */
export const buttonClickVariants = {
  rest: {
    scale: 1,
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: prefersReducedMotion() ? 0 : 0.1,
    },
  },
};

/**
 * Loading spinner variants
 */
export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/**
 * Success checkmark animation
 */
export const successCheckVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

/**
 * Get animation variants based on reduced motion preference
 */
export function getVariants(variants: Variants): Variants {
  if (prefersReducedMotion()) {
    // Return minimal/no animation variants
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }
  return variants;
}

