import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navbar.module.css";

const CustomNavbar = () => {
  return (
    <header style={styles}>
      <Navbar expand="md" className="navbar-light navbar-transparent">
        <Container>
          <Navbar.Brand href="home" className="text-white">lukaszfabia.dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="text-center">
            <Nav className="ms-auto">
              <Nav.Link href="#about" className="ms-4 text-white">
                About me
              </Nav.Link>
              <Nav.Link href="#projects" className="ms-4 text-white">
                Projects
              </Nav.Link>
              <Nav.Link href="#blog" className="ms-4 text-white" disabled={true}>
                Blog
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default CustomNavbar;
