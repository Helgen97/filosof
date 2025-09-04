/**
 * Footer component for the application.
 * @module Footer
 */
import SocialContainer from "../../additionalComponents/socialContainer";
import LogoContainer from "../../additionalComponents/logoContainer";
import CopyrightContainer from "../../additionalComponents/copyrightContainer";

/**
 * Renders the footer section with copyright, social links, and logo.
 * @returns {JSX.Element} The footer component.
 */
const Footer = () => (
  <footer className="footer" aria-label="Site footer">
    <CopyrightContainer />
    <SocialContainer />
    <LogoContainer />
  </footer>
);

export default Footer;
