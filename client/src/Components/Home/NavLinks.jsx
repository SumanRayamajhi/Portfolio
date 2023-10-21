import React from "react";
import { Link } from "react-scroll";

function NavLinks() {
  return (
    <div>
      <ul className="navbar d__flex">
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li className="nav__items mx__15 pointer">Home</li>
        </Link>
        <Link to="About" spy={true} smooth={true} offset={-50} duration={500}>
          <li className="nav__items mx__15 pointer">About</li>
        </Link>
        <Link to="Project" spy={true} smooth={true} offset={-50} duration={800}>
          <li className="nav__items mx__15 pointer">Project</li>
        </Link>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <li className="nav__items mx__15 pointer">Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default NavLinks;
