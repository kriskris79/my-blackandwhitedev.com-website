import React, { useRef, useState } from "react";
import "../scss/styles/_contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();
    const [isMessageSent, setIsMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                // "service id taken form email services ",
                "service_mc8ny4g",
                // " template id taken from email templates",
                "template_7bjmygn",
                form.current,
                // "user id taken from Account API keys public key "
                "6QhcJ-Zq2pe-_ZHgE"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setIsMessageSent(true);
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    console.log("error please sent your message again!");
                }
            );
    };

    return (
        <div className="StyledContactForm" id="contact">
            <form ref={form} onSubmit={sendEmail} id="textform">
                <label>Your Name</label>
                <input
                    type="text"
                    name="user_name"
                    aria-label="write your name "
                    placeholder="Type your name"
                />
                <label>Your Email</label>
                <input
                    type="email"
                    name="user_email"
                    aria-label="write your email"
                    placeholder="mqo@example.com"
                />
                <label>Your Message </label>
                <textarea
                    name="message"
                    aria-label="write the massage  "
                    placeholder="up to you :) "
                />
                <input type="submit" value="Send" />
            </form>
            {isMessageSent && <p>Your message has been sent successfully!</p>}
        </div>
    );
};

export default Contact;




