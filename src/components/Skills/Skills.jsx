import React, { useRef } from "react";
import "./Skills.css";

import Tilt from "react-parallax-tilt";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ Icons
import react from "../../assets/assets_Skills/react.png";
import Css from "../../assets/assets_Skills/css.png";
import C from "../../assets/assets_Skills/c++.png";
import Html from "../../assets/assets_Skills/html.png";
import Java from "../../assets/assets_Skills/java.png";
import Js from "../../assets/assets_Skills/js.png";
import Linux from "../../assets/assets_Skills/linux.png";
import Mongo from "../../assets/assets_Skills/mongodb.png";
import Mysql from "../../assets/assets_Skills/mysql.png";
import Netlify from "../../assets/assets_Skills/netlify.png";
import Node from "../../assets/assets_Skills/node-js.png";
import Tailwind from "../../assets/assets_Skills/tailwind.png";
import Github from "../../assets/assets_Skills/github.png";

const skills = [
  { name: "ReactJS", icon: react },
  { name: "CSS3", icon: Css },
  { name: "C++", icon: C },
  { name: "HTML5", icon: Html },
  { name: "Java", icon: Java },
  { name: "JavaScript", icon: Js },
  { name: "LinuxShell", icon: Linux },
  { name: "MongoDB", icon: Mongo },
  { name: "MySQL", icon: Mysql },
  { name: "Netlify", icon: Netlify },
  { name: "NodeJS", icon: Node },
  { name: "TailwindCSS", icon: Tailwind },
  { name: "GitHub", icon: Github },
];

const Skills = () => {
  const sectionRef = useRef(null);

useGSAP(
  () => {
    gsap.from(".skillItem", {
      x: 500,
      opacity: 0,
      scale: 0.5,
      rotate: 30,
      duration: 2,
      ease: "power4.out",
      // stagger: 0.15, // ✅ ek-ek karke

      scrollTrigger: {
        trigger: sectionRef.current, // ✅ Skills section itself
        start: "top 50%",
        end: "top 30%",

        scrub: false, // ✅ entry feel
        toggleActions: "restart none restart none", 
        // ✅ repeat on re-enter but never disappear
      },
    });
  },
  { scope: sectionRef }
);


  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <h2 className="skills-title">
        💻 Skills <span>&</span> Abilities
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.25}
            scale={1.05}
            transitionSpeed={1200}
          >
            <div className="skill-card skillItem">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
