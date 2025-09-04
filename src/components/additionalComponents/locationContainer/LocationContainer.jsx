/**
 * Location container component for the lower header.
 * @module LocationContainer
 */
import { memo } from "react";
import LocationSvgContainer from "../../additionalComponents/locationSvgContainer";
import LocationSelectContainer from "../locationSelectContainer/LocationSelectContainer";

/**
 * Renders a container with a location icon and a dropdown for selecting a location.
 * @returns {JSX.Element} The location container component.
 */
const LocationContainer = () => (
  <div className="location-container" aria-label="Location selector">
    <LocationSvgContainer />
    <LocationSelectContainer />
  </div>
);

export default memo(LocationContainer);
