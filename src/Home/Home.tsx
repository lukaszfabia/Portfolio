import { Container, Row, Col } from "react-bootstrap";
import home from "./home.module.css";
import { useState } from "react";
import { WelcomeMessage, Bio, Trail, GettingStartedButton } from "./components/Components";

const ShortBio = () => {
  const [open, set] = useState(true);
  return (
    <div className={home.bio} onReset={() => set((state) => !state)}>
      <Trail open={open}>
        <span>
          <WelcomeMessage />
        </span>
        <span>
          <Bio />
        </span>
        <GettingStartedButton />
      </Trail>
    </div>
  );
};

const WelcomeInfo = () => {
  return (
    <Container className="d-flex col-flex">
      <Row>
        <Col className="col-lg-6 col-md-9 col-12">
          <ShortBio />
        </Col>
        <Col className="col-lg-6 col-md-9 col-12">
          {/* <ShortBio /> */}
          {/* img */}
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeInfo;