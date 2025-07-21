import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
