import { PrintButtonLetras } from "../../components";

import { gameOver, id, iniciar } from "../../utils/ahorcado";
import "./Ahorcado.css";

const template = () => `<div class="game">
<div class="cuerpo">
  <img id="imagen" src="img/img0.png" alt="Ahorcado" />

    <p id="palabra_a_adivinar"></p>
    <button id="jugar">Obtener palabra</button>

    <p id="resultado"></p>

    <div id="letras"></div>
    </div>
    </div>
</div>`;

const listeners = () => {
  const btn = id("jugar");
  btn.addEventListener("click", iniciar);
};

export const PrintAhorcado = () => {
  document.querySelector("main").innerHTML = template();
  PrintButtonLetras();
  listeners();
  gameOver();
};
