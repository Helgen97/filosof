/**
 * Component for rendering individual barber details.
 * @module Barber
 */
import { memo } from "react";
import { useIntl } from "react-intl";
import { useLanguageContext } from "../../../context/SiteContext";

/**
 * Renders a barber's profile with photo, name, and position.
 * @param {Object} props - Component props.
 * @param {Object} props.barberContent - Barber data object.
 * @returns {JSX.Element} The barber component.
 */
const Barber = ({ barberContent }) => {
  const { photo, barberName, barberNameLang, barberPositionItlId } =
    barberContent;
  const { formatMessage } = useIntl();
  const { appLang } = useLanguageContext();

  return (
    <div
      className="barber"
      aria-label={`Profile of ${
        appLang === "uk" ? barberName : barberNameLang[appLang] || barberName
      }`}
    >
      <div className="barber-photo-container">
        <img
          className="barber-photo"
          src={photo || ""}
          alt={
            appLang === "uk"
              ? barberName
              : barberNameLang[appLang] || barberName
          }
          width="150"
          height="150"
          loading="lazy"
        />
      </div>
      <div className="barбер-description">
        <p className="barber-name">
          {appLang === "uk"
            ? barberName
            : barberNameLang[appLang] || barberName}
        </p>
        <p className="barber-position">
          {formatMessage({ id: barberPositionItlId })}
        </p>
      </div>
    </div>
  );
};

export default memo(Barber);
