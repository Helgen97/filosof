/**
 * Component for rendering individual location details.
 * @module Location
 */
import { memo } from "react";
import LocationBigSvg from "../../svg/locationBigSvg";
import { useLanguageContext } from "../../../context/SiteContext";

/**
 * Formats phone number to Ukrainian format: +380 (XXX) XXX-XX-XX.
 * @param {string} number - Phone number as a string.
 * @returns {string} Formatted phone number.
 */
const formatPhoneNumber = (number = "") => {
  if (!number || number.length < 12) return number;
  const code = number.substring(0, 3);
  const operatorCode = number.substring(3, 6);
  const phone = number.substring(6, 9);
  const phone1 = number.substring(9, 11);
  const phone2 = number.substring(11);
  return `${code} (${operatorCode}) ${phone}-${phone1}-${phone2}`;
};

/**
 * Renders location details including address, phone number, and working hours.
 * @param {Object} props - Component props.
 * @param {Object} props.locationContent - Location data object.
 * @returns {JSX.Element} The location component.
 */
const Location = ({ locationContent }) => {
  const {
    locationAddress,
    locationAddressLang,
    locationPhone,
    locationWorkingHours,
    locationBookingLink,
  } = locationContent;

  const { appLang } = useLanguageContext();

  return (
    <div className="location" aria-label="Location details">
      <div className="location_svg-container">
        <LocationBigSvg />
      </div>
      <div className="location_description">
        <a
          href={locationBookingLink || "#"}
          className="location-address"
          target="_blank"
          rel="noreferrer"
        >
          {appLang === "uk"
            ? locationAddress
            : locationAddressLang[appLang] || locationAddress}
        </a>
        <a
          href={`tel:${locationPhone || ""}`}
          className="location-phone"
          target="_blank"
          rel="noreferrer"
          aria-label={`Call ${formatPhoneNumber(locationPhone)}`}
        >
          {formatPhoneNumber(locationPhone)}
        </a>
        <p>{locationWorkingHours || ""}</p>
      </div>
    </div>
  );
};

export default memo(Location);
