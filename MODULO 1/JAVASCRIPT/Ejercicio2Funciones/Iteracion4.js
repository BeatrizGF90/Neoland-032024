const numbers = [12, 21, 38, 5, 45, 37, 6];
const average = (array) => {
  let promedio = 0;
  for (let i = 0; i < array.length; i++) {
    promedio += array[i];
  }
  return promedio / array.length;
};
console.log(average(numbers));
