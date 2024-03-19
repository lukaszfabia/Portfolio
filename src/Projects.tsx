import { Row, Col, Container } from "react-bootstrap";
// import styles from "./styles/Projects.module.css";
import ProjectsCarousel from "../src/components/Carousel";

const Projects = () => {
  return (
    <Container className="hash text-white py-4">
      <Row>
        <Col>
          <h1 className="py-5">
            Projects{" "}
            <a href="#projects" id="projects">
              #
            </a>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectsCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
