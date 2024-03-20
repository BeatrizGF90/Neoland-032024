const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
const capitales = ["Madrid", "Lisboa", "Berlin", "Paris", "Copenague"];

// function findLongestWord(param) {

const findLongestWord = (array) => {
  let palabraLarga = "";
  for (let palabra of array) {
    if (palabra.length > palabraLarga.length) {
      palabraLarga = palabra;
    }
  }
  return palabraLarga;
};
console.log(findLongestWord(avengers));
console.log(findLongestWord(capitales));

// Otra manera de hacerlo
// const findLongestWord = (avengers) => {
//   let maxLongitud = 0;
//   for (let i = 1; i < avengers.length; i++) {
//     if (avengers[i].length > avengers[maxLongitud].length) maxLongitud = i;
//   }
//   return avengers[maxLongitud];
// };
// console.log(findLongestWord(avengers));
