import React from "react";
import "./Header.css";
import Logoimg from "../../Assets/logo.png";
import Mybtn from "../Commondesign/Mybtn";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Menubar(){
  const [showmenu,setShowmenu]=useState(false)

  function closemenu(){
  setShowmenu(false)
}
  return(
    <header>
      <div className="logopart">

        <div className="logo">
          <img src={Logoimg} alt="logo" />
        </div>

        <div className="toggle" onClick={()=>{setShowmenu(!showmenu)}}>
          <i className="bi bi-list"></i>
        </div>

        <div className={showmenu ? "menus active" : "menus"}>
          <ul>

            <li><Link to="/" onClick={closemenu}>Home</Link></li>
            <li><Link to="/service" onClick={closemenu}>Service</Link></li>
            <li><Link to="/solution" onClick={closemenu}>Solution</Link></li>

            <li className="supername">
              <Link to="/how-it-works" onClick={closemenu}>How it works</Link>

              <ul className="submenus">
                <li><Link to="/dashboard" onClick={closemenu}>Live Dashboard</Link></li>
                <li><Link to="/alerts" onClick={closemenu}>Smart Alerts</Link></li>
                <li><Link to="/route-planning" onClick={closemenu}>Route Planning</Link></li>
              </ul>

            </li>

            <li><Link to="/features" onClick={closemenu}>Features</Link></li>
            <li><Link to="/contact" onClick={closemenu}>Contact Us</Link></li>

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