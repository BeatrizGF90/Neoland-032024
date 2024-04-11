import { getStateMemory, setStateMemory } from "../global/state/memoryState";
import Swal from "sweetalert2";
import { PrintTresEnRayaPage } from "../pages";

let timer;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Función para iniciar el temporizador
export const startTimer = () => {
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
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  PrintTresEnRayaPage();
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

    resetTimer();
    generateBoard();
  });
};

// Generar tablero de juego
export const generateBoard = () => {
  resetGame();
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
  const rowIndex = parseInt(event.target.dataset.row); // obtiene el índice de fila de la celda en la que se hizo clic
  const colIndex = parseInt(event.target.dataset.col); // obtiene el índice de fila de la celda en la que se hizo clic
  console.log("board", board);

  if (board[rowIndex][colIndex] === "") {
    //verifica si la celda en la que se hizo clic está vacía en el tablero
    board[rowIndex][colIndex] = getStateMemory("currentPlayer"); //Se asigna el símbolo del jugador actual a la celda en la que se hizo clic en el tablero.
    event.target.textContent = getStateMemory("currentPlayer"); //Se actualiza el texto visible en la celda del tablero para reflejar el símbolo del jugador actual.
    checkWinner(); // chequear si hay un ganador despues del movimiento,si no lo hay sigue con el código.
    setStateMemory(
      "currentPlayer",
      getStateMemory("currentPlayer") === "X" ? "O" : "X" //Se actualiza el jugador actual para el siguiente movimiento, alternando entre "X" y "O".
    );
    //Se determina quién es el próximo jugador basándose en el jugador actual y los nombres de los jugadores almacenados en la memoria del estado.
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
  const player1Input = document.getElementById("player1");
  const player2Input = document.getElementById("player2");
  const messageDisplay = document.getElementById("message");
  const timerDisplay = document.getElementById("timer");

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

  //inicio un bucle for...of que recorre cada combinación dentro de winningCombinations.
  for (const combination of winningCombinations) {
    const [a, b, c] = combination; //desestructuro cada combinación en tres variables a, b y c, que representan las posiciones en el tablero que deben ser iguales para determinar un ganador.
    console.log("board", board);
    //verifico si las posiciones del tablero en las posiciones a, b y c son iguales y diferentes de una cadena vacía.
    if (
      board[a[0]][a[1]] !== "" &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      // Hay un ganador
      const winner = board[a[0]][a[1]]; //Determino quién es el ganador basado en el valor en la posición "a" del tablero.
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

      player1Input.value = "";
      player2Input.value = "";
      setStateMemory("currentPlayer", "");
      messageDisplay.textContent = "";
      timerDisplay.textContent = "";
      clearInterval(timer);

      resetTimer(); // Reiniciar el temporizador al finalizar la partida
      generateBoard(); // Reiniciar el tablero al finalizar la partida

      return;
    }
  }

  // Si no hay ganador y el tablero está lleno, es un empate.
  // con flat convierto esta matriz en un array unidimensional y busco si existe una celda vacía con include "", luego lo niego. (si no existe ninguna celda vacía)
  if (!board.flat().includes("")) {
    const messages = [
      "Casi casi, quiza la próxima vez",
      "jajajaj ¿Qué ha pasado?",
      "Parece que la fuerza no estaba con ninguno",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
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

    player1Input.value = "";
    player2Input.value = "";
    setStateMemory("currentPlayer", "");
    messageDisplay.textContent = "";
    timerDisplay.textContent = "";
    clearInterval(timer);

    resetTimer(); // Reiniciar el temporizador al finalizar la partida
    generateBoard(); // Reiniciar el tablero al finalizar la partida
  }
};
