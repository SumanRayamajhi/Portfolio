import React, { useState } from "react";
import "./Home.css";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import HomeImage from "../../assets/home.jpg";

function Home() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 0);
  });

  const [showMenue, setShowMenue] = useState(false);

  const closeMobileMenu = () => {
    setShowMenue(false);
  };
  const onClick = () => {
    setShowMenue(!showMenue);
  };

  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <NavLinks />
          </div>

          {/* Toogle menue */}
          <div className="toggle__menu">
            {showMenue ? (
              <CgClose className="white toogle__pointer" onClick={onClick} />
            ) : (
              <CgMenu className="white toogle__pointer" onClick={onClick} />
            )}
          </div>

          {showMenue ? (
            <NavLinksMobile
              isMobile={true}
              closeMobileMenue={closeMobileMenu}
            />
          ) : null}
        </div>
        <div className="container">
          <div className="row">
            <div className="home__content">
              <div className="home__meta">
                <h2 className="home__text pz__10">
                  Hello! I am <br></br> Suman Rayamajhi
                </h2>
                <h3 className="home__text sweet pz__10">
                  Full Stack Web Developer{" "}
                </h3>
              </div>
            </div>
            <div className="col__2 ">
              <img src={HomeImage} alt="img" className="about__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
