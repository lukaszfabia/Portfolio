import { Card, Button } from "react-bootstrap";

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
    <Card style={{ width: "18rem" }} className="mt-2">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};


export default ProjectCard;