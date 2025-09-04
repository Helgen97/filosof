# Filosof Barbershop Frontend

## Overview

The **Filosof Barbershop Frontend** is a React-based single-page application designed for a barbershop website. It provides a responsive, multilingual interface for users to explore barbershop services, locations, and team members. The application supports Ukrainian (`uk`) and English (`en`) languages, uses `react-intl` for internationalization, and integrates a Swiper carousel for showcasing barber profiles. The codebase emphasizes accessibility, performance optimization with `React.memo`, and semantic HTML with ARIA attributes.

## Features

- **Multilingual Support**: Switch between Ukrainian (`uk`) and English (`en`) using the language toggler.
- **Responsive Design**: Adapts to various screen sizes with mobile and desktop menus, and a responsive Swiper carousel for barbers.
- **Location Selection**: Displays barbershop locations with addresses, phone numbers, working hours, and booking links.
- **Service Pricing**: Lists services with localized names and prices, including a footnote for pricing details.
- **Barber Profiles**: Showcases barbers with photos, names, and positions in a carousel.
- **Smooth Scrolling**: Uses `react-scroll` for smooth navigation to sections like "About" or "Contact".

## Project Structure

The project is organized into React components, constants, and internationalization files:

## Installation

### Prerequisites

- Node.js (version 18.x or higher)
- npm (version 9.x or higher) or Yarn
- React (version 18.x)

### Steps

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd filosof-barbershop-frontend
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

   - Ensure `messages.js` and `intl.js` are configured with translations.
   - Verify `constants.js` contains valid `LOCATION_CONTENT`, `MENU_ITEMS`, `PRICE_CONTENT`, and `BARBERS`.

4. **Run the development server**:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The app will be available at `http://localhost:3000`.

5. **Build for production**:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

## Dependencies

- **react**: ^18.2.15
- **react-dom**: ^18.2.0
- **react-intl**: ^7.1.11 (for internationalization)
- **react-scroll**: ^1.9.3 (for smooth scrolling)
- **swiper**: ^11.2.10 (for barber carousel)
- **@mui/base**: ^5.0.0 (for `ClickAwayListener` in mobile menu)
- **vite**: 

Install dependencies:

```bash
npm install react react-dom react-intl react-scroll swiper @mui/base
```

## Usage

1. **Language Switching**:

   - Use the `<select>` dropdown in `LanguageTogglerContainer` to switch between `uk` and `en`.
   - The `lang` state is managed in `App.jsx` and passed to `IntlProvider`.

2. **Navigation**:

   - Use `MobileMenu` (visible on small screens) or `DesktopMenu` (visible on larger screens) to navigate sections.
   - Links in `MenuList` use `react-scroll` for smooth scrolling to sections with matching `sectionId`.

3. **Viewing Prices**:

   - The `PriceScreenContent` component displays a list of services with prices from `PRICE_CONTENT`.

4. **Viewing Barbers**:

   - The `BarberScreenContent` component shows a responsive Swiper carousel of barbers from `BARBERS`.

5. **Viewing Locations**:
   - The `LocationScreenContent` component lists all locations from `LOCATION_CONTENT` with details like address, phone, and booking links.
