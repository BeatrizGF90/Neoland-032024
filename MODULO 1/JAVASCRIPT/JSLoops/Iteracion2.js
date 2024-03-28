// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad isApproved a true o false
// en consecuencia. Una vez lo tengas compruébalo con un console.log.

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

/* recorremos el array de objetos con un forEach para quedarnos en cada uno
de los elementos*/

alumns.forEach((alumns) => {
  //le añadimos la propiedad nueva llamada "isApproved" y el valor = true
  if (
    (alumns.T1 && alumns.T2) ||
    (alumns.T1 && alumns.T3) ||
    (alumns.T2 && alumns.T3)
  ) {
    alumns.isApproved = true;
  }
});
console.log(alumns);
