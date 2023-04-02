import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Social = () => {
  return (
    <div className="header_social">
      <a
        href="https://www.linkedin.com/in/harsh-mehta-9b2b13247/"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin />
      </a>
      <a href="https://github.com/harsh0519" target="_blank" rel="noreferrer">
        <AiOutlineGithub />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100009345289597"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default Social;
