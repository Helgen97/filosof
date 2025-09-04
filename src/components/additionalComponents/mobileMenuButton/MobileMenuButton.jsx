/**
 * Mobile menu toggle button component.
 * @module MobileMenuButton
 */
import { memo } from "react";
import MenuBurgerSvg from "../../svg/menuBurgerSvg";

/**
 * Renders a button to toggle the mobile menu with a burger icon.
 * @param {Object} props - Component props.
 * @param {Function} props.openMenuFunction - Function to toggle the mobile menu.
 * @returns {JSX.Element} The mobile menu button component.
 */
const MobileMenuButton = ({ openMenuFunction }) => (
  <div className="mobile_menu-button" aria-label="Toggle mobile menu">
    <button onClick={openMenuFunction} aria-label="Open mobile menu">
      <MenuBurgerSvg />
    </button>
  </div>
);

export default memo(MobileMenuButton);
