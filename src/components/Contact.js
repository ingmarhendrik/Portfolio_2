import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import ContactImage from '../images/contact.png';
import '../styles/Contact.css';

export const Contact = () => {
    const SERVICE_ID = "service_k4o5wqk";
    const TEMPLATE_ID = "template_6tqg7vj";
    const PUBLIC_KEY = "_XFgTY4NVBxScjKbO";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            alert('Message Sent Successfully')
          }, (error) => {
            console.log(error.text);
            alert('Something went wrong!')
          });
        e.target.reset()
      };
    return (
        <section id="contact">
            <form class="formContainer">
                    <h2>Send me a message!</h2>
                    <div className="form">
                        <div class="formElement">
                            <input type="text" id="from_name" name="from_name" placeholder="Your Name" required />
                        </div>

                        <div class="formElement">
                            <input type="email" id="from_email" name="from_email" placeholder="Your email" required />
                        </div>

                        <div class="formElement">
                            <textarea name="message" rows="7" cols="30" placeholder="Your message" required />
                        </div>
                        <button type='submit' className='formButton'>Submit</button>
                    </div>
            </form>
        </section>
    )
};

export default Contact;

