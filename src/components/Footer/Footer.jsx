import "./Footer.css";
import GithubIcon from "../../assets/assets_contact/github.png";
import LinkedInIcon from "../../assets/assets_contact/linkedin.png";
import TwitterIcon from "../../assets/assets_contact/twitter.png";
import DiscordIcon from "../../assets/assets_contact/discord.png";
import Call from "../../assets/assets_Footer/call.png";
import email from "../../assets/assets_Footer/email.png";
import location from "../../assets/assets_Footer/location.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* ✅ Left Section */}
        <div className="footerLeft">
          <h2 className="footerTitle">Yuvi's Portfolio</h2>
          <p>
            Thank you for visiting my personal portfolio website.
            <br />
            Connect with me over socials.
          </p>
          <p className="footerTagline">
            Keep Rising :) Connect with me anytime!
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div className="footerLinks">
          <h2 className="footerTitle">Quick Links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#intro">Intro</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
          </ul>
        </div>

        {/* ✅ Contact + Socials */}
        <div className="footerRight">
          <h2 className="footerTitle">Contact Info</h2>

          <p className="contactLine">
            <img src={Call} alt="phone" className="contactIcon" />
            +91 7906356772
          </p>

          <p className="contactLine">
            <img src={email} alt="email" className="contactIcon" />
            yogeshpaliwal9493@gmail.com
          </p>

          <p className="contactLine">
            <img src={location} alt="location" className="contactIcon" />
            Uttarakhand, India
          </p>

          <div className="footerSocials">
            <a href="https://github.com/23yuvi23" target="_blank">
              <img src={GithubIcon} alt="GitHub" />
            </a>

            <a href="https://linkedin.com" target="_blank">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>

            <a href="https://twitter.com" target="_blank">
              <img src={TwitterIcon} alt="Twitter" />
            </a>

            <a href="https://discord.com" target="_blank">
              <img src={DiscordIcon} alt="Discord" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
