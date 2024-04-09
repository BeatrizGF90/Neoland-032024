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

let score = 0;
let gameTime;
let gameRunning = false;

const startGame = () => {
  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", () => {
    if (!gameRunning) {
      gameRunning = true;
      score = 0;
      ocultarTopo();
      updateScore();
      startRound();
    }
  });
};

const resetGame = () => {
  const resetBtnt = document.getElementById("resetBtn");
  resetBtnt.addEventListener("click", () => {
    gameRunning = false;
    clearTimeout(gameTime);
    document.getElementById("topo").style.display = "none";
    score = 0;
    updateScore();
  });
};

const startRound = () => {
  const topo = document.getElementById("topo");
  topo.style.display = "block";

  const randomX = Math.random() * (window.innerWidth - 600);
  const randomY = Math.random() * (window.innerHeight - 600);
  topo.style.left = `${randomX}px`;
  topo.style.top = `${randomY}px`;

  gameTime = setTimeout(() => {
    topo.style.display = "none";
    if (gameRunning) {
      endGame();
    }
  }, 3000);
};

const endGame = () => {
  gameRunning = false;
  alert(`¡Juego Terminado! Puntaje: ${score}`);
};

const updateScore = () => {
  document.getElementById("score").textContent = score;
};

const ocultarTopo = () => {
  const topo = document.getElementById("topo");
  topo.addEventListener("click", () => {
    if (gameRunning) {
      score++;
      updateScore();
      clearTimeout(gameTime);
      topo.style.display = "none"; // Ocultamos el topo

      setTimeout(() => {
        if (gameRunning) {
          startRound(); // Iniciamos una nueva ronda después de un breve intervalo
        }
      }, 500);
    }
  });
};

export const PrintTopoPage = () => {
  document.querySelector("main").innerHTML = template();
  startGame();
  resetGame();
};
