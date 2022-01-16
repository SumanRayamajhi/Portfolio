import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import Validation from "./Validation";
import Alert from "react-bootstrap/Alert";

function SendEmail() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState({
    full_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  });

  const sendEmail = (event) => {
    event.preventDefault();
    setFormErrors(Validation(formValues));
    setIsSubmit(true);
    emailjs
      .sendForm(
        "service_w5v0kmw",
        "template_7y0h275",
        event.target,
        "user_nJlYeYROR9b3OGyjqvKva"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues({
        full_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={sendEmail} className="input__box">
        <input
          type="text"
          className="contact name"
          placeholder="Your Full Name"
          name="full_name"
          value={formValues.full_name}
          onChange={handleChange}
        />

        <p className="error">{formErrors.full_name}</p>

        <input
          type="text"
          className="contact name"
          placeholder="Your Email"
          name="user_email"
          value={formValues.user_email}
          onChange={handleChange}
        />

        <p className="error">{formErrors.user_email}</p>

        <input
          type="text"
          className="contact name"
          placeholder="Your Subject"
          name="subject"
          value={formValues.subject}
          onChange={handleChange}
        />
        <p className="error">{formErrors.subject}</p>

        <textarea
          type="text"
          className="contact name"
          placeholder="Message"
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
        ></textarea>
        <p className="error">{formErrors.message}</p>

        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="text">
            Thank you! <br></br>Message has been sent!
          </div>
        ) : null}

        <button className="button contact pointer" type="submit">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export default SendEmail;
