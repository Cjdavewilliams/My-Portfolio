import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faGithub,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const contactOptions = ['Gmail', 'Whatsapp', 'Instagram', 'Github', 'Inbox'];

const Contact = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % contactOptions.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="contact-header">
        Feel free to contact me on: <span className="changing-text">{contactOptions[currentWordIndex]}</span> {/* Changing text */}
      </h1>
      <div className="contact-boxes">
        <a
          href="mailto:williamsdavid107@gmail.com"
          className="contact-box"
        >
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <span className="contact-name">Gmail</span>
          <span className="contact-info">williamsdavid107@gmail.com</span>
        </a>
        <a
          href="https://wa.me/254757081063"
          className="contact-box"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
          <span className="contact-name">Whatsapp</span>
          <span className="contact-info">+254757081063</span>
        </a>
        <a
          href="https://instagram.com/cj_david_williams"
          className="contact-box"
        >
          <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
          <span className="contact-name">Instagram</span>
          <span className="contact-info">cj_david_williams</span>
        </a>
        <a
          href="https://github.com/Cjdavewilliams"
          className="contact-box"
        >
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          <span className="contact-name">Github</span>
          <span className="contact-info">Cjdavewilliams</span>
        </a>
      </div>
      <div className="support-section">
        If you'd like to support my work, you can contribute via PayPal: 
        <a
          href="https://paypal.me/williamsdavid107"
          className="support-link"
        >
          <FontAwesomeIcon icon={faCreditCard} /> williamsdavid107@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
