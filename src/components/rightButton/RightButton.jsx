import React from "react";
import { useIntl } from "react-intl";
import LOCATIONS from "../../constants/locations";

const RightButton = ({ currentLocation }) => {
  const { formatMessage } = useIntl();
  return (
    <div className="right-btn">
      <a
        href={LOCATIONS[currentLocation].locationBookingLink}
        target="_blank"
        rel="noreferrer"
      >
        {formatMessage({ id: "online_booking" })}
      </a>
      <a
        href={`tel:${LOCATIONS[currentLocation].locationPhone}`}
        className="custom-btn phone-btn"
      >
        {formatMessage({ id: "call_us" })}
      </a>
    </div>
  );
};

export default RightButton;
