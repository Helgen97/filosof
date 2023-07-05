import React, { useEffect } from "react";
import LocationMarker from "../svg/LocationSvg";
import InstagramLogo from "../svg/InstagramLogoSvg";
import LOCATIONS from "../../constants/locations";
import { useIntl } from "react-intl";

const LowerHeader = ({ lang, changeLocation }) => {
  const { formatMessage } = useIntl();

  useEffect(() => {
    let locationContainer = document.querySelector(".location-container");
    // document.addEventListener("click", () => {
    //   locationContainer.classList.remove("show_tooltip");
    // });
    setTimeout(() => {
      locationContainer.classList.remove("show_tooltip");
    }, 4000);
  }, []);

  useEffect(() => {
    let locationSelect = document.getElementById("location");
    locationSelect.style.display = "none";
    locationSelect.style.display = "block";
  }, [lang]);

  return (
    <section className="lower_header">
      <div
        className="location-container show_tooltip"
        tooltip={formatMessage({ id: "location_tooltip" })}
        flow="down"
      >
        <LocationMarker className="location_marker" width="32" height="32" />
        <select
          className="location_toggler"
          name="location"
          id="location"
          onChange={(event) => changeLocation(event.target.value)}
        >
          {Object.keys(LOCATIONS).map((location) => {
            return (
              <option key={location} value={location}>
                {lang === "ukr"
                  ? LOCATIONS[location].locationAddress
                  : LOCATIONS[location].locationAddressEN}
              </option>
            );
          })}
        </select>
      </div>
      <div className="social-container">
        <a
          href="https://www.instagram.com/filosof_barbershop/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo
            className="instagram_logo"
            width="32"
            height="32"
            alt="Instagram"
          />
        </a>
      </div>
    </section>
  );
};

export default LowerHeader;
