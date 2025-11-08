"use client";

import { useCardTilt } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";
import { ComponentProps } from "@/types";

interface TiltCardProps extends ComponentProps {
  children: React.ReactNode;
  intensity?: number; // Tilt intensity multiplier (default: 1)
}

/**
 * Card component with 3D tilt effect on hover
 * Wraps children and applies perspective-based 3D rotation on mouse move
 */
export function TiltCard({ children, className, intensity = 1 }: TiltCardProps) {
  const { ref, style } = useCardTilt();

  // Extract rotation values and apply intensity multiplier
  let enhancedTransform = style.transform || "";
  
  if (enhancedTransform) {
    // Match rotateX and rotateY values
    enhancedTransform = enhancedTransform.replace(
      /rotateX\(([-\d.]+)deg\)/g,
      (_, value) => `rotateX(${parseFloat(value) * intensity}deg)`
    );
    enhancedTransform = enhancedTransform.replace(
      /rotateY\(([-\d.]+)deg\)/g,
      (_, value) => `rotateY(${parseFloat(value) * intensity}deg)`
    );
  }

  const enhancedStyle: React.CSSProperties = {
    ...style,
    transform: enhancedTransform,
    transformStyle: "preserve-3d",
    willChange: "transform",
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("transform-gpu", className)}
      style={enhancedStyle}
    >
      {children}
    </div>
  );
}

