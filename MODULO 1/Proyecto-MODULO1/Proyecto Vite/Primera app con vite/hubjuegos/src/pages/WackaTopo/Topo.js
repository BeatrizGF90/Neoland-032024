import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import { ocultarTopo, startRound, updateScore } from "../../utils/topo";
import "./Topo.css";

const template = () => `<div class="containerTopo">
      <h1>Golpear al Topo</h1>
      <p>Topos golpeados: <span id="score">0</span></p>
      <button id="startBtn">Iniciar Juego</button>
      <button id="resetBtn">Reiniciar Juego</button>
      <div id="gameArea">
        <img
          src="https://res.cloudinary.com/dszkfnjwy/image/upload/v1712654671/topo_lqtlow.png"
          alt="Topo"
          id="topo"
        />
      </div>
    </div>`;

const startGame = () => {
  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", () => {
    if (!getStateMemory("gameRunning")) {
      setStateMemory("gameRunning", true);
      setStateMemory("score", 0);
      ocultarTopo();
      updateScore();
      startRound();
    }
  });
};

export const PrintTopoPage = () => {
  document.querySelector("main").innerHTML = template();
  startGame();
};
