import "../src/styles/App.css";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Faq from "./Faq";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Home />
      <Projects />
      <About />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
