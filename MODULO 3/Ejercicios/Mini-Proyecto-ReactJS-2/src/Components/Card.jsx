import React from "react";

export const Card = (props) => {
  const { character } = props;

  return (
    <div key={character.id} className="figure">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      {/* <h3>{character.status}</h3> */}
      <h3>{character.origin.name}</h3>
    </div>
  );
};
