import React from "react";
import "./StyleCard.css";

function StyleCard(props) {
  return (
    <div className="StyleCard">
      <div className="StyleCard-Container">
        <div className="StyleCard-Main">
          <h1 className="StyleCard-Title">The {props.animal}</h1>
          <h2 className="StyleCard-Subtitle">Conflict Style: {props.name}</h2>
          <p className="StyleCard-Info">{props.info}</p>
        </div>
      </div>
    </div>
  );
}

export default StyleCard;
