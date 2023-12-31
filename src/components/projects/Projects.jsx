import React from "react";

import ProjectSwiper from "./ProjectSwiper"
import './projects.css'

export default function Projects(){
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Take a look at what I've been up to recently</span>
      <div className="projects__container container">
        <ProjectSwiper/>
      </div>
    </section>
  )
}
