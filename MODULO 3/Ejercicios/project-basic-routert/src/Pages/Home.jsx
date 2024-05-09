import { Link } from "react-router-dom";
import { Paragraph } from "../Components/Paragraph";
import "./Home.css";

export const Home = () => {
  return (
    <div className="containerHome">
      <h2>Home Page</h2>
      <Paragraph
        className={"Paragraph"}
        texto={"App personajes Ricky and Morty"}
      />

      <p>
        <span>Visita la página de personajes 👽:</span>
        <Link to="personajes">Todos los Personajes</Link>
      </p>
    </div>
  );
};
