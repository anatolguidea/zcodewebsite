"use client";

import { useEffect } from "react";

export function MobileMetaTags() {
  useEffect(() => {
    // Add Apple mobile web app meta tags
    const addMetaTag = (name: string, content: string) => {
      // Remove existing tag if any
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (existing) {
        existing.remove();
      }
      
      // Add new tag
      const meta = document.createElement("meta");
      meta.name = name;
      meta.content = content;
      document.head.appendChild(meta);
    };

    // Add Apple-specific meta tags
    addMetaTag("apple-mobile-web-app-capable", "yes");
    addMetaTag("apple-mobile-web-app-status-bar-style", "black-translucent");
    addMetaTag("apple-mobile-web-app-title", "YourBrand");
    
    // Ensure theme-color is set
    addMetaTag("theme-color", "#0f1a1d");
  }, []);

  return null;
}

