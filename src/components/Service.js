import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobile } from "@fortawesome/free-solid-svg-icons"
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons"
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import "../styles/scss/Service.css"



function Services() {

    const [services] = useState([
        {
            name: "Web Development",
            detail : "Mostly worked professionally as a web developer, specifically as a front-end developer.",
            icon : faLaptopCode
        },
        {
            name: "UI/UX Design",
            detail : "Had taken role as a UI/UX designer in two projects. And on my final year as a SE student, my final project was also related to UI/UX design.",
            icon : faObjectGroup

        },
        {
            name: "Android Development",
            detail : "Android development is a new thing for me. It's really instriguing. Applying what I have learned by going directly into a real project will be a new challenge for me.",
            icon : faMobile
        }
    ]);

    // const x = {
    //     a : 1,
    //     b : 2
    // }

    return (
        <div id = "service">
            <div className = "service-container">
                <h2 className = "service-section-title">Service</h2>
                <div className = "service-card-container">

                    {services.map((service, index) => 
                        <div key = {index} className = "card">
                            <div className = "icon-container">
                                <FontAwesomeIcon icon = {service.icon} size="2x" className = "card-icon" />
                            </div>
                            <div className = "service-title">{service.name}</div>
                            <div className = "service-detail">{service.detail}</div>
                        </div>
                    )}
                    
                </div>         
            </div>
        </div>
    )
}

export default Services
