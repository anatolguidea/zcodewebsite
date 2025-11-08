"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spinnerVariants } from "@/utils/animations";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-4",
};

/**
 * Loading spinner component with smooth animation
 */
export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  return (
    <motion.div
      className={cn(
        "rounded-full border-primary-500 border-t-transparent",
        sizeStyles[size],
        className
      )}
      variants={spinnerVariants}
      animate="animate"
      aria-label="Loading"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </motion.div>
  );
}

