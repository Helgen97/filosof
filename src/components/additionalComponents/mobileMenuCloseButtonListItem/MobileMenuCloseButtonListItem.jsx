/**
 * Mobile menu close button component.
 * @module MobileMenuCloseButtonListItem
 */
import { memo } from "react";
import CloseButtonSvg from "../../svg/closeButtonSvg";

/**
 * Renders a list item with a button to close the mobile menu.
 * @param {Object} props - Component props.
 * @param {Function} props.closeMenuFunction - Function to close the mobile menu.
 * @returns {JSX.Element} The mobile menu close button component.
 */
const MobileMenuCloseButtonListItem = ({ closeMenuFunction }) => (
  <li>
    <button onClick={closeMenuFunction} aria-label="Close mobile menu">
      <CloseButtonSvg />
    </button>
  </li>
);

export default memo(MobileMenuCloseButtonListItem);
