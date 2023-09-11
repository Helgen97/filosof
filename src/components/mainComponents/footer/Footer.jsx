import SocialContainer from "../../additionalComponents/socialContainer";
import LogoContainer from "../../additionalComponents/logoContainer";
import CopyrightContainer from "../../additionalComponents/copyrightContainer";

const Footer = () => {
  return (
    <footer className="footer">
      <CopyrightContainer />
      <SocialContainer />
      <LogoContainer />
    </footer>
  );
};

export default Footer;
