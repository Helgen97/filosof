/**
 * Help booking button container component.
 * @module HelpBookingButtonContainer
 */
import { memo } from "react";
import { useIntl } from "react-intl";
import { LOCATION_CONTENT } from "../../../constants/constants";
import { useLocationContext } from "../../../context/SiteContext";

/**
 * Renders a button with a link to the booking page for the selected location.
 * Uses react-intl for localized button text.
 * @returns {JSX.Element} The help booking button container component.
 */
const HelpBookingButtonContainer = () => {
  const { formatMessage } = useIntl();
  const { currentLocation } = useLocationContext();
  const bookingLink = LOCATION_CONTENT[currentLocation]?.locationBookingLink;

  return (
    <div className="booking_help-button-container" aria-label="Booking button">
      <a
        href={bookingLink || "#"}
        className="main_screen-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={formatMessage({ id: "online_booking" })}
      >
        {formatMessage({ id: "online_booking" })}
      </a>
    </div>
  );
};

export default memo(HelpBookingButtonContainer);
