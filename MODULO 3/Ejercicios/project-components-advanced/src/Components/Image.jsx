import "./Image.css";

export const Image = ({ character }) => {
  return (
    <figure style={{ Width: 300px, height: 300px }}>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name}></img>
      <h3>{character.origin.name}</h3>
    </figure>
  );
};