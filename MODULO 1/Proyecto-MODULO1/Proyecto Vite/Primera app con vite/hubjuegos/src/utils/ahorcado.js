import { palabras } from "../data/ahorcado.data";
import { getStateMemory, setStateMemory } from "../global/state/memoryState";

export const id = (str) => {
  return document.getElementById(str);
};

export const obtener_random = (num_min, num_max) => {
  const amplitud_valores = num_max - num_min; //valor más alto - valor más bajo del random... (7 - 0)
  const valor_al_azar =
    Math.floor(Math.random() * amplitud_valores) +
    num_min; /* 5 - 15 = 10 + 5 */
  return valor_al_azar;
};

export const iniciar = (event) => {
  const imagen = id("imagen");
  imagen.src = "img/img0.png";
  const btn = id("jugar");
  btn.disabled = true;
  setStateMemory("cantAciertos", 0);
  setStateMemory("cantErrores", 0);

  const parrafo = id("palabra_a_adivinar");
  parrafo.innerHTML = "";
  const resultado = id("resultado");
  resultado.innerHTML = "";

  const cant_palabras = palabras.length;
  const valor_al_azar = obtener_random(0, cant_palabras);
  setStateMemory("palabrita", palabras[valor_al_azar]);

  const cant_letras = getStateMemory("palabrita").length;

  const btnLetras = document.querySelectorAll("#letras button");
  for (let i = 0; i < btnLetras.length; i++) {
    btnLetras[i].disabled = false;
  }

  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span");
    parrafo.appendChild(span);
  }
};

export const clickLetras = (event) => {
  const spans = document.querySelectorAll("#palabra_a_adivinar span");
  const button = event.target;
  button.disabled = true;
  const letra = button.innerHTML.toLowerCase();
  const palabra = getStateMemory("palabrita").toLowerCase();
  const resultado = id("resultado");

  let acerto = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      spans[i].innerHTML = letra;
      setStateMemory("cantAciertos", getStateMemory("cantAciertos") + 1);
      acerto = true;
    }
  }

  if (acerto == false) {
    setStateMemory("cantErrores", getStateMemory("cantErrores") + 1);
    const source = `img/img${getStateMemory("cantErrores")}.png`;
    const imagen = document.getElementById("imagen");
    imagen.src = source;
  }

  if (getStateMemory("cantErrores") == 7) {
    resultado.innerHTML = `Perdiste, la palabra era ${getStateMemory(
      "palabrita"
    )}`;
    gameOver();
  } else if (
    getStateMemory("cantAciertos") == getStateMemory("palabrita").length
  ) {
    resultado.innerHTML = "GANASTE!! WIIIIII";
    gameOver();
  }
};

export const gameOver = () => {
  const btnLetras = document.querySelectorAll("#letras button");
  for (let i = 0; i < btnLetras.length; i++) {
    btnLetras[i].disabled = true;
  }
  const btn = id("jugar");
  btn.disabled = false;
};
