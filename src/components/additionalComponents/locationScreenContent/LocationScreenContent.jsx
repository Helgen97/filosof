/**
 * Container component for rendering location details.
 * @module LocationScreenContent
 */
import { memo } from "react";
import { LOCATION_CONTENT } from "../../../constants/constants";
import Location from "../location";

/**
 * Renders a list of location components based on available location content.
 * @returns {JSX.Element} The location screen content component.
 */
const LocationScreenContent = () => (
  <div className="location_screen-content" aria-label="Locations list">
    {Object.keys(LOCATION_CONTENT).map((location) => (
      <Location key={location} locationContent={LOCATION_CONTENT[location]} />
    ))}
  </div>
);

export default memo(LocationScreenContent);
