---
trigger: always_on
---

<styling_guidelines>

# Styling Guidelines

## Color Usage
- **Primary Accent**: Use `electric-500` (#0055FF) for primary actions
- **Secondary Accent**: Use `electric-400` for hover states and highlights
- **Dark Background**: Use `dark-900` to `dark-700` for backgrounds
- **Light Background**: Use `light-DEFAULT` to `light-100` for light mode
- **Text**: Use `text-white` (dark) or `text-light-900` (light)

## Dark Mode Priority
- Always design for dark mode first
- Use `dark:` prefix for all dark mode styling
- Default to dark mode color schemes
- Ensure light mode contrast meets WCAG AA standards

## Custom Utilities
- `glass-card`: Glassmorphism effect with backdrop blur
- `focus-ring`: Custom focus outline with electric blue
- `grid-pattern`: Background grid pattern
- `shadow-neon-*`: Neon glow effects (sm, md, lg, xl)

## Tailwind Patterns
- Use utility classes for all styling
- Avoid custom CSS in component styles
- Use Tailwind's responsive prefixes (md:, lg:, xl:)
- Use state variants (hover:, focus:, active:)

## Animations
- `animate-float`: Gentle floating animation
- `animate-slide-up`: Slide up from bottom
- `animate-fade-in`: Fade in effect
- `animate-glow-pulse`: Pulsing glow effect
- `animate-glitch`: Glitch effect (use sparingly)

## Spacing
- Use Tailwind's spacing scale (4, 8, 12, 16, etc.)
- Maintain consistent spacing patterns
- Use gap utilities for flex/grid layouts
- Use padding/margin utilities consistently

## Typography
- **Headings**: `font-display` (Space Grotesk)
- **Body**: `font-sans` (Inter)
- Use semantic font sizes (text-xl, text-2xl, etc.)
- Use font weights: font-normal, font-semibold, font-bold

## Borders
- Use `border-light-200` for light mode
- Use `border-white/10` for dark mode
- Use `border-electric-500` for accent borders
- Use rounded utilities: rounded-lg, rounded-xl

## Shadows
- Use custom neon shadows for accent effects
- Use glass shadows for glassmorphism
- Avoid heavy shadows on dark backgrounds

</styling_guidelines>
