import React from "react";
import InstagramLogo from "../svg/InstagramLogoSvg/InstagramLogo";
import { useIntl } from "react-intl";

const Footer = () => {
  const { formatMessage } = useIntl();

  return (
    <footer className="footer">
      <div>
        <a
          href="https://www.instagram.com/filosof_barbershop"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo className="instagram_logo" width="32" height="32" />
        </a>
      </div>
      <div className="copyright">
        <p>FILOSOF BARBERSHOP</p>
        <p>{formatMessage({ id: "copyright" })}</p>
        <p>
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/dmytrodonchenko/"
            rel="noreferrer"
            target="_blank"
            className="creator_link"
          >
            Helgen
          </a>
          .
        </p>
      </div>
      <div className="footer_logo">
        <a href="/">
          <p className="footer-upper-logo-text">filosof</p>
          <p className="footer-lower-logo-text">barbershop</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
