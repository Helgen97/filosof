/**
 * Desktop menu component for the application header.
 * @module DesktopMenu
 */
import { memo } from "react";
import MenuList from "../menuList";

/**
 * Renders a navigation menu for desktop view with a list of links.
 * @returns {JSX.Element} The desktop menu component.
 */
const DesktopMenu = () => (
  <nav className="desktop_menu" aria-label="Desktop navigation menu">
    <ul role="menu">
      <MenuList />
    </ul>
  </nav>
);

export default memo(DesktopMenu);
