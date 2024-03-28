// 4.1 Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const name1 = users.map((user) => user.name);
console.log(name1);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const name2 = users1.map((user2) => user2.name);
// console.log(name2); si quisiera comprobar que efectivamente tengo un nuevo array de nombres.
const cambio = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith("A")) {
      array[i] = "Anacleto";
    }
  }
  return array;
};

const llamadaFuncion = cambio(name2);
console.log(llamadaFuncion);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const name3 = (array) => {
  const cities2 = [];
  for (palabra of array) {
    if (palabra.isVisited) {
      cities2.push(`${palabra.name} , Visitado`);
    } else {
      cities2.push(palabra.name);
    }
  }
  return cities2;
};
const llamadaCities2 = name3(cities);
console.log(llamadaCities2);
