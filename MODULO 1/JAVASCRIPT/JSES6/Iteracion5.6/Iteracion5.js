// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input = document.querySelector("[data-function=toFilterStreamers]");

const filterString = (inputValue) => {
  // Necesito el if para que si yo no meto nada y pulso enter no me salga todo el array.
  if (inputValue.lenght <= 0) {
    return;
  }
  const nuevoStreamers3 = streamers3.filter((user) =>
    user.name.toLowerCase().includes(inputValue)
  );
  // para que solo me saque el nombre del streamer hago un for of.
  for (let streamer of nuevoStreamers3) {
    console.log(streamer.name);
  }
};

input.addEventListener("change", (evento) => {
  filterString(evento.target.value);
});

// Otra manera:
// const input = document.getElementById("texoABuscar");
// const resultados = document.getElementById("resultados");

// const streamers2 = [
//   { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
//   { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
//   { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
//   { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
// ];

// input.addEventListener("input", (e) => {
//   e.preventDefault();
//   const streamers2Buscador = streamers2.filter((player) =>
//     player.name.toLowerCase().includes(input.value)
//   );
//   console.log(streamers2Buscador);
//   resultados.innerHTML = streamers2Buscador.map((element) => element.name); //con esto lo que hago es inyectarlo en el html, y con el .map recorro el array y saco el  .name
// });
