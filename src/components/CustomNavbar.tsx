import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const CustomNavbar = () => {
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
          <Navbar.Brand href="/">lukaszfabia.dev</Navbar.Brand>
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
            <Nav className="ms-auto">
              <Nav.Link href="#projects" className="ms-4">
                Projects
              </Nav.Link>
              <Nav.Link href="#about" className="ms-4">
                About me
              </Nav.Link>
              <Nav.Link href="#blog" className="ms-4" disabled={true}>
                Blog
              </Nav.Link>
              <Nav.Link href="#faq" className="ms-4">
                FAQ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
