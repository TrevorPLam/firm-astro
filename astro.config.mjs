import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  site: "https://yourdedicatedmarketer.com",
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/admin/"],
        },
      ],
    }),
  ],
  output: "static",
  build: {
    assets: "_assets",
  },
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: false,
  },
  vite: {
    ssr: {
      noExternal: ["@fontsource/inter", "@fontsource/space-grotesk"],
    },
    build: {
      target: "esnext",
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
        },
      },
      chunkSizeWarningLimit: 500,
    },
    plugins: [
      // Bundle analysis - only enabled when BUNDLE_ANALYZE environment variable is set
      process.env.BUNDLE_ANALYZE
        ? visualizer({
            emitFile: true,
            filename: "stats.html",
            open: true,
            gzipSize: true,
            brotliSize: true,
          })
        : null,
    ].filter(Boolean),
  },
});
