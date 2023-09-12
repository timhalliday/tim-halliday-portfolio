import React from 'react';
import { JavaOriginal } from 'devicons-react';
import { SpringOriginal } from 'devicons-react';
import { RailsPlain } from 'devicons-react';
import { MysqlOriginal } from 'devicons-react';
import { AmazonwebservicesOriginal } from 'devicons-react';


export default function Backend(){
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-End</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <JavaOriginal size="25"/>
            <div>
              <h3 className="skills__name">Java 8</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <SpringOriginal size="25"/>
            <div>
              <h3 className="skills__name">Spring Boot</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <RailsPlain size="25"/>
            <div>
              <h3 className="skills__name">Ruby on Rails</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

        </div>

        <div className="skills__group">
          <div className="skills__data">
            <MysqlOriginal size="25"/>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MyBatis</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <AmazonwebservicesOriginal size="25"/>
            <div>
              <h3 className="skills__name">AWS</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
