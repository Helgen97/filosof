import { useState } from "react";
import MobileMenuButton from "../mobileMenuButton";
import MobileMenuContent from "../mobileMenuContent";
import { ClickAwayListener } from "@mui/base";

const MobileMenu = () => {
  const [isOpened, setOpened] = useState(false);

  const closeMenu = () => {
    setOpened(false);
  };

  const toggleMenu = () => {
    setOpened(!isOpened);
  };

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <div className="mobile_menu">
        <MobileMenuButton openMenuFunction={toggleMenu} />
        <MobileMenuContent
          closeMenuFunction={closeMenu}
          isMenuShowed={isOpened}
        />
      </div>
    </ClickAwayListener>
  );
};

export default MobileMenu;
