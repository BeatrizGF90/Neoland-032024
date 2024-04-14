// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector(".showme");
console.log("🚀 ~ buttom:", button);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const mostrarH1 = document.querySelector("#pillado");
console.log("🚀 ~ mostrarH1:", mostrarH1);

// 1.3 Usa querySelector para mostrar por consola todos los p
const mostrarP = document.querySelectorAll("p");
console.log("🚀 ~ mostrarP:", mostrarP);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const mostrarPokemon = document.querySelectorAll(".pokemon");
console.log("🚀 ~ mostrarPokemon:", mostrarPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
// data-function="testMe".
const mostarAtributo = document.querySelectorAll(`[data-function="testMe"]`);
console.log("🚀 ~ mostarAtributo:", mostarAtributo);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".
const mostrarPersonaje = document.querySelectorAll(`[data-function="testMe"]`);
console.log("🚀 ~ mostrarPersonaje:", mostrarPersonaje[2]);
