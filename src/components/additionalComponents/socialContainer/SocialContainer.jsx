/**
 * Social media container component for the footer.
 * @module SocialContainer
 */
import { memo } from "react";
import InstagramSvg from "../../svg/instagramSvg";

/**
 * Renders a container with a link to the barbershop's Instagram page.
 * @returns {JSX.Element} The social media container component.
 */
const SocialContainer = memo(() => (
  <div className="social-container" aria-label="Social media links">
    <a
      href="https://www.instagram.com/filosof_barbershop/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Filosof Barbershop Instagram page"
    >
      <InstagramSvg />
    </a>
  </div>
));

export default SocialContainer;
