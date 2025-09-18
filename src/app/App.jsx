/**
 * Main application component that orchestrates the layout and state management.
 * @module App
 */
import { useState } from "react";
import IntlProvider from "../components/additionalComponents/IntlProvider";
import TopHeader from "../components/mainComponents/TopHeader";
import BottomHeader from "../components/mainComponents/bottomHeader";
import HelpButtons from "../components/mainComponents/helpButtons";
import MainScreen from "../components/mainComponents/mainScreen";
import Screen from "../components/mainComponents/screen";
import { SECTIONS } from "../constants/constants";
import Footer from "../components/mainComponents/footer";
import ObserverBlock from "../components/additionalComponents/observerBlock";
import SiteProvider from "../context";
import MetaUpdater from "../components/additionalComponents/metaUpdater";
import QuoteWidget from "../components/mainComponents/quoteWidget";

/**
 * Renders the main application layout with localization, navigation, and content sections.
 * Manages language and location state, and controls visibility of help buttons.
 * @returns {JSX.Element} The main application component.
 */
const App = () => {
  const [isHelpButtonsShowed, setHelpButtonShowed] = useState(false);

  return (
    <SiteProvider>
      <IntlProvider>
        <MetaUpdater>
          <ObserverBlock callback={() => setHelpButtonShowed(false)} />
          <TopHeader />
          <BottomHeader />
          <HelpButtons isShowedButtons={isHelpButtonsShowed} />
          <MainScreen />
          {SECTIONS.map((section) => (
            <Screen
              key={section.sectionId}
              sectionId={section.sectionId}
              sectionClassName={section.sectionClassName}
              sectionTitleIntlId={section.sectionTitleIntlId}
            >
              <section.sectionContent />
            </Screen>
          ))}

          <ObserverBlock callback={() => setHelpButtonShowed(true)} />
          <QuoteWidget />
          <Footer />
        </MetaUpdater>
      </IntlProvider>
    </SiteProvider>
  );
};

export default App;
