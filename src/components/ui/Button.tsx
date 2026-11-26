import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-primary bg-primary/15 text-foreground shadow-neon hover:bg-primary/30",

  secondary:
    "border-border bg-surface text-foreground hover:border-secondary hover:text-secondary",

  ghost: "border-transparent bg-transparent text-muted hover:text-foreground",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-lg",
};

function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "border font-semibold",
        "transition-colors duration-200",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "motion-reduce:transition-none",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
