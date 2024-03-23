// Usa un bucle for para recorrer todos los destinos del array y elimina
// los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const comun = (array, valor1, valor2) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == valor1 || array[i].id == valor2) {
      array.splice(i, 1);
    }
  }
  return array;
};
const llamadaFuncion = comun(placesToTravel, 11, 40);
console.log(llamadaFuncion);
