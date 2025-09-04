/**
 * Component for rendering a list of services with prices.
 * @module PriceContent
 */
import { memo } from "react";
import { useIntl } from "react-intl";
import { PRICE_CONTENT } from "../../../constants/constants";

/**
 * Renders a list of services with their starting prices and a footnote.
 * Uses react-intl for localized service names, prices, and footnote.
 * @returns {JSX.Element} The price content component.
 */
const PriceContent = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      className="price_screen_service-container"
      aria-label="Service price list"
    >
      {PRICE_CONTENT.map((service) => (
        <div key={service.key} className="price_screen-service">
          <div className="price_screen-service_name">
            {formatMessage({ id: service.key })}
          </div>
          <div className="price_screen-service_divider" aria-hidden="true" />
          <div className="price_screen-service_price">
            {formatMessage({ id: "from" })} {service.starting_price}{" "}
            {formatMessage({ id: "currency" })}*
          </div>
        </div>
      ))}
      <p className="price_screen_service-footnote">
        *{formatMessage({ id: "price_footnote" })}
      </p>
    </div>
  );
};

export default memo(PriceContent);
