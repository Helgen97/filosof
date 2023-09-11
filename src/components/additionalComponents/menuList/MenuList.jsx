import { useIntl } from "react-intl";
import { MENU_ITEMS } from "../../../constants/content";
import Link from "../link/Link";

const MenuList = ({ additionalOnClickEvent }) => {
  const { formatMessage } = useIntl();

  return MENU_ITEMS.map((item) => {
    return (
      <li key={item.linkId}>
        <Link
          toId={item.linkId}
          className={"menu-link"}
          additionalOnClick={additionalOnClickEvent}
        >
          {formatMessage({ id: item.linkIntlId })}
        </Link>
      </li>
    );
  });
};

export default MenuList;
