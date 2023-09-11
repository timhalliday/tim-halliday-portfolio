import React from  "react";
import "./header.css";

export default function Header() {
  const [visible, setVisible] = React.useState(false);

  function toggleVisible(){
    setVisible(prevValue => !prevValue)
    console.log(visible);
  }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Tim Halliday</a>

        <div className={visible ? "nav__menu show-menu" : "nav__menu" }>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-signal-alt-3 nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item"
            >
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase nav__icon"></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-mountains nav__icon"></i> Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-at nav__icon"></i> Get in Touch
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={toggleVisible}></i>
        </div>

        {!visible &&
          <div className="nav__toggle" onClick={toggleVisible}>
            <i className="uil uil-apps"> </i>
          </div>
        }
      </nav>
    </header>
  )
}
