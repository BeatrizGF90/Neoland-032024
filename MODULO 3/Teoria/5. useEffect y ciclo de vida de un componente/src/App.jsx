import { useEffect, useState } from "react";
import "./App.css";
import { Saludo } from "./components/Saludo";
const App = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("Me monto app 🌎");

    return () => {
      console.log("❌ me actuzlizo");
    };
  }, []);

  /**
   *  ------------------------TIPOS DE USEEFFECT ----------------------------------
   *
   *
   * 1) ---------_> EL QUE  ESTA CONTROLANDO EL MONTAJE------------------
   *
   */ useEffect(() => {
    console.log("Me monto app 🌎");
  }, []);
  /*

    2) ----------> EL QUE CONTROLO EL DESMONTAJE----------------
   *
   */

  useEffect(() => {
    return () => {
      console.log("EN ESTA PARTE SE CONTROLA EL DESMONTAJE");
    };
  }, []);
  /*
   3) -----------> EL QUE ESCUCHA EL CAMBIO DE UNA VARIABLE DENTRO DEL ARRAY DE DEPENDENCIAS-----
   */

  useEffect(() => {
    console.log(
      "AQUI CONTROLO EL MOTAJE DEL COMPONETE Y LA POSIBLE ACTUALIZACION DE VALUE"
    );
    return () => {
      console.log("CONTROLAMOS LA ACTUALIZACION DE VALUE");
    };
  }, [value]);
  /*
   *
   *
   *
   *
   *
   */

  return (
    <>
      {value == "hola" && <Saludo />}
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </>
  );
};

export default App;
