import React from 'react'
import Fade from 'react-reveal/Fade';
import "../styles/scss/Experience.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'

import Neurafarm1 from "../images/neurafarm.png"
import Neurafarm2 from "../images/neurafarm-2.png"
import Neurafarm3 from "../images/neurafarm-3.png"
import Neurafarm4 from "../images/neurafarm-4.png"

import Genose1 from "../images/genose-1.png"
import Genose2 from "../images/genose-2.png"
import Genose3 from "../images/genose-3.png"

import SO1 from "../images/SOITB-1.png"
import SO2 from "../images/SOITB-2.png"
import SO3 from "../images/SOITB-3.png"
import SO4 from "../images/SOITB-4.png"
import SO5 from "../images/SOITB-5.png"
import SO6 from "../images/SOITB-6.png"
import SO7 from "../images/SOITB-7.png"

import Rekadia1 from "../images/Rekadia-1.svg"
import Rekadia2 from "../images/Rekadia-2.svg"
import Rekadia3 from "../images/Rekadia-3.svg"
import Rekadia4 from "../images/Rekadia-4.svg"

import TA1 from "../images/TA-1.png"
import TA2 from "../images/TA-2.png"
import TA3 from "../images/TA-3.png"
import TA4 from "../images/TA-4.png"
import TA5 from "../images/TA-5.png"
import TA6 from "../images/TA-6.png"

import biofarma1 from "../images/biofarma-1.jpeg"
import biofarma2 from "../images/biofarma-2.jpeg"
import biofarma3 from "../images/biofarma-3.jpeg"

SwiperCore.use([Navigation, Pagination])

function Experience() {

    const experiences= [
        {
            id : "Neurafarm",
            title: "Neurafarm",
            type : "Internship",
            position : ["Frontend Engineer"],
            time : "June 2020 - Sept 2020",
            mainImage : Neurafarm1,
            images : [Neurafarm1, Neurafarm2, Neurafarm3, Neurafarm4],
            detail : "Nerafarm is a startup company that engaged in agricultural technology. I was working as a software engineer intern, specifically as a frontend engineer, approximately for 4 months. As an intern, I was responsible to build a semi-dynamic website for company profile and company's job vacancy portal. To built this website, I used GatsbyJS as the framework, Strapi as CMS (Content Management System), and GraphQL as the tools get the data from the API.",
            site : "https://www.neurafarm.com/"
        },
        {
            id : "ITB",
            title: "ITB's Student Outcome Web",
            type : "Project",
            position : ["UI/UX Designer", "Frontend Engineer"],
            time : "Feb 2020 - Apr 2020",
            mainImage : SO7,
            images : [SO7, SO2, SO1,SO3, SO4, SO5, SO6],
            detail : "This project is my first project as a software engineer. In this project, I had roles as an UI/UX designer and as a Frontend engineer. I worked with a team of 5 people (including me) and built a web-based application to visualize ITB’s student study result. As for the tools, we used Laravel Framework to build the web, Figma to create the UI/UX prototype, and Gitlab as version control",
            site : null
        },
        {
            id : "Genose",
            title: "Genose Covid-19 Dashboard",
            type : "Project",
            position : ["UI/UX Designer", "Frontend Engineer"],
            time : "Dec 2020 - Jan 2021",
            mainImage : Genose2,
            images : [Genose1, Genose2, Genose3],
            detail : "Second project as a software engineer. In Dec 2020 - Jan 2021, I was working with a team of 3 people (including me) to build a web-based dashboard to monitoring and reporting covid-19 test result from GeNose's Covid-19 detection tools. In this project, I had the roles as a Frontend engineer (main) and as an UI/UX designer. For the tools, we used ReactJS to build the website with gRPC and Firebase.",
            site : null
        },
        {
            id : "Rekadia",
            title: "Rekadia",
            type : "Part-time",
            position : ["Frontend Engineer"],
            time : "Aug 2021 - Nov 2021",
            mainImage : Rekadia1,
            images : [Rekadia1, Rekadia2, Rekadia3, Rekadia4],
            detail : "Worked as a frontend engineer. Responsibled to built a web based app (for a particular project) using NextJs, Typescript, and Tailwind. ",
            site : null
        },
        {
            id : "TA",
            title: "Online-based Exam Software (UI/UX)",
            type : "Project",
            position : ["UI/UX Researcher"],
            time : "Jan 2021 - March 2022",
            mainImage : TA1,
            images : [TA1, TA2, TA3, TA4, TA5, TA6],
            detail : "Final project as a software engineer student. Did an UI/UX research regarding online exam system. In this project, I did an UI/UX research regarding online exam system using Activity-Centered design approach. There were a lot of things that has to be done to complete this research, start from analyze the problem, gathering the requirements, prototyping, testing, etc. Yes, as you've read, prototyping. I really built a fully clickable prototype of exam simulation (even including exam preparation simulation). Tough work. But worth it",
            site : "https://www.figma.com/proto/gCHOFCm7w01TPeCcS6xaDJ/High-fidelity-2.0?node-id=14%3A677&starting-point-node-id=14%3A677&scaling=scale-down"
        },
        {
            id : "biofarma",
            title: "Biofarma",
            type : "Fulltime",
            position : ["Frontend Engineer"],
            time : "July 2022 - Sept 2022",
            mainImage : biofarma1,
            images : [biofarma1, biofarma2, biofarma3],
            detail : "Built and developed a web-based dashboard for monitoring and reporting vaccine production (specifically in quality control and quality assurance). Developed using Reactjs.",
            site : null
        },
    ];

    return (
        <div id = "experience">
            <div className = "experience-container">
                <Fade left>
                    <h2 className = "experience-section-title">Experience(s)</h2>
                
                    <div className = "experience-card-container">
                
                        <Swiper
                            pagination={{
                            dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {experiences.map((experience, index) => 
                                <SwiperSlide className = "swiper-slide" key = {index}>
                                    <div className="exp-card">
                                        <div className="card-left">
                                            <Swiper
                                                className="mySwiper swiper-h"
                                                spaceBetween={50}
                                                pagination={{
                                                  clickable: true,
                                                }}
                                                modules={[Pagination]}
                                            >
                                                {experience.images.map((image, index) => 
                                                    <SwiperSlide key = {index} >
                                                        
                                                        <img className = "exp-img" src = {image} alt = "detailimage" />
                                                    </SwiperSlide>
                                                )}
                                            </Swiper>
                                        </div>
                                        <div className = "card-right">
                                            <h3 className = "exp-title">{experience.title}</h3>
                                            <div className = "exp-detail">{experience.detail}</div>
                                            <div className="tag-container">
                                                <div className = "tag">{experience.type}</div>
                                                {experience.position.map((pos, index) => (
                                                    <div className = "tag" key={index}>{pos}</div>
                                                ))}
                                            </div>
                                            
                                            <div className = "exp-period">{experience.time}</div>
                                        
                                            {experience.site !== null? (
                                                <div className="visit-link" onClick={()=> window.open(experience.site, "_blank")}>Visit Site</div>
                                            ) : (<div></div>) }
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )} 
                        </Swiper>
                    </div>
                </Fade>

            </div>

            <div id = "experience-detail">
                
            </div>
            
        </div>
    )
}

export default Experience