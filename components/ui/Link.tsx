"use client";

import NextLink from "next/link";
import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";

interface LinkProps extends ComponentProps {
  href: string;
  external?: boolean;
  variant?: "default" | "underline" | "minimal";
  onClick?: () => void;
}

const variantStyles = {
  default:
    "text-primary-400 hover:text-primary-300 transition-colors duration-300",
  underline:
    "text-primary-400 hover:text-primary-300 underline-offset-4 hover:underline transition-all duration-300",
  minimal:
    "text-gray-300 hover:text-white transition-colors duration-300",
};

export function Link({
  href,
  external = false,
  variant = "default",
  className,
  children,
  ...props
}: LinkProps) {
  const baseStyles = "inline-flex items-center";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}

