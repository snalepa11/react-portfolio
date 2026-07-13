import "../App.css";
import { validateEmail } from "../utils/helpers";
import { useState } from "react";

export default function Contact() {
  const [nameErrorMessage, setNameErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

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
      setErrorMessage("Success! Your message has been sent.");
      setNameErrorMessage(true);
    }
    setTimeout(() => {
      setNameErrorMessage(false);
    }, 3000);
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">CONTACT</h1>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              value={name}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              value={email}
              type="email"
              name="email"
              placeholder="name@example.com"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              onChange={handleInputChange}
              value={message}
              name="message"
              rows={6}
              placeholder="Your message..."
            />
          </div>

          {nameErrorMessage && (
            <div style={{
              marginBottom: '20px',
              padding: '12px',
              backgroundColor: errorMessage.includes('Success') ? '#d4edda' : '#f8d7da',
              color: errorMessage.includes('Success') ? '#155724' : '#721c24',
              border: `1px solid ${errorMessage.includes('Success') ? '#c3e6cb' : '#f5c6cb'}`,
              fontSize: '14px',
              textAlign: 'left'
            }}>
              {errorMessage}
            </div>
          )}

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
