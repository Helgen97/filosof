import React from "react";
import WorkHourMarker from "../svg/WorkHourMarkerSvg";
import { useIntl } from "react-intl";
import LOCATIONS from "../../constants/locations";

const MainScreen = ({ currentLocation }) => {
  const { formatMessage } = useIntl();

  return (
    <section id="online_booking" className="main_screen">
      <div className="main-container">
        <div className="left">
          <div className="title-container">
            <h1 className="title">filosof barbershop</h1>
            <p className="tag-line"></p>
          </div>
          <div className="description-container">
            <p>{formatMessage({ id: "hair_line" })}</p>
            <p>{formatMessage({ id: "beard_line" })}</p>
          </div>
          <div className="work_hours-container">
            <div>
              <WorkHourMarker
                className="work_hours_marker"
                width="24"
                height="24"
              />
            </div>
            <div className="work_hours-description">
              <p>{formatMessage({ id: "working_days" })}</p>
              <p>{LOCATIONS[currentLocation].locationWorkingHours}</p>
            </div>
          </div>
        </div>
        <div className="right">
          <a
            href={LOCATIONS[currentLocation].locationPathLink}
            className="custom-btn"
            target="_blank"
            rel="noreferrer"
          >
            {formatMessage({ id: "get_directions" })}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainScreen;
