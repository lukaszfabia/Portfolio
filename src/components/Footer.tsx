import { Container, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <Container className="text-center">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <Col className="col-md-6 d-flex align-items-center">
          <span className="text-white">&copy; 2023 <a href="home" className="text-decoration-none text-white">Łukasz Fabia</a></span>
        </Col>
        <Nav className="col-md-6 justify-content-end list-unstyled d-flex">
          <Nav.Link
            className="ms-2"
            href="https://github.com/lukaszfabia"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} style={{color: "white"}}/>
          </Nav.Link>
        <Nav.Link
            className="ms-2"
            href="https://twitter.com/LukaszFabia"
            target="_blank"
        >
            <FontAwesomeIcon icon={faXTwitter} style={{color: "white"}}/>
        </Nav.Link>
        </Nav>
      </footer>
    </Container>
  );
};

export default Footer;