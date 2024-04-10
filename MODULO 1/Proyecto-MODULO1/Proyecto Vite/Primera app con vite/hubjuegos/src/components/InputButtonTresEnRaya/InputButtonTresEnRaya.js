import { generateBoard, startTimer } from "../../utils";
import { getStateMemory, setStateMemory } from "../../global/state/memoryState";

import "./InputButtonTresEnRaya.css";

const template = () => `
<div class="input-container">
     <button id="start-btn" class="btn">Inicio</button>
     <button id="reset-btn" class="btn">Reiniciar</button>
  </div>`;

export const PrintButtonTresEnRaya = () => {
  document.querySelector(".containerButton").innerHTML = template();
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
