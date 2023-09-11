import PriceTableHead from "../priceTableHead";
import PriceTableBody from "../priceTableBody";

const PriceTable = () => {
  return (
    <table className="price-table">
      <PriceTableHead />
      <PriceTableBody />
    </table>
  );
};

export default PriceTable;
