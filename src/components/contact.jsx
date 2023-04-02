import React from "react";
import "./css/cont.css";
import { GrMapLocation } from "react-icons/gr";
import { GiClick } from "react-icons/gi";
import {
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
const contact = () => {
  return (
    <>
      <section id="contact">
        <h5>I am Socially active</h5>
        <h2>Way to get in touch</h2>
        <footer>
          <div class="contain">
            <div class="img-card">
              <GrMapLocation class="img" />
            </div>
            <div class="text-card">
              <b>Location</b>
              <p>Uttam Nagar,New Delhi</p>
            </div>
          </div>
          <div class="contain">
            <div class="img-card">
              <AiOutlinePhone class="img" />
            </div>
            <div class="text-card">
              <a href="tel:+917417730111">7417730111</a>
            </div>
          </div>
          <div class="contain">
            <div class="img-card">
              <AiOutlineGithub class="img" />
            </div>
            <div class="text-card">
              <span className="btn">
                {" "}
                <a
                  href="https://github.com/harsh0519"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <GiClick />{" "}
                </a>
              </span>
            </div>
          </div>
          <div class="contain">
            <div class="img-card">
              <AiOutlineLinkedin class="img" />
            </div>
            <div class="text-card">
              <span className="btn">
                {" "}
                <a
                  href="https://www.linkedin.com/in/harsh-mehta-9b2b13247/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <GiClick />{" "}
                </a>
              </span>
            </div>
          </div>
          <div class="contain">
            <div class="img-card">
              <AiOutlineFacebook class="img" />
            </div>
            <div class="text-card">
              <span className="btn">
                {" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100009345289597"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <GiClick />{" "}
                </a>
              </span>
            </div>
          </div>
          <div class="contain">
            <div class="img-card">
              <AiOutlineInstagram class="img" />
            </div>
            <div class="text-card">
              <span className="btn">
                {" "}
                <a
                  href="https://www.instagram.com/harshu__20__/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <GiClick />{" "}
                </a>
              </span>
            </div>
          </div>
          <div class="contain">
            <div class="img-card">
              <AiOutlineMail class="img" />
            </div>
            <div class="text-card">
              <span className="btn">
                {" "}
                <a href="mailto:harshyatin.mr@gmail.com">
                  <GiClick />
                </a>
              </span>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default contact;
