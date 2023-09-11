import { useIntl } from "react-intl";
import { PRICE_TABLE_HEAD_CONTENT } from "../../../constants/content";

const PriceTableHead = () => {
  const { formatMessage } = useIntl();

  return (
    <thead>
      <tr>
        {PRICE_TABLE_HEAD_CONTENT.map((column) => (
          <td key={column}>
            {column.map((content) => (
              <p key={content}>{formatMessage({ id: content })}</p>
            ))}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default PriceTableHead;
