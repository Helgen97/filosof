/**
 * Scroll-to-top button container component.
 * @module ToTopButtonContainer
 */
import { memo } from "react";
import Link from "../link";
import ArrowTopSvg from "../../svg/arrowTopSvg";

/**
 * Renders a button with a scroll-to-top link and an arrow icon.
 * @returns {JSX.Element} The scroll-to-top button container component.
 */
const ToTopButtonContainer = () => (
  <div
    className="toTop_help-button-container"
    aria-label="Scroll to top button"
  >
    <Link toId="top" aria-label="Scroll to top">
      <ArrowTopSvg />
    </Link>
  </div>
);

export default memo(ToTopButtonContainer);
