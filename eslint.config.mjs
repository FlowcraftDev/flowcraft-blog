import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";

export default [
  {
    ignores: [".husky", ".vscode", "node_modules", "public", "dist", ".yarn"],
  },
  eslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      globals: {
        node: true,
        browser: true,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {},
  },
];
