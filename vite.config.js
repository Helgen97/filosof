/**
 * Vite configuration for the Filosof Barbershop SPA.
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
      // Include assets from src/images and src/fonts
      includeAssets: [
        "images/barber-*.jpeg",
        "images/barber-*.png",
        "images/bg.jpg",
        "fonts/charter_bold.eot",
        "fonts/charter_regular.eot",
        "fonts/charter_bold.woff",
        "fonts/charter_regular.woff",
      ],
      // Workbox configuration for service worker
      workbox: {
        // Cache Google Fonts
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Cache local images
          {
            urlPattern: /.*\.(?:png|jpg|jpeg|svg)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Cache local fonts
          {
            urlPattern: /.*\.(?:woff|woff2|eot|ttf)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "fonts",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      // PWA manifest
      manifest: {
        name: "Filosof Barbershop Київ | Чоловічі стрижки",
        short_name: "Filosof Barbershop",
        description:
          "Filosof Barbershop - преміум барбершоп у Києві. Чоловічі стрижки, оформлення бороди та вусів від топових барберів.",
        theme_color: "#343434",
        background_color: "#343434",
        display: "standalone",
        start_url: "https://www.filosof.in.ua",
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
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/mstile-150x150.png",
            sizes: "150x150",
            type: "image/png",
          },
          {
            src: "/safari-pinned-tab.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
});
