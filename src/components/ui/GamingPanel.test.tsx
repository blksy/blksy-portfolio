import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import GamingPanel from "./GamingPanel";

describe("GamingPanel", () => {
  // Test 1 — Rendering children
  it("renders the provided children", () => {
    render(
      <GamingPanel>
        <h2>Featured Projects</h2>
        <p>Explore my latest projects.</p>
      </GamingPanel>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Featured Projects",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Explore my latest projects.")).toBeInTheDocument();
  });

  // Test 2 — Default variant
  it("uses the purple variant by default", () => {
    render(<GamingPanel data-testid="gaming-panel">Content</GamingPanel>);

    const panel = screen.getByTestId("gaming-panel");

    expect(panel).toHaveClass("gaming-panel--purple");
  });

  // Test 3 — Cyan variant
  it("applies the cyan variant", () => {
    render(
      <GamingPanel variant="cyan" data-testid="gaming-panel">
        Content
      </GamingPanel>,
    );

    const panel = screen.getByTestId("gaming-panel");

    expect(panel).toHaveClass("gaming-panel--cyan");
  });

  // Test 4 — Gold variant
  it("applies the gold variant", () => {
    render(
      <GamingPanel variant="gold" data-testid="gaming-panel">
        Content
      </GamingPanel>,
    );

    const panel = screen.getByTestId("gaming-panel");

    expect(panel).toHaveClass("gaming-panel--gold");
  });

  // Test 5 — Glow effect
  it("applies the glow class when enabled", () => {
    render(
      <GamingPanel glow data-testid="gaming-panel">
        Content
      </GamingPanel>,
    );

    const panel = screen.getByTestId("gaming-panel");

    expect(panel).toHaveClass("gaming-panel--glow");
  });

  // Test 6 — Hoverable effect
  it("applies the hoverable class when enabled", () => {
    render(
      <GamingPanel hoverable data-testid="gaming-panel">
        Content
      </GamingPanel>,
    );

    const panel = screen.getByTestId("gaming-panel");

    expect(panel).toHaveClass("gaming-panel--hoverable");
  });

  // Test 7 — Default effects
  it("does not enable glow or hoverable by default", () => {
    render(<GamingPanel data-testid="gaming-panel">Content</GamingPanel>);

    const panel = screen.getByTestId("gaming-panel");

    expect(panel).not.toHaveClass("gaming-panel--glow");
    expect(panel).not.toHaveClass("gaming-panel--hoverable");
  });

  // Test 8 — Custom className
  it("accepts a custom className", () => {
    render(
      <GamingPanel className="custom-panel" data-testid="gaming-panel">
        Content
      </GamingPanel>,
    );

    const panel = screen.getByTestId("gaming-panel");

    expect(panel).toHaveClass("custom-panel");
    expect(panel).toHaveClass("gaming-panel");
  });

  // Test 9 — Native HTML attributes
  it("forwards native HTML attributes", () => {
    render(
      <GamingPanel
        id="featured-projects"
        aria-label="Featured projects panel"
        data-testid="gaming-panel"
      >
        Content
      </GamingPanel>,
    );

    const panel = screen.getByTestId("gaming-panel");

    expect(panel).toHaveAttribute("id", "featured-projects");
    expect(panel).toHaveAttribute("aria-label", "Featured projects panel");
  });
});
