import CloseButtonSvg from "../../svg/closeButtonSvg"

const MobileMenuCloseButtonListItem = ({ closeMenuFunction }) => {
  return (
    <li>
      <button onClick={closeMenuFunction} title="Mobile menu close button">
        <CloseButtonSvg />
      </button>
    </li>
  );
};

export default MobileMenuCloseButtonListItem;
