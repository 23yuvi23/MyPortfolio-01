import "./Skills.css";

import react from "../../assets/assets_Skills/react.png"
import Css from "../../assets/assets_Skills/css.png"
import C from "../../assets/assets_Skills/c++.png"
import Html from "../../assets/assets_Skills/html.png"
import Java from "../../assets/assets_Skills/java.png"
import Js from "../../assets/assets_Skills/js.png"
import Linux from "../../assets/assets_Skills/linux.png"
import Mongo from "../../assets/assets_Skills/mongodb.png"
import Mysql from "../../assets/assets_Skills/mysql.png"
import Netlify from "../../assets/assets_Skills/netlify.png"
import Node from "../../assets/assets_Skills/node-js.png"
import Tailwind from "../../assets/assets_Skills/tailwind.png"
import Github from "../../assets/assets_Skills/github.png"

const skills = [
  { name: "ReactJS", icon: <img src={react} alt="java"/> },
  { name: "CSS3", icon: <img src={Css} alt="java"/>  },
  { name: "C++", icon: <img src={C} alt="java"/>  },
  { name: "HTML5", icon: <img src={Html} alt="java"/>  },
  { name: "Java", icon: <img src={Java} alt="java"/>  },
  { name: "JavaScript", icon: <img src={Js} alt="java"/>  },
  { name: "LinuxShell", icon: <img src={Linux} alt="java"/>  },
  { name: "MongoDB", icon: <img src={Mongo} alt="java"/>  },
  { name: "MySQL", icon: <img src={Mysql} alt="java"/>  },
  { name: "Netlify", icon: <img src={Netlify} alt="java"/>  },
  { name: "NodeJS", icon: <img src={Node} alt="java"/>  },
  { name: "TailwindCSS", icon: <img src={Tailwind} alt="java"/>  },
  { name: "GitHub", icon: <img src={Github} alt="java"/>  },
];



const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        💻 Skills <span>&</span> Abilities
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
