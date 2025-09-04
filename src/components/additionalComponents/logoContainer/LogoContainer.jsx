/**
 * Logo container component for the footer.
 * @module LogoContainer
 */
import { memo } from "react";

/**
 * Renders the barbershop logo with a link to the homepage.
 * @returns {JSX.Element} The logo container component.
 */
const LogoContainer = memo(() => (
  <div className="logo-container" aria-label="Filosof Barbershop logo">
    <a href="/" aria-label="Go to homepage">
      <p className="upper-logo-text">filosof</p>
      <p className="lower-logo-text">barbershop</p>
    </a>
  </div>
));

export default LogoContainer;
