import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import "../styles/scss/Experience.css"
import Popup from "../components/Popup.js"

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'

// import Carousel, {slidesToShowPlugin, Dots} from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import Neurafarm1 from "../images/neurafarm-1.png"
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

SwiperCore.use([Navigation, Pagination])

function Experience({coba}) {

    const [experiences, setExperiences] = useState([
        {
            id : "Neurafarm",
            title: "Neurafarm",
            type : "Internship",
            position : "Frontend Engineer",
            time : "June 2020 - Sept 2020",
            mainImage : Neurafarm1,
            images : [Neurafarm1, Neurafarm2, Neurafarm3, Neurafarm4],
            detail : "This is my first experience to work as a professional. Nerafarm is a startup company that engaged in agricultural technology. I was worked as a software engineer intern, specifically as a frontend engineer. As an intern, I was responsible to build a semi-dynamic website for company profile and job portal that is available in Neurafarm. To build this website, I use GatsbyJS as the frontend framework, Strapi as CMS (Content Management System), and GraphQL as the tools to create a query and get the data from the backend."
        },
        {
            id : "ITB",
            title: "ITB's Student Outcome Web",
            type : "Project",
            position : "UI/UX Designer, Frontend Engineer",
            time : "Feb 2020 - Apr 2020",
            mainImage : SO7,
            images : [SO7, SO2, SO1,SO3, SO4, SO5, SO6],
            detail : "This project is my first project as a software engineer. In this project, I had the role as UI/UX designer as well as Frontend engineer. I was working with a team of 5 people (including me) to build a web-based application to visualize ITB’s student study result. As for the tools, we used Laravel Framework to build the web, Figma to create the UI/UX prototype, and Gitlab as version control"
        },
        {
            id : "Genose",
            title: "Genose Covid-19 Dashboard",
            type : "Project",
            position : "UI/UX Designer, Frontend Engineer",
            time : "Dec 2020 - Jan 2021",
            mainImage : Genose2,
            images : [Genose1, Genose2, Genose3],
            detail : "This is my second project as a software engineer. In Dec 2020 - Jan 2021, I was working with a team of 3 people (including me) to build a web-based dashboard to monitoring and reporting covid-19 test result from GeNose's Covid-19 detection tools. In this project, I had the role as a Frontend engineer (main) and as well as UI/UX designer. For the tools, we used ReactJS to build the website with gRPC and Firebase."
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
                    <h2 className = "experience-section-title">Experience</h2>
                
                    <div className = "experience-card-container">
                        <Swiper
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
                                            {/* <div className = "detail">{experience.detail}</div> */}
                                        </div>
                                        {/* <div className = "view-more-button" onClick = {() => setButtonPopup(true)}>View More</div>         */}
                                        <div className = "view-more-button" onClick = {() => showPopup(true, experience.id)}>View More</div>
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