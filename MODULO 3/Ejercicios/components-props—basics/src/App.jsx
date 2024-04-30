// 1. Crea una aplicación de ReactJS con vite → name: components-props—basics.
// 2. Crea tu carpeta de `components` dentro de `src`.
// 3. Realizamos algunos componentes de ReactJS:
//     1. Componente Title ⇒ Crea un componente Title que retorne un `<h1>` con un texto recibido por props.
//     2. Componente SubTitle ⇒ Crea un componente que retorne un `<h2>` con un texto recibido por props.
//     3. Componente Image ⇒ Crea un componente que retorne un `<image>` con un src y alt recibido por props || además también recibirá el with y el height.
//     4. Componente Paragraph ⇒Crea un componente que retorne un `<p>` con un texto recibido por props.
// 4. Estila cada uno de ellos haciendo uso de CSS Modules → hoja de estilo asociada al componente.
// 5. OPCIONAL: Exporta los componentes en un `index.js` e importalos en `App.jsx`.
// 6. Puedes usar los componentes tantas veces como quieras pero podéis escribir un pequeño blog repitiendo SubTitle, Image y Paragraph.

import { useState } from "react";
import React from "react";
import {
  Title,
  SubTitle,
  Image,
  Paragraph,
  Header,
  Footer,
} from "./Components";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="App">
          <Title className={"Title"} texto={"Personajes de anime"} />
          <SubTitle className={"SubTitle"} texto={"Hombres"} />
          <Image
            description={"Gon"}
            src={
              "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712648992/pensarTresEnRaya_u2hn2f.gif"
            }
            alt={"Imagen Gon"}
          />
          <Image
            description={"Monkey D. Luffy"}
            src={
              "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301563/Imagen16_q7wbqy.jpg"
            }
            alt={"Monkey D. Luffy"}
          />
          <Image
            description={"Naruto"}
            src={
              "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301557/Imagen8_abtchm.jpg"
            }
            alt={"Naruto"}
          />
          <Image
            description={"Mashle"}
            src={
              "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301558/Imagen10_wa3cfe.jpg"
            }
            alt={"Mashle"}
          />
          <SubTitle className={"SubTitle"} texto={"Mujeres"} />
          <Image
            description={"Aqua"}
            src={
              "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301557/Imagen9_woglpi.jpg"
            }
            alt={"Aqua"}
          />
          <Image
            description={"Jinx"}
            src={
              "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301554/Imagen4_tv5vlt.jpg"
            }
            alt={"Jinx"}
          />
          <Image
            description={"Himiko Toga"}
            src={
              "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301553/Imagen3_cxnzf0.jpg"
            }
            alt={"Himiko Toga"}
          />
          <Image
            description={"Nezuko"}
            src={
              "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301551/Imagen1_btw66o.jpg"
            }
            alt={"Nezuko"}
          />
          <Paragraph
            className={"Paragraph"}
            texto={"Espero es mi segundo ejercicio de react"}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
