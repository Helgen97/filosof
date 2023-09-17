import { useIntl } from "react-intl";
import LocationSelectOptions from "../locationSelectOptions";

const LocationSelectContainer = ({ lang, changeLocationFunction }) => {
  const { formatMessage } = useIntl();

  return (
    <div
      className="location-select_container show_tooltip"
      tooltip={formatMessage({ id: "tooltip" })}
      flow="down"
    >
      <select
        className="location-select"
        name="location toggler"
        aria-label="Change location for links"
        onChange={(event) => changeLocationFunction(event.target.value)}
      >
        <LocationSelectOptions lang={lang} />
      </select>
    </div>
  );
};

export default LocationSelectContainer;
