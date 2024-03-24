// Crea una función llamada swap() que reciba un array y dos parametros
// que sean indices del array. La función deberá intercambiar la posición
// de los valores de los indices que hayamos enviado como parametro.
// Retorna el array resultante.

const futbolistas = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (array, indiceOne, indiceTwo) => {
  const copyFutbolistas = [...array];
  const valorIndiceOne = copyFutbolistas[indiceOne];
  // si no creo esta variable pierdo el valor de indice one porque pasa a valer indice two

  copyFutbolistas[indiceOne] = copyFutbolistas[indiceTwo];
  copyFutbolistas[indiceTwo] = valorIndiceOne;
  console.log(copyFutbolistas);
};
const result = swap(futbolistas, 0, 1);
