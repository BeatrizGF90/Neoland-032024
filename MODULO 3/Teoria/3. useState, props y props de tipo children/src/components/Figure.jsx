import "./Figure.css";

export const Figure = ({ name, src }) => {
  return (
    <figure>
      <h3>{name}</h3>
      <img src={src} alt={name} />
    </figure>
  );
};
