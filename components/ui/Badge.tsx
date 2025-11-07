import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";

interface BadgeProps extends ComponentProps {
  variant?: "default" | "primary" | "success" | "warning" | "error";
}

const variantStyles = {
  default:
    "bg-gray-800 text-gray-300",
  primary:
    "bg-primary-900/30 text-primary-300",
  success:
    "bg-green-900/30 text-green-300",
  warning:
    "bg-yellow-900/30 text-yellow-300",
  error:
    "bg-red-900/30 text-red-300",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

