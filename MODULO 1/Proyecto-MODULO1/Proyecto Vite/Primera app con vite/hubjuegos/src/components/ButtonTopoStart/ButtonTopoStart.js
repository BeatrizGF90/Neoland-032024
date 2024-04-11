import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import { ocultarTopo, startRound, updateScore } from "../../utils";
import "./ButtonTopoStart.css";

const template = () => `<div class="input-containerTopo">
      <button id="startBtn">Iniciar Juego</button>
      <button id="resetBtn">Reiniciar Juego</button>
    </div>`;

export const PrintButtonTopo = () => {
  document.querySelector(".containerButton").innerHTML = template();
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
