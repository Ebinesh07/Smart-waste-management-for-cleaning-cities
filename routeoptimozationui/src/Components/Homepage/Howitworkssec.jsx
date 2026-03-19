import React from "react";
import "./Homepage.css";

function Howitworks (){
    return(
        <section className="howitworks">
            <div className="howitworkssec">
            <h4>How It Works</h4>
            <h1>Monitoring Public Projects in 4 Simple Steps</h1>
            <p>Our platform ensures transparency and accountability in government development projects by tracking progress, monitoring milestones, and providing clear updates to the public.</p>
            </div>
            <div className="steps">
                <div className="step">
                    <h1 className="circle">01</h1>
                    <h3>Project Registration</h3>
                    <p>Government departments register new development projects with details such as location, budget, timeline, and objectives.</p>
                </div>
                <div className="step">
                    <h1>02</h1>
                    <h3>Milestone Planning</h3>
                    <p>Each project is divided into milestones like planning, construction phases, and completion to track progress clearly.</p>
                </div>
                <div className="step">
                    <h1>03</h1>
                    <h3>Progress Updates</h3>
                    <p>Officials upload updates, reports, and status changes for every milestone, ensuring real-time monitoring.</p>
                </div>
                <div className="step">
                    <h1>04</h1>
                    <h3>Public Transparency</h3>
                    <p>Citizens and authorities can view project progress through dashboards, promoting transparency and accountability.</p>
                </div>

            </div>
        </section>
    )
}
export default Howitworks;
