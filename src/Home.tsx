import { Row, Col, Container } from "react-bootstrap";
import Trail from "../src/components/Trail";
import { useState } from "react";
import styles from "./styles/Home.module.css";


const Bio = () => {
  const [open, set] = useState(true);

  return (
    <div onReset={() => set((state) => !state)}>
      <Trail open={open}>
        <span>
          <h2>Lukasz Fabia</h2>
        </span>
        <span>
          <h1>Web developer</h1>
        </span>
        <span>
          <p>
            I' am Applied Computer Science student at{" "}
            <a href="https://pwr.edu.pl/en/">
              <i>Wroclaw University of Science and Technology</i>
            </a>
            . I am passionate about web development and I am looking for
            an internship to gain experience in this field.
          </p>
        </span>
      </Trail>
    </div>
  );
};

const Home = () => {
  return (
    <Container className={`${styles.home} text-white`}>
      <Row>
        <Col className="col-lg-6 col-md-9 col-12 mb-5">
          <Bio />
        </Col>
        <Col className="col-lg-6 col-md-9 col-12 mb-5">
          <Bio />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
