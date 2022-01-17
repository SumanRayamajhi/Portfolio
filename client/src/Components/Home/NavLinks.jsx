import React from "react";

function NavLinks() {
  return (
    <div>
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
  );
}

export default NavLinks;
