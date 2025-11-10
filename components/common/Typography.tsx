import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";

interface TypographyProps extends ComponentProps {
  as?: "p" | "span" | "div";
  variant?: "body" | "small" | "large" | "lead";
}

const variantStyles = {
  body: "text-base text-gray-300",
  small: "text-sm text-gray-400",
  large: "text-lg text-gray-300",
  lead: "text-xl text-gray-400 leading-relaxed",
};

export function Typography({
  as: Component = "p",
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

// Heading component
interface HeadingProps extends ComponentProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  gradient?: boolean;
}

export function Heading({
  as: Component = "h1",
  gradient = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const sizeStyles = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold",
    h2: "text-3xl md:text-4xl lg:text-5xl font-bold",
    h3: "text-2xl md:text-3xl lg:text-4xl font-semibold",
    h4: "text-xl md:text-2xl lg:text-3xl font-semibold",
    h5: "text-lg md:text-xl lg:text-2xl font-semibold",
    h6: "text-base md:text-lg lg:text-xl font-semibold",
  };

  return (
    <Component
      className={cn(
        sizeStyles[Component],
        "text-white",
        gradient && "bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Gradient text utility
interface GradientTextProps extends ComponentProps {
  from?: string;
  to?: string;
}

export function GradientText({
  from = "from-primary-500",
  to = "to-primary-700",
  className,
  children,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r",
        from,
        to,
        "bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

