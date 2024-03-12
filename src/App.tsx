import "./App.css";

import CustomNavbar from "./Header/CustomNavbar";
import WelcomeInfo from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <WelcomeInfo />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
