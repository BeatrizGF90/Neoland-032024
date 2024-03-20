const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
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
