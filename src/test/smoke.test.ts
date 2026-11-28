import { describe, it, expect } from "vitest";

describe("Test environment", () => {
  it("performs a basic assertion", () => {
    expect(2 + 2).toBe(4);
  });

  it("provides a DOM environment", () => {
    const button = document.createElement("button");

    button.textContent = "Hello BLKSY";

    document.body.appendChild(button);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Hello BLKSY");

    button.remove();
  });
});
