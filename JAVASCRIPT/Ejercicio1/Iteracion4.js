// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IRONMAN";
console.log(avengers[0]);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters1 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters1.pop();
console.log(rickAndMortyCharacters1[0]);
console.log(rickAndMortyCharacters1[4]);

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
delete rickAndMortyCharacters1[1];

/** rickAndMortyCharacters1.splice(1, 3) --> borra el segundo elemento(es la posición que le he dado en el 1),
 *  y los dos siguientes( hasta 3 que es el segundo dato que he puesto en el splice)
 */
console.log(rickAndMortyCharacters1);
