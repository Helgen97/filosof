import LocationSelectOptions from "../locationSelectOptions";

const LocationSelectContainer = ({ lang, changeLocationFunction }) => {
  return (
    <div className="location-select_container">
      <select
        className="location-select"
        name="location toggler"
        onChange={(event) => changeLocationFunction(event.target.value)}
      >
        <LocationSelectOptions lang={lang} />
      </select>
    </div>
  );
};

export default LocationSelectContainer;
