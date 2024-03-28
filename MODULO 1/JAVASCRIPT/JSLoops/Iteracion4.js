// Usa un for...in para imprimir por consola los datos del alienígena.

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (clave in alien) {
  console.log(
    ` las clave con el nombre ${clave} tiene el valor: ${alien[clave]}`
  );
}
