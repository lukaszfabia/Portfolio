import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../src/styles/ContactButton.module.css";

export default function ContactInfo() {
  const isSmallScreen = window.innerWidth < 560;

  return (
    <Container
      className={`text-white py-3 ${isSmallScreen ? "text-center" : ""}`}
    >
      <Row>
        <Col
          className={`${
            isSmallScreen
              ? "d-flex flex-column align-items-center"
              : "d-flex flex-column-start align-items-center"
          }`}
        >
          <h1 id="contact">Contact with me</h1>
          <Link to="/portfolio/contact" className="mx-5">
            <button className={styles.arrowButton}>Get in touch</button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
