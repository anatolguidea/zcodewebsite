"use client";

import { useEffect, useState, useRef } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorState {
  isHoveringLink: boolean;
  isHoveringButton: boolean;
  isHoveringImage: boolean;
  isClicking: boolean;
}

/**
 * Enhanced cursor effect hook with proximity detection
 * Supports link, button, and image hover states
 */
export function useCursorEffect() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [state, setState] = useState<CursorState>({
    isHoveringLink: false,
    isHoveringButton: false,
    isHoveringImage: false,
    isClicking: false,
  });
  const rafIdRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let lastUpdate = 0;
    const throttleDelay = 16; // ~60fps

    const updateCursor = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < throttleDelay) {
        return;
      }
      lastUpdate = now;

      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      // e.target can be Text, SVGElement, or other types - need to ensure it's an Element
      const target = e.target;
      let element: Element | null = null;

      // Check if target is an Element (has closest method)
      if (target instanceof Element) {
        element = target;
      } else if (target && target instanceof Node && target.parentElement) {
        // If it's a Text node or similar, use parent element
        element = target.parentElement;
      }

      if (!element) {
        return;
      }

      const link = element.closest("a");
      const button = element.closest("button, [role='button']");
      const image = element.closest("img, [data-image-hover]");

      setState((prev) => ({
        ...prev,
        isHoveringLink: !!link,
        isHoveringButton: !!button,
        isHoveringImage: !!image,
      }));
    };

    const handleMouseLeave = () => {
      setState((prev) => ({
        ...prev,
        isHoveringLink: false,
        isHoveringButton: false,
        isHoveringImage: false,
      }));
    };

    const handleMouseDown = () => {
      setState((prev) => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setState((prev) => ({ ...prev, isClicking: false }));
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const isHovering = state.isHoveringLink || state.isHoveringButton || state.isHoveringImage;

  return {
    position,
    isHovering,
    isHoveringLink: state.isHoveringLink,
    isHoveringButton: state.isHoveringButton,
    isHoveringImage: state.isHoveringImage,
    isClicking: state.isClicking,
  };
}

