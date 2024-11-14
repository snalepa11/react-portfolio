import "../App.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { validateEmail } from "../utils/helpers";
import { useState } from "react";

export default function Contact() {
  const [nameErrorMessage, setNameErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(message);
    console.log(email);
    if (!validateEmail(email) || email === "") {
      setErrorMessage("Please enter a valid email.");
      setNameErrorMessage(true);
    } else if (name === "") {
      setErrorMessage("Please fill out the full form.");
      setNameErrorMessage(true);
    } else if (message === "") {
      setErrorMessage("Please fill out the full form.");
      setNameErrorMessage(true);
    } else {
      setErrorMessage("Success!");
      setNameErrorMessage(true);
    }
    // if (email !== "") {
    //   setErrorMessage('Success!');
    //   setNameErrorMessage(true);
    // }
    setTimeout(() => {
      setNameErrorMessage(false);
    }, 3000);
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <div class="para">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={handleInputChange}
              value={name}
              type="text"
              name="name"
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              onChange={handleInputChange}
              value={email}
              type="email"
              name="email"
              placeholder="name@example.com"
            />
            <Form.Label></Form.Label>
          </Form.Group>

          <Form.Group>
            <Form.Control
              as="textarea"
              onChange={handleInputChange}
              value={message}
              name="message"
              rows={3}
            />
            <Form.Label></Form.Label>
          </Form.Group>
          <Button variant="outline-secondary" type="submit" onClick={onSubmit}>
            Send
          </Button>
          <Form.Group>
            {nameErrorMessage ? (
              <Form.Text className="text-muted">{errorMessage}</Form.Text>
            ) : (
              ""
            )}
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
