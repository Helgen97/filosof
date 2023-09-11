import React, { useState } from "react";
import IntlProvider from "../components/additionalComponents/IntlProvider";
import UpperHeader from "../components/mainComponents/upperHeader";
import LowerHeader from "../components/mainComponents/lowerHeader";
import HelpButtons from "../components/mainComponents/helpButtons";
import MainScreen from "../components/mainComponents/mainScreen";
import Screen from "../components/mainComponents/screen";
import { SECTIONS } from "../constants/sections";
import Footer from "../components/mainComponents/footer";
import ObserverBlock from "../components/additionalComponents/observerBlock";

const App = () => {
  const [appLang, setAppLang] = useState("ukr");
  const [currentLocation, setCurrentLocation] = useState("location_1");
  const [isHelpButtonsShowed, setHelpButtonShowed] = useState(false);

  return (
    <IntlProvider lang={appLang}>
      <ObserverBlock callback={() => setHelpButtonShowed(false)} />
      <UpperHeader changeLanguageFunction={setAppLang} />
      <LowerHeader lang={appLang} changeLocationFunction={setCurrentLocation} />
      <HelpButtons
        currentLocation={currentLocation}
        isShowedButtons={isHelpButtonsShowed}
      />
      <MainScreen currentLocation={currentLocation} />
      <ObserverBlock callback={() => setHelpButtonShowed(true)} />
      {SECTIONS.map((section) => (
        <Screen
          key={section.sectionId}
          sectionId={section.sectionId}
          sectionClassName={section.sectionClassName}
          sectionTitleIntlId={section.sectionTitleIntlId}
        >
          <section.sectionContent lang={appLang} />
        </Screen>
      ))}
      <Footer />
    </IntlProvider>
  );
};

export default App;

{
  /* 
      <RightButtons currentLocation={currentLocation} />
      
      
      
      <LocationsScreen lang={appLang} />
      <BarberScreen lang={appLang} />
       */
}
