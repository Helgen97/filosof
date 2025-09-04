/**
 * Link container component for main screen call-to-action links.
 * @module MainScreenLinkContainer
 */
import { memo } from "react";

/**
 * Renders a link with text for actions like booking or calling, styled for the main screen.
 * @param {Object} props - Component props.
 * @param {string} props.href - URL for the link.
 * @param {string} props.linkText - Text to display for the link.
 * @param {string} [props.ariaLabel] - ARIA label for accessibility.
 * @returns {JSX.Element} The link container component.
 */
const MainScreenLinkContainer = ({ href, linkText, ariaLabel }) => (
  <div className="main_screen_link-container">
    <a
      href={href}
      className="main_screen-link"
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel || linkText}
    >
      {linkText}
    </a>
  </div>
);

export default memo(MainScreenLinkContainer);
