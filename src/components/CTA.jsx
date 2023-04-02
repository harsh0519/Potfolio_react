import React from "react";
import CV from "./images/Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn" href="#contact">
        Contact us
      </a>
    </div>
  );
};

export default CTA;
