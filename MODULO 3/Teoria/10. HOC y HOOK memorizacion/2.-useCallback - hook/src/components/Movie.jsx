import { memo } from "react";
import "./Movie.css";

export const Movie = memo(({ name, cover, cambioDeEstado }) => {
  console.log("me renderizo soy la Movie 🔍");
  return (
    <figure>
      <h1>{name.name}</h1>
      <img src={cover} alt={name} />
    </figure>
  );
});
