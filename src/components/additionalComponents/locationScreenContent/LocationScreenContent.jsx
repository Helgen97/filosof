import { LOCATION_CONTENT } from "../../../constants/content";
import Location from "../location";

const LocationScreenContent = ({ lang }) => {
  return (
    <div className="location_screen-content">
      {Object.keys(LOCATION_CONTENT).map((location) => {
        return (
          <Location
            key={location}
            lang={lang}
            locationContent={LOCATION_CONTENT[location]}
          />
        );
      })}
    </div>
  );
};

export default LocationScreenContent;
