/**
 * Mobile menu component with toggle functionality.
 * @module MobileMenu
 */
import { useState, memo } from "react";
import { ClickAwayListener } from "@mui/base";
import MobileMenuButton from "../mobileMenuButton";
import MobileMenuContent from "../mobileMenuContent";

/**
 * Renders a mobile menu with a toggle button and content, closable by clicking outside.
 * @returns {JSX.Element} The mobile menu component.
 */
const MobileMenu = () => {
  const [isOpened, setOpened] = useState(false);

  const closeMenu = () => setOpened(false);
  const toggleMenu = () => setOpened((prev) => !prev);

  return (
    <ClickAwayListener onClickAway={closeMenu}>
      <div className="mobile_menu" aria-label="Mobile navigation menu">
        <MobileMenuButton openMenuFunction={toggleMenu} />
        <MobileMenuContent
          closeMenuFunction={closeMenu}
          isMenuShowed={isOpened}
        />
      </div>
    </ClickAwayListener>
  );
};

export default memo(MobileMenu);
