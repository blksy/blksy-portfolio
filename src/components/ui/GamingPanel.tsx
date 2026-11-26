import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/cn";

import "./GamingPanel.css";

type PanelVariant = "purple" | "cyan" | "gold";

interface GamingPanelProps extends ComponentPropsWithoutRef<"div"> {
  variant?: PanelVariant;
  glow?: boolean;
  hoverable?: boolean;
}

const variantStyles: Record<PanelVariant, string> = {
  purple: "gaming-panel--purple",
  cyan: "gaming-panel--cyan",
  gold: "gaming-panel--gold",
};

function GamingPanel({
  variant = "purple",
  glow = false,
  hoverable = false,
  className,
  children,
  ...props
}: GamingPanelProps) {
  return (
    <div
      className={cn(
        "gaming-panel p-5 sm:p-6",
        variantStyles[variant],
        glow && "gaming-panel--glow",
        hoverable && "gaming-panel--hoverable",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default GamingPanel;
