import { useIntl } from "react-intl";

const CopyrightContainer = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="copyright">
      <p>FILOSOF BARBERSHOP</p>
      <p>{formatMessage({ id: "copyright" })}</p>
      <p>
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/dmytrodonchenko/"
          rel="noreferrer"
          target="_blank"
        >
          Helgen
        </a>
        .
      </p>
    </div>
  );
};

export default CopyrightContainer;
