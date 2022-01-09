import React from "react";
import "./ContactMe.css";
import BackToTopButton from "../UpToTopButton/UpToTopButton";

function ContactMe() {
  window.addEventListener("scroll", function () {
    const BackToTopButton = document.querySelector("a.bottom__to__top");
    BackToTopButton.classList.toggle("active", this.window.scrollY > 0);
  });

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Contact Me</h1>
              <p className="hire__text white"> Contact me via phone:</p>
              <p className="hire__text white">
                {" "}
                <strong>+34 631 887 080</strong> or email:
                <strong> sams.rayamajhi@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="contact name"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="contact name"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="message"
                className="contact name"
                placeholder="Message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
                {" "}
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}

export default ContactMe;
