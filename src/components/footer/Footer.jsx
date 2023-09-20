import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/timothyhalliday" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>

          <a href="https://github.com/timhalliday" className="footer__social-link" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Tim Halliday. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
