import React from "react"
import "./Homepage.css"

function Service(){
    return(
        <section className="sevicesections">
            <div className="sevicesection">
            <h4>Service</h4>
            <h1>Smart Waste Solutions for Modern Cities</h1>
            <p>Our platform uses IoT sensors and intelligent analytics to improve waste collection efficiency and create cleaner cities.</p>
            </div>
            <div className="servicegridcards">
                <div className="grids">
                <i className="bi bi-broadcast"></i> 
                <h1>IoT Bin Monitoring</h1>
                <p>Smart sensors installed in bins detect waste levels and send real-time data to the monitoring system.</p>
                </div>
                <div className="grids">
                <i className="bi bi-signpost-split"></i>
                <h1>AI Route Optimization</h1>
                <p>Our system analyzes bin status and traffic conditions to generate the most efficient collection routes.</p>
                </div>
                <div className="grids">
                <i className="bi bi-display"></i>
                <h1>Real-Time Monitoring</h1>
                <p>Analyze waste generation patterns and optimize waste management strategies.</p>
                </div>
                <div className="grids">
                <i className="bi bi-calendar-check"></i>
                <h1>Smart Collection Scheduling</h1>
                <p>Automatically schedule waste collection based on bin fill levels.</p>
                </div>
                <div className="grids">
                <i className="bi bi-building"></i>
                <h1>Smart City Integration</h1>
                <p>Designed to integrate with smart city infrastructure for sustainable urban development.</p>
                </div>
                <div className="grids">
                <i className="bi bi-bar-chart-line"></i>
                <h1>Waste Data Analytics</h1>
                <p>Analyze waste generation patterns and optimize waste management strategies.</p>
                </div>
                </div>

        </section>

    )
}
export default Service;

