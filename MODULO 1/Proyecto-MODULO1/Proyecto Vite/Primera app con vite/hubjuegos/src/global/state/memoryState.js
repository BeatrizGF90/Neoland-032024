const dataState = {
  seconds: 0,
  minutes: 0,
  movesCount: 0,
  winCount: 0,
  cards: null,
  interval: null,
  firstCard: false,
  secondCard: false,
  stopGame: null,
  firstCardValue: null,
  secondCardValue: null,
  currentPlayer: "",
  player1Name: "",
  player2Name: "",
  timeLeft: 5, // Tiempo en segundos porque estamos en js
  // board: [
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ],
};

export const getStateMemory = (typeOfValue) => {
  switch (typeOfValue) {
    case "firstCardValue":
      return dataState.firstCardValue;
    case "secondCardValue":
      return dataState.secondCardValue;
    case "seconds":
      return dataState.seconds;
    case "minutes":
      return dataState.minutes;
    case "movesCount":
      return dataState.movesCount;
    case "winCount":
      return dataState.winCount;
    case "all":
      return dataState;

    case "cards":
      return dataState.cards;
    case "interval":
      return dataState.interval;
    case "firstCard":
      return dataState.firstCard;
    case "secondCard":
      return dataState.secondCard;

    case "stopGame":
      return dataState.stopGame;

    // Variables 3 en raya-----------------------
    case "currentPlayer":
      return dataState.currentPlayer;
    case "player1Name":
      return dataState.player1Name;
    case "player2Name":
      return dataState.player2Name;
    case "timer":
      return dataState.timer;
    case "timeLeft":
      return dataState.timeLeft;
    case "board":
      return dataState.board;
    case "all":
      return dataState;
  }
};
export const setStateMemory = (typeOfValue, setValue) => {
  switch (typeOfValue) {
    case "firstCardValue":
      dataState.firstCardValue = setValue;
      break;
    case "secondCardValue":
      dataState.secondCardValue = setValue;
      break;
    case "seconds":
      dataState.seconds = setValue;
      break;
    case "minutes":
      dataState.minutes = setValue;
      break;
    case "movesCount":
      dataState.movesCount = setValue;
      break;
    case "winCount":
      dataState.winCount = setValue;
      break;
    case "cards":
      dataState.cards = setValue;
      break;
    case "interval":
      dataState.interval = setValue;
      break;
    case "firstCard":
      dataState.firstCard = setValue;
      break;
    case "secondCard":
      dataState.secondCard = setValue;
      break;

    case "stopGame":
      dataState.stopGame = setValue;
      break;

    // Variables 3 en raya-----------------------

    case "currentPlayer":
      dataState.currentPlayer = setValue;
      break;
    case "player1Name":
      dataState.player1Name = setValue;
      break;
    case "player2Name":
      dataState.player2Name = setValue;
      break;
    case "timer":
      dataState.timer = setValue;
      break;
    case "timeLeft":
      dataState.timeLeft = setValue;
      break;
    case "board":
      dataState.board = setValue;
      break;
  }
};
