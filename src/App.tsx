import "../src/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Faq from "./Faq";
import MyProjects from "./MyProjects";
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

const Redirects: React.FC = () => {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/myprojects/:id" element={<MyProjects />} />
      </Routes>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <CustomNavbar />
      <Redirects />
      <Footer />
    </div>
  );
};

export default App;
