# Filosof Barbershop

## Overview

**Filosof Barbershop** is a React-based single-page application (SPA) for the Filosof barbershop, accessible at [https://www.filosof.in.ua](https://www.filosof.in.ua). The site showcases barbershop services, barbers, pricing, locations, and booking functionality. Built with Vite for fast development and optimized production builds, it features a responsive design, multilingual support (via `react-intl`), progressive web app (PWA) capabilities, and SEO optimization for enhanced visibility. The codebase prioritizes accessibility, performance, and a modern user experience with smooth scrolling and interactive sliders.

## Features

- **Barbershop Services**: Displays services, barbers, pricing, and location details in a clean, user-friendly interface.
- **Multilingual Support**: Supports multiple languages (e.g., Ukrainian, English) using `react-intl` and a language toggler.
- **Responsive Design**: Adapts to mobile (320px+), tablet (768px+), and desktop (1280px+) devices using SCSS and a grid system.
- **Interactive Sliders**: Uses `swiper` for dynamic content like barber profiles or galleries.
- **SEO Optimization**: Includes meta tags, Open Graph, Twitter Card, Schema.org microdata, and a sitemap for search engine visibility.
- **PWA Support**: Configured with favicon assets and `site.webmanifest` for offline access and app-like experience.
- **Accessibility**: Uses semantic HTML, ARIA attributes, and keyboard navigation support.
- **Smooth Scrolling**: Implements `react-scroll` for seamless in-page navigation.

## Project Structure

The project is organized into an HTML entry point, Vite configuration, React components, and SCSS styles:

### Entry Point

- **`index.html`**: Defines the SPA structure, meta tags for SEO (Open Graph, Twitter Card, keywords), favicon assets for PWA, and the root `<div id="root">`.
- **`index.jsx`**: Renders the React app, importing `normalize.css`, `styles/index.scss`, and the main `App` component.
- **`vite.config.js`**: Configures Vite for development and production builds with React support.
- **`package.json`**: Defines project metadata, scripts (`dev`, `build`, `deploy`, `lint`, `preview`), and dependencies.
- **`sitemap.xml`**: Lists site URLs for search engine crawling.
- **`CNAME`**: Specifies the custom domain (`https://www.filosof.in.ua`).

### Public Assets

- **`public/`**:
  - Favicon icons (`apple-touch-icon-*.png`, `favicon-*.png`, `android-chrome-*.png`, `mstile-150x150.png`, etc.) for cross-platform PWA support.
  - `Meta.jpg`: Optimized image (1200x630 pixels, <300 KB) for Open Graph and Twitter Card.
  - `site.webmanifest`: Configures PWA metadata.
  - `browserconfig.xml`: Configures Windows Tiles.
  - `safari-pinned-tab.svg`: Icon for Safari pinned tabs.

### Source Files

- **`src/app/App.jsx`**: Main component orchestrating the barbershop's sections (e.g., MainScreen, TopHeader, BottomHeader, Footer).
- **`src/components/`**:
  - **mainComponents**:
    - `TopHeader.jsx`: Renders the top navigation header with logo and menu.
    - `BottomHeader.jsx`: Displays additional header content (e.g., location selector or language toggler).
    - `MainScreen.jsx`: Main section with key visuals and links.
    - `Screen.jsx`: Generic component for section layouts.
    - `Footer.jsx`: Renders the footer with copyright and social links.
    - `HelpButtons.jsx`: Manages fixed buttons (e.g., "To Top", booking).
  - **additionalComponents**:
    - `Barber.jsx`, `BarberScreenContent.jsx`: Display barber profiles and details.
    - `Location.jsx`, `LocationContainer.jsx`, `LocationSelectContainer.jsx`, `LocationSelectOptions.jsx`, `LocationSvgContainer.jsx`: Manage location selection and display.
    - `DesktopMenu.jsx`, `MobileMenu.jsx`, `MobileMenuButton.jsx`, `MobileMenuCloseButtonListItem.jsx`, `MobileMenuContent.jsx`: Handle navigation menus.
    - `HelpBookingButtonContainer.jsx`, `ToTopButtonContainer.jsx`: Fixed buttons for booking and scrolling.
    - `IntlProvider.jsx`, `LanguageTogglerContainer.jsx`: Manage multilingual support.
    - `Link.jsx`, `MainScreenLinkContainer.jsx`: Handle in-page and external links.
    - `MainScreenUpperContent.jsx`, `MainScreenLowerContent.jsx`: Structure main section content.
    - `MenuList.jsx`: Renders navigation menu items.
    - `MetaUpdater.jsx`: Updates meta tags for SEO.
    - `PriceContent.jsx`, `PriceScreenContent.jsx`: Display pricing information.
    - `SocialContainer.jsx`: Renders social media links (e.g., Instagram).
    - `ObserverBlock.jsx`: Likely used for intersection observer-based animations or lazy loading.
  - **svg**:
    - `ArrowTopSvg.jsx`, `MenuBurgerSvg.jsx`, `CloseButtonSvg.jsx`, `InstagramSvg.jsx`, `LocationBigSvg.jsx`, `LocationSmallSvg.jsx`, `ClockSvg.jsx`: SVG components for icons.
- **`src/constants/constants.js`**: Stores static data (e.g., barber lists, prices, locations).
- **`src/context/SiteContext.jsx`**: Provides global state (e.g., selected language or location).
- **`src/fonts/`**: Local fonts (`charter_bold`, `charter_regular`) in `.eot` and `.woff` formats.
- **`src/hooks/useLangQuery.jsx`**: Custom hook for managing language query parameters.
- **`src/intl/`**:
  - `messages.js`: Localization messages for `react-intl`.
- **`src/images/`**: Images for barbers (`barber-*.jpeg/png`) and background (`bg.jpg`).
- **`src/styles/index.scss`**: Consolidated SCSS stylesheet for the application.

### Styling

- **`styles/index.scss`**: Defines styles for all components using SCSS, with responsive breakpoints, custom fonts (`Charter`), and `normalize.css` for cross-browser consistency.
- **Key Components Styled**:
  - Headers: `TopHeader`, `BottomHeader`, `DesktopMenu`, `MobileMenu`.
  - Main: `MainScreen`, `MainScreenUpperContent`, `MainScreenLowerContent`.
  - Barbers: `Barber`, `BarberScreenContent`.
  - Locations: `Location`, `LocationContainer`, `LocationSelectContainer`.
  - Pricing: `PriceContent`, `PriceScreenContent`.
  - Footer: `Footer`, `CopyrightContainer`, `SocialContainer`.
  - Buttons: `HelpBookingButtonContainer`, `ToTopButtonContainer`.

## Installation

### Prerequisites

- Node.js (version 18.x or higher)
- npm (version 9.x or higher) or Yarn
- Vite (version 7.x or higher)
- React (version 18.x)

### Steps

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd filosof-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up environment**:

   - Place favicon assets (`apple-touch-icon-*.png`, `android-chrome-*.png`, etc.) and `site.webmanifest` in the `/public` directory.
   - Ensure `Meta.jpg` is optimized (1200x630 pixels, <300 KB) for Open Graph/Twitter Card.
   - Verify `src/app/App.jsx` and `src/styles/index.scss` are correctly configured.
   - Place images (`barber-*.jpeg/png`, `bg.jpg`) in `src/images/`.
   - Place fonts (`charter_bold`, `charter_regular`) in `src/fonts/`.

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   The app will be available at `http://localhost:5173`.

5. **Build for production**:

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

6. **Deploy to GitHub Pages**:

   ```bash
   npm run predeploy
   npm run deploy
   ```

   or

   ```bash
   yarn predeploy
   yarn deploy
   ```

7. **Lint code**:

   ```bash
   npm run lint
   ```

   or

   ```bash
   yarn lint
   ```

8. **Preview production build**:
   ```bash
   npm run preview
   ```
   or
   ```bash
   yarn preview
   ```

## Dependencies

- **react**: ^18.2.0 - Core React library for building UI.
- **react-dom**: ^18.2.0 - DOM rendering for React.
- **react-intl**: ^7.1.11 - Multilingual support for internationalization.
- **react-scroll**: ^1.9.3 - Smooth scrolling for in-page navigation.
- **swiper**: ^11.2.10 - Interactive sliders for barber profiles or galleries.
- **@mui/base**: ^5.0.0-beta.70 - Lightweight MUI components (e.g., `ClickAwayListener` for menus).
- **normalize.css**: ^8.0.1 - Cross-browser CSS normalization.
- **sass**: ^1.91.0 - SCSS preprocessor for styling.

### Dev Dependencies

- **vite**: ^7.1.4 - Fast development and build tool.
- **@vitejs/plugin-react**: ^5.0.2 - React plugin for Vite.
- **eslint**: ^9.34.0 - Linting for JavaScript and JSX.
- **eslint-plugin-react**: ^7.37.5 - React-specific linting rules.
- **eslint-plugin-react-hooks**: ^5.2.0 - Enforces React Hooks rules.
- **eslint-plugin-react-refresh**: ^0.4.20 - Supports React Fast Refresh in Vite.
- **gh-pages**: ^6.3.0 - Deployment to GitHub Pages.
- **@types/react**: ^18.2.15 - TypeScript types for React.
- **@types/react-dom**: ^18.2.7 - TypeScript types for React DOM.

Install dependencies:

```bash
npm install
```

## Usage

1. **Navigation**:

   - Use `TopHeader` and `BottomHeader` (with `DesktopMenu` or `MobileMenu`) to navigate sections like Main, Barbers, Prices, Locations, and Booking.
   - Links use `react-scroll` for smooth in-page navigation.

2. **Viewing Barbers**:

   - The `Barber` and `BarberScreenContent` components display barber profiles, likely with a `swiper` slider.

3. **Checking Prices**:

   - The `PriceContent` and `PriceScreenContent` components list service prices.

4. **Selecting Locations**:

   - The `Location`, `LocationContainer`, `LocationSelectContainer`, and `LocationSelectOptions` components allow users to view and select barbershop locations.

5. **Booking**:

   - The `HelpBookingButtonContainer` provides a fixed button for initiating bookings.

6. **Language Switching**:

   - The `LanguageTogglerContainer` allows users to switch languages (e.g., Ukrainian, English).

7. **Social Media**:
   - The `SocialContainer` displays links to social media (e.g., Instagram via `InstagramSvg`).

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## Contact

For issues or suggestions, contact the Filosof Barbershop team via [https://www.filosof.in.ua](https://www.filosof.in.ua) or GitHub.
