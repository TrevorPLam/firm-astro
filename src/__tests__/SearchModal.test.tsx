import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchModal from "@components/SearchModal";

// Mock MiniSearch
vi.mock("minisearch", () => ({
  default: class MockMiniSearch {
    addAll = vi.fn();
    search = vi.fn(() => []);
  },
}));

// Mock window.location.href
const mockLocation = { href: "" };
Object.defineProperty(window, "location", {
  value: mockLocation,
  writable: true,
});

describe("SearchModal component", { tags: ["integration"] }, () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Reset mocks
    vi.clearAllMocks();
    mockLocation.href = "";

    // Mock successful fetch for search index
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => [],
      } as Response)
    );
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  describe("Modal state", () => {
    it("should not render when closed", () => {
      // Arrange & Act
      render(<SearchModal />);

      // Assert
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("should open when open-search custom event is dispatched", async () => {
      // Arrange
      render(<SearchModal />);

      // Act
      document.dispatchEvent(new CustomEvent("open-search"));
      vi.runOnlyPendingTimers();

      // Assert
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });

    it("should close when close-search custom event is dispatched", async () => {
      // Arrange
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));
      vi.runOnlyPendingTimers();

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      // Act
      document.dispatchEvent(new CustomEvent("close-search"));

      // Assert
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      });
    });

    it("should close when Escape key is pressed", async () => {
      // Arrange
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));
      vi.runOnlyPendingTimers();

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      // Act
      fireEvent.keyDown(document, { key: "Escape" });

      // Assert
      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      });
    });
  });

  describe("ARIA attributes", () => {
    it("should have aria-modal set to true", async () => {
      // Arrange
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));
      vi.runOnlyPendingTimers();

      // Assert
      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        expect(dialog).toHaveAttribute("aria-modal", "true");
      });
    });

    it("should have aria-labelledby pointing to search-title", async () => {
      // Arrange
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));
      vi.runOnlyPendingTimers();

      // Assert
      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        expect(dialog).toHaveAttribute("aria-labelledby", "search-title");
      });
    });
  });

  describe("Event listeners", () => {
    it("should register event listeners for open-search and close-search", () => {
      // Arrange
      const addEventListenerSpy = vi.spyOn(document, "addEventListener");

      // Act
      render(<SearchModal />);

      // Assert
      expect(addEventListenerSpy).toHaveBeenCalledWith("open-search", expect.any(Function));
      expect(addEventListenerSpy).toHaveBeenCalledWith("close-search", expect.any(Function));

      addEventListenerSpy.mockRestore();
    });

    it("should dispatch search-modal-closed event when closing", async () => {
      // Arrange
      const dispatchSpy = vi.spyOn(document, "dispatchEvent");
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));
      vi.runOnlyPendingTimers();

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      // Act
      document.dispatchEvent(new CustomEvent("close-search"));

      // Assert
      await waitFor(() => {
        expect(dispatchSpy).toHaveBeenCalledWith(
          expect.objectContaining({
            type: "search-modal-closed",
          })
        );
      });

      dispatchSpy.mockRestore();
    });
  });

  describe("Cleanup", () => {
    it("should remove event listeners on unmount", () => {
      // Arrange
      const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");
      const { unmount } = render(<SearchModal />);

      // Act
      unmount();

      // Assert
      expect(removeEventListenerSpy).toHaveBeenCalledWith("open-search", expect.any(Function));
      expect(removeEventListenerSpy).toHaveBeenCalledWith("close-search", expect.any(Function));

      removeEventListenerSpy.mockRestore();
    });
  });
});
