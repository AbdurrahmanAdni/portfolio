import React from 'react'
import Typed from 'react-typed';
import "../styles/scss/Header.css"

function Header() {
    return (
        <div className = "header-wrapper">
            <div className = "layer">
                <div className = "main-info">
                    <div className = "info">
                        <h1 className = "title-1">
                            Welcome to my portfolio website
                        </h1>
                        <h2 className = "title-2">
                            Name's <span>Abdurrahman Adni</span> 
                        </h2>
                        <h3>
                            <Typed 
                                className = "typed-text"
                                strings = {["Web Developer", "UI/UX Designer", "Android Developer"]}
                                typeSpeed = {40}
                                backSpeed = {60}
                                loop
                            />
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
