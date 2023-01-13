import React, {useState} from 'react'
import Fade from 'react-reveal/Fade';
import "../styles/scss/Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    function showLinksFunc(status) {
        setShowLinks(!showLinks);
    }

    return (
        
            <div className = "navbar-body">
                <div className = "navbar-leftside" href = "#">
                    <a href = "#">
                        <span className = "logo-1">Portfo</span><span className = "logo-2">lio.</span>
                    </a>
                </div>

                <div
                    className = "dropdown-button"
                    onClick = {() => showLinksFunc({showLinks})}>
                    <FontAwesomeIcon icon = {faBars} size="lg" className = "burger-icon" />
                </div>

                
                <div className = "navbar-rightside" id = {showLinks == false ? "hidden" : ""} >
                    
                        <div className = "link-container">
                            <Fade left>
                                <div><a href = "#">HOME</a></div>
                                <div><a href = "#about">ABOUT</a></div>
                                <div><a href = "#service">SERVICE</a></div>
                                <div><a href = "#experience">EXPERIENCE</a></div>
                                <div><a href = "#contact">CONTACT</a></div>
                            </Fade>
                        </div>
                    
                </div>
                
            </div>
        
    )
}

export default Navbar
