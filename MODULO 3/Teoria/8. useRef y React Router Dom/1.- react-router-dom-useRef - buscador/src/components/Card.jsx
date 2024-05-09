import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export const Card = ({ data }) => {
  const { image, name, id } = data;

  const path = `/gallery/character/${id}`;

  return (
    <Link to={path}>
      <figure id="card">
        <img src={image} />
        <h4>{name.toUpperCase()}</h4>
        <p>{id}</p>
      </figure>
    </Link>
  );
};
