// Crea una función que reciba por parámetro un array y cuando es un valor number
// lo sume y de lo contrario cuente la longitud del string y lo sume.

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
const averageWord = (param) => {
  let sumaNum = 0;
  let sumaArray = 0;
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] == "number") {
      sumaNum += param[i];
    } else {
      // si quisiera especificar si es strin suma  --> else if (typeof param[i] == "string") {sumaArray += param[i].length;}
      sumaArray += param[i].length;
    }
  }
  const sumTotal = sumaNum + sumaArray;
  return sumTotal;
};
console.log(averageWord(mixedElements));
