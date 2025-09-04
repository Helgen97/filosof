/**
 * Lower header component for the application.
 * @module BottomHeader
 */
import { memo } from "react";
import LocationContainer from "../../additionalComponents/locationContainer";
import SocialContainer from "../../additionalComponents/socialContainer";

/**
 * Renders the lower header with location selection and social media links.
 * @returns {JSX.Element} The lower header component.
 */
const BottomHeader = () => (
  <header className="lower_header" aria-label="Lower navigation header">
    <div className="lower_header-content">
      <LocationContainer />
      <SocialContainer />
    </div>
  </header>
);

export default memo(BottomHeader);
