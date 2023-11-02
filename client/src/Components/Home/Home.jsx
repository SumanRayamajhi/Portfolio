import React from "react";
import "./Home.css";
import HomeImage from "../../assets/herobg.png";
import { Link } from "react-scroll";
import { FaAngleDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home" id="Home">
      <div className="">
        <div className="row">
          <div className="home__img-container ">
            <img src={HomeImage} alt="img" className="home__img " />
          </div>
          <div className="home__content">
            <div className="home__content-box">
              <div className="home__content-side-line">
                <div className="home__content-circle" />
                <div className="home__content-line" />
              </div>
              <div className="home__meta ">
                <h2 className="home__text pz__10">
                  Hello, I'm <span>Suman Rayamajhi</span>
                </h2>
                <h3 className="home__text sweet pz__10">
                  Full Stack Web Developer{" "}
                </h3>

                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={40}
                  duration={500}
                  className="button"
                >
                  More About Me
                  <span className="button__icon">
                    <FaAngleDown />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/*  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 0);
  }); */

/*  const [showMenue, setShowMenue] = useState(false);

  const closeMobileMenu = () => {
    setShowMenue(false);
  };
  const onClick = () => {
    setShowMenue(!showMenue);
  }; */

/* < className="home" id="Home">
      <div className=""> */
/*  <div className="header d__flex align__items__center pxy__30">
          <div className="navigation pxy__30">
            <NavLinks />
          </div>

         
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
        </div> */

export default Home;
