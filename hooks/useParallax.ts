"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/utils/animations";

interface UseParallaxOptions {
  speed?: number; // Parallax speed multiplier (0-1, where 0.5 is half speed)
  offset?: number; // Additional offset
  disabled?: boolean;
}

/**
 * Hook for parallax scroll effect on elements
 */
export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.5, offset = 0, disabled = false } = options;
  const [transform, setTransform] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (disabled || prefersReducedMotion()) {
      return;
    }

    let animationFrameId: number;
    let lastUpdate = 0;
    const throttleDelay = 16; // ~60fps

    const updateParallax = () => {
      const now = Date.now();
      if (now - lastUpdate < throttleDelay) {
        animationFrameId = requestAnimationFrame(updateParallax);
        return;
      }
      lastUpdate = now;

      if (!elementRef.current) {
        animationFrameId = requestAnimationFrame(updateParallax);
        return;
      }

      const rect = elementRef.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = (elementCenter - viewportCenter) * speed;
      const newTransform = distance + offset;

      setTransform(newTransform);
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    // Use scroll event for better performance
    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    // Initial calculation
    animationFrameId = requestAnimationFrame(updateParallax);

    // Listen to scroll with passive for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed, offset, disabled]);

  return { ref: elementRef, transform };
}

/**
 * Hook for card tilt effect on hover (3D parallax)
 */
export function useCardTilt() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate normalized position (-1 to 1)
      const normalizedX = (x - centerX) / centerX;
      const normalizedY = (y - centerY) / centerY;

      // Apply rotation with max 8 degrees for more visible effect
      const rotateX = normalizedY * -8; // Invert Y for natural tilt
      const rotateY = normalizedX * 8;

      setTilt({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return {
    ref: cardRef,
    style: {
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      transition: "transform 0.1s ease-out",
    },
  };
}

