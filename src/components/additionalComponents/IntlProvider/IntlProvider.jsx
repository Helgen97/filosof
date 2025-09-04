/**
 * Internationalization provider component for language localization.
 * @module IntlProvider
 */
import { memo, useMemo } from "react";
import { IntlProvider as ReactIntlProvider } from "react-intl";
import { useLanguageContext } from "../../../context/SiteContext";
import getMessages from "../../../intl";

/**
 * Provides internationalization context with localized messages for the application.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to be wrapped with IntlProvider.
 * @returns {JSX.Element} The IntlProvider component wrapping children.
 */
const IntlProvider = ({ children }) => {
  const { appLang } = useLanguageContext();
  const messages = useMemo(() => getMessages(appLang), [appLang]);

  return (
    <ReactIntlProvider defaultLocale="uk" locale={appLang} messages={messages}>
      {children}
    </ReactIntlProvider>
  );
};

export default memo(IntlProvider);
