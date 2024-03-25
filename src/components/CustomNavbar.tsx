import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CustomNavbar({ View }: any) {
  const bg = {
    backgroundColor: "black",
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Navbar expand="md" className="navbar-dark fixed-top" style={bg}>
        <Container>
          <Navbar.Brand>
            <Link to="/portfolio">lukaszfabia.dev</Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleNavbar}
            className={isOpen ? "text-white" : ""}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="text-center">
            <View />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
