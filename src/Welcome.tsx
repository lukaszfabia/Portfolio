import { Button, Container, Row, Col } from "react-bootstrap";

function WelcomeInfo() {
  return (
    <main>
      <Container>
        <Row>
          <Col className="col-md-6">
            <h1 id='home' className="hash">Hello, world! <a href="home">#</a></h1>
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
            <img src="public/XDDD.jpg" alt="its not me" width={'75%'} height={'auto'} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default WelcomeInfo;
