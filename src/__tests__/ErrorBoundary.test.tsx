import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorBoundary from "@components/ErrorBoundary";

describe("ErrorBoundary component", { tags: ["unit"] }, () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Error catching", () => {
    it("should catch synchronous error and render default fallback UI", () => {
      // Arrange
      const Thrower = () => {
        throw new Error("Test error");
      };

      // Act
      render(
        <ErrorBoundary>
          <Thrower />
        </ErrorBoundary>
      );

      // Assert
      expect(screen.getByText("Something went wrong")).toBeInTheDocument();
      expect(
        screen.getByText(
          "An error occurred while loading this component. Please try again."
        )
      ).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Try Again" })).toBeInTheDocument();
    });

    it("should render custom fallback when provided", () => {
      // Arrange
      const Thrower = () => {
        throw new Error("Test error");
      };
      const customFallback = <div>Custom Error UI</div>;

      // Act
      render(
        <ErrorBoundary fallback={customFallback}>
          <Thrower />
        </ErrorBoundary>
      );

      // Assert
      expect(screen.getByText("Custom Error UI")).toBeInTheDocument();
      expect(screen.queryByText("Something went wrong")).not.toBeInTheDocument();
    });

    it("should render children normally when no error occurs", () => {
      // Arrange
      const SafeComponent = () => <div>Safe Content</div>;

      // Act
      render(
        <ErrorBoundary>
          <SafeComponent />
        </ErrorBoundary>
      );

      // Assert
      expect(screen.getByText("Safe Content")).toBeInTheDocument();
      expect(screen.queryByText("Something went wrong")).not.toBeInTheDocument();
    });
  });

  describe("Reset functionality", () => {
    it("should reset error state when Try Again button is clicked", async () => {
      // Arrange
      const user = userEvent.setup();
    let shouldThrow = true;
      const ConditionalThrower = () => {
        if (shouldThrow) {
          throw new Error("Test error");
        }
        return <div>Recovered Content</div>;
      };

      const { rerender } = render(
        <ErrorBoundary>
          <ConditionalThrower />
        </ErrorBoundary>
      );

      // Assert initial error state
      expect(screen.getByText("Something went wrong")).toBeInTheDocument();

      // Act - click reset button
      shouldThrow = false;
      const resetButton = screen.getByRole("button", { name: "Try Again" });
      await user.click(resetButton);

      // Re-render with non-throwing component
      rerender(
        <ErrorBoundary>
          <ConditionalThrower />
        </ErrorBoundary>
      );

      // Assert - content should be visible
      expect(screen.getByText("Recovered Content")).toBeInTheDocument();
      expect(screen.queryByText("Something went wrong")).not.toBeInTheDocument();
    });
  });

  describe("Error logging", () => {
    it("should log error to console when error is caught", () => {
      // Arrange
      const Thrower = () => {
        throw new Error("Test error");
      };
      const consoleErrorSpy = vi.spyOn(console, "error");

      // Act
      render(
        <ErrorBoundary>
          <Thrower />
        </ErrorBoundary>
      );

      // Assert
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "ErrorBoundary caught an error:",
        expect.any(Error),
        expect.objectContaining({
          componentStack: expect.any(String),
        })
      );
    });
  });

  describe("Component lifecycle with children", () => {
    it("should handle multiple children components", () => {
      // Arrange
      const Thrower = () => {
        throw new Error("Test error");
      };
      const SafeChild = () => <div>Safe Child</div>;

      // Act
      render(
        <ErrorBoundary>
          <SafeChild />
          <Thrower />
          <SafeChild />
        </ErrorBoundary>
      );

      // Assert
      expect(screen.getByText("Something went wrong")).toBeInTheDocument();
      expect(screen.queryByText("Safe Child")).not.toBeInTheDocument();
    });

    it("should handle nested component structure", () => {
      // Arrange
      const DeepThrower = () => {
        throw new Error("Deep error");
      };
      const Parent = () => (
        <div>
          <div>
            <DeepThrower />
          </div>
        </div>
      );

      // Act
      render(
        <ErrorBoundary>
          <Parent />
        </ErrorBoundary>
      );

      // Assert
      expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    });
  });
});
