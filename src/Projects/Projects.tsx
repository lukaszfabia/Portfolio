import ProjectCard from "./components/ProjectCard";
import { Col, Container, Row } from "react-bootstrap";

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    img: "https://placehold.co/600x400",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    img: "https://placehold.co/600x400",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: "Description of Project 2",
    img: "https://placehold.co/600x400",
    link: "https://example.com/project2",
  },
];

const Projects = () => {
  const styles = {
    marginTop: "5rem",
    padding: "20px 20px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, .1)",
  };

  const Cards = () => {
    return (
      <div
        className="d-flex flex-wrap justify-content-around"
        style={{ margin: "20px 20px" }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            img={project.img}
            link={project.link}
          />
        ))}
      </div>
    );
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <div style={styles}>
            <h1 id="projects" className="hash" style={{ paddingTop: "2rem" }}>
              Projects <a href="#projects">#</a>
            </h1>
            <Cards />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
