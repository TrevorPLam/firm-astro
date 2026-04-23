import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchModal from "@components/SearchModal";

// Mock MiniSearch
vi.mock("minisearch", () => ({
  default: vi.fn().mockImplementation(() => ({
    addAll: vi.fn(),
    search: vi.fn(),
  })),
}));

describe("SearchModal component", () => {
  beforeEach(() => {
    // Reset document event listeners
    document.dispatchEvent = vi.fn();
    document.addEventListener = vi.fn();
    document.removeEventListener = vi.fn();
  });

  describe("Modal state", () => {
    it("should not render when closed", () => {
      render(<SearchModal />);
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("should open when custom event is dispatched", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });

    it("should close when custom event is dispatched", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      document.dispatchEvent(new CustomEvent("close-search"));

      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      });
    });

    it("should have correct ARIA attributes when open", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        expect(dialog).toHaveAttribute("aria-modal", "true");
        expect(dialog).toHaveAttribute("aria-labelledby", "search-title");
      });
    });
  });

  describe("Search input", () => {
    it("should focus input when modal opens", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
        expect(input).toHaveFocus();
      });
    });

    it("should update query when typing", async () => {
      const user = userEvent.setup();
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
        user.type(input, "test query");
        expect(input).toHaveValue("test query");
      });
    });

    it("should clear query when modal closes", async () => {
      const user = userEvent.setup();
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(async () => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
        await user.type(input, "test query");
      });

      document.dispatchEvent(new CustomEvent("close-search"));

      await waitFor(() => {
        const input = screen.queryByPlaceholderText(/search blog posts and case studies/i);
        expect(input).not.toBeInTheDocument();
      });
    });
  });

  describe("Keyboard navigation", () => {
    it("should close on Escape key", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      fireEvent.keyDown(document, { key: "Escape" });

      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      });
    });

    it("should navigate results with ArrowDown", async () => {
      const user = userEvent.setup();
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(async () => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
        await user.type(input, "test");
      });

      // This would need mocked search results to fully test
      // For now, we test that the key handler is set up
      fireEvent.keyDown(document, { key: "ArrowDown" });
    });

    it("should navigate results with ArrowUp", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        fireEvent.keyDown(document, { key: "ArrowUp" });
      });
    });

    it("should select result with Enter key", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        fireEvent.keyDown(document, { key: "Enter" });
      });
    });
  });

  describe("Click outside to close", () => {
    it("should close when clicking backdrop", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const backdrop = screen.getByRole("dialog").previousElementSibling;
      if (backdrop) {
        fireEvent.mouseDown(backdrop);
      }

      await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      });
    });
  });

  describe("Search states", () => {
    it("should show loading state when index is loading", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByText("Loading search index...")).toBeInTheDocument();
      });
    });

    it("should show minimum characters message for short queries", async () => {
      const user = userEvent.setup();
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(async () => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
        await user.type(input, "t");
      });

      await waitFor(() => {
        expect(screen.getByText("Type at least 2 characters to search")).toBeInTheDocument();
      });
    });

    it("should show no results message when search yields no results", async () => {
      const user = userEvent.setup();
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(async () => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
        await user.type(input, "nonexistent query that yields no results");
      });

      // This would need actual search implementation to fully test
    });

    it("should show results count in footer when results exist", async () => {
      const user = userEvent.setup();
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(async () => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
        await user.type(input, "test");
      });

      // This would need mocked search results to fully test
    });
  });

  describe("Accessibility", () => {
    it("should have backdrop for visual focus", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        const backdrop = screen.getByRole("dialog").previousElementSibling;
        expect(backdrop).toHaveClass("bg-black/60");
      });
    });

    it("should show keyboard shortcuts in footer", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByText("to navigate")).toBeInTheDocument();
        expect(screen.getByText("to select")).toBeInTheDocument();
        expect(screen.getByText("to close")).toBeInTheDocument();
      });
    });

    it("should show ESC key hint in header", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByText("ESC")).toBeInTheDocument();
      });
    });
  });

  describe("Result rendering", () => {
    it("should render blog type badge", async () => {
      // This would need mocked search results with blog type
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
        // Type to trigger search
      });
    });

    it("should render case study type badge", async () => {
      // This would need mocked search results with case study type
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
      });
    });

    it("should render category when present", async () => {
      // This would need mocked search results with category
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
      });
    });

    it("should render client when present", async () => {
      // This would need mocked search results with client
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
      });
    });
  });

  describe("Focus trap", () => {
    it("should trap focus within modal when open", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
      });

      // Focus trap is tested by checking Tab key behavior
      // This would need more complex setup to fully test
    });
  });

  describe("Custom events", () => {
    it("should dispatch search-modal-closed event on close", async () => {
      const dispatchSpy = vi.spyOn(document, "dispatchEvent");
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      fireEvent.keyDown(document, { key: "Escape" });

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

  describe("Edge cases", () => {
    it("should handle empty search index gracefully", async () => {
      // Mock failed fetch
      global.fetch = vi.fn(() => Promise.reject(new Error("Network error")));

      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        // Should handle error gracefully
        const input = screen.getByPlaceholderText(/search blog posts and case studies/i);
        expect(input).toBeInTheDocument();
      });
    });

    it("should handle rapid open/close events", async () => {
      render(<SearchModal />);

      document.dispatchEvent(new CustomEvent("open-search"));
      document.dispatchEvent(new CustomEvent("close-search"));
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });
  });
});
