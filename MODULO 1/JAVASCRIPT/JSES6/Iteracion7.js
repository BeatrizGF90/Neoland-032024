// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
// los alumnos usando la función .reduce().

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];
const suma = exams.reduce((acc, notas) => acc + notas.score, 0); // Ponemos el valor inicial de la suma en 0.
console.log(suma);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
// alumnos que esten aprobados usando la función .reduce().

const sumaAprobados = exams.reduce(
  (acc, notas) => (notas.score > 4 ? acc + notas.score : acc + 0),
  0
);

console.log(sumaAprobados);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const media = exams.reduce((acc, notas) => acc + notas.score / exams.length, 0);
console.log(media);

//tambien podría hacerlo creando otra variable:
const suma2 = exams.reduce((acc, notas) => acc + notas.score, 0);
const media2 = suma2 / exams.length;
console.log(media2);
