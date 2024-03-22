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
  const result = []; // en esta variable voy a guardar la palabra repetida y al lado el número de veces que aparece esa palabra.
  for (let i = 0; i < param.length; i++) {
    !totalPalabrasRepes.includes(param[i]) && totalPalabrasRepes.push(param[i]);
  }
  console.log(totalPalabrasRepes);
  for (let x = 0; x < totalPalabrasRepes.length; x++) {
    sumaPalabrasRepes = 0; // Por si acaso vuelvo a poner la variable sumar a 0.
    for (let z = 0; z < param.length; z++) {
      /** Para cada valor del nuevo array de no repetidas, vuelvo a recorrer el array inicial
       * y cada vez que coincida la palabra con la que estoy comprobando, incremento la variable suma.
       */

      totalPalabrasRepes[x] == param[z] && sumaPalabrasRepes++;
    }
    result.push(`${totalPalabrasRepes[x]}, ${sumaPalabrasRepes}`);
    // A la variable result le añado la palabra que estoy analizando + el número de veces que sale repetida.
  }
  return result;
};
const palabrasRepetidas = repeatCounter(counterWords);
console.log(palabrasRepetidas);
