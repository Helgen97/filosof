/**
 * Copyright container component for the footer.
 * @module CopyrightContainer
 */
import { memo } from "react";
import { useIntl } from "react-intl";

/**
 * Renders the copyright section with the barbershop name, dynamic year, and developer credit.
 * Uses react-intl for localized copyright message.
 * @returns {JSX.Element} The copyright container component.
 */
const CopyrightContainer = memo(() => {
  const { formatMessage } = useIntl();

  return (
    <div className="copyright" aria-label="Copyright information">
      <p>FILOSOF BARBERSHOP</p>
      <p>
        &copy; {new Date().getFullYear()} {formatMessage({ id: "copyright" })}
      </p>
      <p>
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/dmytrodonchenko/"
          rel="noreferrer"
          target="_blank"
          aria-label="Visit developer's LinkedIn profile"
        >
          Helgen
        </a>
        .
      </p>
    </div>
  );
});

export default CopyrightContainer;
