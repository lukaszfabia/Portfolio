import "../src/styles/App.css";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Faq from "./Faq";
import React from "react";
import ContactInfo from "./ContactInfo";
import HomeLinks from "./components/HomeViewLinks";

const MainContent: React.FC = () => {
  return (
    <>
      <Home />
      <Projects />
      <About />
      <Faq />
      <ContactInfo />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <CustomNavbar View={HomeLinks} />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
