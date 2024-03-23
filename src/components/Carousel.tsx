import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

function ExampleCarouselImage({ text, link }: { text: string; link?: string }) {
  return (
    <img
      className="d-block w-100"
      src={
        link
          ? link
          : "https://images.unsplash.com/photo-1544511916-0148ccdeb877?w=1920&q=80&auto=format&fit=crop"
      }
      style={{ objectFit: "cover", height: "70vh", borderRadius: "10px" }}
      alt={text}
    />
  );
}

function ProjectsCarousel() {
  return (
    <Carousel style={{ marginBottom: "40px" }}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button href="/portfolio/myprojects/1" variant="dark text-white">
            learn more
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button
            href="/portfolio/myprojects/2"
            variant="dark text-white"
            className="btn-custom"
          >
            learn more
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button
            href="/portfolio/myprojects/3"
            variant="dark text-white"
            className="btn-custom"
          >
            learn more
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectsCarousel;
