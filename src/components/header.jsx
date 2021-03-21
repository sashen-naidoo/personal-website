
import React from "react";
import "../component-styles/header.css";
import hs from "../hs-circle.png";

export default function Header() {
  return (
    <div className="Header">

    <img alt="a headshot" className = "headShotImg" src = {hs}  ></img><br></br>

    <b>Sashen Naidoo</b>
    
    <div className = "title">
    Final year computer science student at UCT
    </div>
  
    </div>

  );
  }