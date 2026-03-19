import React from "react";
import "./Commondesign.css";

function Mybtn({ btntitle }) {
  return (
    <div className="rightbtn">
      <button>{btntitle}</button>
    </div>
  );
}

export default Mybtn;