"use client";

import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Image component with parallax scroll effect
 */
export function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  className,
  priority = false,
}: ParallaxImageProps) {
  const { ref, transform } = useParallax({ speed, disabled: false });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("overflow-hidden", className)}
      style={{
        transform: `translateY(${transform}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-full object-cover"
        priority={priority}
        data-image-hover
      />
    </div>
  );
}

