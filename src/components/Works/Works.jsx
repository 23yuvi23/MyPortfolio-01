import React, { useRef } from "react";
import "./Works.css";

import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import Portfolio7 from "../../assets/portfolio-7.png";
import Portfolio8 from "../../assets/portfolio-8.png";

// ✅ GSAP Imports
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const sectionRef = useRef(null);

  // ✅ Scroll Animation for Portfolio Images
useGSAP(
    () => {
      gsap.from(".worksImg", {
       x: 500,
      opacity: 0,
      scale: 0.5,
      rotate: 30,
      duration: 2,
      ease: "power4.out",
      // stagger: 0.15, // ✅ ek-ek karke

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "top 30%",
          scrub: false, // ✅ entry feel

          toggleActions: "restart none restart none", 
          // ✅ repeat on scroll enter, never disappear
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="works" ref={sectionRef}>
      <h2 className="worksTitle">My Portfolio</h2>

      <span className="worksDesc">
        Passionate Full Stack Developer with hands-on experience in building
        scalable, secure, and high-performance web applications. Proficient in
        frontend and backend development using modern technologies and currently
        exploring DevOps and Cloud Infrastructure to streamline deployment and
        automation.
      </span>

      <div className="worksImgs">
        <a href="https://23math23.vercel.app/" target="_blank" rel="noreferrer">
          <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
        </a>

        <a href="https://23todo123.vercel.app/" target="_blank" rel="noreferrer">
          <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
        </a>

        <a href="https://23todo23.vercel.app/" target="_blank" rel="noreferrer">
          <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        </a>

        <a href="https://23gemini23.vercel.app/" target="_blank" rel="noreferrer">
          <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
        </a>

        <a
          href="https://23backgroundchanger23.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Portfolio7} alt="Portfolio7" className="worksImg" />
        </a>

        <a
          href="https://23passwordgenerator23.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
        </a>

        <a href="https://project8-link.com" target="_blank" rel="noreferrer">
          <img src={Portfolio8} alt="Portfolio8" className="worksImg" />
        </a>

        <a href="https://23weather23.vercel.app/" target="_blank" rel="noreferrer">
          <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
        </a>
      </div>

      <button className="workBtn">
        Major Project Under Development Coming Soon...❤️
      </button>
    </section>
  );
};

export default Works;
