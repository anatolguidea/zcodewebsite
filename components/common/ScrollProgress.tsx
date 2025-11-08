"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";
import { prefersReducedMotion } from "@/utils/animations";

interface ScrollProgressProps {
  className?: string;
  show?: boolean;
}

/**
 * Scroll progress indicator at the top of the page
 */
export function ScrollProgress({ className, show = true }: ScrollProgressProps) {
  const progress = useScrollProgress();

  if (!show || prefersReducedMotion()) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 bg-primary-500/20 z-[10000]",
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-primary-500 transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

