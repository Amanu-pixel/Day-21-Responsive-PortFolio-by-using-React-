import './FooterStyle.css';
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
            <div>
              <p>BahirDar Kebele 11</p>
              <p>Ethiopia</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
              095-454-5141
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
              Amanuelbabu16@gmail.com
            </h4>
          </div>
        </div>
        
        <div className="right">
          <h4>About me</h4>
          <p>
         Hey there!  A passionate React developer and freelancer. I specialize in building fast, user-friendly web applications with modern technologies. My focus is on clean code, responsive design, and seamless user experiences. I’m always excited to bring ideas to life through code. 
          </p>
          <div className="social">
            <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
            <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
            <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;