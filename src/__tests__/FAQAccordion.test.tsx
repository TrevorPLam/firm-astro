import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQAccordion from "@components/FAQAccordion";

describe("FAQAccordion component", { tags: ["integration"] }, () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  const mockItems = [
    {
      question: "What is your pricing?",
      answer: "Our pricing starts at $500/month for basic services.",
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes, we offer custom solutions tailored to your needs.",
    },
    {
      question: "What is your turnaround time?",
      answer: "Typical turnaround time is 2-3 business days.",
    },
  ];

  describe("Rendering", () => {
    it("should render all FAQ items", () => {
      render(<FAQAccordion items={mockItems} />);

      expect(screen.getByText("What is your pricing?")).toBeInTheDocument();
      expect(screen.getByText("Do you offer custom solutions?")).toBeInTheDocument();
      expect(screen.getByText("What is your turnaround time?")).toBeInTheDocument();
    });

    it("should not render search input when searchable is false", () => {
      render(<FAQAccordion items={mockItems} searchable={false} />);

      expect(screen.queryByPlaceholderText("Search questions...")).not.toBeInTheDocument();
    });

    it("should render search input when searchable is true", () => {
      render(<FAQAccordion items={mockItems} searchable={true} />);

      expect(screen.getByPlaceholderText("Search questions...")).toBeInTheDocument();
    });

    it("should render answers hidden by default", () => {
      render(<FAQAccordion items={mockItems} />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toHaveAttribute('aria-expanded', 'false');
      });
    });
  });

  describe("Accordion behavior", () => {
    it("should expand item when clicked", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} />);

      const firstQuestion = screen.getByText("What is your pricing?").closest('button');
      await user.click(firstQuestion as HTMLElement);

      expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
    });

    it("should collapse item when clicked again", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} />);

      const firstQuestion = screen.getByText("What is your pricing?").closest('button');
      await user.click(firstQuestion as HTMLElement);
      await user.click(firstQuestion as HTMLElement);

      expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
    });

    it("should close previously opened item when another is clicked", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} />);

      const firstQuestion = screen.getByText("What is your pricing?").closest('button');
      const secondQuestion = screen.getByText("Do you offer custom solutions?").closest('button');

      await user.click(firstQuestion as HTMLElement);
      await user.click(secondQuestion as HTMLElement);

      expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
      expect(secondQuestion).toHaveAttribute('aria-expanded', 'true');
    });

    it("should rotate chevron icon when expanded", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} />);

      const firstQuestion = screen.getByText("What is your pricing?").closest("button");
      const chevron = firstQuestion?.querySelector("svg") as SVGElement;

      expect(chevron).not.toHaveClass("rotate-180");

      await user.click(firstQuestion as HTMLElement);

      expect(chevron).toHaveClass("rotate-180");
    });
  });

  describe("Search functionality", () => {
    it("should filter items by question text", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} searchable={true} />);

      const searchInput = screen.getByPlaceholderText("Search questions...");
      await user.type(searchInput, "pricing");

      // Wait for debounce
      await new Promise(resolve => setTimeout(resolve, 350));

      expect(screen.getByText("What is your pricing?")).toBeInTheDocument();
      expect(screen.queryByText("Do you offer custom solutions?")).not.toBeInTheDocument();
      expect(screen.queryByText("What is your turnaround time?")).not.toBeInTheDocument();
    });

    it("should filter items by answer text", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} searchable={true} />);

      const searchInput = screen.getByPlaceholderText("Search questions...");
      await user.type(searchInput, "custom");

      // Wait for debounce
      await new Promise(resolve => setTimeout(resolve, 350));

      expect(screen.queryByText("What is your pricing?")).not.toBeInTheDocument();
      expect(screen.getByText("Do you offer custom solutions?")).toBeInTheDocument();
      expect(screen.queryByText("What is your turnaround time?")).not.toBeInTheDocument();
    });

    it("should show no results message when search yields no matches", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} searchable={true} />);

      const searchInput = screen.getByPlaceholderText("Search questions...");
      await user.type(searchInput, "nonexistent");

      // Wait for debounce
      await new Promise(resolve => setTimeout(resolve, 350));

      expect(screen.getByText("No questions found matching your search.")).toBeInTheDocument();
    });

    it("should be case insensitive", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} searchable={true} />);

      const searchInput = screen.getByPlaceholderText("Search questions...");
      await user.type(searchInput, "PRICING");

      // Wait for debounce
      await new Promise(resolve => setTimeout(resolve, 350));

      expect(screen.getByText("What is your pricing?")).toBeInTheDocument();
    });

    it("should show all items when search is cleared", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} searchable={true} />);

      const searchInput = screen.getByPlaceholderText("Search questions...");
      await user.type(searchInput, "pricing");

      // Wait for debounce
      await new Promise(resolve => setTimeout(resolve, 350));

      expect(screen.getByText("What is your pricing?")).toBeInTheDocument();
      expect(screen.queryByText("Do you offer custom solutions?")).not.toBeInTheDocument();

      await user.clear(searchInput);

      // Wait for debounce
      await new Promise(resolve => setTimeout(resolve, 350));

      expect(screen.getByText("What is your pricing?")).toBeInTheDocument();
      expect(screen.getByText("Do you offer custom solutions?")).toBeInTheDocument();
      expect(screen.getByText("What is your turnaround time?")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("should have aria-expanded false by default", () => {
      render(<FAQAccordion items={mockItems} />);

      const firstQuestion = screen.getByText("What is your pricing?").closest("button");
      expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    });

    it("should toggle accordion with Enter key", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} />);

      const firstQuestion = screen.getByText("What is your pricing?").closest("button");
      expect(firstQuestion).toHaveAttribute("aria-expanded", "false");

      await user.keyboard("{Tab}");
      await user.keyboard("{Enter}");

      expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    });

    it("should toggle accordion with Space key", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} />);

      const firstQuestion = screen.getByText("What is your pricing?").closest("button");
      expect(firstQuestion).toHaveAttribute("aria-expanded", "false");

      await user.keyboard("{Tab}");
      await user.keyboard(" ");

      expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    });

    it("should focus search input when searchable is true", () => {
      render(<FAQAccordion items={mockItems} searchable={true} />);

      const searchInput = screen.getByPlaceholderText("Search questions...");
      expect(searchInput).toHaveFocus();
    });

    it("should set aria-expanded true when item is opened", async () => {
      const user = userEvent.setup();
      render(<FAQAccordion items={mockItems} />);

      const firstQuestion = screen.getByText("What is your pricing?").closest("button");
      await user.click(firstQuestion as HTMLElement);

      expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    });

    it("should have aria-controls linking to panel", () => {
      render(<FAQAccordion items={mockItems} />);

      const firstQuestion = screen.getByText("What is your pricing?").closest("button");
      const ariaControls = firstQuestion?.getAttribute("aria-controls");

      expect(ariaControls).toBeTruthy();
      expect(ariaControls).toContain("panel");
    });

    it("should have unique IDs for panels", () => {
      render(<FAQAccordion items={mockItems} />);

      const buttons = screen.getAllByRole("button");
      const ids = buttons.map((button) => button.getAttribute("aria-controls"));

      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });
  });

  describe("Edge cases", () => {
    it("should render empty state when no items provided", () => {
      render(<FAQAccordion items={[]} />);

      expect(screen.queryByText(/pricing|custom|turnaround/)).not.toBeInTheDocument();
    });

    it("should handle single item", async () => {
      const user = userEvent.setup();
      const singleItem = [
        {
          question: "Single question?",
          answer: "Single answer.",
        },
      ];

      render(<FAQAccordion items={singleItem} />);

      expect(screen.getByText("Single question?")).toBeInTheDocument();

      const question = screen.getByText("Single question?").closest('button');
      await user.click(question as HTMLElement);

      expect(question).toHaveAttribute('aria-expanded', 'true');
    });

    it("should handle items with category", () => {
      const itemsWithCategory = [
        {
          question: "Question?",
          answer: "Answer.",
          category: "General",
        },
      ];

      render(<FAQAccordion items={itemsWithCategory} />);

      expect(screen.getByText("Question?")).toBeInTheDocument();
      expect(screen.getByText("General")).toBeInTheDocument();
    });
  });
});
