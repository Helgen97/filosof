import React, { useState } from 'react';
import IntlProvider from '../components/IntlProvider/IntlProvider';
import MobileMenu from '../components/mobileMenu/MobileMenu';
import RightButton from "../components/rightButton";
import UpperHeader from '../components/upperHeader';
import LowerHeader from "../components/lowerHeader";
import MainScreen from '../components/mainScreen';
import PriceScreen from '../components/priceScreen';
import LocationsScreen from '../components/locationsScreen';
import BarberScreen from '../components/barberScreen';
import Footer from '../components/footer/Footer';

function App() {

  const [appLang, setAppLang] = useState("ukr");
  const [mobileMenuOpeded, setMobileMenuOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("location_1")


  return (
    <IntlProvider lang={appLang}>
      <MobileMenu opened={mobileMenuOpeded} setOpened={setMobileMenuOpen} />
      <RightButton currentLocation={currentLocation} />
      <UpperHeader changeLanguage={setAppLang} setMobileMenuOpened={setMobileMenuOpen} />
      <LowerHeader lang={appLang} changeLocation={setCurrentLocation} />
      <MainScreen currentLocation={currentLocation} />
      <PriceScreen />
      <LocationsScreen lang={appLang} />
      <BarberScreen lang={appLang} />
      <Footer />
    </IntlProvider>
  );
}

export default App;
