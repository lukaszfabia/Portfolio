import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import CustomNavbar from "./CustomNavbar";
import WelcomeInfo from "./Welcome";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <WelcomeInfo />
      <AboutMe />
    </div>
  );
}

export default App;
