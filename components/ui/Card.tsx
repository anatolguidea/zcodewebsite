"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";

interface CardProps extends ComponentProps {
  variant?: "default" | "glass" | "minimal";
  hover?: boolean;
  onClick?: () => void;
}

export function Card({
  variant = "default",
  hover = false,
  className,
  children,
  onClick,
  ...props
}: CardProps) {
  const baseStyles =
    "rounded-xl p-6 transition-all duration-300 border";
  
  const variantStyles = {
    default:
      "bg-gray-900 border-gray-800 shadow-sm",
    glass: "glass-dark border-white/5",
    minimal:
      "bg-transparent border-gray-800",
  };

  const hoverStyles = hover
    ? "hover:shadow-lg hover:shadow-primary-500/20"
    : "";

  if (hover) {
    return (
      <motion.div
        className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}
        whileHover={{ 
          y: -4,
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

