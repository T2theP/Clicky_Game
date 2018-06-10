import React from "react";
import "./MonsterChoice.css";

const MonsterChoice = props => (
  <div 
    className="choice" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default MonsterChoice;