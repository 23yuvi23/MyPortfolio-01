import React from "react";
import "./Intro.css";

import ProfileImg from "../../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="aboutSection">
      
      {/* Heading */}
      <h2 className="aboutTitle">
        👤 About <span>Me</span>
      </h2>

      {/* Main Content */}
      <div className="aboutContainer">

        {/* Left Image */}
        <div className="aboutImgBox">
          <img src={ProfileImg} alt="profile" className="aboutImg" />
        </div>

        {/* Right Text */}
        <div className="aboutContent">
          <h3>Full Stack Developer</h3>

          <p>
            I am a Full Stack Developer passionate about building scalable,
            secure and modern web applications using MERN Stack.
            <br /><br />
            I enjoy learning new technologies and improving my coding skills
            every day.
          </p>

          <p>
            <b>Email:</b> yogeshpaliwal9493@gmail.com <br />
            <b>Place:</b> Uttarakhand, India
          </p>

          <a href="/resume.pdf" target="_blank" className="resumeBtn">
            Resume ➜
          </a>
        </div>
      </div>

    </section>
  );
};

export default About;
