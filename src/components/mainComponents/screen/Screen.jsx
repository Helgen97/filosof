/**
 * Generic section component with localized title.
 * @module Screen
 */
import { memo } from "react";
import { useIntl } from "react-intl";

/**
 * Renders a section with a localized title and optional child content.
 * @param {Object} props - Component props.
 * @param {string} props.sectionId - ID for the section element.
 * @param {string} props.sectionClassName - CSS class for styling the section.
 * @param {string} props.sectionTitleIntlId - Internationalization ID for the section title.
 * @param {React.ReactNode} props.children - Child components or content.
 * @returns {JSX.Element} The section component.
 */
const Screen = memo(
  ({ sectionId, sectionClassName, sectionTitleIntlId, children }) => {
    const { formatMessage } = useIntl();

    return (
      <section
        id={sectionId}
        className={sectionClassName}
        aria-labelledby={`${sectionId}-title`}
      >
        <h2 id={`${sectionId}-title`}>
          {formatMessage({ id: sectionTitleIntlId })}
        </h2>
        {children}
      </section>
    );
  }
);

export default Screen;
