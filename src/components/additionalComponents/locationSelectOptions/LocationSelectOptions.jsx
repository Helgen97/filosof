import { LOCATION_CONTENT } from "../../../constants/content";

const LocationSelectOptions = ({ lang }) => {
  return Object.keys(LOCATION_CONTENT).map((location) => {
    return (
      <option key={location} value={location}>
        {lang === "ukr"
          ? LOCATION_CONTENT[location].locationAddress
          : LOCATION_CONTENT[location].locationAddressLang[lang]}
      </option>
    );
  });
};

export default LocationSelectOptions;
