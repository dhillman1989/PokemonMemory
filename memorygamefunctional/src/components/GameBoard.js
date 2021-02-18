import React, { useState, useEffect } from "react";
import axios from "axios";

import Cards from "./Cards";
import ScoreBoard from "./ScoreBoard";
import LevelUp from "./LevelUp";
import GameOver from "./GameOver";
import Footer from "./Footer";

const GameBoard = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cardDeck, updateCardDeck] = useState([]);
  const [dealtCards, setDealtCards] = useState([]);
  const [usedCards, setUsedCards] = useState([]);
  const [difficulty, setDifficulty] = useState(6);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [gameover, setGameover] = useState(false);

  const dealCards = (num) => {
    const deck = [...cardDeck];
    let myCards = [];
    for (let i = 0; i < num; i++) {
      let randNum = Math.floor(Math.random() * deck.length);
      let card = deck[randNum];
      if (card && myCards.some((c) => c.name == card.name)) {
        i--;
      } else {
        myCards.push({ ...card, id: randNum + 1 });
      }
    }
    setDealtCards(myCards);
  };

  const shuffleCards = () => {
    console.log("shuffle");
    let shuffledCards = [];
    for (let i = 0; i < dealtCards.length; i++) {
      let randNum = Math.floor(Math.random() * dealtCards.length);
      let card = dealtCards[randNum];
      if (shuffledCards.some((c) => c.name == card.name)) {
        i--;
      } else {
        shuffledCards.push(card);
      }
    }
    setDealtCards([...shuffledCards]);
  };

  const increaseScore = () => {
    console.log("SCORE POINT");
    setScore(score + 1);
  };

  const resetGame = () => {
    console.log("RESET GAME");
    if (score > best) {
      console.log("SET BEST SCORE");
      setBest(score);
    }
    setScore(0);
    setUsedCards([]);
    setDealtCards([]);
    setDifficulty(6);
    setGameover(false);
    dealCards(difficulty);
  };

  const levelUpCheck = () => {
    if (usedCards.length == difficulty) {
      setShowLevelUp(true);
      setDifficulty(difficulty + 1);
      setUsedCards([]);
      setDealtCards([]);
      dealCards(difficulty + 1);
      setTimeout(() => setShowLevelUp(false), 1500);
    }
  };

  const cardSelect = (name) => {
    console.log("SELECT CARD");
    if (usedCards.some((used) => used == name)) {
      console.log("BAD CARD");
      setGameover(true);
    } else {
      console.log("GOOD CARD");
      setUsedCards([...usedCards, name]);
      increaseScore();
      shuffleCards();
    }
  };

  //GET CARD DECK ON FIRST MOUNT
  useEffect(async () => {
    let cardData = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151",
      { mode: "cors" }
    );
    updateCardDeck(cardData.data.results);
  }, []);

  useEffect(() => {
    dealCards(difficulty);
  }, [cardDeck, difficulty]);

  useEffect(() => {
    levelUpCheck();
  }, [usedCards]);

  return (
    <div>
      <ScoreBoard score={score} best={best} />

      <Cards dealtCards={dealtCards} cardSelect={cardSelect} />
      {showLevelUp ? <LevelUp /> : null}
      {gameover ? <GameOver resetGame={resetGame} /> : null}
      <Footer />
    </div>
  );
};

export default GameBoard;
