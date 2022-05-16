import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import "../styles/scss/Experience.css"
import Popup from "../components/Popup.js"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'

// import Carousel, {slidesToShowPlugin, Dots} from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

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

SwiperCore.use([Navigation, Pagination])

function Experience({coba}) {

    const [experiences, setExperiences] = useState([
        {
            id : "Neurafarm",
            title: "Neurafarm",
            type : "Internship",
            position : ["Frontend Engineer"],
            time : "June 2020 - Sept 2020",
            mainImage : Neurafarm1,
            images : [Neurafarm1, Neurafarm2, Neurafarm3, Neurafarm4],
            detail : "Nerafarm is a startup company that engaged in agricultural technology. As a software engineer intern, specifically as a frontend engineer, approximately for 4 months. As an intern, I was responsible to build a semi-dynamic website for company profile and company's job vacancy portal. To build this website, I use GatsbyJS as the framework, Strapi as CMS (Content Management System), and GraphQL as the tools get the data from the API."
        },
        {
            id : "ITB",
            title: "ITB's Student Outcome Web",
            type : "Project",
            position : ["UI/UX Designer", "Frontend Engineer"],
            time : "Feb 2020 - Apr 2020",
            mainImage : SO7,
            images : [SO7, SO2, SO1,SO3, SO4, SO5, SO6],
            detail : "This project is my first project as a software engineer. In this project, I had the role as UI/UX designer as well as Frontend engineer. I was working with a team of 5 people (including me) to build a web-based application to visualize ITB’s student study result. As for the tools, we used Laravel Framework to build the web, Figma to create the UI/UX prototype, and Gitlab as version control"
        },
        {
            id : "Genose",
            title: "Genose Covid-19 Dashboard",
            type : "Project",
            position : ["UI/UX Designer", "Frontend Engineer"],
            time : "Dec 2020 - Jan 2021",
            mainImage : Genose2,
            images : [Genose1, Genose2, Genose3],
            detail : "This is my second project as a software engineer. In Dec 2020 - Jan 2021, I was working with a team of 3 people (including me) to build a web-based dashboard to monitoring and reporting covid-19 test result from GeNose's Covid-19 detection tools. In this project, I had the role as a Frontend engineer (main) and as well as UI/UX designer. For the tools, we used ReactJS to build the website with gRPC and Firebase."
        },
        {
            id : "Rekadia",
            title: "Rekadia",
            type : "Part-time",
            position : ["Frontend Engineer"],
            time : "Aug 2021 - Nov 2021",
            mainImage : Rekadia1,
            images : [Rekadia1, Rekadia2, Rekadia3, Rekadia4],
            detail : "Work as a frontend engineer. Responsible to build a web based app using NextJs, Typescript, and Tailwind. "
        },
        {
            id : "TA",
            title: "Online-based Exam Software (UI/UX)",
            type : "Project",
            position : ["UI/UX Designer"],
            time : "Jan 2021 - March 2022",
            mainImage : TA1,
            images : [TA1, TA2, TA3, TA4, TA5, TA6],
            detail : "Final project as a software engineer student. Built an interaction design for online-based exam software using Figma and Iconify."
        }
    ]);

    const [buttonPopup, setButtonPopup] = useState(false);

    const [activeExp, setActiveExp] = useState("Neurafarm")

    function showPopup(isShow, id){
        setButtonPopup(isShow);
        console.log(id);
        setActiveExp(id);
    }

    return (
        <div id = "experience">
            <div className = "experience-container">
                <Fade left>
                    <h2 className = "experience-section-title">Experience(s)</h2>
                
                    <div className = "experience-card-container">
                        {/* <Swiper
                            navigation
                            loop = {true}
                        >
                            {experiences.map((experience, index) => 
                                <SwiperSlide className = "swiper-slide" key = {index}>
                                    <div className = "experience-card" >
                                        <div className = "card-top">
                                            <img className = "card-image" src = {experience.mainImage} alt = "card-image"/>
                                            
                                        </div>
                                        <div className = "card-bottom">
                                            <div className = "experience-title">{experience.title}</div>
                                            <div className = "type">Experience Type : {experience.type}</div>
                                            <div className = "position">Role : {experience.position}</div>
                                            <div className = "time">{experience.time}</div>
                                        </div>
                                        <div className = "view-more-button" onClick = {() => showPopup(true, experience.id)}>View More</div>
                                    </div>
                                    
                                </SwiperSlide>
                            )}               
                        </Swiper> */}
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
                                            {/* <img className = "exp-img" src = {experience.mainImage} alt = "card-image"/> */}
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
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )} 
                        </Swiper>
                    </div>
                </Fade>

                <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
                    
                    {experiences.map((experience, index) =>{
                            if(experience.id === activeExp){
                                return(
                                    <div key = {index} className = "exp-detail-container">
                                        <h4>{experience.title}</h4>
                                        <Swiper
                                            pagination={{
                                                "dynamicBullets": true
                                            }}
                                            loop = {true}
                                            autoHeight={true}
                                        >
                                            {experience.images.map((image, index) => 
                                                <SwiperSlide key = {index} >
                                                    
                                                    <img src = {image} className = "detail-img" alt = "detailimage" />
                                                </SwiperSlide>
                                            )}
                                        </Swiper>
                                        <div className = "exp-detail">{experience.detail}</div>
                                    </div>
                                )
                            }
                        }         
                    )}
                    
                </Popup>    

                
            </div>

            <div id = "experience-detail">
                
            </div>
            
        </div>
    )
}

