import React from "react";
import { useIntl } from "react-intl";

const PriceScreen = () => {
  const { formatMessage } = useIntl();

  return (
    <section id="services" className="price_screen">
      <h2 className="screen-title">{formatMessage({ id: "services" })}</h2>
      <table className="price-table">
        <thead>
          <tr>
            <td></td>
            <td>
              <p>{formatMessage({ id: "junior" })}</p>
              <p>{formatMessage({ id: "barber" })}</p>
            </td>
            <td>
              <p>{formatMessage({ id: "barber" })}</p>
            </td>
            <td>
              <p>{formatMessage({ id: "senior" })}</p>
              <p>{formatMessage({ id: "barber" })}</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>{formatMessage({ id: "mens_haircut" })}</p>
            </td>
            <td>
              <p>300 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>300 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>300 {formatMessage({ id: "currency" })}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{formatMessage({ id: "beard_haircut" })}</p>
            </td>
            <td>
              <p>250 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>250 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>250 {formatMessage({ id: "currency" })}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{formatMessage({ id: "mens_haircut" })}</p>
              <p>+</p>
              <p>{formatMessage({ id: "beard_haircut" })}</p>
            </td>
            <td>
              <p>550 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>550 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>550 {formatMessage({ id: "currency" })}</p>
            </td>
          </tr>
          <tr>
            <td>{formatMessage({ id: "fade_haircut" })}</td>
            <td>
              <p>350 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>350 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>350 {formatMessage({ id: "currency" })}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{formatMessage({ id: "fade_haircut" })}</p>
              <p>+</p>
              <p>{formatMessage({ id: "beard_haircut" })}</p>
            </td>
            <td>
              <p>600 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>600 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>600 {formatMessage({ id: "currency" })}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{formatMessage({ id: "haircut" })}:</p>
              <p>{formatMessage({ id: "long_hair" })}</p>
            </td>
            <td>
              <p>350 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>350 {formatMessage({ id: "currency" })}</p>
            </td>
            <td>
              <p>350 {formatMessage({ id: "currency" })}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PriceScreen;
