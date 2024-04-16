import { PrintButtonTresEnRaya } from "../../components/InputButtonTresEnRaya/InputButtonTresEnRaya";

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
        <div class="containerButton"></div>
        <button id="info-btn" class="btn">Info</button>
      </div>
      <div id="game-container" class="game-container">
        <!-- Aquí generaré el tablero de juego dinámicamente -->
      </div>

      <div id="timer" class="timer">Tiempo restante: 5s</div>
      <div id="message" class="message"></div>
    </div>`;

// Iniciar juego

export const PrintTresEnRayaPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintButtonTresEnRaya();
};
