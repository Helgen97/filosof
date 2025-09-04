/**
 * Help buttons container component for the application.
 * @module HelpButtons
 */
import { memo } from "react";
import HelpBookingButtonContainer from "../../additionalComponents/helpBookingButtonContainer";
import ToTopButtonContainer from "../../additionalComponents/toTopButtonContainer";

/**
 * Renders a container with help and scroll-to-top buttons, conditionally shown based on visibility state.
 * @param {Object} props - Component props.F
 * @param {boolean} props.isShowedButtons - Determines if the buttons are visible.
 * @returns {JSX.Element} The help buttons container component.
 */
const HelpButtons = ({ isShowedButtons }) => (
  <div
    className={`help_buttons ${isShowedButtons ? "showed" : ""}`}
    aria-hidden={!isShowedButtons}
  >
    <HelpBookingButtonContainer />
    <ToTopButtonContainer />
  </div>
);

export default memo(HelpButtons);
