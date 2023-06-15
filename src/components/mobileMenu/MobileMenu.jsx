import React from "react";
import CloseSvg from "../svg/CloseSvg/CloseSvg";
import { useIntl } from "react-intl";
import Link from "../link";

const MobileMenu = ({ opened, setOpened }) => {
  const { formatMessage } = useIntl();
  const INTL_ID_LIST = ["online_booking", "services", "locations", "barbers"];

  const closeMenu = () => {
    setOpened(false);
  };

  return (
    <div className={opened ? "menu active" : "menu"}>
      <div className="close-btn_container" onClick={closeMenu}>
        <CloseSvg id="close-menu-btn" width="32" height="32" />
      </div>
      <div className="mobile_menu-link_container">
        {INTL_ID_LIST.map((intlId) => {
          return (
            <Link
              key={intlId}
              toId={intlId}
              additionalOnClick={closeMenu}
              className="mobile_menu-link"
            >
              {formatMessage({ id: intlId })}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
