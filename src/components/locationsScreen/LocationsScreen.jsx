import React from "react";
import { useIntl } from "react-intl";
import LocationMarkerSvg from "../svg/LocationSvg/LocationMarkerSvg";
import LOCATIONS from "../../constants/locations";

const LocationsScreen = ({ lang }) => {
  const { formatMessage } = useIntl();

  return (
    <section id="locations" className="location_screen">
      <h2 className="screen-title">{formatMessage({ id: "locations" })}</h2>
      <div className="locations-container">
        {Object.keys(LOCATIONS).map((location) => {
          return (
            <div key={location} className="location">
              <div>
                <LocationMarkerSvg
                  className="location_marker-big"
                  width="96"
                  height="96"
                />
              </div>
              <div>
                <a
                  href={LOCATIONS[location].locationPathLink}
                  className="location-address"
                  target="_blank"
                  rel="noreferrer"
                >
                  {lang === "ukr"
                    ? LOCATIONS[location].locationAddress
                    : LOCATIONS[location].locationAddressEN}
                </a>
                <a
                  href={`tel:${LOCATIONS[location].locationPhone}`}
                  className="location-phone"
                >
                  {LOCATIONS[location].locationPhone}
                </a>
                <p>{LOCATIONS[location].locationWorkingHours}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LocationsScreen;
