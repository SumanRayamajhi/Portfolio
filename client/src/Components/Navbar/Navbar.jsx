import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import NavLinks from "./NavLinks";
import { CgClose, CgMenu } from "react-icons/cg";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".navbar");
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
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="Home" spy={true} smooth={true} offset={-100} duration={500}>
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <NavLinks />
        {/*  <div className="toggle__menu">
          {showMenue ? (
            <CgClose className="white toogle__pointer" onClick={onClick} />
          ) : (
            <CgMenu className="white toogle__pointer" onClick={onClick} />
          )}
        </div> */}

        {/*  {showMenue ? (
          <NavLinksMobile isMobile={true} closeMobileMenue={closeMobileMenu} />
        ) : null} */}
      </div>
    </nav>
  );
};

export default Navbar;
