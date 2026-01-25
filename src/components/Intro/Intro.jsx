import React, { useRef } from "react";
import "./Intro.css";

import ProfileImg from "../../assets/profile.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = () => {
  const sectionRef = useRef(null)
  
  useGSAP(() => {
  gsap.from(".aboutContent", {
    x: 300,
    opacity: 0,
    scale: 0.6,
    rotate: 15,
    duration: 1.5,
    delay: 0.2,
    ease: "power4.out",

     scrollTrigger: {
      trigger: ".aboutSection .aboutImgBox",   // ✅ section trigger
      start: "top 50%",           // ✅ only when section reaches 70% viewport
      end: "top 30%",
      // scrub: true,     //If you want animation scroll ke साथ move kare:
      toggleActions: "play reverse play reverse", // ✅ play repeadly
    },

    scrollTrigger: {
      trigger: ".aboutSection",
      start: "top 0%",
      toggleActions: "play reverse play reverse",
    },
  });

}, []);


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
