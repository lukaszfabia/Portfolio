import "./App.css";

import CustomNavbar from "./Header/CustomNavbar";
import WelcomeInfo from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

const Blobs = () => {
  return (
    <div id="blob-container">
      <div className="blob"></div>
      <div className="static-blob"></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Blobs />
      <CustomNavbar />
      <WelcomeInfo />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
