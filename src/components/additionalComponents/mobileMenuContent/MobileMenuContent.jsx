import MobileMenuCloseButtonListItem from "../mobileMenuCloseButtonListItem"
import MenuList from "../menuList";

const MobileMenuContent = ({ closeMenuFunction, isMenuShowed }) => {
  return (
    <div
      className={
        isMenuShowed ? "mobile_menu_content showed" : "mobile_menu_content"
      }
    >
      <ul>
        <MobileMenuCloseButtonListItem closeMenuFunction={closeMenuFunction} />
        <MenuList additionalOnClickEvent={closeMenuFunction} />
      </ul>
    </div>
  );
};

export default MobileMenuContent;
