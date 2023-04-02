import React from "react";
import "./css/about.css";
import me from "./images/me.jpg";
import { FiAward } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>Student</small>
            </article>
            <article className="about_card">
              <AiOutlineFundProjectionScreen className="about_icon" />
              <h5>Project</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
            {" "}
            Ambitious and self-esteemed engineering fresher who is capable of
            applying technical skills for the improvement of the company.
            Improved my web development skills with the help of graduation in
            Computer Engineering and looking forward to work in a competitive
            environment that can boost my overall learning.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
