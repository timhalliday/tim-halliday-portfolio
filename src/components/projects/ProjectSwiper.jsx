import React from 'react'

import { CCarousel, CCarouselItem } from '@coreui/react'

import projectsData from "/src/ProjectsData.js"

export default function ProjectSwiperSlide(){
  const projects = projectsData.data.projects;

  const projectCards = projects.map(project => {
    return (
      <CCarouselItem key={project.id}>
        <a className="project__card" href={project.url}>
          <img className="project__img" src={project.imgUrl}></img>
          <div className="project__details">
            <h2 className="project__title">{project.title}</h2>
            <h3 className="project__subtitle">{project.subtitle}</h3>
            <div className="project__description">
              <p>{project.description}</p>
            </div>
          </div>
        </a>
      </CCarouselItem>
    )
  })

  return (
    <CCarousel controls indicators dark>
      {projectCards}
    </CCarousel>
  )
}
