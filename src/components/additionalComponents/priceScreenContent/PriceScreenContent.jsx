/**
 * Container component for the price screen content.
 * @module PriceScreenContent
 */
import { memo } from "react";
import PriceContent from "../priceContent";

/**
 * Renders a container for the price content section.
 * @returns {JSX.Element} The price screen content component.
 */
const PriceScreenContent = () => (
  <div className="price_screen-content" aria-label="Price list section">
    <PriceContent />
  </div>
);

export default memo(PriceScreenContent);
