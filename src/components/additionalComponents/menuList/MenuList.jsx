/**
 * Navigation menu list component.
 * @module MenuList
 */
import { memo } from "react";
import { useIntl } from "react-intl";
import { MENU_ITEMS } from "../../../constants/constants";
import Link from "../link/Link";

/**
 * Renders a list of navigation links with localized text.
 * @param {Object} props - Component props.
 * @param {Function} [props.additionalOnClickEvent] - Optional function to call on link click (e.g., close mobile menu).
 * @returns {JSX.Element[]} Array of list item elements with navigation links.
 */
const MenuList = ({ additionalOnClickEvent }) => {
  const { formatMessage } = useIntl();

  return MENU_ITEMS.map((item) => (
    <li key={item.linkId} role="menuitem">
      <Link
        toId={item.linkId}
        className="menu-link"
        additionalOnClick={additionalOnClickEvent}
      >
        {formatMessage({ id: item.linkIntlId })}
      </Link>
    </li>
  ));
};

export default memo(MenuList);
