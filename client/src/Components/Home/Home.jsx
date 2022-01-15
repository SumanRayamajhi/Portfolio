import React, { useState } from "react";
import "./Home.css";
import { BsList } from "react-icons/bs";

function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 0);
  });

  const [showMenue, setShowMenue] = useState(true);

  const onClick = () => {
    setShowMenue(!showMenue);
  };

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          {/* <div className="logo">
            <h3>Logo</h3>
          </div> */}
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Project">
                <li className="nav__items mx__15">Project</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>

          {/* Toogle menue */}
          <div className="toggle__menu">
            <BsList className="white toogle__pointer" onClick={onClick} />
          </div>

          {showMenue ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Project">Project</a>
                </li>
                <li className="sideNavbar">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="container">
          <div className="row">
            <div className="home__content">
              <div className="home__meta">
                {/* <h1 className="home__text pz__10">Welcome to my world</h1> */}
                <h2 className="home__text pz__10">
                  Hello! I am <br></br> Suman Rayamajhi
                </h2>
                <h3 className="home__text sweet pz__10">
                  Full Stack Web Developer{" "}
                </h3>
              </div>
            </div>
            <div className="col__2">
              <img src="/img/home.jpg" alt="img" className="about__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
