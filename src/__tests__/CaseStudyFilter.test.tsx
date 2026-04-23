import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CaseStudyFilter from "@components/CaseStudyFilter";

describe("CaseStudyFilter component", { tags: ["integration"] }, () => {
  const mockCaseStudies = [
    {
      slug: "case-1",
      title: "E-commerce Growth Strategy",
      client: "Retail Co",
      industry: "E-commerce",
      services: ["SEO", "Content Marketing"],
      results: [
        { metric: "Traffic", value: "+150%", improvement: "vs baseline" },
        { metric: "Conversions", value: "+85%", improvement: "vs baseline" },
      ],
      featured: true,
    },
    {
      slug: "case-2",
      title: "B2B Lead Generation",
      client: "Tech Corp",
      industry: "SaaS",
      services: ["Email Automation", "Paid Media"],
      results: [
        { metric: "Leads", value: "+200%", improvement: "vs baseline" },
        { metric: "ROI", value: "3.5x", improvement: "vs baseline" },
      ],
    },
    {
      slug: "case-3",
      title: "Brand Awareness Campaign",
      client: "Startup Inc",
      industry: "E-commerce",
      services: ["Paid Media", "Content Marketing"],
      results: [
        { metric: "Reach", value: "2.5M", improvement: "impressions" },
        { metric: "Engagement", value: "+120%", improvement: "vs baseline" },
      ],
    },
  ];

  describe("Rendering", () => {
    it("should render all case studies by default", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      expect(screen.getByText("E-commerce Growth Strategy")).toBeInTheDocument();
      expect(screen.getByText("B2B Lead Generation")).toBeInTheDocument();
      expect(screen.getByText("Brand Awareness Campaign")).toBeInTheDocument();
    });

    it("should render industry filter dropdown", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      expect(screen.getByLabelText(/industry/i)).toBeInTheDocument();
    });

    it("should render service filter dropdown", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      expect(screen.getByLabelText(/service/i)).toBeInTheDocument();
    });

    it("should show correct results count", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      expect(screen.getByText(/Showing 3 of 3 case studies/)).toBeInTheDocument();
    });

    it("should render featured badge for featured studies", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      expect(screen.getByText("Featured")).toBeInTheDocument();
    });

    it("should not render featured badge for non-featured studies", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const featuredBadges = screen.getAllByText("Featured");
      expect(featuredBadges.length).toBe(1);
    });
  });

  describe("Industry filtering", () => {
    it("should filter by industry when selected", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industrySelect = screen.getByLabelText(/industry/i);
      await user.selectOptions(industrySelect, "E-commerce");

      expect(screen.getByText("E-commerce Growth Strategy")).toBeInTheDocument();
      expect(screen.getByText("Brand Awareness Campaign")).toBeInTheDocument();
      expect(screen.queryByText("B2B Lead Generation")).not.toBeInTheDocument();
    });

    it("should show correct count after industry filter", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industrySelect = screen.getByLabelText(/industry/i);
      await user.selectOptions(industrySelect, "E-commerce");

      expect(screen.getByText(/Showing 2 of 3 case studies/)).toBeInTheDocument();
    });

    it("should reset to all when selecting 'All Industries'", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industrySelect = screen.getByLabelText(/industry/i);
      await user.selectOptions(industrySelect, "E-commerce");
      await user.selectOptions(industrySelect, "all");

      expect(screen.getByText("E-commerce Growth Strategy")).toBeInTheDocument();
      expect(screen.getByText("B2B Lead Generation")).toBeInTheDocument();
      expect(screen.getByText("Brand Awareness Campaign")).toBeInTheDocument();
    });
  });

  describe("Service filtering", () => {
    it("should filter by service when selected", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const serviceSelect = screen.getByLabelText(/service/i);
      await user.selectOptions(serviceSelect, "SEO");

      expect(screen.getByText("E-commerce Growth Strategy")).toBeInTheDocument();
      expect(screen.queryByText("B2B Lead Generation")).not.toBeInTheDocument();
      expect(screen.queryByText("Brand Awareness Campaign")).not.toBeInTheDocument();
    });

    it("should show correct count after service filter", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const serviceSelect = screen.getByLabelText(/service/i);
      await user.selectOptions(serviceSelect, "SEO");

      expect(screen.getByText(/Showing 1 of 3 case studies/)).toBeInTheDocument();
    });

    it("should reset to all when selecting 'All Services'", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const serviceSelect = screen.getByLabelText(/service/i);
      await user.selectOptions(serviceSelect, "SEO");
      await user.selectOptions(serviceSelect, "all");

      expect(screen.getByText("E-commerce Growth Strategy")).toBeInTheDocument();
      expect(screen.getByText("B2B Lead Generation")).toBeInTheDocument();
      expect(screen.getByText("Brand Awareness Campaign")).toBeInTheDocument();
    });
  });

  describe("Combined filtering", () => {
    it("should filter by both industry and service", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industrySelect = screen.getByLabelText(/industry/i);
      const serviceSelect = screen.getByLabelText(/service/i);

      await user.selectOptions(industrySelect, "E-commerce");
      await user.selectOptions(serviceSelect, "Content Marketing");

      expect(screen.getByText("E-commerce Growth Strategy")).toBeInTheDocument();
      expect(screen.getByText("Brand Awareness Campaign")).toBeInTheDocument();
      expect(screen.queryByText("B2B Lead Generation")).not.toBeInTheDocument();
    });

    it("should show no results when filters have no matches", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industrySelect = screen.getByLabelText(/industry/i);
      const serviceSelect = screen.getByLabelText(/service/i);

      await user.selectOptions(industrySelect, "SaaS");
      await user.selectOptions(serviceSelect, "SEO");

      expect(screen.getByText("No case studies match your selected filters.")).toBeInTheDocument();
    });

    it("should show clear filters button when no results", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industrySelect = screen.getByLabelText(/industry/i);
      const serviceSelect = screen.getByLabelText(/service/i);

      await user.selectOptions(industrySelect, "SaaS");
      await user.selectOptions(serviceSelect, "SEO");

      const clearButton = screen.getByText("Clear filters");
      expect(clearButton).toBeInTheDocument();
    });

    it("should reset filters when clear button is clicked", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industrySelect = screen.getByLabelText(/industry/i);
      const serviceSelect = screen.getByLabelText(/service/i);

      await user.selectOptions(industrySelect, "SaaS");
      await user.selectOptions(serviceSelect, "SEO");

      const clearButton = screen.getByText("Clear filters");
      await user.click(clearButton);

      expect(screen.getByText("E-commerce Growth Strategy")).toBeInTheDocument();
      expect(screen.getByText("B2B Lead Generation")).toBeInTheDocument();
      expect(screen.getByText("Brand Awareness Campaign")).toBeInTheDocument();
    });
  });

  describe("Case study cards", () => {
    it("should render client name", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      expect(screen.getByText("Retail Co")).toBeInTheDocument();
      expect(screen.getByText("Tech Corp")).toBeInTheDocument();
      expect(screen.getByText("Startup Inc")).toBeInTheDocument();
    });

    it("should render industry tag", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industryTags = screen.getAllByText("E-commerce");
      const saasTags = screen.getAllByText("SaaS");
      expect(industryTags.length).toBeGreaterThan(0);
      expect(saasTags.length).toBeGreaterThan(0);
    });

    it("should render results metrics", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      expect(screen.getByText("+150%")).toBeInTheDocument();
      expect(screen.getByText("Traffic")).toBeInTheDocument();
    });

    it("should render view details link", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      expect(screen.getAllByText("View Details")).toHaveLength(3);
    });

    it("should link to correct case study URLs", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const links = screen.getAllByRole("link");
      expect(links[0]).toHaveAttribute("href", "/work/case-1");
      expect(links[1]).toHaveAttribute("href", "/work/case-2");
      expect(links[2]).toHaveAttribute("href", "/work/case-3");
    });

    it("should allow clicking View Details links", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const viewDetailsLinks = screen.getAllByText("View Details");
      const firstLink = viewDetailsLinks[0].closest("a");

      expect(firstLink).toBeInTheDocument();
      await user.click(firstLink!);

      // Link should still be present after click (navigation would happen in real browser)
      expect(firstLink).toHaveAttribute("href", "/work/case-1");
    });
  });

  describe("Keyboard navigation", () => {
    it("should focus industry select with Tab key", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      await user.tab();

      const industrySelect = screen.getByLabelText(/industry/i);
      expect(industrySelect).toHaveFocus();
    });

    it("should focus service select with Tab key after industry", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      await user.tab();
      await user.tab();

      const serviceSelect = screen.getByLabelText(/service/i);
      expect(serviceSelect).toHaveFocus();
    });
  });

  describe("Accessibility", () => {
    it("should have visible labels for filter dropdowns", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industryLabel = screen.getByLabelText(/industry/i).previousElementSibling as HTMLLabelElement;
      const serviceLabel = screen.getByLabelText(/service/i).previousElementSibling as HTMLLabelElement;

      expect(industryLabel).toBeInTheDocument();
      expect(serviceLabel).toBeInTheDocument();
      expect(industryLabel?.textContent).toContain("Industry");
      expect(serviceLabel?.textContent).toContain("Service");
    });

    it("should associate labels with select elements", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industrySelect = screen.getByLabelText(/industry/i);
      const serviceSelect = screen.getByLabelText(/service/i);

      expect(industrySelect).toBeInTheDocument();
      expect(serviceSelect).toBeInTheDocument();
      expect(industrySelect).toHaveAttribute("id", "industry-filter");
      expect(serviceSelect).toHaveAttribute("id", "service-filter");
    });
  });

  describe("Hover states", () => {
    it("should trigger hover events on case study cards", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const firstCard = screen.getByText("E-commerce Growth Strategy").closest("a");
      expect(firstCard).toBeInTheDocument();

      // Test that hover event can be triggered
      await user.hover(firstCard!);

      // Card should still be present after hover
      expect(firstCard).toBeInTheDocument();
    });

    it("should trigger unhover events on case study cards", async () => {
      const user = userEvent.setup();
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const firstCard = screen.getByText("E-commerce Growth Strategy").closest("a");
      expect(firstCard).toBeInTheDocument();

      await user.hover(firstCard!);
      await user.unhover(firstCard!);

      // Card should still be present after unhover
      expect(firstCard).toBeInTheDocument();
    });
  });

  describe("Edge cases", () => {
    it("should render empty state when no case studies provided", () => {
      render(<CaseStudyFilter caseStudies={[]} />);

      expect(screen.getByText(/Showing 0 of 0 case studies/)).toBeInTheDocument();
    });

    it("should handle single case study", () => {
      const singleStudy = [mockCaseStudies[0]];
      render(<CaseStudyFilter caseStudies={singleStudy} />);

      expect(screen.getByText("E-commerce Growth Strategy")).toBeInTheDocument();
      expect(screen.getByText(/Showing 1 of 1 case studies/)).toBeInTheDocument();
    });

    it("should extract unique industries correctly", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const industrySelect = screen.getByLabelText(/industry/i);
      const options = industrySelect.querySelectorAll("option");

      expect(options).toHaveLength(3); // all, E-commerce, SaaS
    });

    it("should extract unique services correctly", () => {
      render(<CaseStudyFilter caseStudies={mockCaseStudies} />);

      const serviceSelect = screen.getByLabelText(/service/i);
      const options = serviceSelect.querySelectorAll("option");

      expect(options).toHaveLength(5); // all, SEO, Content Marketing, Email Automation, Paid Media
    });

    it("should handle case studies without images", () => {
      const studiesWithoutImages = mockCaseStudies.map((cs) => ({ ...cs, image: undefined }));
      render(<CaseStudyFilter caseStudies={studiesWithoutImages} />);

      expect(screen.getByText("E-commerce Growth Strategy")).toBeInTheDocument();
    });

    it("should handle case studies with images", () => {
      const studiesWithImages = mockCaseStudies.map((cs) => ({
        ...cs,
        image: "/images/case-study.jpg",
      }));
      render(<CaseStudyFilter caseStudies={studiesWithImages} />);

      const images = screen.getAllByRole("img");
      expect(images.length).toBe(3);
    });

    it("should have loading lazy attribute on images", () => {
      const studiesWithImages = mockCaseStudies.map((cs) => ({
        ...cs,
        image: "/images/case-study.jpg",
      }));
      render(<CaseStudyFilter caseStudies={studiesWithImages} />);

      const images = screen.getAllByRole("img");
      images.forEach((image) => {
        expect(image).toHaveAttribute("loading", "lazy");
      });
    });

    it("should have proper alt text on images", () => {
      const studiesWithImages = mockCaseStudies.map((cs) => ({
        ...cs,
        image: "/images/case-study.jpg",
      }));
      render(<CaseStudyFilter caseStudies={studiesWithImages} />);

      const images = screen.getAllByRole("img");
      expect(images[0]).toHaveAttribute("alt", "E-commerce Growth Strategy");
      expect(images[1]).toHaveAttribute("alt", "B2B Lead Generation");
      expect(images[2]).toHaveAttribute("alt", "Brand Awareness Campaign");
    });
  });
});
