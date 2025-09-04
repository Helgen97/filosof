/**
 * Container component for the location icon.
 * @module LocationSvgContainer
 */
import { memo } from "react";
import LocationSmallSvg from "../../svg/locationSmallSvg";

/**
 * Renders a container with a small location pin SVG icon.
 * @returns {JSX.Element} The location SVG container component.
 */
const LocationSvgContainer = () => (
  <div className="location-svg_container" aria-label="Location icon">
    <LocationSmallSvg />
  </div>
);

export default memo(LocationSvgContainer);
