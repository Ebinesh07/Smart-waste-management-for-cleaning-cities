import React from "react";
import "./Solution.css";

function Solution() {
  return (
    <section className="solution">

      <div className="solution-header">
        <h4>Our Solution</h4>
        <h1>Smart Waste Management System</h1>
        <p>
          Our solution uses IoT sensors, AI-powered analytics, and real-time monitoring
          to transform waste collection into an efficient and sustainable system.
        </p>
      </div>

      <div className="solution-cards">

        <div className="solution-card">
          <i className="bi bi-cpu"></i>
          <h2>IoT Integration</h2>
          <p>
            Smart sensors installed in bins monitor waste levels, temperature, and location
            to provide accurate real-time data.
          </p>
        </div>

        <div className="solution-card">
          <i className="bi bi-graph-up"></i>
          <h2>Data Analytics</h2>
          <p>
            Advanced analytics help authorities understand waste patterns and improve
            decision-making for better city management.
          </p>
        </div>

        <div className="solution-card">
          <i className="bi bi-truck"></i>
          <h2>Optimized Collection</h2>
          <p>
            AI-based route planning ensures efficient garbage collection, reducing fuel
            costs and improving operational efficiency.
          </p>
        </div>
            <div className="solution-card">
            <i className="bi bi-bell"></i>
            <h2>Smart Alerts System</h2>
            <p>
                The system sends instant alerts when bins are full, damaged, or require immediate attention,
                helping authorities respond quickly and efficiently.
            </p>
            </div>

            <div className="solution-card">
            <i className="bi bi-cloud-check"></i>
            <h2>Cloud Data Management</h2>
            <p>
                All waste data is securely stored in the cloud, enabling real-time access, analysis,
                and seamless integration with dashboards and smart city platforms.
            </p>
            </div>

        <div className="solution-card">
          <i className="bi bi-globe"></i>
          <h2>Smart City Ready</h2>
          <p>
            Easily integrates with smart city infrastructure to build cleaner,
            greener, and more sustainable urban environments.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Solution;