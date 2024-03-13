import React, { ReactNode } from "react";
import { useTrail, a } from "@react-spring/web";
import { Button, Row } from "react-bootstrap";
import home from "../home.module.css";

import { TypeAnimation } from "react-type-animation";

const TypeName = () => {
  return (
    <TypeAnimation
      sequence={["Hi, I am Lukasz Fabua", 1000, "Hi, I am Lukasz Fabia", 1000]}
      wrapper="span"
      speed={25}
      repeat={0}
    />
  );
};

const GettingStartedButton = ({ text, link }: { text: string, link: string }) => {
  return (
    <Button
      href={link}
      target="_blank"
      variant="outline-dark"
      className="mb-3 mt-3"
      style={{ borderRadius: "10px", transition: "ease-in-out .25s" }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateX(5px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateX(0px)";
      }}
    >
      {text}
    </Button>
  );
};

const Trail: React.FC<{ open: boolean; children: ReactNode }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={home.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const WelcomeMessage = () => {
  return (
    <Row style={{ paddingTop: "2rem" }}>
      <h1 id="home" className="hash">
        <TypeName /> <a href="home">#</a>
      </h1>
    </Row>
  );
};

const Bio = () => {
  return (
    <Row>
      <p>
        I' am Applied Computer Science student at{" "}
        <a
          href="https://pwr.edu.pl/en/"
          className="text-decoration-none text-black"
          onMouseOver={(e) => {
            e.currentTarget.classList.add("text-decoration-underline");
          }}
          onMouseOut={(e) => {
            e.currentTarget.classList.remove("text-decoration-underline");
          }}
        >
          <i>Wroclaw University of Science and Technology</i>
        </a>
        . I am passionate about web development and I am looking for an
        internship to gain experience in this field.
      </p>
    </Row>
  );
};

export { WelcomeMessage, Bio, Trail, GettingStartedButton };
