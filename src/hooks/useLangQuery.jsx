import { useEffect, useState } from "react";

/**
 * Hook for managing `lang` state synced with URL query parameter.
 * @param {string} defaultLang - Fallback language if none in query.
 * @returns {[string, Function]} - Current language and setter.
 */
export default function useLangQuery(defaultLang = "uk") {
  const [appLang, setAppLang] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    return lang && ["uk", "en"].includes(lang) ? lang : defaultLang;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("lang", appLang);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newUrl);
  }, [appLang]);

  return [appLang, setAppLang];
}
