import React, {useState} from 'react'
import Fade from 'react-reveal/Fade';
import "../styles/scss/Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

/*
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src = {Logo} className = "logo" style = {{width : "30px"}} alt = "logo" />
                    <span>Navbar</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <ul>
                    <li><a href = "#">HOME</a></li>
                    <li><a href = "#">ABOUT</a></li>
                    <li><a href = "#">EXPERIENCE</a></li>
                    <li><a href = "#">SKILLS</a></li>
                    <li><a href = "#">INTEREST</a></li>
                </ul>

                <button 
                className = "dropdown-button"
                onClick = {() => showLinksFunc({showLinks})}>
                    Link
            </button>
*/

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    function showLinksFunc(status) {
        setShowLinks(!showLinks);
    }

    // onClick = {() => setShowLinks(!showLinks)}>

    
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
