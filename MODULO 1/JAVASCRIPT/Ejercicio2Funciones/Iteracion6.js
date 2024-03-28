// Crea una función que reciba por parámetro un array y compruebe si existen
// elementos duplicados, en caso que existan los elimina para retornar un array
//  sin los elementos duplicados.

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
const removeDuplicates = (param) => {
  const arrayNoRepetidos = [];
  for (let i = 0; i < param.length; i++) {
    !arrayNoRepetidos.includes(param[i]) && arrayNoRepetidos.push(param[i]);
  }
  return arrayNoRepetidos;
};
const noRepetidos = removeDuplicates(duplicates);
console.log("noRepetidos: ", noRepetidos);
