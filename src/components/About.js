import React from 'react'
import Fade from 'react-reveal/Fade';
import ProfilPic from "../images/coba3.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import "../styles/scss/About.css"


function About() {
    return (
        <div id = "about">
            <Fade left>
                <div className = "about-profil">
                    <div className = "profil-pic">
                        <img src = {ProfilPic} className = "picture" alt = "Profile-pic"/>
                    </div>

                    <div className = "biograph">
                        <div className = "biograph-title">About me</div>
                        <div className = "biograph-content"> 
                            Hello there! My name is Abdurrahman Adni. I was born in Bandung, 29th June 1998. 
                            Currently, i'm a 4th year student of Software Engineering in Institut Teknologi Bandung.
                            I've been taking part, professionally, in software engineering for several years. 
                            I've mostly worked professionally as a web developer, specifically as a front-end developer.
                            As a student, I also taking part as assistant in Software Engineering Laboratory. And in 2020, I was 
                            appointed as assistant coordinator of Software Engineering Laboratory. It really was an honour for me. 
                            Being an assistant taught me how to manage time as an assistant and a student, 
                            how to communicate with students and lecturers, and how to be organized. And because of that, 
                            I learned more about software engineering more than in my class.  
                            As a sofware engineer, I like building new stuff and work with other people. 
                            More people, more fun i guess haha. 

                            Aside from taking role as fronted dev, I also can take the role as a UI/UX Engineer and Project Manager.
                            
                            Personally, i like learning new things.
                            
                            As for my hobbies, I like sports. Specifically football, futsal, and basketball. 
                            Very unsuitable for a software engineer hahaha.
                            
                            
                        </div>
                    </div>
                </div>
            </Fade>
            
            <Fade right>
                <div className = "about-education">
                    <div className = "education-title">Education</div>
                    <div className = "education-content">
                        <div className = "education-data">
                            <div className = "ed-data left">
                                <h4 className = "school">04 Cibiru Elementary School</h4>
                                <h5 className = "city">Bandung, Indonesia</h5>
                                <div className = "calendar">
                                    <FontAwesomeIcon icon = {faCalendar} size="lg" className = "calendar-icon" />
                                    <span>2004-2010</span>
                                </div>
                            </div>

                            <div>
                                <div className = "rounder">
                                    <div className = "inside"></div>
                                </div>
                                <div className = "line"></div>
                            </div>

                        </div>

                        <div className = "education-data">
                            <div></div>

                            <div>
                                <div className = "rounder">
                                    <div className = "inside"></div>
                                </div>
                                <div className = "line"></div>
                            </div>

                            <div className = "ed-data right">
                                <h4 className = "school">08 Bandung Junior Highschool</h4>
                                <h5 className = "city">Bandung, Indonesia</h5>
                                <div className = "calendar">
                                    <FontAwesomeIcon icon = {faCalendar} size="lg" className = "calendar-icon" />
                                    <span>2010-2013</span>
                                </div>
                            </div>
                        </div>

                        <div className = "education-data">
                            <div className = "ed-data left">
                                <h4 className = "school">22 Bandung Senior Highschool</h4>
                                <h5 className = "city">Bandung, Indonesia</h5>
                                <div className = "calendar">
                                    <FontAwesomeIcon icon = {faCalendar} size="lg" className = "calendar-icon" />
                                    <span>2013-2016</span>
                                </div>
                            </div>

                            <div>
                                <div className = "rounder">
                                    <div className = "inside"></div>
                                </div>
                                <div className = "line"></div>
                            </div>
                        </div>

                        <div className = "education-data">

                            <div></div>
                            
                            <div>
                                <div className = "rounder">
                                    <div className = "inside"></div>
                                </div>
                            </div>

                            <div className = "ed-data right">
                                <h4 className = "school">Institut Teknologi Bandung</h4>
                                <h5 className = "city">Bandung, Indonesia</h5>
                                <div className = "calendar">
                                    <FontAwesomeIcon icon = {faCalendar} size="lg" className = "calendar-icon" />
                                    <span>2017-2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default About
