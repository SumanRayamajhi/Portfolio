import React from "react";
import "./ContactMe.css";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import SendEmail from "./SendEmail";
import SocialMedia from "./SocialMedia";

function ContactMe() {
  window.addEventListener("scroll", function () {
    const BackToTopButton = document.querySelector("a.bottom__to__top");
    BackToTopButton.classList.toggle("active", this.window.scrollY > 0);
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="contact__box">
          <div className="contact__meta">
            <h1 className="hire__text">Contact Me</h1>
          </div>
          <div className="contactMe__email_icons">
            <SendEmail />
            <SocialMedia />
          </div>
        </div>
      </div>
      <BackToTopButton onClick={scrollToTop} />
    </div>
  );
}

export default ContactMe;
