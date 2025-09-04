/**
 * Lower content section for the main screen.
 * @module MainScreenLowerContent
 */
import { memo } from "react";
import { useIntl } from "react-intl";
import { LOCATION_CONTENT } from "../../../constants/constants";
import MainScreenLinkContainer from "../mainScreenLinkContainer";
import { useLocationContext } from "../../../context/SiteContext";

/**
 * Renders the lower content of the main screen with links for booking, calling, and directions.
 * @returns {JSX.Element} The lower content component for the main screen.
 */
const MainScreenLowerContent = () => {
  const { formatMessage } = useIntl();
  const { currentLocation } = useLocationContext();
  const locationData = LOCATION_CONTENT[currentLocation] || {};

  return (
    <div
      className="main_screen_lower-content"
      aria-label="Main screen lower content"
    >
      <MainScreenLinkContainer
        href={locationData.locationBookingLink || "#"}
        linkText={formatMessage({ id: "online_booking" })}
        ariaLabel={formatMessage({ id: "online_booking" })}
      />
      <MainScreenLinkContainer
        href={`tel:${locationData.locationPhone || ""}`}
        linkText={formatMessage({ id: "call_us" })}
        ariaLabel={formatMessage({ id: "call_us" })}
      />
      <MainScreenLinkContainer
        href={locationData.locationPathLink || "#"}
        linkText={formatMessage({ id: "get_directions" })}
        ariaLabel={formatMessage({ id: "get_directions" })}
      />
    </div>
  );
};

export default memo(MainScreenLowerContent);
