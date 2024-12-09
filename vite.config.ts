import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: "./src/setupTests.ts",
    environment: "jsdom",
    globals: true, // Garante variáveis globais no ambiente de teste
  },
});
