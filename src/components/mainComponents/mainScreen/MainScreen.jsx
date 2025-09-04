/**
 * Main screen section component for the homepage.
 * @module MainScreen
 */
import { memo } from "react";
import MainScreenUpperContent from "../../additionalComponents/mainScreenUpperContent";
import MainScreenLowerContent from "../../additionalComponents/mainScreenLowerContent";

/**
 * Renders the main screen section with upper and lower content based on the current location.
 * @returns {JSX.Element} The main screen component.
 */
const MainScreen = () => (
  <section
    id="main_screen"
    className="main_screen"
    aria-label="Main content section"
  >
    <div className="main_screen-content">
      <MainScreenUpperContent />
      <MainScreenLowerContent />
    </div>
  </section>
);

export default memo(MainScreen);
