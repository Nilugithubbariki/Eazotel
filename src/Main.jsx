import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Main = () => {
  const ContactMe = () => {
    alert("Wellcome to Contact popup");
  };
  return (
    <div className="mainWrapper">
      <div className="header">
        <div className="logoStyle">
          <img
            src="https://static.wixstatic.com/media/1a208f_d273045b8fae45a9ab7d8a9a55f913f0~mv2.png/v1/fill/w_317,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20White.png"
            alt="logo image"
            className="logostyle"
          />
        </div>
        <div className="contact" onClick={ContactMe}>
          <p>Call Us: +91-8595274861</p>
        </div>
        <div className="Main_listStyle">
          <Link to="/AboutusPage" className="anchorStyle">
            <li className="listStyle">About Us</li>
          </Link>
          <Link to="/Activies" className="anchorStyle">
            <li className="listStyle">Activites</li>
          </Link>
          <Link to="/Contact" className="anchorStyle">
            <li className="listStyle">Contacts</li>
          </Link>
          <Link to="/OurRooms" className="anchorStyle">
            <li className="listStyle">Our Rooms</li>
          </Link>
          <Link to="/Gallery" className="anchorStyle">
            <li className="listStyle">Gallery</li>
          </Link>
          <Link to="/ParkCafe" className="anchorStyle">
            <li className="listStyle">Park Cafe</li>
          </Link>
          <Link to="/AGIamper" className="anchorStyle">
            <li className="listStyle">A Glamper's Guide</li>
          </Link>
          <Link to="/Blog" className="anchorStyle">
            <li className="listStyle">Blog</li>
          </Link>
        </div>
        <div className="subStyle">
          <span className="style">Our Rooms</span>
          <br />
          <span>DISCOVER OUR GLAMPING TENTS</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
