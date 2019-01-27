import React from "react";
import "./scoreboard.css";

function Scoreboard(props) {
  return (
    <header className="scoreB">
      <div className="row">
        <div className="col-md-6 col-left"><h5>{props.title}</h5></div>
        <div className="col-md-3 col-right"><h6>High Score {props.score}</h6></div>
        <div className="col-md-3 col-right"><h6>Current Score: {props.topScore}</h6></div>
      </div>
      <div className="row">
      <div className="col-md-12 col-right">
      <h6>Click on a famous art work, but don't click on it more than once!</h6></div>
      </div>
    </header>
  );
}

export default Scoreboard;
