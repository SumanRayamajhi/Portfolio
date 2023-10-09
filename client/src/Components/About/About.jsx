import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import { DiJavascript, DiPostgresql } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import "./About.css";

function About() {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src="/img/suman-3-1.png" alt="img" className="about__img" />
          </div>
          <div className="col__2 about__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                An energetic and ambitious, web-developer with proven ability of
                a strong ethics and passion for web design, is excited to use
                talent and grow skills through hard work and motivational
                aspiration in new dynamic and progressive companies.
              </p>
              <div className="About__skills">
                <h2 className="About__skills__title">Skills</h2>
                <div className="About__skills__lists">
                  <div>
                    <div className="About__skills__list">
                      <FaHtml5 /> <span> HTML</span>
                    </div>
                    <div className="About__skills__list">
                      <FaCss3Alt /> <span> CSS</span>
                    </div>
                    <div className="About__skills__list">
                      <DiJavascript /> <span> Javascript</span>
                    </div>
                    <div className="About__skills__list">
                      <FaReact /> <span> React</span>
                    </div>
                    <div className="About__skills__list">
                      <img
                        className="next-logo"
                        src="nextjs.svg"
                        alt="nextjs logo"
                      />
                      <span> Next.js</span>
                    </div>
                    <div className="About__skills__list">
                      <FaNodeJs />
                      <span> Node</span>
                    </div>
                  </div>
                  <div>
                    <div className="About__skills__list">
                      <SiExpress />
                      <span> Express</span>
                    </div>
                    <div className="About__skills__list">
                      <DiPostgresql />
                      <span> PostgreSQL</span>
                    </div>
                    <div className="About__skills__list">
                      <SiMysql />
                      <span> MySQL</span>
                    </div>
                    <div className="About__skills__list">
                      <FaBootstrap />
                      <span> Bootstrap</span>
                    </div>
                    <div className="About__skills__list">
                      <SiTailwindcss />
                      <span> Tailwind CSS</span>
                    </div>
                    <div className="About__skills__list">
                      <FiFigma />
                      <span> Figma</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__button d__flex align__items__center">
              <a
                href="SumanRayamajhi_CV.pdf"
                download={"SumanRayamajhi_CV.pdf"}
              >
                <button className="about btn pointer">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
