import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">Footer
      <div className="footer__container container">
        <h1 className="footer_title">Tim Halliday</h1>
      </div>

      <ul className="footer__list">
        <li>
          <a href="#home" className="footer__link">Home</a>
        </li>
        <li>
          <a href="#skills" className="footer__link">Skills</a>
        </li>
        <li>
          <a href="#services" className="footer__link">Services</a>
        </li>
        <li>
          <a href="#projects" className="footer__link">Projects</a>
        </li>
        <li>
          <a href="#contact" className="footer__link">Contact</a>
        </li>
      </ul>

      <div className="footer__social">
        <a href="https://www.linkedin.com/in/timothyhalliday" className="home__social-icon" target="_blank" rel="noreferrer">
          <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/timhalliday" className="home__social-icon" target="_blank" rel="noreferrer">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    </footer>
  )
}
