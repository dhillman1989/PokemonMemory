import React, { PureComponent } from "react";
import "../styles/scoreboard.scss";

const ScoreBoard = ({ score, best }) => {
  return (
    <div className="scoreboard">
      <img src="https://fontmeme.com/permalink/210218/3cdd178a46a02c1dad79c44e857087e3.png" />
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
