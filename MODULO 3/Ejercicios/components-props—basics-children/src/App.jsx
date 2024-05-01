// 1. Crea una aplicación de ReactJS con vite → name: components-props—basics.
// 2. Crea tu carpeta de `components` dentro de `src`.
// 3. Realizamos algunos componentes de ReactJS:
//     1. Componente Title ⇒ Crea un componente Title que retorne un `<h1>` con un texto recibido por props.
//     2. Componente SubTitle ⇒ Crea un componente que retorne un `<h2>` con un texto recibido por props.
//     3. Componente Image ⇒ Crea un componente que retorne un `<image>` con un src y alt recibido por props || además también recibirá el with y el height.
//     4. Componente Paragraph ⇒Crea un componente que retorne un `<p>` con un texto recibido por props.
//     5. Componente Header ⇒ Crea un componente que reciba como children el componente Title y retorne un `<header> + Children`.
//     6. Componente Main ⇒ Crea un componente que reciba como children los algunos componentes creados y retorne un `<main> + Children`.
//     7. Componente Footer ⇒ Crea un componente que reciba como children los algunos componentes creados y retorne un `<footer> + Children`.
// 4. Estila cada uno de ellos haciendo uso de CSS Modules → hoja de estilo asociada al componente.
// 5. Exporta los componentes en un `index.js` e importalos en `App.jsx`.
// 6. Puedes usar los componentes tantas veces como quieras pero siempre bajo la estructura de los componentes `<Header>` || `<Main>` || `<Footer>`.

import { useEffect, useState } from "react";
import "./App.css";
import { Footer, Header, Input } from "./Components";
import { dataGallery } from "./Data";
import { Gallery } from "./Pages";

const App = () => {
  const [valueInput, setValueInput] = useState(() => {
    return localStorage.getItem("input")
      ? JSON.parse(localStorage.getItem("input"))
      : "";
  }); /// INICIALIZAR EL ESTADO EN LAZY
  const [data, setData] = useState([]);

  /**
   * -----------ESTE USEEFFECT CONTROLA CUANDO SE MONTA EL COMPONENTE Y CUANDO SE ACTUALIZA valueInput
   */

  useEffect(() => {
    /// cuando se monta o cambia el valor de la variable que hay en el array de dependencias

    setData(() => {
      const filter = dataGallery.filter((item) =>
        item.name.toLowerCase().includes(valueInput.toLowerCase())
      );

      localStorage.setItem("input", JSON.stringify(valueInput.toLowerCase()));

      return filter;
    });

    return () => {
      /// estaremos mirando el desmontaje o actualizacion del componente
    };
  }, [/**ARRAY DE DEPENDENCIAS */ valueInput]);

  /**
   * -----------ESTE USEEFFECT CONTROLA CUANDO SE MONTA EL COMPONENTE
   */

  useEffect(() => {
    console.log("el componente se monta 🌎❌🌎❌🌎");
  }, []);

  return (
    <>
      <Header />
      {/* {console.log(valueInput)} */}
      <main>
        <Input
          setValueInput={setValueInput}
          value={
            localStorage.getItem("input")
              ? JSON.parse(localStorage.getItem("input"))
              : ""
          }
        />
        <Gallery data={data} />
      </main>
      <Footer />
    </>
  );
};

export default App;
