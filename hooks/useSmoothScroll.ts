"use client";

import { useEffect, useCallback } from "react";
import { scrollToAnchor, handleAnchorClick } from "@/utils/smoothScroll";

/**
 * Hook to enable smooth scrolling for anchor links
 */
export function useSmoothScroll(offset: number = 80) {
  useEffect(() => {
    // Handle anchor links on page
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement;

      if (anchor) {
        handleAnchorClick(
          e as unknown as React.MouseEvent<HTMLAnchorElement>,
          offset
        );
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [offset]);

  const scrollTo = useCallback(
    (anchor: string) => {
      scrollToAnchor(anchor, { offset });
    },
    [offset]
  );

  return { scrollTo };
}

