import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/swiper-bundle.js';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/swiper-bundle.css'; // core Swiper
import './swiper-custom.css'

import projectsData from "/src/ProjectsData.js"

export default function ProjectSwiperSlide(){
  const projects = projectsData.data.projects;

  const projectCards = projects.map(project => {
    return (
      <SwiperSlide key={project.id}>
        <div className="project__card">
          <img className="project__img" src={project.imgUrl}></img>
          <div className="project__details">
            <h2 className="project__title">{project.title}</h2>
            <h3 className="project__subtitle">{project.subtitle}</h3>
            <div className="project__description">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        navigation
        pagination={{clickable: true}}
        centeredSlides={true}
        initialSlide={0}
        speed={900}
        className="projects__swiper"
        slidesPerView={1}
        loop={true}
      >
          {projectCards}
          {/* <div className="project__card">
            <img className="project__img" src="https://picsum.photos/300/300"></img>
            <div className="project__details">
              <h2 className="project__title">My Project</h2>
              <span className="project__subtitle">Built in React</span>
              <p>I built this project as a way to practise my skills and learn more about things. It was made in React and I did it so that I could learn some more about it. I built this project as a way to practise my skills and learn more about things. It was made in React and I did it so that I could learn some more about it.</p>
            </div>
          </div> */}
      </Swiper>
  )
}
