import "./Figure.css";
import { Link } from "react-router-dom";

export const Figure = ({ data }) => {
  const { name, image, status, id } = data;

  const path = `/personajes/character/${id}`;

  return (
    <Link to={path}>
      <figure id="figure">
        <img src={image} alt={name} />
        <h4>{name.toUpperCase()}</h4>
        <p>{status}</p>
      </figure>
    </Link>
  );
};
