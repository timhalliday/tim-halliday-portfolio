import React from 'react';
import './qualifications.css';

export default function Qualifications(){

  const [toggleState, setToggleState] = React.useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My journey to web development</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
              }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
              }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap  qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__sections ">
          <div
            className={
              toggleState === 1
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> Full-Stack Developer</h3>
                <span className="qualification__subtitle">Britcent (London)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Apr 2022 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span >
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">English Tutor/Editor</h3>
                <span className="qualification__subtitle">Britcent (London)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Jan 2020 - Dec 2021</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SEO Copywriter</h3>
                <span className="qualification__subtitle">Adapt Worldwide / Freelance</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> 2018 - 2020</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span >
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">English Tutor</h3>
                <span className="qualification__subtitle">Lycée Molière (Spain)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> 2016 - 2017</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
              ? "qualification__content qualification__content-active"
              : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full-Stack Web Development Bootcamp</h3>
                <span className="qualification__subtitle">Le Wagon London (Batch #207)</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> Jan - Mar 2022</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span >
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">MSc Language Sciences (Linguistics & Neuroscience)</h3>
                <span className="qualification__subtitle">UCL</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> 2018 - 2019</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Expert in Bilingual Education</h3>
                <span className="qualification__subtitle">International University of Catalonia</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> 2016 - 2017</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span >
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">BA Modern Languages (French & Spanish)</h3>
                <span className="qualification__subtitle">University of Exeter</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> 2012 - 2016</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
