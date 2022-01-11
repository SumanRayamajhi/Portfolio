import React from "react";
import "./ContactMe.css";
import BackToTopButton from "../UpToTopButton/UpToTopButton";
import SendEmail from "./SendEmail";
import SocialMedia from "./SocialMedia";
import Card from "react-bootstrap/Card";

function ContactMe() {
  window.addEventListener("scroll", function () {
    const BackToTopButton = document.querySelector("a.bottom__to__top");
    BackToTopButton.classList.toggle("active", this.window.scrollY > 0);
  });

  return (
    // <div className="about component__space" id="About">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col__2">
    //         <h1 className="about__heading">About Me</h1>
    //         <div className="about__meta">
    //           <p className="about__text p__color"></p>
    //           <div className="About__skills">
    //             <SendEmail />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col__2">
    //         <SocialMedia />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="contact__box">
          <div className="contact__meta">
            <h1 className="hire__text">Contact Me</h1>
          </div>

          <div className="ContactMe_content">
            <SendEmail className="ContactMe_content_email" />
            <SocialMedia className="ContactMe_content_icons" />
          </div>
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
}

export default ContactMe;
