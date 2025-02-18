import { useIntl } from "react-intl";
import { PRICE_CONTENT } from "../../../constants/content";

const PriceContent = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="price_screen_service-container">
      {PRICE_CONTENT.map((service) => {
        return (
          <div key={service.key} className="price_screen-service">
            <div className="price_screen-service_name">
              {formatMessage({ id: service.key })}
            </div>
            <div className="price_screen-service_divider"></div>
            <div className="price_screen-service_price">{`${formatMessage({
              id: "from",
            })} ${service.starting_price} ${formatMessage({
              id: "currency",
            })}*`}</div>
          </div>
        );
      })}
      <p className="price_screen_service-footnote">*{formatMessage({id: "price-footnote"})}</p>
    </div>
  );
};

export default PriceContent;
