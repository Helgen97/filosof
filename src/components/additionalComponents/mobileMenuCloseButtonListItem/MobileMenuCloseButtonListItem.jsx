import CloseButtonSvg from "../../svg/closeButtonSvg"

const MobileMenuCloseButtonListItem = ({ closeMenuFunction }) => {
  return (
    <li>
      <button onClick={closeMenuFunction}>
        <CloseButtonSvg />
      </button>
    </li>
  );
};

export default MobileMenuCloseButtonListItem;
