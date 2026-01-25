import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import call from "../../assets/assets_Footer/email.png"

// to send mail this logic will work

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

      const name = form.current.name.value.trim();
  const email = form.current.email.value.trim();
  const message = form.current.message.value.trim();

   if (!name || !email || !message) {
    alert("Please fill all fields before sending ❌");
    return;
  }

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Email Sent !! ✅✅✅")
          e.target.reset();
        })
        .catch((error) => {
          alert("Failed to send email ❌");
           console.log(error);
        });
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Get In <span className="touch"> Touch 
          </span> <img className="callIcon" src={call} alt="call" /></h1>
        

        {/* //below line updated to semd mail */}
        <form
          action=""
          className="contactForm"
          ref={form}
          onSubmit={(e) => {
            e.preventDefault();
            sendEmail(e);
          }}
        >
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          
        </form>
      </div>
    </section>
  );
};

export default Contact;
