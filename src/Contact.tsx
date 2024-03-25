import { Container, Form } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import "../src/styles/App.css";
import styles from "../src/styles/ContactButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import OuterViewLinks from "./components/OuterViewLinks";

export default function Contact() {
  const styleForTextFields = () => {
    return {
      backgroundColor: "black",
      borderColor: "gray",
      color: "white",
    };
  };
  return (
    <div className="App">
      <CustomNavbar View={OuterViewLinks} />
      <Container className="py-5 mt-5 text-white" style={{ maxWidth: "500px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={styleForTextFields()}
              required={true}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control
              placeholder="Enter message"
              as="textarea"
              rows={3}
              style={styleForTextFields()}
              required={true}
            />
          </Form.Group>
          <div className="text-center py-4">
            <button className={styles.arrowButton} role="sumbit">
              <span className="p-2">Send</span>{" "}
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}
