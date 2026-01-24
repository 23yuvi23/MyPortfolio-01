import "./Contact.css"
import GithubIcon from "../../assets/assets_contact/github.png"
import LinkedInIcon from "../../assets/assets_contact/linkedin.png"
import TwitterIcon from "../../assets/assets_contact/twitter.png"
import DiscordIcon from "../../assets/assets_contact/discord.png"

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form action="" className="contactForm">
          <input type="text" className="name" placeholder="Your Name"/>
          <input type="email" className="email" placeholder="Your Email"/>
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="send" className="submitBtn">Submit</button>
          <div className="links">
            <img src={GithubIcon} alt="GithubIcon" className="link" />
            <img src={LinkedInIcon} alt="LinkedInIcon" className="link" />
            <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            <img src={DiscordIcon} alt="DiscordIcon" className="link" />
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact