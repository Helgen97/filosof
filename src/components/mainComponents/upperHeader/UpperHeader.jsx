import MobileMenu from "../../additionalComponents/mobileMenu";
import DesktopMenu from "../../additionalComponents/desktopMenu";
import LogoContainer from "../../additionalComponents/logoContainer";
import LanguageTooglerContainer from "../../additionalComponents/languageTogglerContainer";

const UpperHeader = ({ changeLanguageFunction }) => {
  return (
    <header id="top" className="upper_header">
      <MobileMenu />
      <DesktopMenu />
      <LogoContainer />
      <LanguageTooglerContainer
        changeLanguageFunction={changeLanguageFunction}
      />
    </header>
  );
};

export default UpperHeader;
