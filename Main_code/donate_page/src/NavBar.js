import NavBarCSS from "./NavBar.css";
import React, { useState, useEffect } from "react";

export default function Nav() {
  return (
    <div className="navbar rowa" style={NavBarCSS}>
      <ul className="nav-list one rowa">
        <li className="nav-item">
          <a href="../home/index.html" className="a">
            {/*<img src="https://imj31us4am50.github.io/imgs/home-icon.png" className="icon"/>*/}
            ACASĂ
          </a>
        </li>
        <li className="nav-item">
          <a href="../articole/index.html" className="a">
            ARTICOLE
          </a>
        </li>
        <li className="nav-item current">
          <a href="./index.html" className="a">
            DONEAZĂ
          </a>
        </li>
      </ul>

      <ul className="nav-list two rowa">
        <li className="nav-item">
          <a href="../about/index.html" className="a">
            DESPRE
          </a>
        </li>
        <li className="nav-item bg">
          <a href="../account/index.html" className="a">
            CONTUL MEU
          </a>
        </li>
      </ul>
    </div>
  );
}
