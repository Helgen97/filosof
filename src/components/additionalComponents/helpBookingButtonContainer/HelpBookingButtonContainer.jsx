import { useIntl } from "react-intl";
import { LOCATION_CONTENT } from "../../../constants/content";

const HelpBookingButtonContainer = ({ currentLocation }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="booking_help-button-container">
      <a
        href={LOCATION_CONTENT[currentLocation].locationBookingLink}
        className="main_screen-link"
        target="_blank"
      >
        {formatMessage({ id: "online_booking" })}
      </a>
    </div>
  );
};

export default HelpBookingButtonContainer;
