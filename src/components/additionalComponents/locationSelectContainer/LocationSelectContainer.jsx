/**
 * Location select container component with a dropdown for choosing a location.
 * @module LocationSelectContainer
 */
import { memo } from "react";
import { useIntl } from "react-intl";
import LocationSelectOptions from "../locationSelectOptions";
import { useLocationContext } from "../../../context/SiteContext";

/**
 * Renders a dropdown for selecting a location with a localized tooltip.
 * Uses react-intl for localized tooltip text.
 * @returns {JSX.Element} The location select container component.
 */
const LocationSelectContainer = () => {
  const { formatMessage } = useIntl();
  const { setCurrentLocation } = useLocationContext();

  return (
    <div
      className="location-select_container show_tooltip"
      data-tooltip={formatMessage({ id: "tooltip" })}
      data-flow="down"
      aria-label="Select barbershop location"
    >
      <select
        className="location-select"
        name="location-toggler"
        aria-label={formatMessage({ id: "select_location" })}
        onChange={(event) => setCurrentLocation(event.target.value)}
      >
        <LocationSelectOptions />
      </select>
    </div>
  );
};

export default memo(LocationSelectContainer);
