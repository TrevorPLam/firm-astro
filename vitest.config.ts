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
      coverage: {
        provider: "v8",
        reporter: ["text", "html", "json"],
        exclude: ["node_modules", "dist", ".astro", "src/test"],
        thresholds: {
          lines: 70,
          functions: 70,
          branches: 70,
          statements: 70,
        },
      },
    },
  },
  {
    // Astro config overrides for testing
    site: "https://yourdedicatedmarketer.com",
  }
);
