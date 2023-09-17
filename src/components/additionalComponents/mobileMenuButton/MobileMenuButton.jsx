import MenuBurgerSvg from "../../svg/menuBurgerSvg"

const MobileMenuButton = ({ openMenuFunction }) => {
  return (
    <div className="mobile_menu-button">
      <button onClick={openMenuFunction} title="Mobile menu button">
        <MenuBurgerSvg />
      </button>
    </div>
  );
};

export default MobileMenuButton;
