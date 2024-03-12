import { Button, Container, Row, Col } from "react-bootstrap";

function AboutMe() {
  return (
    <main>
      <Container>
        <Row>
          <Col className="col-md-6">
            <h1 id='about' className="hash">Hello, world! <a href="about">#</a></h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button variant="primary">Learn more</Button>
          </Col>
          <Col className="col-md-6">
            <h1 id='about' className="hash">Hello, world! <a href="about">#</a></h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button variant="primary">Learn more</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default AboutMe;