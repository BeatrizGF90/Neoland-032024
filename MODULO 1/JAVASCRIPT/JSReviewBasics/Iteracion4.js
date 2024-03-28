// Crea una función llamada findArrayIndex que reciba como
//  parametros un array de textos y un texto y devuelve la
//  posición del array cuando el valor del array sea igual
//  al valor del texto que enviaste como parametro.
//  Haz varios ejemplos y compruebalos.

const animales = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
const superHeroes = [
  "Batman",
  "Superman",
  "WonderWoman",
  "Viuda Negra",
  "Hulk",
];
const findArrayIndex = (array, text) => {
  for (let i = 0; i < array.length; i++) {
    array[i].toLowerCase() === text.toLowerCase() &&
      console.log(
        `la palabra: ${text} aparece en la posición ${i} del array: ${array}`
      );
  }
};
const result = findArrayIndex(animales, "Mosquito");
const resultSuperHeroes = findArrayIndex(superHeroes, "Viuda Negra");
