import { useState } from "react"; // hook

import "./App.css";
import { Movie, Review } from "./components";
import { useCallback } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const funcionMemo = useCallback(() => setValue(0), []); // memoriza una funcion el useCallback
  return (
    <>
      <Movie
        name={"Harry Potter"}
        cover={
          "https://i.blogs.es/2ad4d1/harry-potter-franquicia/1366_2000.jpg"
        }
        cambioDeEstado={funcionMemo}
      />

      <Review score={value} />
      <label htmlFor="score">Por favor introduzca una puntuacion:</label>
      <input
        type="number"
        name="score"
        id="score"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default App;
