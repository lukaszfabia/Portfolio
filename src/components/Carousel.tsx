import Carousel from "react-bootstrap/Carousel";

function ExampleCarouselImage({ text, link }: { text: string; link?: string }) {
  return (
    <img
      className="d-block w-100"
      src={
        link
          ? link
          : "https://images.unsplash.com/photo-1544511916-0148ccdeb877?w=1920&q=80&auto=format&fit=crop"
      }
      style={{ objectFit: "cover", height: "70vh" }}
      alt={text}
    />
  );
}

function ProjectsCarousel() {
  return (
    <Carousel data-bs-theme="dark" style={{marginBottom: "40px"}}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectsCarousel;
