import LocationContainer from "../../additionalComponents/locationContainer";
import SocialContainer from "../../additionalComponents/socialContainer";

const LowerHeader = ({ lang, changeLocationFunction }) => {
  return (
    <header className="lower_header">
      <div className="lower_header-content">
        <LocationContainer
          lang={lang}
          changeLocationFunction={changeLocationFunction}
        />
        <SocialContainer />
      </div>
    </header>
  );
};

export default LowerHeader;
