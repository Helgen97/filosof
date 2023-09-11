import MainScreenLoweContent from "../../additionalComponents/mainScreenLowerContent";
import MainScreenUpperContent from "../../additionalComponents/mainScreenUpperContent";

const MainScreen = ({ currentLocation }) => {
  return (
    <section id="main_screen" className="main_screen">
      <div className="main_screen-content">
        <MainScreenUpperContent currentLocation={currentLocation} />
        <MainScreenLoweContent currentLocation={currentLocation} />
      </div>
    </section>
  );
};

export default MainScreen;
