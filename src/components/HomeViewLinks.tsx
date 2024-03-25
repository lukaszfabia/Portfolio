import { Nav } from "react-bootstrap";

export default function HomeLinks() {
  return (
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
      <Nav.Link href="#contact" className="ms-4">
        Contact
      </Nav.Link>
    </Nav>
  );
}
