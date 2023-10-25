import React, { useRef } from "react";
import { Link } from "react-scroll";

function NavLinks() {
  const home = useRef();
  const about = useRef();
  const project = useRef();
  const contact = useRef();

  const scrollHandler = (scrollRef) => {
    window.scrollTo({
      top: scrollRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <ul className="navbar d__flex">
        <a href="#Home">
          <li
            className="nav__items mx__15 pointer"
            onClick={() => scrollHandler(home)}
          >
            Home
          </li>
        </a>
        <a href="#About">
          <li
            className="nav__items mx__15 pointer"
            onClick={() => scrollHandler(about)}
          >
            About
          </li>
        </a>
        <a href="#Project">
          <li
            className="nav__items mx__15 pointer"
            onClick={() => scrollHandler(project)}
          >
            Project
          </li>
        </a>
        <a href="#Contact">
          <li
            className="nav__items mx__15 pointer"
            onClick={() => scrollHandler(contact)}
          >
            Contact
          </li>
        </a>
        {/*  <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <li className="nav__items mx__15 pointer">Home</li>
        </Link>
        <Link to="About" spy={true} smooth={true} offset={-130} duration={500}>
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
        </Link> */}
      </ul>
    </div>
  );
}

export default NavLinks;
