"use client";

import { useCursorEffect } from "@/hooks/useCursorEffect";
import { cn } from "@/lib/utils";

export function CursorGlow() {
  const { position, isHovering, isClicking } = useCursorEffect();

  return (
    <div
      className={cn(
        "fixed pointer-events-none z-[9999] transition-all duration-300 ease-out",
        "mix-blend-difference"
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={cn(
          "rounded-full transition-all duration-300",
          isClicking
            ? "w-8 h-8 bg-primary-500/80"
            : isHovering
            ? "w-12 h-12 bg-primary-500/40"
            : "w-6 h-6 bg-primary-500/20"
        )}
      />
    </div>
  );
}

