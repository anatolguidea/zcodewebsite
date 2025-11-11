"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";
import "./Card.css";

interface CardProps extends ComponentProps {
  variant?: "default" | "glass" | "minimal";
  hover?: boolean;
  onClick?: () => void;
  spotlightColor?: string;
}

export function Card({
  variant = "default",
  hover = false,
  className,
  children,
  onClick,
  spotlightColor = "rgba(177, 158, 239, 0.4)",
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    cardRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  const baseStyles =
    "rounded-xl p-6 transition-all duration-300 border card-spotlight";
  
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
        ref={cardRef}
        onMouseMove={handleMouseMove}
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
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

