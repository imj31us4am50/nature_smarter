import NavBarCSS from "./NavBar.css";
import React, { useState, useEffect } from "react";

export default function Nav() {
  return (
    <div className="navbar rowa" style={NavBarCSS}>
      <ul className="nav-list one rowa">
        <li className="nav-item">
          <a href="../home/index.html">ACASĂ</a>
        </li>
        <li className="nav-item">
          <a href="../articole/index.html">ARTICOLE</a>
        </li>
        <li className="nav-item">
          <a href="../donate/index.html">DONEAZĂ</a>
        </li>
      </ul>

      <ul className="nav-list two rowa">
        <li className="nav-item">
          <a href="../about/index.html">DESPRE</a>
        </li>
        <li className="nav-item bg current">
          <a href="./index.html">CONTUL MEU</a>
        </li>
      </ul>
    </div>
  );
}
