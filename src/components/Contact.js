import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

export const Contact = () => {
    const SERVICE_ID = "service_k4o5wqk";
    const TEMPLATE_ID = "template_6tqg7vj";
    const PUBLIC_KEY = "_XFgTY4NVBxScjKbO";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            alert('Message Sent Successfully');
            e.target.reset();
          }, (error) => {
            console.error(error.text);
            alert('Something went wrong!');
          });
    };

    return (
        <section id="contact">
            <form className="formContainer" onSubmit={handleOnSubmit}>
                <h2>Send me a message!</h2>
                <div className="form">
                    <div className="formElement">
                        <input type="text" id="from_name" name="from_name" placeholder="Your Name" required />
                    </div>

                    <div className="formElement">
                        <input type="email" id="from_email" name="from_email" placeholder="Your email" required />
                    </div>

                    <div className="formElement">
                        <textarea name="message" placeholder="Your message" required />
                    </div>
                    <button type='submit' className='formButton'>Submit</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
