/**
 * Mobile menu content component.
 * @module MobileMenuContent
 */
import { memo } from "react";
import MobileMenuCloseButtonListItem from "../mobileMenuCloseButtonListItem";
import MenuList from "../menuList";

/**
 * Renders the content of the mobile menu, including a close button and navigation links.
 * @param {Object} props - Component props.
 * @param {Function} props.closeMenuFunction - Function to close the mobile menu.
 * @param {boolean} props.isMenuShowed - Determines if the mobile menu is visible.
 * @returns {JSX.Element} The mobile menu content component.
 */
const MobileMenuContent = ({ closeMenuFunction, isMenuShowed }) => (
  <div
    className={`mobile_menu_content ${isMenuShowed ? "showed" : ""}`}
    aria-hidden={!isMenuShowed}
    aria-label="Mobile menu content"
  >
    <ul role="menu">
      <MobileMenuCloseButtonListItem closeMenuFunction={closeMenuFunction} />
      <MenuList additionalOnClickEvent={closeMenuFunction} />
    </ul>
  </div>
);

export default memo(MobileMenuContent);
