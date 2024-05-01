import "./Image.css";

export const Image = ({ src, name, serie }) => {
  return (
    <figure>
      <h3>{name}</h3>
      <img src={src} alt={name}></img>
      <h3>{serie}</h3>
    </figure>
  );
};
