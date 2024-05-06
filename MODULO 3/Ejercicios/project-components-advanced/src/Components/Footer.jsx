import "./Footer.css";
import { Paragraph } from "./Paragraph";
export const Footer = () => {
  console.log(Footer);
  return (
    <footer>
      <Paragraph className={"Paragraph"} texto={"SEPTIMO EJERCICIO BEA 🦹‍♀️"} />
      <img
        src="https://res.cloudinary.com/dszkfnjwy/image/upload/v1714753303/Imagen19SinFondo_dbbuwc.png"
        alt="Imagen footer"
      />
      <Paragraph className={"Copyright"} texto={"Copyright"} />
    </footer>
  );
};
