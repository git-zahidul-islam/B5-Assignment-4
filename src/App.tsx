import { Outlet, useLocation } from "react-router";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import HeroSection from "./components/HeroSection";

const App = () => {
  const location = useLocation()


  return (
    <>
      <Navbar />
      { location.pathname === "/" &&  <HeroSection/> }
      <div className="bg-gradient-to-r from-green-600/15 to-gray-700/15">
        <div className="w-90% container mx-auto px-4 md:px-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
