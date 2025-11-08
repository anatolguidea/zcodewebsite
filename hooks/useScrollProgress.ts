"use client";

import { useState, useEffect } from "react";
import { getScrollProgress } from "@/utils/smoothScroll";

/**
 * Hook to track scroll progress (0 to 1)
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastUpdate = 0;
    const throttleDelay = 16; // ~60fps

    const updateProgress = () => {
      const now = Date.now();
      if (now - lastUpdate < throttleDelay) {
        animationFrameId = requestAnimationFrame(updateProgress);
        return;
      }
      lastUpdate = now;

      setProgress(getScrollProgress());
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return progress;
}

