// 1. Crea una aplicación de ReactJS con vite → name: components-basics.
// 2. Crea tu carpeta de `components` dentro de `src`.
// 3. Realizamos algunos componentes de ReactJS:
//     1. Componente Title ⇒ Crea un componente Title que retorne un `<h1>` con el texto “Welcome to Components ReactJS”.
//     2. Componente SubTitle ⇒ Crea un componente que retorne un `<h2>` con el texto “This is a example components with ReactJS”.
//     3. Componente Image ⇒ Crea un componente que retorne un `<image>` y en su interior podéis seleccionar cualquier imagen de ReactJS.
//     4. Componente Paragraph ⇒Crea un componente que retorne un `<p>` con el texto que quieras en su interior.
// 4. Estila cada uno de ellos haciendo uso de CSS Modules → hoja de estilo asociada al componente.
// 5. OPCIONAL: Exporta los componentes en un `index.js` e importalos en `App.jsx`.

import React from "react";
import { Title, SubTitle, Image, Paragraph, Header } from "./Components";

const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <Title className={"Title"} texto={"Welcome to Components ReactJS"} />
        <SubTitle
          className={"SubTitle"}
          texto={"This is a example components with ReactJS"}
        />
        <Image
          description={"Gon"}
          src={
            "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712648992/pensarTresEnRaya_u2hn2f.gif"
          }
          alt={"Imagen Gon"}
        />

        <Paragraph
          className={"Paragraph"}
          texto={"Este es mi primer ejercicio"}
        />
      </div>
    </>
  );
};

export default App;
