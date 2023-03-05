import React, { useRef } from "react";
import '../scss/styles/_contact.scss';
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

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
                    console.log("message sent")
                    // console.log(form);
                    // console.log(form.current["0"]);
                    // form.current["0"].value = "";
                    // form.current["1"].value = "";
                    // form.current["2"].value = "";
                    // form.current["3"].value = "";
                    // form.current["4"].value = "";
                    form.current.reset(); // reset the form after sending the email
                },
                (error) => {
                    console.log(error.text);
                    console.log("error please sent your message again!")
                }
            );
    };

    return (
        <div className="StyledContactForm" id="contact">
            <form ref={form} onSubmit={sendEmail} id="textform">
                <label>Your Name</label>
                <input type="text" name="user_name" aria-label="write your name "  placeholder="Type your name"/>
                <label>Your Email</label>
                <input type="email" name="user_email" aria-label="write your email"  placeholder="mqo@example.com"/>
                <label>Your Message </label>
                <textarea name="message" aria-label="write the massage  "  placeholder="up to you :) " />
                <input type="submit" value="Send"   />
            </form>
        </div>
    );
};

export default Contact;
