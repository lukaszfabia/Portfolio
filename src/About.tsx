import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import scrollToElement from "./components/IdHandler";

const About = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    scrollToElement(id || "");
  }, [id]);
  return (
    <Container className="text-white mt-5">
      <Row>
        <Col>
          <h1 className="hash">
            About (me){" "}
            <a href="#about" id="about">
              #
            </a>
          </h1>
        </Col>
      </Row>
      <Row className="py-5">
        <Col lg={6} md={9} xs={12} className="text-center">
          <img
            src="https://placehold.co/300x400"
            alt=""
            className="img-thumbnail"
          />
        </Col>
        <Col lg={6} md={9} xs={12} className="mt-5">
          <h2 className="text-center py-2">My experience</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
