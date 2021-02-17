import React from "react";

import "../styles/cards.scss";

const Cards = ({ dealtCards, cardSelect }) => {
  return (
    <div className="cards">
      {dealtCards.length > 0 &&
        dealtCards.map((card) => (
          <div
            className="cards__card"
            onClick={() => {
              cardSelect(card.name);
            }}
          >
            <img
              className="cards__card-img"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
            />
            <h2>{card.name}</h2>
          </div>
        ))}
    </div>
  );
};

export default Cards;
