import React from "react";
import "../styles/gameover.scss";

const GameOver = ({ resetGame }) => {
  return (
    <div className="gameover">
      <img src="https://fontmeme.com/permalink/210218/a44c020704b1fdca09efb56f797e7710.png" />
      <button className="gameover__restart" onClick={() => resetGame()}>
        Restart
      </button>
    </div>
  );
};

export default GameOver;
