// import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import Swal from "sweetalert2";
import { getStateMemory, setStateMemory } from "../global/state/memoryState";

let gameTime;

export const startRound = () => {
  const topo = document.getElementById("topo");
  topo.style.display = "block";

  const randomX = Math.random() * (window.innerWidth - 600);
  const randomY = Math.random() * (window.innerHeight - 600);
  topo.style.left = `${randomX}px`;
  topo.style.top = `${randomY}px`;

  gameTime = setTimeout(() => {
    topo.style.display = "none";
    if (getStateMemory("gameRunning")) {
      endGame();
    }
  }, 3000);
};

const endGame = () => {
  resetGame(); //! Preguntar Pedri si está bien ponerlo aquí
  setStateMemory("gameRunning", false);
  Swal.fire({
    position: "center",
    title: `Puntaje: ${getStateMemory("score")}, try again faster 🙈`,
    imageUrl:
      "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712505166/TimeIsOver_tkdjqk.gif",
    imageHeight: 300,
    imageAlt: "A tall image",
    showConfirmButton: false,
    timer: 4000,
  });
};

export const updateScore = () => {
  document.getElementById("score").textContent = getStateMemory("score");
};

export const ocultarTopo = () => {
  const topo = document.getElementById("topo");
  topo.addEventListener("click", () => {
    if (getStateMemory("gameRunning")) {
      setStateMemory("score", getStateMemory("score") + 1);
      updateScore();
      clearTimeout(gameTime);
      topo.style.display = "none"; // Ocultamos el topo

      setTimeout(() => {
        if (getStateMemory("gameRunning")) {
          startRound(); // Iniciamos una nueva ronda después de un breve intervalo
        }
      }, 500);
    }
  });
};

const resetGame = () => {
  const resetBtnt = document.getElementById("resetBtn");
  resetBtnt.addEventListener("click", () => {
    setStateMemory("gameRunning", false);
    clearTimeout(gameTime);
    document.getElementById("topo").style.display = "none";
    setStateMemory("score", 0);
    updateScore();
  });
};
