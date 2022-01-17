import React from "react";
import { motion } from "framer-motion";

function NavLinksMobile(props) {
  const animationFrom = { opacity: 0, y: -40 };
  const animationTo = { opacity: 1, y: 0 };
  return (
    <div>
      <div className="sideNavbar">
        <ul className="sidebar d__flex">
          <motion.li
            initial={animationFrom}
            animate={animationTo}
            transition={{ delay: 0.05 }}
            className="sideNavbar"
            onClick={() => props.isMobile && props.closeMobileMenue()}
          >
            <a href="#Home">Home</a>
          </motion.li>
          <motion.li
            initial={animationFrom}
            animate={animationTo}
            transition={{ delay: 0.1 }}
            className="sideNavbar"
            onClick={() => props.isMobile && props.closeMobileMenue()}
          >
            <a href="#About">About</a>
          </motion.li>
          <motion.li
            initial={animationFrom}
            animate={animationTo}
            transition={{ delay: 0.2 }}
            className="sideNavbar"
            onClick={() => props.isMobile && props.closeMobileMenue()}
          >
            <a href="#Project">Project</a>
          </motion.li>
          <motion.li
            initial={animationFrom}
            animate={animationTo}
            transition={{ delay: 0.4 }}
            className="sideNavbar"
            onClick={() => props.isMobile && props.closeMobileMenue()}
          >
            <a href="#Contact">Contact</a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
}

export default NavLinksMobile;