export default Experience



/*
<div key = {index} className = "experience-card" onClick = {coba}>
                                <div className = "card-left">
                                    <Carousel 
                                        value = {value}
                                        slides = {experience.images}
                                        onChange = {e => setValue}
                                    />
                                    <Dots number={experience.images.length} thumbnails={experience.images} value={value} onChange={e => setValue} number={experience.images.length} />
                                </div>
                                <div className = "card-right">
                                    <div className = "experience-title">{experience.title}</div>
                                    <div className = "type">{experience.type}</div>
                                    <div className = "position">{experience.position}</div>
                                    <div className = "time">{experience.time}</div>
                                    <div className = "detail">{experience.detail}</div>
                                </div>
                                
                            </div>
                        */

/*
<Carousel
                                plugins={[
                                    'arrows',
                                    'infinite'
                                ]}
                            >
                                <img src = {Genose2} alt = "image"/>
                                <img src = {Genose2} alt = "image"/>
                                <img src = {Genose2} alt = "image"/>
                        </Carousel>

                        <Carousel
                                plugins={[
                                    'arrows',
                                    'infinite'
                                ]}
                            >
                                <img src = {Neurafarm1} alt = "image"/>
                                <img src = {Neurafarm2} alt = "image"/>
                                <img src = {Neurafarm3} alt = "image"/>
                        </Carousel>

                        <Carousel
                                plugins={[
                                    'arrows',
                                    'infinite'
                                ]}
                            >
                                <img src = {SO7} alt = "image"/>
                                <img src = {SO7} alt = "image"/>
                                <img src = {SO7} alt = "image"/>
                        </Carousel>
*/

/*
{experiences[0].images.map((image, index) =>                    
                            <img className = "card-image" src = {image} alt = "card-image"/>                                                    
                        )} 
*/

/* <Carousel
                                        plugins={[
                                            'arrows',
                                            'infinite'
                                        ]}
                                    >
                                        {experience.images.map((image, index) =>                    
                                            <img key = {index} className = "card-image" src = {image} alt = "card-image"/>                                                    
                                        )} 
                                    </Carousel> */
                                    /* <Carousel
                                        value={1}
                                        slides={experience.images}
                                        onChange={() => setValue(value)}
                                    />
                                    <Dots number={experience.images.length} thumbnails={experience.images} value={value} onChange={() => setValue(value)} number={experience.images} /> */

/*

<Carousel
                        plugins={[
                            'arrows',
                            'infinite'
                        ]}
                    >
                        {experiences.map((experience, index) => 
                            <div key = {index} className = "experience-card" >
                                <div className = "card-top">
                                    <img className = "card-image" src = {experience.mainImage} alt = "card-image"/>
                                    
                                </div>
                                <div className = "card-bottom">
                                    <div className = "experience-title">{experience.title}</div>
                                    <div className = "type">Experience Type : {experience.type}</div>
                                    <div className = "position">Role : {experience.position}</div>
                                    <div className = "time">{experience.time}</div>
                                     <div className = "detail">{experience.detail}</div>
                                    </div>
                                    <div className = "view-more-button" onClick = {() => setButtonPopup(true)}>View More</div>        
                                </div>
                  
                            )}                  
                        </Carousel>*/