import React from "react";
import "./scoreboard.css";

function Scoreboard(props) {
  return (
    <header className="scoreB">
      <div className="row">
        <div className="col-md-6 col-left">
          <h1>{props.title}</h1>
        </div>
        <div className="col-md-6 col-right">
          <p>Random Number: {props.randomId}</p>
          <p>Score: {props.score}</p>
          <p>Tally: {props.tally}</p>
        </div>
      </div>
    </header>
  );
}

export default Scoreboard;
