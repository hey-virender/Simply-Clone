import CollectionsPage from "./components/CollectionsPage";
import DescriptionSection from "./components/DescriptionSection";
import GiftingPage from "./components/GiftingPage";
import LandingPage from "./components/LandingPage";
import SpecialChocolates from "./components/SpecialChocolates";
import Environment from "./components/Environment";
import CollageSection from "./components/CollageSection";
import AboutSimply from "./components/AboutSimply";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative font-manrope">
      <LandingPage />
      <CollectionsPage />
      <DescriptionSection />
      <GiftingPage />
      <SpecialChocolates />
      <Environment />
      <CollageSection />
      <AboutSimply />
      <Footer />
    </div>
  );
}

export default App;
