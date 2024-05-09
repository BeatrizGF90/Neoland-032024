import { memo } from "react";
import "./Movie.css";

export const Movie = memo(({ name, cover }) => {
  console.log("me renderizo soy la Movie 🔍");
  return (
    <figure>
      <h1>{name.name}</h1>
      <img src={cover} alt={name} />
    </figure>
  );
});

// HOC -----> ES UN  COMPONETE QUE ENVUELVE A OTRO COMPONENTE Y LE DA CARACTERISTICAAS ESPECIALES

/**
 * Vuelve a renderizar cuando el componente memorizado cambias sus props
 *
 *
 * ----_> CUIDADO CON --> OBJETOS Y LAS FUNCIONES PORQUE RECONOCE COMO QUE SIEMPRE HAY UN CAMBIO
 *
 * --------_> useCallbck y memorizamos la funcion para que siempre sea la misma referencia de memoria
 */
