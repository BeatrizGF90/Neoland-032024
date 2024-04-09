import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import { generateBoard, startTimer } from "../../utils";
import "./TresEnRaya.css";

const template = () => `<div id="containerTresEnRaya">
<div class="fondo"></div>
<div class="container">
      <h1>3 en Raya - Jugador vs Jugador</h1>
      <div class="input-container">
        <label for="player1">Nombre del Jugador 1:</label>
        <input type="text" id="player1" placeholder="Bea" /><br></br>
        <label for="player2">Nombre del Jugador 2:</label>
        <input type="text" id="player2" placeholder="Sara" /><br></br>
        <button id="start-btn" class="btn">Inicio</button>
        <button id="reset-btn" class="btn">Reiniciar</button>
        <button id="info-btn" class="btn">Info</button>
      </div>
      <div id="game-container" class="game-container">
        <!-- Aquí se generará el tablero de juego dinámicamente -->
      </div>

      <div id="timer" class="timer">Tiempo restante: 5s</div>
      <div id="message" class="message"></div>
    </div>`;

// Iniciar juego
const startGame = () => {
  const messageDisplay = document.getElementById("message");
  const timerDisplay = document.getElementById("timer");
  const player1Input = document.getElementById("player1");
  const player2Input = document.getElementById("player2");
  const startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", () => {
    setStateMemory("player1Name", player1Input.value.trim() || "Jugador 1");
    setStateMemory("player2Name", player2Input.value.trim() || "Jugador 2");
    setStateMemory("currentPlayer", "X");
    messageDisplay.textContent = `Turno de ${getStateMemory("player1Name")}`;
    timerDisplay.textContent = `Tiempo restante: ${getStateMemory(
      "timeLeft"
    )}s`;

    startTimer();
    generateBoard();
  });
};

export const PrintTresEnRayaPage = () => {
  document.querySelector("main").innerHTML = template();
  startGame();
  // resetGame();
};
