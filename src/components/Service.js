import React, {useState} from 'react'
// import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobile } from "@fortawesome/free-solid-svg-icons"
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import {faBook} from "@fortawesome/free-solid-svg-icons"
import "../styles/scss/Service.css"



function Services() {

    const [services] = useState([
        {
            name: "Web Development",
            detail : "Mostly worked professionally as a web developer, specifically as front-end developer.",
            icon : faLaptopCode
        },
        {
            name: "UI/UX Design",
            detail : "Had taken role as a UI/UX designer in two projects. I also choose UI/UX research as my final project in my last year of college.",
            icon : faObjectGroup

        },
        {
            name: "Project Management",
            detail : "Never had any professional experience as a project manager, but had project management training from one of Indonesia's IT training institution. It really is interesting. Applying what I have learned by going directly into a real project will be a new challenge for me.",
            icon : faBook
        },
        // {
        //     name: "Android Development",
        //     detail : "Android development is a new thing for me. It's really instriguing. Applying what I have learned by going directly into a real project will be a new challenge for me.",
        //     icon : faMobile
        // }
    ]);

    // const x = {
    //     a : 1,
    //     b : 2
    // }

    return (
        <div id = "service">
            <div className = "service-container">
                <Fade top>
                    <h2 className = "service-section-title">Service</h2>
                </Fade>
                <div className = "card-container">

                    {/* {services.map((service, index) =>
                        <Fade bottom> 
                            <div key = {index} className = "service-card">
                                <div className = "icon-container">
                                    <FontAwesomeIcon icon = {service.icon} size="2x" className = "card-icon" />
                                </div>
                                <div className = "service-title">{service.name}</div>
                                <div className = "service-detail">{service.detail}</div>
                            </div>
                        </Fade>
                    )} */}

                    {services.map((service, index) =>
                        <Fade bottom> 
                            <div key = {index} className = "card">
                                <div className = "icon-container">
                                    <FontAwesomeIcon icon = {service.icon} size="2x" className = "card-icon" />
                                </div>
                                <div className = "card-title">{service.name}</div>
                                <div className = "card-detail">{service.detail}</div>
                            </div>
                        </Fade>
                    )}
                    
                </div>         
            </div>

            <div className = "skill-container">
                <Fade bottom>
                    <div className = "skill-section-title">Technical Skills</div>
                </Fade>

                <Fade bottom>
                    <div className = "card-container">
                        <div className = "card">
                            <div className = "card-title">Language and Framework</div>
                            <div className = "card-detail">
                                <div className = "list-wrapper">
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>ReactJS</li>
                                    <li>NextJs</li>
                                    <li>GastbyJs</li>
                                    <li>Graphql</li>
                                    <li>Bootstrap</li>
                                </div>
                            </div>
                        </div>

                        <div className = "card">
                            <div className = "card-title">Database Management</div>
                            <div className = "card-detail">
                                <li>MySQL</li>
                            </div>
                        </div>

                        <div className = "card">
                            <div className = "card-title">NLP</div>
                            <div className = "card-detail">
                                <div className = "list-wrapper">
                                    <li>Tensorflow</li>
                                </div>
                            </div>
                        </div>

                        <div className = "card">
                            <div className = "card-title">Tools</div>
                            <div className = "card-detail">
                                <div className = "list-wrapper">
                                    <li>VS code</li>
                                    <li>Eclipse</li>
                                    <li>Figma</li>
                                    <li>Lucid Chart</li>
                                    <li>Marvel</li>
                                    <li>Github</li>
                                    <li>Gitlab</li>
                                    <li>Bitbucket</li>
                                    <li>MS Word</li>
                                    <li>MS Excel</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Services
