import { Card } from "react-bootstrap";
import { GettingStartedButton } from "../../Home/components/Components";

const ProjectCard = ({
  link,
  title,
  description,
  img,
}: {
  link: string;
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <Card
      style={{ width: "16rem", background: "rgba(255, 255, 255, 0.3)" }}
      className="mt-2"
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <GettingStartedButton text="Learn more" link={link} />
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
