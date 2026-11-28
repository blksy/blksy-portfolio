import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserRound } from "lucide-react";

import SectionHeading from "./SectionHeading";

describe("SectionHeading", () => {
  // Test 1 — Title
  it("renders the provided title as an h2 heading", () => {
    render(<SectionHeading title="About Me" />);

    const heading = screen.getByRole("heading", {
      name: "About Me",
      level: 2,
    });

    expect(heading).toBeInTheDocument();
  });

  // Test 2 — Description
  it("renders the description when provided", () => {
    render(<SectionHeading title="About Me" description="Get to know me." />);

    expect(screen.getByText("Get to know me.")).toBeInTheDocument();
  });

  // Test 3 — Index and label
  it("renders the index and label when provided", () => {
    render(
      <SectionHeading title="About Me" index="01" label="Player Profile" />,
    );

    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("Player Profile")).toBeInTheDocument();

    expect(screen.getByText("//")).toBeInTheDocument();
  });

  // Test 4 — Index without label
  it("renders the index without a separator when no label is provided", () => {
    render(<SectionHeading title="About Me" index="01" />);

    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.queryByText("//")).not.toBeInTheDocument();
  });

  // Test 5 — Label without index
  it("renders the label without a separator when no index is provided", () => {
    render(<SectionHeading title="About Me" label="Player Profile" />);

    expect(screen.getByText("Player Profile")).toBeInTheDocument();

    expect(screen.queryByText("//")).not.toBeInTheDocument();
  });

  // Test 6 — Minimal configuration
  it("renders without optional props", () => {
    const { container } = render(<SectionHeading title="About Me" />);

    expect(
      screen.getByRole("heading", { name: "About Me" }),
    ).toBeInTheDocument();

    expect(screen.queryByText("//")).not.toBeInTheDocument();
    expect(container.querySelector("svg")).not.toBeInTheDocument();
    expect(container.querySelector("p")).not.toBeInTheDocument();
  });

  // Test 7 — Dynamic icon
  it("renders the provided icon", () => {
    const { container } = render(
      <SectionHeading title="About Me" icon={UserRound} />,
    );

    const icon = container.querySelector("svg");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("aria-hidden", "true");
  });

  // Test 8 — Default purple variant
  it("uses the purple accent by default", () => {
    const { container } = render(<SectionHeading title="About Me" />);

    expect(container.querySelector(".bg-primary")).toBeInTheDocument();
  });

  // Test 9 — Cyan variant
  it("applies the cyan accent", () => {
    const { container } = render(
      <SectionHeading title="Tech Stack" variant="cyan" />,
    );

    expect(container.querySelector(".bg-secondary")).toBeInTheDocument();
  });

  // Test 10 — Gold variant
  it("applies the gold accent", () => {
    const { container } = render(
      <SectionHeading title="Featured Projects" variant="gold" />,
    );

    expect(container.querySelector(".bg-gold")).toBeInTheDocument();
  });

  // Test 11 — Center alignment
  it("applies center alignment when requested", () => {
    const { container } = render(
      <SectionHeading title="About Me" align="center" />,
    );

    expect(container.querySelector(".text-center")).toBeInTheDocument();
  });

  // Test 12 — Custom className
  it("accepts a custom className", () => {
    const { container } = render(
      <SectionHeading title="About Me" className="custom-heading" />,
    );

    expect(container.firstElementChild).toHaveClass("custom-heading");
  });
});
