import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function OuterViewLinks() {
  const location = useLocation();

  return (
    <Nav className="ms-auto">
      <Nav.Link
        href="/portfolio"
        className="ms-4"
        active={location.pathname === "/portfolio"}
      >
        Home
      </Nav.Link>
      <Nav.Link
        href="/portfolio/myprojects"
        className="ms-4"
        active={location.pathname === "/portfolio/myprojects"}
      >
        Projects
      </Nav.Link>
      <Nav.Link href="#" className="ms-4" disabled={true}>
        Blog
      </Nav.Link>
      <Nav.Link
        href="/portfolio/contact"
        className="ms-4"
        active={location.pathname === "/portfolio/contact"}
      >
        Contact
      </Nav.Link>
    </Nav>
  );
}
