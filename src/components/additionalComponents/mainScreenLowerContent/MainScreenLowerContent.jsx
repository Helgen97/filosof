import { useIntl } from "react-intl";
import { LOCATION_CONTENT } from "../../../constants/content";
import MainScreenLinkContainer from "../mainScreenLinkContainer";

const MainScreenLowerContent = ({ currentLocation }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="main_screen_lower-content">
      <MainScreenLinkContainer
        href={LOCATION_CONTENT[currentLocation].locationBookingLink}
        linkText={formatMessage({ id: "online_booking" })}
      />
      <MainScreenLinkContainer
        href={`tel:${LOCATION_CONTENT[currentLocation].locationPhone}`}
        linkText={formatMessage({ id: "call_us" })}
      />
      <MainScreenLinkContainer
        href={LOCATION_CONTENT[currentLocation].locationPathLink}
        linkText={formatMessage({ id: "get_directions" })}
      />
    </div>
  );
};

export default MainScreenLowerContent;
