 import React from "react";
 import Service from "./Service";

 import './services.css';

 export default function Services() {


    return (
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I can offer</span>
        <div className="services__container container grid">
          <Service
            icon={"web-grid"}
            title={"Front-End"}
          />

          <Service
            icon={"server"}
            title={"Back-End"}
          />

          <Service
            icon={"edit"}
            title={"Copywriting"}
          />

          {/* <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">Front-End</h3>
            </div>

            <span className="services__button">
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Front-End</h3>
                <p className="serivces__modal-description">Lorem Ipsum Blablablablablalbalbalblaba</p>
                <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-server services__icon"></i>
              <h3 className="services__title">Back-End</h3>
            </div>

            <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Back-End</h3>
                <p className="serivces__modal-description">Lorem Ipsum Blablablablablalbalbalblaba</p>
                <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"></i>
              <h3 className="services__title">Copywriting</h3>
            </div>

            <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

            <div className="services__modal">
              <div className="services__modal-content">
                <i className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title">Copywriting</h3>
                <p className="serivces__modal-description">Lorem Ipsum Blablablablablalbalbalblaba</p>
                <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">I develop the user interface</p>
                </li>
                </ul>
              </div>
            </div>
          </div> */}

        </div>
      </section>
    )
 }
