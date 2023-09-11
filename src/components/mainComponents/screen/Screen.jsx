import { useIntl } from "react-intl";

const Screen = ({
  sectionId,
  sectionClassName,
  sectionTitleIntlId,
  children,
}) => {
  const { formatMessage } = useIntl();
  
  return (
    <section id={sectionId} className={sectionClassName}>
      <h2>{formatMessage({ id: sectionTitleIntlId })}</h2>
      {children}
    </section>
  );
};

export default Screen;
