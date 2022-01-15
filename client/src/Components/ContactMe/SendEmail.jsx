import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import Validation from "./Validation";

const Result = () => {
  return <p>Thankyou! Your message has been succesfully sent.</p>;
};

function SendEmail() {
  const [result, setResult] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    full_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
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
    event.target.reset();
    setResult();
  };

  return (
    <div>
      <form onSubmit={sendEmail} className="input__box">
        <input
          type="text"
          className="contact name"
          placeholder="Your Full Name"
          name="full_name"
          value={values.full_name}
          onChange={handleChange}
        />
        {errors.full_name && <p className="error">{errors.full_name}</p>}

        <input
          type="text"
          className="contact name"
          placeholder="Your Email"
          name="user_email"
          value={values.user_email}
          onChange={handleChange}
        />
        {errors.user_email && <p className="error">{errors.user_email}</p>}

        <input
          type="text"
          className="contact name"
          placeholder="Your Subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className="error">{errors.subject}</p>}

        <textarea
          type="text"
          className="contact name"
          placeholder="Message"
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button className="button contact pointer" type="submit">
          {" "}
          Submit
        </button>
        <div className="row test-light">{result ? <Result /> : null}</div>
      </form>
    </div>
  );
}

export default SendEmail;
