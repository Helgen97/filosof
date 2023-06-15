import React from "react";
import MobileMenuSvg from "../svg/MobileMenuSvg";
import { useIntl } from "react-intl";
import Link from "../link"

const UpperHeader = ({ changeLanguage, setMobileMenuOpened }) => {
  const { formatMessage } = useIntl();

  return (
    <header className="upper_header">
      <div
        className="menu_btn-container"
        onClick={() => setMobileMenuOpened(true)}
      >
        <MobileMenuSvg
          id="mobile_menu-btn"
          className="menu_btn"
          width="48"
          height="48"
        />
      </div>
      <div className="desktop_menu">
        <Link toId="online_booking" className="desktop_menu-link">
          {formatMessage({ id: "online_booking" })}
        </Link>
      </div>
      <div className="desktop_menu">
        <Link toId="services" className="desktop_menu-link">
          {formatMessage({ id: "services" })}
        </Link>
      </div>
      <div className="language_toggler-container">
        <select
          className="language_toggler"
          name="language"
          onChange={(event) => changeLanguage(event.target.value)}
        >
          <option value="ukr">UA</option>
          <option value="en">EN</option>
        </select>
      </div>
      <div className="logo-container">
        <a href="/">
          <p className="upper-logo-text">filosof</p>
          <p className="lower-logo-text">barbershop</p>
        </a>
      </div>
      <div className="desktop_menu">
        <Link toId="locations" className="desktop_menu-link">
          {formatMessage({ id: "locations" })}
        </Link>
      </div>
      <div className="desktop_menu">
        <Link toId="barbers" className="desktop_menu-link">
          {formatMessage({ id: "barbers" })}
        </Link>
      </div>
    </header>
  );
};

export default UpperHeader;
