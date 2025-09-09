/**
 * Language toggler container component.
 * @module LanguageTogglerContainer
 */
import { memo } from "react";
import { useLanguageContext } from "../../../context/SiteContext";

/**
 * Renders a dropdown for selecting the page language.
 * @returns {JSX.Element} The language toggler component.
 */
const LanguageTogglerContainer = () => {
  const { appLang, setAppLang } = useLanguageContext();

  return (
    <div className="language_toggler-container" aria-label="Language selector">
      <select
        value={appLang}
        onChange={(event) => setAppLang(event.target.value)}
        className="language_toggler"
        name="language-toggler"
        aria-label="Select page language"
      >
        <option value="uk">UA</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default memo(LanguageTogglerContainer);
