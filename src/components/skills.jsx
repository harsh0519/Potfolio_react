import React from "react";
import "./css/skill.css";
const experience = () => {
  return (
    <>
      <section id="skills">
        <h5>I think I might can help in these</h5>
        <h2>My Skills</h2>
      </section>
      <div className="skill_main">
        <div class="line-mf"></div>
        <div class="skills" data-aos="zoom-out-up" data-aos-duration="1500">
          <div class="htmlProg ProgWidth">
            <div class="p">
              <p>html</p>
              <p>95%</p>
            </div>
            <div class="pp">
              <div class="skillDiv">
                <span class="skillBar htmlBar"></span>
              </div>
            </div>
          </div>
          <div class="cssProg ProgWidth">
            <div class="p">
              <p>Css3</p>
              <p>70%</p>
            </div>
            <div class="pp">
              <div class="skillDiv">
                <span class="skillBar cssBar"></span>
              </div>
            </div>
          </div>
          <div class="jsProg ProgWidth">
            <div class="p">
              <p>JavaScript</p>
              <p>75%</p>
            </div>
            <div class="pp">
              <div class="skillDiv">
                <span class="skillBar jsBar"></span>
              </div>
            </div>
          </div>
          <div class="javaProg ProgWidth">
            <div class="p">
              <p>Java</p>
              <p>85%</p>
            </div>
            <div class="pp">
              <div class="skillDiv">
                <span class="skillBar javaBar"></span>
              </div>
            </div>
          </div>
          <div class="c/c++Prog ProgWidth">
            <div class="p">
              <p>C/C++</p>
              <p>80%</p>
            </div>
            <div class="pp">
              <div class="skillDiv">
                <span class="skillBar ccpBar"></span>
              </div>
            </div>
          </div>
          <div class="reactProg ProgWidth">
            <div class="p">
              <p>React</p>
              <p>70%</p>
            </div>
            <div class="pp">
              <div class="skillDiv">
                <span class="skillBar reactBar"></span>
              </div>
            </div>
          </div>
          <div class="nodeProg ProgWidth">
            <div class="p">
              <p>Bootstrap</p>
              <p>50%</p>
            </div>
            <div class="pp">
              <div class="skillDiv">
                <span class="skillBar bsbar"></span>
              </div>
            </div>
          </div>
          <div class="sqlProg ProgWidth">
            <div class="p">
              <p>Python ML</p>
              <p>45%</p>
            </div>
            <div class="pp">
              <div class="skillDiv">
                <span class="skillBar pyBar"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default experience;
