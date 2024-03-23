import { Link } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";

export default function PageError() {
  return (
    <>
      <CustomNavbar />
      <div className="text-center text-white py-5 mt-5">
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to="/">
          <p>Sorry, the page you are looking for does not exist.</p>
        </Link>
      </div>
      <Footer />
    </>
  );
}
