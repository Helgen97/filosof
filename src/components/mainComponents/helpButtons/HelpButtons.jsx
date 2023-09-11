import HelpBookingButtonContainer from "../../additionalComponents/helpBookingButtonContainer";
import ToTopButtonContainer from "../../additionalComponents/toTopButtonContainer";

const HelpButtons = ({ currentLocation, isShowedButtons }) => {
  return (
    <div className={isShowedButtons ? "help_buttons showed" : "help_buttons"}>
      <HelpBookingButtonContainer currentLocation={currentLocation} />
      <ToTopButtonContainer />
    </div>
  );
};

export default HelpButtons;
