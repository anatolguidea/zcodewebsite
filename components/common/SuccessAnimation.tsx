"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { successCheckVariants } from "@/utils/animations";

interface SuccessAnimationProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};

/**
 * Success checkmark animation component
 */
export function SuccessAnimation({ size = "md", className }: SuccessAnimationProps) {
  return (
    <motion.div
      className={cn("flex items-center justify-center", className)}
      variants={successCheckVariants}
      initial="initial"
      animate="animate"
      aria-label="Success"
      role="status"
    >
      <motion.div
        className={cn(
          "rounded-full bg-green-500 flex items-center justify-center text-white",
          sizeStyles[size]
        )}
      >
        <Check className={cn(sizeStyles[size])} strokeWidth={3} />
      </motion.div>
    </motion.div>
  );
}

