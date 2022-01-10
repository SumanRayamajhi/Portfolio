import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";
import Validation from "./Validation";

function SendEmail() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  function sendEmail(event) {
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
  }

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

        {/* <div class="col-md-10">
          <input
            type="text"
            className="contact name form-control"
            id="validationCustom03"
            required
            placeholder="Your Full Name"
            name="name"
            value={values.name}
          />
          <div class="invalid-feedback">Please provide your name.</div>
        </div>

        <div class="col-md-10">
          <input
            type="text"
            className="contact name form-control"
            id="validationCustom03"
            required
            placeholder="Your Email"
            name="user_email"
            value={values.user_email}
          />
          <div class="invalid-feedback">Please provide your email.</div>
        </div>
        <div class="col-md-10">
          <input
            type="text"
            className="contact name form-control"
            id="validationCustom03"
            required
            placeholder="Your Subject"
            name="subject"
          />
          <div class="invalid-feedback">Please provide your email.</div>
        </div>
        <div class="col-md-10">
          <textarea
            type="text"
            className="contact name form-control"
            id="validationCustom03 message"
            required
            placeholder="Message"
            name="message"
          ></textarea>
          <div class="invalid-feedback">Please provide some message.</div>
        </div> */}

        <button
          onClick={handleSubmit}
          className="btn contact pointer"
          type="submit"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export default SendEmail;
