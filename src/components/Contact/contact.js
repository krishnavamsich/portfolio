import React, { useRef } from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png'
import microsoft from '../../assets/microsoft.png'
import Adobe from '../../assets/adobe.png'
import Facebook from '../../assets/facebook.png'
import Facebookicon from '../../assets/facebook-icon.png'
import Twittericon from '../../assets/twitter.png'
import YouTubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
         },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div id="clients">
         <h1 className="contactPageTitle">My Clients</h1>
         <p className="clientDesc"> I have had the oppertunity to work with a diverse group of companies.some of the notable companies I have worked with includes</p>
           <div className="clientImgs">
              <img src={walmart} alt="clients" className="clientImg" />
              <img src={Adobe} alt="clients" className="clientImg" />
              <img src={microsoft} alt="clients" className="clientImg" />
              <img src={Facebook} alt="clients" className="clientImg" />


           </div>
        </div>
        <div id="contact">
              <h1 className="contactPageTitle">Contact Me</h1>
              <span className="contactDesc">Please fill out the form below to discuss any work apportunities</span>
              <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea className="msg"name="Message" placeholder='Your Message'></textarea>
                <button className="submitBtn" type='submit' value="send">Submit</button>
                <div className="links">
                  <img src={Facebookicon} alt="facebook" className="link" />
                  <img src={Twittericon} alt="twitter" className="link" />
                  <img src={YouTubeIcon} alt="youtube" className="link" />
                  <img src={InstagramIcon} alt="Instagram" className="link" />

                </div>
              </form>
        </div>
    </section>
  )
}

export default Contact
