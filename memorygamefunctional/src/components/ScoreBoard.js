import React, { PureComponent } from "react";
import "../styles/scoreboard.scss";

const ScoreBoard = ({ score, best }) => {
  return (
    <div className="scoreboard">
      <h1>PokeMem</h1>
      <ul>
        <li>
          <span>Score:</span> {score}
        </li>
        <li>
          <span>Best Score:</span> {best}
        </li>
      </ul>
    </div>
  );
};

export default ScoreBoard;
