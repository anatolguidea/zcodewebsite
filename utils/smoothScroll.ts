"use client";

/**
 * Smooth scroll utility for anchor links and custom scroll behavior
 */

interface SmoothScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
  offset?: number; // Additional offset in pixels
}

/**
 * Smooth scroll to an element or position
 */
export function smoothScrollTo(
  target: HTMLElement | number,
  options: SmoothScrollOptions = {}
): void {
  const {
    behavior = "smooth",
    block = "start",
    inline = "nearest",
    offset = 0,
  } = options;

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scrollBehavior = prefersReducedMotion ? "auto" : behavior;

  if (typeof target === "number") {
    // Scroll to specific position
    window.scrollTo({
      top: target + offset,
      behavior: scrollBehavior,
    });
    return;
  }

  // Scroll to element
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: scrollBehavior,
  });
}

/**
 * Smooth scroll to anchor link
 */
export function scrollToAnchor(
  anchor: string,
  options: SmoothScrollOptions = {}
): void {
  if (typeof window === "undefined") return;

  // Remove # if present
  const id = anchor.replace("#", "");
  const element = document.getElementById(id);

  if (!element) {
    console.warn(`Element with id "${id}" not found`);
    return;
  }

  smoothScrollTo(element, options);
}

/**
 * Handle anchor link clicks
 */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  offset: number = 80 // Account for fixed navbar
): void {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  e.preventDefault();
  scrollToAnchor(href, { offset });
}

/**
 * Scroll progress indicator hook helper
 */
export function getScrollProgress(): number {
  if (typeof window === "undefined") return 0;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const scrollableHeight = documentHeight - windowHeight;
  const progress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;

  return Math.min(Math.max(progress, 0), 1);
}

