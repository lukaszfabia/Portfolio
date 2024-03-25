import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import scrollToElement from "./components/IdHandler";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import "./styles/App.css";
import OuterViewLinks from "./components/OuterViewLinks";

function DisplayProjects({
  description,
  image,
  id,
  isOnChange: changeFloat,
  title,
}: {
  description?: string;
  image?: string;
  id: string;
  isOnChange?: boolean;
  title: string;
}) {
  // fixed image position on mobile
  const width: number = window.innerWidth;
  if (width < 560) changeFloat = false;
  return (
    <>
      <Row id={id} className="py-5 mb-5">
        {changeFloat ? (
          <>
            <Col lg={6} md={9} xs={12} className="text-center">
              <img
                src={image ? image : "https://placehold.co/400x300"}
                alt=""
                className="img-thumbnail"
              />
            </Col>
            <Col lg={6} md={9} xs={12}>
              <h1 className="py-3">{title}</h1>
              <p>
                {description
                  ? description
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex dignissimos molestias aspernatur neque nam nemo deserunt quae eius, autem molestiae id facere ipsa accusamus hic quaerat omnis corporis et?"}
              </p>
            </Col>
          </>
        ) : (
          <>
            <Col lg={6} md={9} xs={12}>
              <h1 className="py-3">{title}</h1>
              <p>
                {description
                  ? description
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ex dignissimos molestias aspernatur neque nam nemo deserunt quae eius, autem molestiae id facere ipsa accusamus hic quaerat omnis corporis et?"}
              </p>
            </Col>
            <Col lg={6} md={9} xs={12} className="text-center">
              <img
                src={image ? image : "https://placehold.co/400x300"}
                alt=""
                className="img-thumbnail"
              />
            </Col>
          </>
        )}
      </Row>
    </>
  );
}

export default function MyProjects() {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    scrollToElement(id || "");
  }, [id]);

  console.log(id);

  return (
    <div className="App">
      <CustomNavbar View={OuterViewLinks} />
      <Container className="py-5 mt-5 text-white">
        <Row>
          <Col className="text-center text-lg-end mx-auto py-5">
            <h1 className="py-5">My Projects</h1>
          </Col>
        </Row>
        <DisplayProjects title="First Project" id={"1"} />
        <DisplayProjects title="Second Project" id={"2"} isOnChange={true} />
        <DisplayProjects title="Third Project" id={"3"} />
      </Container>
      <Footer />
    </div>
  );
}
