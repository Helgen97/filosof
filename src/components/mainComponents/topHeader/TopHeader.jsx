/**
 * Upper header component for the application.
 * @module TopHeader
 */
import { memo } from "react";
import MobileMenu from "../../additionalComponents/mobileMenu";
import DesktopMenu from "../../additionalComponents/desktopMenu";
import LogoContainer from "../../additionalComponents/logoContainer";
import LanguageTogglerContainer from "../../additionalComponents/languageTogglerContainer";

/**
 * Renders the upper header with mobile and desktop menus, logo, and language toggler.
 * @returns {JSX.Element} The upper header component.
 */
const TopHeader = () => (
  <header
    id="top"
    className="upper_header"
    role="banner"
    aria-label="Main navigation header"
  >
    <MobileMenu />
    <DesktopMenu />
    <LogoContainer />
    <LanguageTogglerContainer />
  </header>
);

export default memo(TopHeader);
