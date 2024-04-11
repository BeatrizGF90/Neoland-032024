import { PrintButtonTopo } from "../../components";
import "./Topo.css";

const template = () => `<div class="containerTopo">
      <h1>Golpear al Topo</h1>
      <p>Topos golpeados: <span id="score">0</span></p>
      <div class="containerButton"></div>
      <div id="gameArea">
        <img
          src="https://res.cloudinary.com/dszkfnjwy/image/upload/v1712654671/topo_lqtlow.png"
          alt="Topo"
          id="topo"
        />
      </div>
    </div>`;

export const PrintTopoPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintButtonTopo();
};
