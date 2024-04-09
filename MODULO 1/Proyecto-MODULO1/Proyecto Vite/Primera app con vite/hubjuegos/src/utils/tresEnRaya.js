import { getStateMemory, setStateMemory } from "../global/state/memoryState";
import Swal from "sweetalert2";

const timerDisplay = document.getElementById("timer");
const messageDisplay = document.getElementById("message");
let timer;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Función para iniciar el temporizador
export const startTimer = () => {
  resetGame();
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  timer = setInterval(() => {
    setStateMemory("timeLeft", getStateMemory("timeLeft") - 1);
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = `Tiempo restante: ${getStateMemory(
      "timeLeft"
    )}s`;

    if (getStateMemory("timeLeft") === 0) {
      clearInterval(timer);
      Swal.fire({
        position: "center",
        title: "Time is over 🙈, try again faster",
        imageUrl:
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712505166/TimeIsOver_tkdjqk.gif",
        imageHeight: 300,
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, 1000);
};

// Función para reiniciar el temporizador
export const resetTimer = () => {
  clearInterval(timer);
  setStateMemory("timeLeft", 5);
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = `Tiempo restante: ${getStateMemory("timeLeft")}s`;
};

// Reiniciar juego
const resetGame = () => {
  const player1Input = document.getElementById("player1");
  const player2Input = document.getElementById("player2");
  const resetBtn = document.getElementById("reset-btn");
  const messageDisplay = document.getElementById("message");
  const timerDisplay = document.getElementById("timer");
  console.log(resetBtn);
  resetBtn.addEventListener("click", () => {
    player1Input.value = "";
    player2Input.value = "";
    setStateMemory("currentPlayer", "");
    messageDisplay.textContent = "";
    timerDisplay.textContent = "";
    clearInterval(timer);
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    resetTimer();
    generateBoard();
  });
};

// Generar tablero de juego
export const generateBoard = () => {
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";
  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellDiv = document.createElement("div");
      cellDiv.className = "cell";
      cellDiv.dataset.row = rowIndex;
      cellDiv.dataset.col = colIndex;
      cellDiv.textContent = cell;
      cellDiv.addEventListener("click", handleCellClick);
      gameContainer.appendChild(cellDiv);
    });
  });
};

// Manejar clic en celda
const handleCellClick = (event) => {
  const messageDisplay = document.getElementById("message");
  const rowIndex = parseInt(event.target.dataset.row);
  const colIndex = parseInt(event.target.dataset.col);

  if (board[rowIndex][colIndex] === "") {
    board[rowIndex][colIndex] = getStateMemory("currentPlayer");
    event.target.textContent = getStateMemory("currentPlayer");
    checkWinner();
    setStateMemory(
      "currentPlayer",
      getStateMemory("currentPlayer") === "X" ? "O" : "X"
    );
    const nextPlayer =
      getStateMemory("currentPlayer") === "X"
        ? getStateMemory("player1Name")
        : getStateMemory("player2Name");
    messageDisplay.textContent = `Turno de ${nextPlayer}`;
    resetTimer(); // Reiniciar el temporizador en cada movimiento
    startTimer(); // Iniciar nuevamente el temporizador
  }
};

// Verificar si hay un ganador
const checkWinner = () => {
  const winningCombinations = [
    // Filas
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // Columnas
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // Diagonales
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      board[a[0]][a[1]] !== "" &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      // Hay un ganador
      const winner = board[a[0]][a[1]];
      const winnerName =
        winner === "X"
          ? getStateMemory("player1Name")
          : getStateMemory("player2Name");
      Swal.fire({
        position: "center",
        title: `¡Enhorabuena ${winnerName}! Has ganado esta partida.`,
        imageUrl:
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712506092/win_z6setb.gif",
        imageHeight: 300,
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer: 2000,
      });
      resetTimer(); // Reiniciar el temporizador al finalizar la partida
      return;
    }
  }

  // Si no hay ganador y el tablero está lleno, es un empate
  if (!board.flat().includes("")) {
    const messages = [
      "Casi casi, quiza la próxima vez",
      "jajajaj ¿Qué ha pasado?",
      "Parece que la fuerza no estaba con ninguno",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    // alert(randomMessage);
    Swal.fire({
      position: "center",
      title: `${randomMessage}`,
      imageUrl:
        "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712564921/empate_fcjmpp.gif",
      imageHeight: 300,
      imageAlt: "A tall image",
      showConfirmButton: false,
      timer: 2000,
    });
    resetTimer(); // Reiniciar el temporizador al finalizar la partida
  }
};
