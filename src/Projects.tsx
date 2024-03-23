import { Row, Col, Container } from "react-bootstrap";
import ProjectsCarousel from "../src/components/Carousel";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import scrollToElement from "./components/IdHandler";

const Projects = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    scrollToElement(id || "");
  }, [id]);
  return (
    <Container className="text-white py-4">
      <Row>
        <Col>
          <h1 className="py-5 hash">
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
