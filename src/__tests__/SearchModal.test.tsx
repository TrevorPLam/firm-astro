import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchModal from "@components/SearchModal";

// Mock MiniSearch with realistic behavior
const mockSearchResults = [
  {
    id: "blog-1",
    type: "blog" as const,
    title: "Test Blog Post",
    description: "A test blog post about marketing",
    category: "SEO",
    tags: ["marketing", "seo"],
    url: "/blog/test-blog-post",
  },
  {
    id: "case-1",
    type: "case" as const,
    title: "Test Case Study",
    description: "A test case study about SaaS growth",
    client: "Test Client",
    industry: "SaaS",
    services: ["SEO", "Content Marketing"],
    url: "/work/test-case-study",
  },
];

vi.mock("minisearch", () => ({
  default: class MockMiniSearch {
    addAll = vi.fn();
    search = vi.fn((query: string) => {
      if (query.toLowerCase().includes("test")) {
        return mockSearchResults;
      }
      return [];
    });
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
    // Reset mocks
    vi.clearAllMocks();
    mockLocation.href = "";

    // Mock successful fetch for search index
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: async () => mockSearchResults,
      } as Response)
    );
  });

  afterEach(() => {
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

      // Assert
      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });
    });

    it("should close when close-search custom event is dispatched", async () => {
      // Arrange
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

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
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      // Act
      await user.keyboard("{Escape}");

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

  describe("Search functionality", () => {
    it("should display search results when query matches", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/search/i);

      // Act
      await user.type(searchInput, "test");

      // Assert
      await waitFor(() => {
        expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
        expect(screen.getByText("Test Case Study")).toBeInTheDocument();
      });
    });

    it("should display no results when query does not match", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/search/i);

      // Act
      await user.type(searchInput, "nomatch");

      // Assert
      await waitFor(() => {
        expect(screen.getByText(/No results found/i)).toBeInTheDocument();
      });
    });

    it("should not search until query has at least 2 characters", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/search/i);

      // Act - type 1 character
      await user.type(searchInput, "t");

      // Assert - should show threshold message
      expect(screen.getByText(/Type at least 2 characters/i)).toBeInTheDocument();

      // Act - type 2 characters
      await user.type(searchInput, "e");

      // Assert - should search
      await waitFor(() => {
        expect(screen.queryByText(/Type at least 2 characters/i)).not.toBeInTheDocument();
      });
    });
  });

  describe("Keyboard navigation", () => {
    it("should navigate results with ArrowDown key", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/search/i);
      await user.type(searchInput, "test");

      await waitFor(() => {
        expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
      });

      const firstResult = screen.getByText("Test Blog Post").closest("a");
      const secondResult = screen.getByText("Test Case Study").closest("a");

      // Act - navigate to second result
      await user.keyboard("{ArrowDown}");

      // Assert - second result should be highlighted
      expect(secondResult).toHaveClass("bg-electric-500/20");
    });

    it("should navigate results with ArrowUp key", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/search/i);
      await user.type(searchInput, "test");

      await waitFor(() => {
        expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
      });

      // Act - navigate down then up
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowUp}");

      // Assert - should be back at first result
      const firstResult = screen.getByText("Test Blog Post").closest("a");
      expect(firstResult).toHaveClass("bg-electric-500/20");
    });

    it("should navigate to result URL when Enter is pressed", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/search/i);
      await user.type(searchInput, "test");

      await waitFor(() => {
        expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
      });

      // Act
      await user.keyboard("{Enter}");

      // Assert
      expect(mockLocation.href).toBe("/blog/test-blog-post");
    });
  });

  describe("Focus trap", () => {
    it("should focus search input when modal opens", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);

      // Act
      document.dispatchEvent(new CustomEvent("open-search"));

      // Assert
      await waitFor(() => {
        const searchInput = screen.getByPlaceholderText(/search/i);
        expect(searchInput).toHaveFocus();
      });
    });

    it("should trap focus within modal", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const dialog = screen.getByRole("dialog");

      // Act - tab through modal
      await user.tab({ focusTrap: dialog });

      // Assert - focus should still be within modal
      expect(dialog).toContainElement(document.activeElement);
    });
  });

  describe("Loading state", () => {
    it("should show loading state while search index loads", async () => {
      // Arrange
      let fetchResolve: (value: Response) => void;
      global.fetch = vi.fn(
        () =>
          new Promise((resolve) => {
            fetchResolve = resolve as (value: Response) => void;
          })
      );

      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      // Assert - should show loading
      await waitFor(() => {
        expect(screen.getByText("Loading search index...")).toBeInTheDocument();
      });

      // Act - resolve fetch
      fetchResolve!({
        ok: true,
        json: async () => mockSearchResults,
      } as Response);

      // Assert - loading should disappear
      await waitFor(() => {
        expect(screen.queryByText("Loading search index...")).not.toBeInTheDocument();
      });
    });
  });

  describe("Result highlighting", () => {
    it("should highlight selected result", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/search/i);
      await user.type(searchInput, "test");

      await waitFor(() => {
        expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
      });

      const firstResult = screen.getByText("Test Blog Post").closest("a");

      // Assert - first result should be highlighted by default
      expect(firstResult).toHaveClass("bg-electric-500/20");
    });

    it("should update highlighted result on mouse hover", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      await waitFor(() => {
        expect(screen.getByRole("dialog")).toBeInTheDocument();
      });

      const searchInput = screen.getByPlaceholderText(/search/i);
      await user.type(searchInput, "test");

      await waitFor(() => {
        expect(screen.getByText("Test Blog Post")).toBeInTheDocument();
      });

      const secondResult = screen.getByText("Test Case Study").closest("a");

      // Act - hover over second result
      await user.hover(secondResult!);

      // Assert - second result should be highlighted
      expect(secondResult).toHaveClass("bg-electric-500/20");
    });
  });

  describe("Error handling", () => {
    it("should handle search index load failure gracefully", async () => {
      // Arrange
      const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
      global.fetch = vi.fn(() => Promise.reject(new Error("Network error")));

      render(<SearchModal />);
      document.dispatchEvent(new CustomEvent("open-search"));

      // Assert - should show loading then clear it
      await waitFor(() => {
        expect(screen.queryByText("Loading search index...")).not.toBeInTheDocument();
      });

      // Assert - error should be logged
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Error loading search index:",
        expect.any(Error)
      );

      consoleErrorSpy.mockRestore();
    });
  });
});
