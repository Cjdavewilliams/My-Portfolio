import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import pic2 from '../../images/dave.jpeg';
import { Link } from 'react-router-dom'; // Importing Link for navigation

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="hero-left">
          <h1 className="name-title">
            <span id="lightshow">David </span>
            <span id="redshow">
              <span id="logo-red">Williams</span>
            </span>
          </h1>
          <div className="profession">
            <div className="line"></div>
            <h4 className="name-profession">Full Stack Developer</h4>
          </div>
          <div className="brief-profession-description">
            <h5>
              I am a Full Stack Developer in Nairobi. I'm very specialized in making your imaginations a reality. If you can think it...
            </h5>
          </div>
          <Link to="/Contact"> {/* Corrected Link to navigate to the Contact page */}
            <button className="hello-button">
              Say Hello
              <i className="fa-regular fa-paper-plane" id="arrow-up-down"></i>
            </button>
          </Link>
        </div>
        <div className="hero-right">
          <div className="pic-box">
            <img src={pic2} alt="Some cool pic of me" />
          </div>
        </div>
      </div>
      <Link to="/CV" id='linked'>
  <button className="cv-link">
    Click here to get my CV
    <i className="fa-solid fa-angles-down fa-fade" id="arrow-up-down"></i>
  </button>
</Link>
    </div>
  );
};

export default Home;
