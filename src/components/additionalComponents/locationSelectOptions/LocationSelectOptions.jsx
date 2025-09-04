/**
 * Component for rendering location options in a select dropdown.
 * @module LocationSelectOptions
 */
import { memo } from "react";
import { LOCATION_CONTENT } from "../../../constants/constants";
import { useLanguageContext } from "../../../context/SiteContext";

/**
 * Renders a list of <option> elements for location selection based on the provided language.
 * @returns {JSX.Element[]} Array of option elements for the select dropdown.
 */
const LocationSelectOptions = () => {
  const { appLang } = useLanguageContext();
  return (
    <>
      {Object.keys(LOCATION_CONTENT).map((location) => (
        <option key={location} value={location}>
          {appLang === "uk"
            ? LOCATION_CONTENT[location].locationAddress
            : LOCATION_CONTENT[location].locationAddressLang?.[appLang] ||
              LOCATION_CONTENT[location].locationAddress}
        </option>
      ))}
    </>
  );
};

export default memo(LocationSelectOptions);
