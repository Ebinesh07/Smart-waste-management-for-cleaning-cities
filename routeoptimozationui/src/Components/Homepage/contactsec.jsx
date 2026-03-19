import React from "react";
import "./Homepage.css";

function Contact() {
  return (
    <section className="contact">

      {/* Header */}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>Get in touch with us for smart waste solutions and support.</p>
      </div>

      <div className="contact-container">

        {/* Left Form */}
        <div className="contact-form">
          <h3><i className="bi bi-headset"></i>      Get System Support</h3>
          <p>Tell us your issue and we will respond quickly.</p>

          <div className="row">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>

          <input type="text" placeholder="Subject" />

          <textarea placeholder="Describe your issue..." rows="5"></textarea>

          <button>Submit Request →</button>
        </div>

        {/* Right Info */}
        <div className="contact-info">
          <h3><i className="bi bi-info-circle"></i>      Support Information</h3>
          <p>Our team is ready to assist you.</p>

          <div className="info-box">
            <p><i className="bi bi-envelope"></i><strong>      Email:</strong> support@smartwaste.com</p>
            <p><i className="bi bi-telephone-fill"></i><strong>      Phone:</strong> +91 98765 43210</p>
            <p><i className="bi bi-geo-alt-fill"></i><strong>      Location:</strong> Chennai, India</p>
            <p><i className="bi bi-clock-fill"></i><strong>      Hours:</strong> Mon - Sat: 9AM - 6PM</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;