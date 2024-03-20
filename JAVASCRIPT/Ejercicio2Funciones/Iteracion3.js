const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = (param) => {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  return suma;
};
console.log(sumAll(numbers));
