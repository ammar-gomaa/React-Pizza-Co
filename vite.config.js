import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    // Only run ESLint in development
    ...(process.env.NODE_ENV === 'development' ? [eslint()] : [])
  ],
})
