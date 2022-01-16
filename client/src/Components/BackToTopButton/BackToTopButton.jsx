import React from "react";
import "./BackToTopButton.css";
import { BsChevronUp } from "react-icons/bs";

function BackToTopButton() {
  return (
    <div className="up__to__top__btn">
      <a href="#" className="bottom__to__top">
        <BsChevronUp className="middle__arrow" />
      </a>
    </div>
  );
}

export default BackToTopButton;
