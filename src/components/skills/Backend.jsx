import React from 'react';
import { JavaOriginal } from 'devicons-react';
import { SpringOriginal } from 'devicons-react';
import { RailsPlain } from 'devicons-react';
import { MysqlOriginal } from 'devicons-react';
import { AmazonwebservicesOriginal } from 'devicons-react';
import { KotlinOriginal } from 'devicons-react';
import { GitOriginal } from 'devicons-react';


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
              <h3 className="skills__name">Spring</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <KotlinOriginal size="25"/>
            <div>
              <h3 className="skills__name">Kotlin</h3>
              <span className="skills__level">Intermediate</span>
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
            <GitOriginal size="25"/>
            <div>
              <h3 className="skills__name">Git</h3>
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
