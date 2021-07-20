import React from 'react'
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag, faAt, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons"
import "../styles/scss/Contact.css"

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_m0488uj', 'template_xf9ni1y', e.target, 'user_x3PP29Nwe3WKyZuffuWlM')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent. Thankyou very much :)")
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
    }

    return (
        <div id = "contact">
            <div className = "contact-container">
                <Fade right>
                    <h2 className = "contact-title">Contact Me</h2>
                    <form className = "form-container" onSubmit = {sendEmail}>
                        <div className = "input name">
                            <div className = "input-left">
                                <FontAwesomeIcon icon = {faUser} className = "input-icon" />
                            </div>
                            <div className = "input-right">
                                <div className = "label">Name</div>
                                <input type = "text" className = "form-input" placeholder = "Your Name" name = "name"/>
                            </div>
                            
                        </div>

                        <div className = "input email">
                            <div className = "input-left">
                                <FontAwesomeIcon icon = {faAt} className = "input-icon" />
                            </div>

                            <div className = "input-right">
                                <div className = "label">Email</div>
                                <input type = "email" className = "form-input" placeholder = "Your email address" name = "email"/>
                            </div>

                            
                        </div>

                        <div className = "input subject">
                            <div className = "input-left">
                                <FontAwesomeIcon icon = {faTag} className = "input-icon" />
                            </div>

                            <div className = "input-right">
                                <div className = "label">Subject</div>
                                <input type = "text" className = "form-input" placeholder = "Subject" name = "subject"/>
                            </div>
                            
                        </div>

                        <div className = "input message">
                            <div className = "input-left">
                                <FontAwesomeIcon icon = {faEnvelopeOpenText} className = "input-icon" />
                            </div>

                            <div className = "input-right">
                                <div className = "label">Message</div>
                                <input type = "text" className = "form-input message" placeholder = "Message" name = "message"/>
                            </div>
                            
                        </div>

                        <input type = "submit" className = "submit-button" value = "Submit"/>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default Contact
