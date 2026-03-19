import React from "react";
import "./Dashboard.css";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function Dashboard() {

  const bins = [
    { id: 1, location: "Area A", status: "Full" },
    { id: 2, location: "Area B", status: "Half" },
    { id: 3, location: "Area C", status: "Empty" },
    { id: 4, location: "Area D", status: "Full" },
  ];

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Waste Collected (kg)",
        data: [50, 75, 60, 90, 70],
        backgroundColor: "#4d7c0f",
      },
    ],
  };

  return (
    <section className="dashboard">

      <h1>Smart Waste Dashboard</h1>

      {/* SUMMARY */}
      <div className="summary">

        <div className="box">
          <i className="bi bi-trash"></i>
          <h2>120</h2>
          <p>Total Bins</p>
        </div>

        <div className="box">
          <i className="bi bi-exclamation-triangle"></i>
          <h2>35</h2>
          <p>Full Bins</p>
        </div>

        <div className="box">
          <i className="bi bi-check-circle"></i>
          <h2>50</h2>
          <p>Collected Today</p>
        </div>

      </div>

      {/* BIN STATUS */}
      <h2>Bin Status</h2>
      <div className="cards">

        {bins.map((bin) => (
          <div className="card" key={bin.id}>
            <h3>Bin {bin.id}</h3>
            <p>{bin.location}</p>

            <span className={`status ${bin.status.toLowerCase()}`}>
              {bin.status}
            </span>
          </div>
        ))}

      </div>

      {/* PROGRESS */}
      <h2>Collection Progress</h2>

      <div className="progress-box">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <p>70% Completed</p>
      </div>

      {/* CHART */}
      <h2>Weekly Waste Collection</h2>

      <div className="chart-box">
        <Bar data={data} />
      </div>

    </section>
  );
}

export default Dashboard;