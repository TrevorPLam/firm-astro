import { describe, it, expect } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Button from "@components/Button.astro";

describe("Button component", () => {
  it("should render with correct text when text content is provided", async () => {
    // Arrange
    const container = await AstroContainer.create();
    const buttonText = "Click me";

    // Act
    const result = await container.renderToString(Button, {
      slots: { default: buttonText },
    });

    // Assert
    expect(result).toContain(buttonText);
  });

  it("should render as anchor tag when href prop is provided", async () => {
    // Arrange
    const container = await AstroContainer.create();
    const href = "/about";

    // Act
    const result = await container.renderToString(Button, {
      props: { href },
      slots: { default: "About" },
    });

    // Assert
    expect(result).toContain(`<a href="${href}"`);
  });

  it("should render as button tag when href prop is not provided", async () => {
    // Arrange
    const container = await AstroContainer.create();

    // Act
    const result = await container.renderToString(Button, {
      slots: { default: "Submit" },
    });

    // Assert
    expect(result).toContain("<button");
  });

  it("should include primary variant classes when variant is primary", async () => {
    // Arrange
    const container = await AstroContainer.create();

    // Act
    const result = await container.renderToString(Button, {
      props: { variant: "primary" },
      slots: { default: "Primary" },
    });

    // Assert
    expect(result).toContain("bg-electric-500");
  });

  it("should include secondary variant classes when variant is secondary", async () => {
    // Arrange
    const container = await AstroContainer.create();

    // Act
    const result = await container.renderToString(Button, {
      props: { variant: "secondary" },
      slots: { default: "Secondary" },
    });

    // Assert
    expect(result).toContain("glass-card");
  });

  it("should include ghost variant classes when variant is ghost", async () => {
    // Arrange
    const container = await AstroContainer.create();

    // Act
    const result = await container.renderToString(Button, {
      props: { variant: "ghost" },
      slots: { default: "Ghost" },
    });

    // Assert
    expect(result).toContain("text-electric-400");
  });

  it("should include small size classes when size is sm", async () => {
    // Arrange
    const container = await AstroContainer.create();

    // Act
    const result = await container.renderToString(Button, {
      props: { size: "sm" },
      slots: { default: "Small" },
    });

    // Assert
    expect(result).toContain("px-4 py-2 text-sm");
  });

  it("should include medium size classes when size is md", async () => {
    // Arrange
    const container = await AstroContainer.create();

    // Act
    const result = await container.renderToString(Button, {
      props: { size: "md" },
      slots: { default: "Medium" },
    });

    // Assert
    expect(result).toContain("px-6 py-3 text-sm");
  });

  it("should include large size classes when size is lg", async () => {
    // Arrange
    const container = await AstroContainer.create();

    // Act
    const result = await container.renderToString(Button, {
      props: { size: "lg" },
      slots: { default: "Large" },
    });

    // Assert
    expect(result).toContain("px-8 py-4 text-base");
  });

  it("should include focus ring class for accessibility", async () => {
    // Arrange
    const container = await AstroContainer.create();

    // Act
    const result = await container.renderToString(Button, {
      slots: { default: "Focus" },
    });

    // Assert
    expect(result).toContain("focus-ring");
  });
});
