import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

import Avatar from "../../assets/avatar.png"; // your image
import GithubIcon from "../../assets/assets_contact/github.png";
import LinkedInIcon from "../../assets/assets_contact/linkedin.png";
import TwitterIcon from "../../assets/assets_contact/twitter.png";
import DiscordIcon from "../../assets/assets_contact/discord.png";
import { motion } from "motion/react"


const Home = () => {
  return (
    <section id="home" className="home" >
      {/*  Particle Background */}
      {/* <ParticlesBG /> */}

      {/* Left Side */}
      <div className="homeLeft">
        <h1>
          Hi There, <br />
          I'm <span>Yuvi</span>
        </h1>

        <h2>
          I am into{" "}
          <span className="typeText">
            <Typewriter
              words={[
                "Backend Development",
                "Frontend Development",
                "Full Stack Development",
                "React Projects",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h2>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        // onHoverStart={() => console.log('hover started!')}
        className="homeBtn" onClick={()=>{
          document.getElementById("about").scrollIntoView({behavior: "smooth"})
        }}>About Me↓</motion.button>

        <div className="socialIcons">
          <div className="footerSocials">
            <a href="https://github.com/23yuvi23" target="_blank">
              <img src={GithubIcon} alt="GitHub" />
            </a>

            <a href="https://www.linkedin.com/in/yogesh-paliwal/" target="_blank">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>

            <a href="https://x.com/23yuvi13" target="_blank">
              <img src={TwitterIcon} alt="Twitter" />
            </a>

            <a href="https://discord.gg/fsDkjBNT" target="_blank">
              <img src={DiscordIcon} alt="Discord" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="homeRight">
        <div className="circle">
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </section>
    
  );
};

export default Home;
