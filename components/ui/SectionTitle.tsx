import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends ComponentProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const sizeStyles = {
  h1: "text-4xl md:text-5xl font-bold",
  h2: "text-3xl md:text-4xl font-bold",
  h3: "text-2xl md:text-3xl font-semibold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg md:text-xl font-semibold",
  h6: "text-base md:text-lg font-semibold",
};

const alignStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function SectionTitle({
  as: Component = "h2",
  subtitle,
  align = "center",
  className,
  children,
  ...props
}: SectionTitleProps) {
  return (
    <div className={cn("mb-8", alignStyles[align])} {...props}>
      <Component
        className={cn(
          sizeStyles[Component],
          "text-white mb-2",
          className
        )}
      >
        {children}
      </Component>
      {subtitle && (
        <p className="text-lg text-gray-400 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}

