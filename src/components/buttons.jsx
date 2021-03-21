import React from "react";
import "../component-styles/buttons.css";

export default function Buttons(props) {
  return (

  <div className = "buttons">
<button onClick={props.about} className="menuButton">About</button>
<br></br>
<button onClick={props.skills} className="menuButton">Skills</button>
<br></br>
<button onClick={props.awards} className="menuButton">Awards</button>
<br></br>
<button onClick={props.experience} className="menuButton">Experience</button>
<br></br>
<button onClick={props.contact} className="menuButton">Contact</button>
      </div>
  
  );
}