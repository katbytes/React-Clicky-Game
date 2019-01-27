import React from "react";
import "./card.css";

const Cards = props => (
  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <img alt={props.artist} src={props.image} />
      <div className="overlay">
        <div className="text">
          {props.title}
          <br />
          by 
          <br />
          {props.artist} in {props.year}
        </div>
      </div>
    </div>
  </div>
);

export default Cards;