// Crea una función que nos devuelva el número de veces que se repite cada
// una de las palabras que lo conforma.

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
const repeatCounter = (param) => {
  const totalPalabrasRepes = [];
  let sumaPalabrasRepes = 0;
  const result = [];
  for (let i = 0; i < param.length; i++) {
    !totalPalabrasRepes.includes(param[i]) && totalPalabrasRepes.push(param[i]);
  }
  console.log(totalPalabrasRepes);
  for (let x = 0; x < totalPalabrasRepes.length; x++) {
    sumaPalabrasRepes = 0;
    for (let z = 0; z < param.length; z++) {
      totalPalabrasRepes[x] == param[z] && sumaPalabrasRepes++;
    }
    result.push(`${totalPalabrasRepes[x]}, ${sumaPalabrasRepes}`);
  }
  return result;
};
const palabrasRepetidas = repeatCounter(counterWords);
console.log(palabrasRepetidas);
