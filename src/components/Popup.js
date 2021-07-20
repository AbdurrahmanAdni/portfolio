import React from "react";
import Fade from 'react-reveal/Fade';
import "../styles/scss/Popup.css"
// onClick = {() => props.setTrigger(false)}
function Popup(props) {
    return (props.trigger) ? (
        <div className = "popup">
            <Fade bottom>
                <div className = "popup-inner">
                    <div className = "close-btn" onClick = {() => props.setTrigger(false)}>Close</div>
                    {props.children}
                </div>
            </Fade>
        </div>
    ) : ""
}

export default Popup;