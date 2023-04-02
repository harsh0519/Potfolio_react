import React from "react";
import "./css/header.css";
import CTA from "./CTA";
import Social from "./Social";
import Me from "./images/header-img.png";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I Am</h5>
        <h1>Harsh Kumar Mehta</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />
        <Social />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
