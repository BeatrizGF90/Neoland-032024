import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Parrafo } from "./Components";

const App = () => {
  const [count, setCount] = useState(0);

  const actualizarEstado = () => {
    setCount((value) => value + 1);
    console.log("estado debajo de la actualizacion", count);
  };

  const print = () => {
    if (count > 4) {
      return <Parrafo texto={"es mayor que 4"} />;
    }
  };

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
      {/*count > 4 && <p>Count es mayor que 4</p>*/}
      {print()}
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
