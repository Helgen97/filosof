/**
 * Vite configuration for the Dmytro Donchenko Portfolio SPA.
 * @module vite.config
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite configuration object.
 */
export default defineConfig({
  // Base path for the application, used for deployment
  base: "/",
  // Plugins for enhancing the build process
  plugins: [
    // React plugin for JSX/TSX support and fast refresh
    react(),
  ],
});
