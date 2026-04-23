import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "@components/ContactForm";

describe("ContactForm component", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Form validation", () => {
    it("should show validation error when name is empty when form submitted", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<ContactForm />);

      // Act
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      expect(screen.getByText("Name is required")).toBeInTheDocument();
    });

    it("should show validation error when email is empty when form submitted", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });

    it("should show validation error for invalid email when email format is incorrect", async () => {
      // Arrange
      const user = userEvent.setup();
      const { container } = render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "invalid-email");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");
      const form = container.querySelector("form");
      if (form) fireEvent.submit(form);

      // Assert
      expect(screen.getByText("Please enter a valid email")).toBeInTheDocument();
    });

    it("should show validation error when message is empty when form submitted", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      expect(screen.getByText("Message is required")).toBeInTheDocument();
    });

    it("should not show validation errors when all required fields are filled correctly when form submitted", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");

      // Assert
      expect(screen.queryByText("Name is required")).not.toBeInTheDocument();
      expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
      expect(screen.queryByText("Please enter a valid email")).not.toBeInTheDocument();
      expect(screen.queryByText("Message is required")).not.toBeInTheDocument();
    });

    it("should clear error when user starts typing in field with error", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<ContactForm />);

      // Act
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);
      expect(screen.getByText("Name is required")).toBeInTheDocument();

      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John");

      // Assert
      expect(screen.queryByText("Name is required")).not.toBeInTheDocument();
    });
  });

  describe("Submit button state", () => {
    it("should disable button during submission when form is being submitted", async () => {
      // Arrange
      const user = userEvent.setup();
      (global.fetch as ReturnType<typeof vi.fn>).mockImplementation(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                ok: true,
                json: async () => ({ success: true }),
              } as Response);
            }, 100);
          })
      );
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      expect(submitButton).toBeDisabled();
    });

    it("should show loading spinner when form is being submitted", async () => {
      // Arrange
      const user = userEvent.setup();
      (global.fetch as ReturnType<typeof vi.fn>).mockImplementation(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                ok: true,
                json: async () => ({ success: true }),
              } as Response);
            }, 100);
          })
      );
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      expect(screen.getByText("Sending...")).toBeInTheDocument();
    });

    it("should show Send Message text when not submitting", () => {
      // Arrange
      render(<ContactForm />);

      // Act
      const submitButton = screen.getByRole("button", { name: "Send Message" });

      // Assert
      expect(submitButton).toHaveTextContent("Send Message");
      expect(submitButton).not.toBeDisabled();
    });
  });

  describe("Error handling", () => {
    it("should show error message when fetch fails", async () => {
      // Arrange
      const user = userEvent.setup();
      (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValue(new Error("Network error"));
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      await waitFor(() => {
        expect(screen.getByText("Failed to submit form. Please try again.")).toBeInTheDocument();
      });
    });

    it("should show error message when server returns non-200 response", async () => {
      // Arrange
      const user = userEvent.setup();
      (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
        ok: false,
        status: 500,
        json: async () => ({ error: "Server error" }),
      } as Response);
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      await waitFor(() => {
        expect(screen.getByText("Failed to submit form. Please try again.")).toBeInTheDocument();
      });
    });

    it("should show error message when server returns success false", async () => {
      // Arrange
      const user = userEvent.setup();
      (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
        ok: true,
        json: async () => ({ success: false, error: "Validation failed" }),
      } as Response);
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      await waitFor(() => {
        expect(screen.getByText("Failed to submit form. Please try again.")).toBeInTheDocument();
      });
    });

    it("should display error message with ARIA attributes", async () => {
      // Arrange
      const user = userEvent.setup();
      (global.fetch as ReturnType<typeof vi.fn>).mockRejectedValue(new Error("Network error"));
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      await waitFor(() => {
        const errorAlert = screen.getByRole("alert");
        expect(errorAlert).toBeInTheDocument();
        expect(errorAlert).toHaveAttribute("aria-live", "polite");
      });
    });
  });

  describe("Success state", () => {
    it("should show success message when form submission succeeds", async () => {
      // Arrange
      const user = userEvent.setup();
      (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      } as Response);
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      await waitFor(() => {
        expect(screen.getByText("Message Sent!")).toBeInTheDocument();
        expect(
          screen.getByText("Thank you for reaching out. We'll get back to you within 24 hours.")
        ).toBeInTheDocument();
      });
    });

    it("should display success message with aria-live", async () => {
      // Arrange
      const user = userEvent.setup();
      (global.fetch as ReturnType<typeof vi.fn>).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      } as Response);
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, "John Doe");
      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, "john@example.com");
      const messageInput = screen.getByLabelText(/message/i);
      await user.type(messageInput, "Test message");
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      await waitFor(() => {
        const successMessage = screen.getByText("Message Sent!");
        expect(successMessage.closest('[aria-live="polite"]')).toBeInTheDocument();
      });
    });
  });

  describe("ARIA attributes", () => {
    it("should set aria-invalid on input when validation error is present", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<ContactForm />);

      // Act
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      const nameInput = screen.getByLabelText(/name/i);
      expect(nameInput).toHaveAttribute("aria-invalid", "true");
    });

    it("should not set aria-invalid on input when no validation error", async () => {
      // Arrange
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);

      // Assert
      expect(nameInput).not.toHaveAttribute("aria-invalid", "true");
    });

    it("should set aria-describedby linking error message to input when error exists", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<ContactForm />);

      // Act
      const submitButton = screen.getByRole("button", { name: "Send Message" });
      await user.click(submitButton);

      // Assert
      const nameInput = screen.getByLabelText(/name/i);
      const ariaDescribedBy = nameInput.getAttribute("aria-describedby");
      expect(ariaDescribedBy).toBeTruthy();
      expect(ariaDescribedBy).toContain("name-error");

      const errorMessage = screen.getByText("Name is required");
      expect(errorMessage).toHaveAttribute("id", ariaDescribedBy);
    });

    it("should not set aria-describedby when no error exists", () => {
      // Arrange
      render(<ContactForm />);

      // Act
      const nameInput = screen.getByLabelText(/name/i);

      // Assert
      expect(nameInput).not.toHaveAttribute("aria-describedby");
    });
  });

  describe("Form fields", () => {
    it("should render all form fields", () => {
      // Arrange
      render(<ContactForm />);

      // Act & Assert
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/service/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    it("should allow typing in optional fields", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<ContactForm />);

      // Act
      const companyInput = screen.getByLabelText(/company/i);
      await user.type(companyInput, "Test Company");

      // Assert
      expect(companyInput).toHaveValue("Test Company");
    });

    it("should allow selecting service from dropdown", async () => {
      // Arrange
      const user = userEvent.setup();
      render(<ContactForm />);

      // Act
      const serviceSelect = screen.getByLabelText(/service/i);
      await user.selectOptions(serviceSelect, "SEO");

      // Assert
      expect(serviceSelect).toHaveValue("SEO");
    });
  });
});
