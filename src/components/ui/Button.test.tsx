import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button", () => {
  // Test 1 — Rendering
  it("renders the provided text", () => {
    render(<Button>Explore Projects</Button>);

    const button = screen.getByRole("button", {
      name: "Explore Projects",
    });

    expect(button).toBeInTheDocument();
  });

  // Test 2 — Click event
  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole("button", {
      name: "Click me",
    });

    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 3 — Disabled state
  it("is disabled when the disabled prop is provided", () => {
    render(<Button disabled>Unavailable</Button>);

    const button = screen.getByRole("button", {
      name: "Unavailable",
    });

    expect(button).toBeDisabled();
  });

  // Test 4 — Disabled click
  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        Unavailable
      </Button>,
    );

    const button = screen.getByRole("button", {
      name: "Unavailable",
    });

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  // Test 5 — Default variant
  it("uses the primary variant by default", () => {
    render(<Button>Primary</Button>);

    const button = screen.getByRole("button", {
      name: "Primary",
    });

    expect(button).toHaveClass("gaming-button--primary");
  });

  // Test 6 — Secondary variant
  it("applies the secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);

    const button = screen.getByRole("button", {
      name: "Secondary",
    });

    expect(button).toHaveClass("gaming-button--secondary");
  });

  // Test 7 — Custom className
  it("accepts a custom className", () => {
    render(<Button className="custom-button">Custom Button</Button>);

    const button = screen.getByRole("button", {
      name: "Custom Button",
    });

    expect(button).toHaveClass("custom-button");
  });
});
