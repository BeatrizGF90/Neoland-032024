import "./Image.css";

export const Image = ({ src, description }) => {
  return (
    <figure>
      <h3>{description}</h3>
      <img src={src} alt={description}></img>;
    </figure>
  );
};
