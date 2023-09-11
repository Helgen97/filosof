import LocationSvgContainer from "../../additionalComponents/locationSvgContainer";
import LocationSelectContainer from "../locationSelectContainer/LocationSelectContainer";

const LocationContainer = ({ lang, changeLocationFunction }) => {
  return (
    <div className="location-container">
      <LocationSvgContainer />
      <LocationSelectContainer
        lang={lang}
        changeLocationFunction={changeLocationFunction}
      />
    </div>
  );
};

export default LocationContainer;
