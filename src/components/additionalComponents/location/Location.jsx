import LocationBigSvg from "../../svg/locationBigSvg";

const Location = ({
  lang,
  locationContent: {
    locationAddress,
    locationAddressLang,
    locationPhone,
    locationWorkingHours,
    locationBookingLink,
  },
}) => {
  return (
    <div className="location">
      <div className="location_svg-container">
        <LocationBigSvg />
      </div>
      <div className="location_description">
        <a
          href={locationBookingLink}
          className="location-address"
          target="_blank"
        >
          {lang === "ukr" ? locationAddress : locationAddressLang[lang]}
        </a>
        <a
          href={`tel:${locationPhone}`}
          className="location-phone"
          target="_blank"
        >
          {locationPhone}
        </a>
        <p>{locationWorkingHours}</p>
      </div>
    </div>
  );
};

export default Location;
