/**
 * Entry point for the React application.
 *
 * This file sets up the React application by rendering the root component (`App`) into the DOM.
 * It also imports global styles and configurations required for the application.
 *
 * @module index
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css/normalize.css"; // Resets browser default styles for consistent rendering
import "./styles/index.scss"; // Custom global styles for the application
import "swiper/css"; // Core Swiper styles for carousel functionality
import "swiper/css/navigation"; // Swiper navigation module styles
import "swiper/css/pagination"; // Swiper pagination module styles
import App from "./app/App"; // Root component of the application

/**
 * Initializes the React application and renders it to the DOM.
 *
 * Creates a root element using ReactDOM.createRoot and renders the `App` component
 * wrapped in `React.StrictMode` for development-time checks and warnings.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
