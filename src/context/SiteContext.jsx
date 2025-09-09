/**
 * Context provider for managing language and location state across the application.
 * @module SiteProvider
 */
import { createContext, useContext, useMemo, useState } from "react";
import useLangQuery from "../hooks/useLangQuery.jsx";

/**
 * Context for managing the application's language state.
 * @type {React.Context<{ appLang: string, setAppLang: (lang: string) => void }>}
 */

const LanguageContext = createContext(null);
/**
 * Hook to access the language context.
 * @returns {{ appLang: string, setAppLang: (lang: string) => void }} The language context value.
 */
export const useLanguageContext = () => useContext(LanguageContext);

/**
 * Context for managing the application's location state.
 * @type {React.Context<{ currentLocation: string, setCurrentLocation: (location: string) => void }>}
 */
const LocationContext = createContext(null);
/**
 * Hook to access the location context.
 * @returns {{ currentLocation: string, setCurrentLocation: (location: string) => void }} The location context value.
 */
export const useLocationContext = () => useContext(LocationContext);

/**
 * Provides language and location context to the application.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components to be wrapped with context providers.
 * @returns {JSX.Element} The context provider component.
 */
const SiteProvider = ({ children }) => {
  const [appLang, setAppLang] = useLangQuery("uk");
  const [currentLocation, setCurrentLocation] = useState("location_1");

  const languageValue = useMemo(() => ({ appLang, setAppLang }), [appLang]);
  const locationValue = useMemo(
    () => ({ currentLocation, setCurrentLocation }),
    [currentLocation]
  );

  return (
    <LanguageContext.Provider value={languageValue}>
      <LocationContext.Provider value={locationValue}>
        {children}
      </LocationContext.Provider>
    </LanguageContext.Provider>
  );
};

export default SiteProvider;
