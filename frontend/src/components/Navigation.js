import React, { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <a href="#home">A. Mazed</a>
          </div>
          <ul className="menu" style={{ left: open ? "0" : "" }}>
            <li>
              <a onClick={() => setOpen(!open)} href="#home">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setOpen(!open)} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={() => setOpen(!open)} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={() => setOpen(!open)} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a onClick={() => setOpen(!open)} href="#contact">
                Contact
              </a>
            </li>
            <div className="cancel-btn">
              <i onClick={() => setOpen(!open)} className="fas fa-times"></i>
            </div>
          </ul>
          <div className="website-version">
            <a href="https://js.abdulmazed.com/">JS</a>
            <a href="https://abdulmazed.com/">React</a>
            <a className="active" href="https://abdulmazed.com/">
              MERN
            </a>
          </div>
        </div>
        <div className="menu-btn">
          <i
            style={{ opacity: open ? "0" : "1" }}
            onClick={() => setOpen(!open)}
            className="fas fa-bars"
          ></i>
        </div>
      </nav>
    </div>
  );
}
