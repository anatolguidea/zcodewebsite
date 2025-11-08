"use client";

import { useCursorEffect } from "@/hooks/useCursorEffect";
import { cn } from "@/lib/utils";

/**
 * Enhanced cursor glow with proximity effects
 * Respects reduced motion preferences
 */
export function CursorGlow() {
  const {
    position,
    isHovering,
    isHoveringLink,
    isHoveringButton,
    isHoveringImage,
    isClicking,
  } = useCursorEffect();

  // Check for reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    return null;
  }

  // Determine size and opacity based on hover state
  const getCursorStyle = () => {
    if (isClicking) {
      return "w-8 h-8 bg-primary-500/80";
    }
    if (isHoveringImage) {
      return "w-16 h-16 bg-primary-500/30 border-2 border-primary-500/50";
    }
    if (isHoveringLink || isHoveringButton) {
      return "w-12 h-12 bg-primary-500/40";
    }
    return "w-6 h-6 bg-primary-500/20";
  };

  return (
    <div
      className={cn(
        "fixed pointer-events-none z-[9999] transition-all duration-200 ease-out",
        "mix-blend-difference"
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className={cn("rounded-full transition-all duration-200", getCursorStyle())} />
      {/* Outer glow ring for images */}
      {isHoveringImage && (
        <div
          className="absolute inset-0 rounded-full border-2 border-primary-500/30 -m-2 transition-all duration-200"
          style={{
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
        />
      )}
    </div>
  );
}

