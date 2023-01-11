import React,{useCallback} from 'react'
import Typed from 'react-typed';
import "../styles/scss/Header.css"

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

function Header() {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    
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
                                strings = {["Web Development", "UI/UX Design", "Project Management"]}
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
