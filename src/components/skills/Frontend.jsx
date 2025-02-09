import React from 'react';
import { Html5Original } from 'devicons-react';
import { Css3Original } from 'devicons-react';
import { FigmaOriginal } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';
import { TypescriptOriginal } from 'devicons-react';
import { TailwindcssOriginal } from 'devicons-react';

export default function Frontend(){
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-End</h3>

      <div className="skills__box">

        <div className="skills__group">
          <div className="skills__data">
            <Html5Original size="20"/>
            <div>
              <h3 className="skills__name">HTML5</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <Css3Original size="20"/>
            <div>
              <h3 className="skills__name">CSS3</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <TypescriptOriginal size="20"/>
            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

        </div>

        <div className="skills__group">

          <div className="skills__data">
            <ReactOriginal  size="25"/>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <TailwindcssOriginal  size="25"/>
            <div>
              <h3 className="skills__name">Tailwind</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <FigmaOriginal size="25"/>
            <div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
