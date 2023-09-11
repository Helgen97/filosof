import { useIntl } from "react-intl";
import { PRICE_TABLE_BODY_CONTENT } from "../../../constants/content";

const PriceTableBody = () => {
  const { formatMessage } = useIntl();

  return (
    <tbody>
      {PRICE_TABLE_BODY_CONTENT.map((rowContent, rowIndex) => (
        <tr key={rowIndex}>
          {rowContent.map((columnContent, columnIndex) => (
            <td key={columnIndex}>
              {columnContent.map((item) => {
                return columnIndex === 0 ? (
                  <p
                    key={
                      rowContent[rowIndex] + columnContent[columnIndex] + item
                    }
                  >
                    {formatMessage({ id: item })}
                  </p>
                ) : (
                  <p
                    key={
                      rowContent[rowIndex] + columnContent[columnIndex] + item
                    }
                  >
                    {item} {formatMessage({ id: "currency" })}
                  </p>
                );
              })}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default PriceTableBody;
