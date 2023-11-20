import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container row">
          <div class="footer-col">
            <h4>Directions</h4>
            <ul>
              <li>
                <a href="#">Everest Base Camp Mussoorie</a>
              </li>
              <li>
                <a href="#">Park Estate,Hathipaon road</a>
              </li>
              <li>
                <a href="#">Mussoorie,Uttarakhand</a>
              </li>
              <li>
                <a href="#"> (248179) </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Call us now for Reservations</h4>
            <a href="#" style={{ textDecoration: "none" }}>
              <p style={{ color: "white" }}>+91-8595274861</p>
            </a>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              {/* <a href="#">
                <i class="fa-brands fa-x-twitter"></i>
              </a> */}
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              {/* <a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
              </a> */}
            </div>
          </div>
          <div class="footer-col">
            <h4>Important Links</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Activities</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Our Rooms</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Park Cafe</a>
              </li>
              <li>
                <a href="#">A Glamper's Guide</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
