import { Row, Col, Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="hash text-white mt-5">
      <Row>
        <Col>
          <h1>
            About (me){" "}
            <a href="#about" id="about">
              #
            </a>
          </h1>
        </Col>
      </Row>
      <Row className="py-5">
        <Col className="col-lg-6 col-md-9 col-12 text-center">
          <img src="https://placehold.co/300x400" alt="" />
        </Col>
        <Col className="col-lg-6 col-md-9 col-12 mt-5">
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
