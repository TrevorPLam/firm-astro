import { useState, FormEvent, useId } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const services = [
  'SEO',
  'Paid Media',
  'Content Marketing',
  'Email Automation',
  'Analytics & Reporting',
  'Full Service',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const baseId = useId();

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="glass-card p-8 text-center" aria-live="polite">
        <div className="w-16 h-16 rounded-full bg-electric-500/20 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-electric-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-light-900 dark:text-white mb-2">Message Sent!</h3>
        <p className="text-light-600 dark:text-gray-400">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8">
      <div className="grid gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-light-700 dark:text-gray-300 mb-2">
            Name <span className="text-electric-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
            className="w-full px-4 py-3 bg-light-100 dark:bg-white/5 border border-light-200 dark:border-white/10 rounded-lg text-light-900 dark:text-white placeholder-light-500 dark:placeholder-gray-500 focus-ring transition-colors"
            placeholder="John Doe"
          />
          {errors.name && (
            <p id={`${baseId}-name-error`} className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-light-700 dark:text-gray-300 mb-2">
            Email <span className="text-electric-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
            className="w-full px-4 py-3 bg-light-100 dark:bg-white/5 border border-light-200 dark:border-white/10 rounded-lg text-light-900 dark:text-white placeholder-light-500 dark:placeholder-gray-500 focus-ring transition-colors"
            placeholder="john@company.com"
          />
          {errors.email && (
            <p id={`${baseId}-email-error`} className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-light-700 dark:text-gray-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-light-100 dark:bg-white/5 border border-light-200 dark:border-white/10 rounded-lg text-light-900 dark:text-white placeholder-light-500 dark:placeholder-gray-500 focus-ring transition-colors"
            placeholder="Company Inc."
          />
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-light-700 dark:text-gray-300 mb-2">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-light-100 dark:bg-white/5 border border-light-200 dark:border-white/10 rounded-lg text-light-900 dark:text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors appearance-none cursor-pointer select-arrow"
          >
            <option value="" className="bg-white dark:bg-dark-800">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service} className="bg-white dark:bg-dark-800">
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-light-700 dark:text-gray-300 mb-2">
            Message <span className="text-electric-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `${baseId}-message-error` : undefined}
            className="w-full px-4 py-3 bg-light-100 dark:bg-white/5 border border-light-200 dark:border-white/10 rounded-lg text-light-900 dark:text-white placeholder-light-500 dark:placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p id={`${baseId}-message-error`} className="mt-1 text-sm text-red-400">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.042.784 3.902 2.059 5.291l1.941-1.941z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  );
}
