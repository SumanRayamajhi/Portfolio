import React from "react";
import { BsAt } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPhoneVibrate } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="SocialMedia__Wrapper">
      <div className="SocialMedia__Button">
        {/* <img src="/img/iphone-icon.png" alt="img" className="about__img" /> */}

        <div className="icon">
          <i class="fas fa-mobile-alt"></i>
        </div>
        <span>+34631887080</span>
      </div>
      <div className="SocialMedia__Button">
        {/* <img src="/img/email-icon.png" alt="img" className="about__img" /> */}
        <div className="icon">
          <i class="fas fa-at"></i>
        </div>
        <span>sams.rayamajhi@gmail.com</span>
      </div>
      <div className="SocialMedia__Button">
        {/* <img src="/img/github-icon.png" alt="img" className="about__img" /> */}
        <div className="icon">
          <i class="fab fa-github"></i>
        </div>
        <span>
          <a href="https://github.com/SumanRayamajhi/"> Github Link</a>
        </span>
      </div>
      <div className="SocialMedia__Button">
        {/* <img
              src="/img/linkedin-icon.png"
              alt="img"
              className="about__img"
            /> */}
        <div className="icon">
          <i class="fab fa-linkedin-in"></i>
        </div>
        <span>
          {" "}
          <a href="https://www.linkedin.com/in/suman-rayamajhi/">
            {" "}
            Linkedin Link
          </a>
        </span>
      </div>
    </div>
  );
}

export default SocialMedia;
