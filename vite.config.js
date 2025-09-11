/**
 * Vite configuration for the Dmytro Donchenko Portfolio SPA.
 * @module vite.config
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

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
    // PWA plugin for offline support and app-like experience
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Filosof Barbershop Київ | Чоловічі стрижки",
        short_name: "Filosof Barbershop",
        description:
          "Filosof Barbershop - преміум барбершоп у Києві. Чоловічі стрижки, оформлення бороди та вусів від топових барберів.",
        theme_color: "#343434",
        background_color: "#343434",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  // Build optimizations for production
  build: {
    // Minify output for smaller bundle size
    minify: "esbuild",
    // Generate source maps for debugging
    sourcemap: true,
    // Optimize assets (e.g., images)
    assetsInlineLimit: 4096,
  },
});
