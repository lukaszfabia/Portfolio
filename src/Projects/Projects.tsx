import ProjectCard from "./components/ProjectCard";
import { Container, Row } from "react-bootstrap";

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    img: "../public/XDDD.jpg",
    link: "https://example.com/project1",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    img: "./public/XDDD.jpg",
    link: "https://example.com/project2",
  },
  {
    title: "Project 3",
    description: "Description of Project 2",
    img: "./public/XDDD.jpg",
    link: "https://example.com/project2",
  },
];

const Projects = () => {

  return (
    <Container className="col-flex">
      <Row style={{ padding: "20px" }}>
        <h1 id="projects" className="hash">
          Projects <a href="projects">#</a>
        </h1>
        <div
          className="d-flex flex-wrap justify-content-around"
          style={{ marginTop: "20px" }}
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
      </Row>
    </Container>
  );
};

export default Projects;
