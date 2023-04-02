import React from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFundProjectionScreen,
  AiOutlinePhone,
} from "react-icons/ai";
import "./css/nav.css";
const nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#skills">
        <AiOutlineBook />
      </a>
      <a href="#project">
        <AiOutlineFundProjectionScreen />
      </a>
      <a href="#contact">
        <AiOutlinePhone />
      </a>
    </nav>
  );
};

export default nav;
