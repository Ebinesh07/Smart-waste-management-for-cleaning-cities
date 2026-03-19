import React from "react";
import "./Header.css";
import Logoimg from "../../Assets/logo.png";
import Mybtn from "../Commondesign/Mybtn";
import { Link, NavLink } from "react-router-dom";

function Menubar(){
  return(
    <header>
      <div className="logopart">

        <div className="logo">
          <img src={Logoimg} alt="logo" />
        </div>

        <div className="toggle">
          <i className="bi bi-list"></i>
        </div>

        <div className="menus">
          <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/solution">Solution</Link></li>

            <li className="supername">
              <Link to="/how-it-works">How it works</Link>

              <ul className="submenus">
                <li><Link to="/dashboard">Live Dashboard</Link></li>
                <li><Link to="/alerts">Smart Alerts</Link></li>
                <li><Link to="/route-planning">Route Planning</Link></li>
              </ul>

            </li>

            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>

          </ul>
        </div>

        <div className="rightmenus">
          <i className="bi bi-moon-stars-fill"></i>
          <Mybtn btntitle="Get Started" />
        </div>
                
      </div>
    </header>
  )
}

export default Menubar;