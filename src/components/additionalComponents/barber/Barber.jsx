import { useIntl } from "react-intl";

const Barber = ({
  lang,
  barberContent: { photo, barberName, barberNameLang, barberPositionItlId },
}) => {
  const { formatMessage } = useIntl();

  return (
    <div className="barber">
      <div className="barber-photo-container">
        <img
          className="barber-photo"
          src={photo}
          alt={barberName}
          width="150px"
          height="150px"
          loading="lazy"
        />
      </div>
      <div className="barber-description">
        <p className="barber-name">
          {lang === "ukr" ? barberName : barberNameLang[lang]}
        </p>
        <p className="barber-position">
          {formatMessage({ id: barberPositionItlId })}
        </p>
      </div>
    </div>
  );
};

export default Barber;
