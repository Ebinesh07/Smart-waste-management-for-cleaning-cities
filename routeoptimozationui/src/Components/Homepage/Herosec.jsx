import React from "react"
import "./Homepage.css"
import heroimg from "../../Assets/image1.png"
import Mybtn from "../Commondesign/Mybtn";
import Mybtn2 from "../Commondesign/Mybtn2";

function Herosection(){
    return(
        <section className="herosections">
         <div className="herosection">
            <div className="herocontent">
                <h4><i class="bi bi-arrow-down-right-square-fill"></i>    Licensed & Insured in TamilNadu</h4>
                <h1>Intelligent Waste Management for Smart Cities</h1>
                <p>Using IoT sensors and AI analytics, our platform monitors waste levels, optimizes collection routes, and keeps urban environments cleaner and more sustainable.</p>
                <div className="herobutton">
                <Mybtn btntitle="Learn More"/>
                <Mybtn2 btntitle="Get Started"/>
                </div>
            </div>
            <div className="imagesec">
                <img src={heroimg} alt="banner" />
            </div>
         
        </div>
            <div className="statisticssection">
                <h1>500+ <br /><span><p>Smart Bins</p></span></h1>
                <h1>95% <br /><span><p>Efficiency</p></span></h1>
                <h1>10+ <br /><span><p>Cities</p></span></h1>
                <h1>24/7 <br /><span><p>Monitoring</p></span></h1>
             <div className="feature-card">
                <h3 className="feature-title"><i class="bi bi-check-circle"></i>   IoT Smart Monitoring</h3>
                <p className="feature-text">Real-time waste level tracking</p>
            </div>
            </div>
            
         <div className="wave-section">
          <hr />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f0f7ff" fillOpacity="1" d="M0,256L34.3,229.3C68.6,203,137,149,206,138.7C274.3,128,343,160,411,160C480,160,549,128,617,128C685.7,128,754,160,823,154.7C891.4,149,960,107,1029,112C1097.1,117,1166,171,1234,170.7C1302.9,171,1371,117,1406,90.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
<hr />
  <div className="statisticssection2">

    <div className="stat-card">
      <h2>500+</h2>
      <p>Smart Bins Installed</p>
    </div>

    <div className="stat-card">
      <h2>95%</h2>
      <p>Collection Efficiency</p>
    </div>

    <div className="stat-card">
      <h2>20+</h2>
      <p>Smart Collection Vehicles</p>
    </div>

    <div className="stat-card">
      <h2>10+</h2>
      <p>Cities Implemented</p>
    </div>

  </div>

</div>
           
        </section>
        
    )
};
export default Herosection;