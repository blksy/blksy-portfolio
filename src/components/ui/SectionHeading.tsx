import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

type HeadingVariant = "purple" | "cyan" | "gold";

type HeadingAlign = "left" | "center";

interface SectionHeadingProps {
  index?: string;
  label?: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  variant?: HeadingVariant;
  align?: HeadingAlign;
  className?: string;
}

const variantStyles: Record<HeadingVariant, string> = {
  purple: "text-primary",
  cyan: "text-secondary",
  gold: "text-gold",
};

const lineStyles: Record<HeadingVariant, string> = {
  purple: "bg-primary",
  cyan: "bg-secondary",
  gold: "bg-gold",
};

const alignStyles: Record<HeadingAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
};

function SectionHeading({
  index,
  label,
  title,
  description,
  icon: Icon,
  variant = "purple",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn("mb-8 flex flex-col gap-3", alignStyles[align], className)}
    >
      {(index || label) && (
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-secondary">
          {index && <span>{index}</span>}

          {index && label && <span>//</span>}

          {label && <span>{label}</span>}
        </div>
      )}

      <div className="flex items-center gap-3">
        {Icon && (
          <Icon
            size={28}
            className={variantStyles[variant]}
            aria-hidden="true"
          />
        )}

        <h2 className="font-pixel text-lg uppercase text-foreground sm:text-2xl">
          {title}
        </h2>
      </div>

      <div aria-hidden="true" className="flex w-full max-w-sm items-center">
        <div className={cn("h-0.5 w-16", lineStyles[variant])} />

        <div className="h-px flex-1 bg-border" />
      </div>

      {description && (
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          {description}
        </p>
      )}
    </header>
  );
}

export default SectionHeading;
