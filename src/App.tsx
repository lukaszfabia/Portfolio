import "../src/styles/App.css";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import Home from "./Home"

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Home />


      
      {/* <Projects /> */}
      <Footer />
    </div>
  );
}

export default App;
