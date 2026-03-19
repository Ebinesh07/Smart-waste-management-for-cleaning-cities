import React from "react";
import "./Homepage.css";

function Features() {
  return (
    <section className="features">

      <div className="features-header">
        <h4>Features</h4>
        <h1>Smart Waste Management System</h1>
        <p>
          Our platform uses IoT sensors and analytics to improve waste
          monitoring and collection efficiency.
        </p>
      </div>

      <div className="features-container">

        {/* Card 1 */}
        <div className="feature-card1">
          <h2><i className="bi bi-trash3"></i>      Smart Bin Monitoring</h2>
          <p>IoT sensors monitor waste levels and prevent bin overflow.</p>

          <ul>
            <li>Fill Level Detection <span>Real-time monitoring</span></li>
            <li>Overflow Alerts <span>Automatic notifications</span></li>
            <li>Temperature Monitoring <span>Fire prevention</span></li>
            <li>Location Tracking <span>Bin identification</span></li>
            <li>Real-Time Status <span>Dashboard updates</span></li>
            <li>Data Logging <span>Waste data analysis</span></li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="feature-card2">
          <h2><i className="bi bi-truck"></i>      Intelligent Waste Collection</h2>
          <p>AI and analytics help optimize garbage collection.</p>

          <ul>
            <li>Route Optimization <span>Best collection paths</span></li>
            <li>Collection Scheduling <span>Efficient planning</span></li>
            <li>Dashboard Monitoring <span>Live bin tracking</span></li>
            <li>Waste Data Analytics <span>Usage insights</span></li>
            <li>Automated Alerts <span>Team notifications</span></li>
            <li>Smart City Integration <span>Supports IoT systems</span></li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Features;