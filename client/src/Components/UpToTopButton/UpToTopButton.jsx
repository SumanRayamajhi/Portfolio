import React from "react";
import "./UpToTopButton.css";
import { BsChevronUp } from "react-icons/bs";

function UpToTopButton() {
  return (
    <div className="up__to__top__btn">
      <a href="#" className="bottom__to__top">
        <BsChevronUp className="middle__arrow" />
      </a>
    </div>
  );
}

export default UpToTopButton;
