// 1. Crea una aplicación de ReactJS con vite → name: jsx-basics.
// 2. Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”[20-5] según el valor numérico asignado.
// 3. Recorrer los elementos de un array y renderizalos ⇒ Si os da un error de keys en la consola podéis usar el index como `key={index}` .
// 4. Mappea un array de objetos para pintarlos.
// 5. Crea un botón que modifique un valor de false a true y renderice un contenido cuando este valor se modifique.

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Parrafo } from "./Components";

const App = () => {
  const [count, setCount] = useState(0);
  const [valor, setValor] = useState(false); //para el apartado 5

  const actualizarEstado = () => {
    setCount((value) => (value + 1) % 25); // esto hace que cualdo llegue a 24 vuelva a empezar. Si pongo 30 volvería a empezar cuando llegue a 29
    console.log("estado debajo de la actualizacion", count);
  };
  const toggleValor = () => {
    setValor(!valor); //Cambia el valor de false a true y viceversa.
  };

  const print = () => {
    if (count > 5 && count < 13) {
      return <Parrafo texto={"Buenos días"} />;
    } else if (count > 12 && count < 20) {
      return <Parrafo texto={"Buenas tardes"} />;
    } else {
      return <Parrafo texto={"Buenas noches"} />;
    }
  };

  const capitales = ["Madrid", "Lisboa", "París", "Berlín"];
  const personas = [
    {
      nombre: "Cris",
      edad: 36,
      ciudad: "Madrid",
    },
    {
      nombre: "María",
      edad: 33,
      ciudad: "Gijón",
    },
    {
      nombre: "Nathalie",
      edad: 28,
      ciudad: "Stuttgart",
    },
  ];

  return (
    <>
      <div>
        {console.log("estado en el template ", count)}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {print()}

      <h2>Capitales:</h2>
      {capitales.map((capital, index) => (
        <Parrafo key={index} texto={capital} />
      ))}

      <h2>Personas:</h2>
      {personas.map((persona, index) => (
        <div key={index}>
          <p>Nombre: {persona.nombre}</p>
          <p>Edad: {persona.edad}</p>
          <p>Ciudad: {persona.ciudad}</p>
        </div>
      ))}

      <h2>Valor:</h2>
      <div className="card">
        <button onClick={toggleValor}>Toggle valor:</button>
        {valor ? (
          <Parrafo texto={"El valor está en true"} />
        ) : (
          <Parrafo texto={"El valor está en false"} />
        )}
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => actualizarEstado()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Parrafo
        className="read-the-docs"
        texto={"Click on the Vite and React logos to learn more"}
      />
    </>
  );
};

export default App;
