/**
 * Upper content section for the main screen.
 * @module MainScreenUpperContent
 */
import { memo } from "react";
import { useIntl } from "react-intl";
import ClockSvg from "../../svg/clockSvg";
import { LOCATION_CONTENT } from "../../../constants/constants";
import { useLocationContext } from "../../../context/SiteContext";

/**
 * Renders the upper content of the main screen, including the barbershop title, description, and working hours.
 * @returns {JSX.Element} The upper content component for the main screen.
 */
const MainScreenUpperContent = () => {
  const { formatMessage } = useIntl();
  const { currentLocation } = useLocationContext();
  const workingHours =
    LOCATION_CONTENT[currentLocation]?.locationWorkingHours || "";

  return (
    <div
      className="main_screen_upper-content"
      aria-label="Main screen upper content"
    >
      <div>
        <h1>Filosof Barbershop</h1>
      </div>
      <div className="description-container">
        <p>{formatMessage({ id: "hair_line" })}</p>
        <p>{formatMessage({ id: "beard_line" })}</p>
      </div>
      <div className="work_hours-container">
        <div>
          <ClockSvg />
        </div>
        <div className="work_hours-description">
          <p>{formatMessage({ id: "working_days" })}</p>
          <p>{workingHours}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(MainScreenUpperContent);
