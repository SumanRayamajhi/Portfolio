import React from "react";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="SocialMedia__Wrapper">
      <div className="SocialMedia__Button">
        <div className="icon">
          <i class="fas fa-mobile-alt"></i>
        </div>
        <span>+34631887080</span>
      </div>

      <div className="SocialMedia__Button">
        <div className="icon">
          <i class="fab fa-github"></i>
        </div>
        <span>
          <a href="https://github.com/SumanRayamajhi/"> Github Link</a>
        </span>
      </div>
      <div className="SocialMedia__Button">
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
      <div className="SocialMedia__Button">
        <div className="icon">
          <i class="fas fa-at"></i>
        </div>
        <span>sams.rayamajhi@gmail.com</span>
      </div>
    </div>
  );
}

export default SocialMedia;
