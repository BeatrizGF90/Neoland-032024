import { useEffect, useState } from "react";
import "./App.css";
import { Footer, H1, Header, Input } from "./components";
import { dataGallery } from "./data";
import { Gallery } from "./pages";

const App = () => {
  const [valueInput, setValueInput] = useState(() => {
    return localStorage.getItem("input")
      ? JSON.parse(localStorage.getItem("input"))
      : "";
  }); /// INIALIZACIAR EL ESTADO EN LAZY
  const [data, setData] = useState([]);

  /**
   * -----------ESTE USEEFFECT CONTROLA CUANDO SE MONTA EL COMPONENTE Y CUANDO SE ACTUALIZA valueInput
   */

  useEffect(() => {
    /// cuando se monta o cambia el valor de la variable que hay en el array de dependencias

    setData(() => {
      const filter = dataGallery.characters.filter((item) =>
        item.name.toLowerCase().includes(valueInput.toLowerCase())
      );

      localStorage.setItem("input", JSON.stringify(valueInput.toLowerCase()));

      return filter;
    });

    return () => {
      /// estaremos mirando el desmontaje o axctualizacion del compoente
    };
  }, [/**ARRAY DE DEPENDENCIAS */ valueInput]);

  /**
   * -----------ESTE USEEFFECT CONTROLA CUANDO SE MONTA EL COMPONENTE
   */

  useEffect(() => {
    console.log("el componente se monta 🌎❌🌎❌🌎❌🌎❌🌎❌🌎❌🌎❌🌎❌");
  }, []);

  return (
    <>
      <Header />
      {console.log(valueInput)}
      <main>
        <H1 className={"tituloGallery"}>GALLERY</H1>
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
