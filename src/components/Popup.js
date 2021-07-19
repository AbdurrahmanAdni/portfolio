import React from "react";
import "../styles/scss/Popup.css"
// onClick = {() => props.setTrigger(false)}
function Popup(props) {
    return (props.trigger) ? (
        <div className = "popup">
            <div className = "popup-inner">
                <div className = "close-btn" onClick = {() => props.setTrigger(false)}>Close</div>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Popup;