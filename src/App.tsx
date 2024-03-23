import "../src/styles/App.css";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Faq from "./Faq";
import React from "react";

const MainSite: React.FC = () => {
  return (
    <>
      <Home />
      <Projects />
      <About />
      <Faq />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <CustomNavbar />
      <MainSite />
      <Footer />
    </div>
  );
};

export default App;
