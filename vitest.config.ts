/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";
import react from "@vitejs/plugin-react";

export default getViteConfig(
  {
    plugins: [react()],
    test: {
      globals: true,
      environment: "happy-dom",
      include: ["src/**/*.{test,spec}.{ts,tsx}"],
      exclude: ["node_modules", "dist", ".astro", "src/test"],
      setupFiles: ["./src/__tests__/setup.ts"],
      tags: [
        {
          name: "unit",
          description: "Fast unit tests for individual components",
        },
        {
          name: "integration",
          description: "Integration tests for component interactions",
          timeout: 10000,
        },
        {
          name: "slow",
          description: "Slow tests that require more time",
          timeout: 30000,
        },
      ],
      coverage: {
        provider: "v8",
        reporter: ["text", "html", "json"],
        exclude: ["node_modules", "dist", ".astro", "src/test"],
        thresholds: {
          lines: 80,
          functions: 80,
          branches: 75,
          statements: 80,
        },
      },
    },
  },
  {
    // Astro config overrides for testing
    site: "https://yourdedicatedmarketer.com",
  }
);
