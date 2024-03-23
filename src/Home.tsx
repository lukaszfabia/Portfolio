import { Row, Col, Container } from "react-bootstrap";
import Trail from "../src/components/Trail";
import { useEffect, useState } from "react";
import styles from "./styles/Home.module.css";
import scrollToElement from "./components/IdHandler";
import { useParams } from "react-router-dom";

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
            . I am passionate about web development and I am looking for an
            internship to gain experience in this field.
          </p>
        </span>
      </Trail>
    </div>
  );
};

const Home = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    scrollToElement(id || "");
  }, [id]);
  return (
    <Container className={`${styles.home} text-white`}>
      <Row>
        <Col lg={6} md={9} xs={12} className="mb-5 py-2">
          <Bio />
        </Col>
        <Col lg={6} md={9} xs={12} className="mb-5 mt-5 text-center">
          <img
            src="https://placehold.co/300x400"
            alt=""
            className="img-thumbnail"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
