import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";

// parsers
const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // Base configs
  js.configs.recommended,
  tseslint.configs.recommended,
  // astro setup with a11y
  astro.configs.recommended,
  astro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: "latest",
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-undef": "off", // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
      "@typescript-eslint/no-unused-vars": "off", // Disable to avoid extensive refactoring of existing code
    },
  },
  // React/TypeScript files
  {
    files: ["**/*.tsx", "**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable to avoid extensive refactoring of existing code
    },
  },
  // Prettier integration (must be last to override conflicting rules)
  eslintConfigPrettier,
  // Ignore patterns
  {
    ignores: ["dist/**", "**/*.d.ts", ".github/", "node_modules/", ".wrangler/"],
  },
]);
