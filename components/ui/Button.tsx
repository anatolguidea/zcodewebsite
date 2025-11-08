"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentProps {
  variant?: "primary" | "secondary" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  as?: React.ElementType;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
  secondary:
    "bg-gray-800 text-white hover:bg-gray-700",
  ghost:
    "bg-transparent text-gray-300 hover:bg-gray-800",
  glass: "glass-dark text-white hover:glass-minimal",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  as: Component = motion.button,
  type = "button",
  disabled,
  ...props
}: ButtonProps) {
  const MotionComponent = Component as typeof motion.button;
  
  return (
    <MotionComponent
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.02,
              transition: { duration: 0.15 },
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.98,
              transition: { duration: 0.1 },
            }
      }
      transition={{ duration: 0.15 }}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

