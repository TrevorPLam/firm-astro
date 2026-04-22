---
trigger: glob
globs: **/*.tsx
---

<react_components>

# React Component Guidelines

When creating or modifying React components (.tsx files):

## When to Use React
- Interactive forms (ContactForm)
- Accordions and expandable content (FAQAccordion)
- Filters and dynamic content (CaseStudyFilter)
- Modals and overlays (SearchModal)
- State management requiring hooks

## Hooks Usage
- Use `useState` for local component state
- Use `useEffect` for side effects (cleanup when needed)
- Use `useRef` for DOM references
- Use `useId` for unique IDs (form labels, error messages)

## Form Patterns
- Use controlled components with state
- Implement proper validation
- Show loading states during async operations
- Display error messages with proper ARIA attributes
- Use `FormEvent` for form submissions

## Example Pattern
```tsx
const [formData, setFormData] = useState<FormData>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [errors, setErrors] = useState<Partial<FormData>>({});
const baseId = useId();
```

## Accessibility
- Use proper ARIA attributes: `aria-invalid`, `aria-describedby`, `aria-live`
- Associate labels with form elements using `htmlFor` and `id`
- Provide error messages linked to inputs
- Use semantic HTML

## Styling
- Use Tailwind CSS classes
- Maintain consistency with Astro components
- Use dark mode styling with `dark:` prefix
- Use electric blue accent colors

## Performance
- Keep component state minimal
- Avoid unnecessary re-renders
- Use `useCallback` and `useMemo` when needed
- Lazy load heavy components if needed

## TypeScript
- Define interfaces for props and state
- Use proper type annotations
- Avoid `any` type
- Use generic types when appropriate

</react_components>
