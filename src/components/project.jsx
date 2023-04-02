import React from "react";
import "./css/project.css";
import P1 from "../components/images/project-lane.jpg";
import P2 from "../components/images/project-music.jpg";
import P3 from "../components/images/project-news.jpg";
import P4 from "../components/images/project-society.png";
import P5 from "../components/images/project-text.png";

const project = () => {
  return (
    <>
      <section id="project">
        <h5>Some basic Build till Now</h5>
        <h2>Projects</h2>
      </section>
      <div className="project_main">
        <div class="container">
          <div class="card">
            <div class="imgBx">
              <img src={P1} />
            </div>
            <div class="contentBx">
              <h2>Lane Detector By Python Open CV.</h2>
              <a
                href="https://github.com/harsh0519/Road-Lane-Detection"
                className="btn btn-primary"
                target={"_blank"}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card">
            <div class="imgBx">
              <img src={P2} />
            </div>
            <div class="contentBx">
              <h2>Music Website of Specific Singer</h2>
              <a
                href="https://github.com/harsh0519/Music-Page-"
                className="btn btn-primary"
                target={"_blank"}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card">
            <div class="imgBx">
              <img src={P3} />
            </div>
            <div class="contentBx">
              <h2>News Hunter by React </h2>
              <a
                href="https://github.com/harsh0519/News-Hunter"
                className="btn btn-primary"
                target={"_blank"}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card">
            <div class="imgBx">
              <img src={P4} />
            </div>
            <div class="contentBx">
              <h2>College Website (Currently Live)</h2>
              <a
                href="https://www.iitmjanakpuri-aiec.com/"
                className="btn btn-primary"
                target={"_blank"}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card">
            <div class="imgBx">
              <img src={P5} />
            </div>
            <div class="contentBx">
              <h2>Text Editor by React</h2>
              <a
                href="https://github.com/harsh0519/Text-Switcher"
                className="btn btn-primary"
                target={"_blank"}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
