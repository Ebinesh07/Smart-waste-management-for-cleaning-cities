import React from "react";
import "./Footer.css";
import logoimg from "../../Assets/logo footer image.png";

function Footer() {
  return (
    <footer>
      <div className="footersection">

        <div className="footerlogo">
          <img src={logoimg} alt="footerlogo" />
        </div>

          <div className="content">
            <p>
              Smart waste solutions for cleaner cities using IoT sensors,
              real-time monitoring, and intelligent data analytics.
            </p>

            <a href="#">
              <i className="bi bi-envelope-arrow-up-fill"></i>  support@yourwebsite.com
            </a>
            <br /><br />

            <a href="#">
              <i className="bi bi-telephone-fill"></i>  +91 98765 43210
            </a>
            <br /><br />

            <a href="#">
              <i className="bi bi-geo-alt-fill"></i>  Chennai, Tamil Nadu, India
            </a>
          </div>
          <div className="socialmediaicons">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
          </div>
        

        <div className="footerservice">
          <h3>Quick Links</h3>
          <a href="#"><p>Home</p></a>
          <a href="#"><p>About Us</p></a>
          <a href="#"><p>Solutions</p></a>
          <a href="#"><p>How It Works</p></a>
          <a href="#"><p>Features</p></a>
          <a href="#"><p>Contact Us</p></a>
        </div>

        <div className="footersolutions">
          <h3>Solutions</h3>
          <a href="#"><p>Smart Bin Monitoring</p></a>
          <a href="#"><p>Real-Time Waste Level Detection</p></a>
          <a href="#"><p>Route Optimization</p></a>
          <a href="#"><p>How It Works</p></a>
          <a href="#"><p>IoT Sensor Integration</p></a>
          <a href="#"><p>Data Analytics Dashboard</p></a>
        </div>

        <div className="footersupport">
          <h3>Support</h3>
          <a href="#"><p>FAQ</p></a>
          <a href="#"><p>User Guide</p></a>
          <a href="#"><p>Report Issue</p></a>
          <a href="#"><p>Contact Support</p></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;