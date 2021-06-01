import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_w63po17",
        e.target,
        "user_qIc1wjbYCKYbYzW2eewcH"
      )
      .then(
        () => {
          alert("Your mail has sent successfully");
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="content">
        <div className="title">
          <span>Contact Me</span>
        </div>
        <p>
          If you need or you have to inform me anything, please feel free to
          contact me. You can contact me by any of the contactable mediums you
          prefer from below.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+8801919059250</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="far fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>contact@abdulmazed.com</p>
            </div>
          </div>
          <div className="box" id="box-media">
            <div className="media-icons">
              <a
                href="https://github.com/bmmazed"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/github.png" alt="Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/bmdmazed/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a
                href="https://codeforces.com/profile/bmdmazed"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/codeforces.png" alt="Codeforces" />
              </a>
              <a
                href="https://www.hackerrank.com/bmmazed"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/hackerrank.png" alt="HackerRank" />
              </a>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={sendEmail}>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input
                className="name"
                type="text"
                name="name"
                required="required"
              />
              <span>Your Name</span>
            </div>
            <div className="inputBox">
              <input
                className="email"
                type="email"
                name="email"
                required="required"
              />
              <span>Your Email</span>
            </div>
            <div className="inputBox">
              <input
                className="subject"
                type="text"
                name="subject"
                required="required"
              />
              <span>Subject</span>
            </div>
            <div className="inputBox">
              <textarea
                className="message"
                name="message"
                required="required"
              ></textarea>
              <span>Your Message</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
