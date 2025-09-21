/**
 * Entry point for the React application, rendering the app and updating meta tags based on language.
 * @module index
 */
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useLanguageContext } from "../../../context/SiteContext";

/**
 * Component to update meta tags and HTML lang attribute based on selected language.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to render.
 * @returns {JSX.Element} The wrapped children.
 */
const MetaUpdater = ({ children }) => {
  const { appLang } = useLanguageContext();
  const { formatMessage } = useIntl();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = appLang;

    // Update title
    document.title = formatMessage({ id: "site_title" });

    // Update meta description
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = formatMessage({ id: "meta_description" });
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = formatMessage({ id: "site_title" });
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.content = formatMessage({ id: "meta_description" });
    }

    // Update Twitter meta tags
    const twitterTitle = document.querySelector(
      'meta[property="twitter:title"]'
    );
    if (twitterTitle) {
      twitterTitle.content = formatMessage({ id: "site_title" });
    }

    const twitterDescription = document.querySelector(
      'meta[property="twitter:description"]'
    );
    if (twitterDescription) {
      twitterDescription.content = formatMessage({ id: "meta_description" });
    }

    // Update Canonical Link
    const canonicalLink = document.querySelector(`link[rel="canonical"]`);

    if (canonicalLink) {
      canonicalLink.href = window.location.origin + "/?lang=" + appLang;
    }
  }, [appLang]);

  return children;
};

export default MetaUpdater;
