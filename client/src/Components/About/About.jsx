import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src="/img/suman-3-1.png" alt="img" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                An energetic and ambitious, new web-developer with proven
                ability of a strong ethics and passion for web design, is
                excited to use talent and grow skills through hard work and
                motivational aspiration in new dynamic and progressive
                companies.
              </p>
              <div className="About__skills">
                <h2 className="About__skills__title">Skills</h2>
                <ul className="About__skills__list">
                  <li>HTML and CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>SQL</li>
                  <li>Bootstrap</li>
                  <li>Figma</li>
                </ul>

                <div className="about__button d__flex align__items__center">
                  <a
                    href="Suman-Rayamajhi-CV.pdf"
                    download={"Suman-Rayamajhi-CV.pdf"}
                  >
                    {" "}
                    <button className="about btn pointer">Download CV</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
