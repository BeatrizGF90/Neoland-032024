import "./Figure.css";

export const Figure = ({ name, src }) => {
  return (
    <figure>
      <img src={src} alt={name} />
      <p>{name}</p>
    </figure>
  );
};
