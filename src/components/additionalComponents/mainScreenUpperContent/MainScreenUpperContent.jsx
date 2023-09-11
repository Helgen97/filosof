import { useIntl } from "react-intl";
import ClockSvg from "../../svg/clockSvg";
import { LOCATION_CONTENT } from "../../../constants/content";

const MainScreenUpperContent = ({ currentLocation }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="main_screen_upper-content">
      <div>
        <h1>filosof barbershop</h1>
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
          <p>{LOCATION_CONTENT[currentLocation].locationWorkingHours}</p>
        </div>
      </div>
    </div>
  );
};

export default MainScreenUpperContent;
