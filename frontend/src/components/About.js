import React from "react";

export default function About() {
  return (
    <div className="content">
      <div className="title">
        <span>About Me</span>
      </div>
      <div className="about-details">
        <div className="left">
          <img src="images/about.jpg" alt="About Me" />
        </div>
        <div className="right">
          <div className="topic">Full Stack Web Developer is my passion</div>
          <p>
            Assalamu Alaikum,
            <br />
            My name is Md. Mazed Hossain. I am a student of Computer Science and
            Engineering at Southeast University. I am completing my BSc in CSE
            by completing my Internship. I always try to be positive about every
            aspect of life. I like to be very simple in my life.
            <br />
            <br />
            The world is becoming more easy day by day with the help of
            technology. Web design and development is a very important part of
            the technology that makes human life easier. I want to be a
            full-stack web developer. For this, I am learning and implementing
            the technologies to become a full-stack web developer. This is my
            dream and I will try my best to implement my dream.
            <br />
            <br />
            To see my works, please keep your eyes on my simple tasks. Do not
            expect too much, and keep your sense of humor.
          </p>
          <div className="button">
            <a href="https://js.abdulmazed.com/cv.pdf">
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
