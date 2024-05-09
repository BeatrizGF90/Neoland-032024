import { useCallback, useState } from "react"; // hook

import "./App.css";
import { Movie, Review } from "./components";

const App = () => {
  const [value, setValue] = useState(0);
  const changeValue = () => setValue(0);
  const [rememo, setRememo] = useState(false);

  const memoChangeValue = useCallback(changeValue, [rememo]);

  /**  array de dependencias para escuchar el cambio de valor de estas 
variables ---> al cambiar su valor se rememoriza la callback */

  return (
    <>
      <Movie
        name={"Harry Potter"}
        cover={
          "https://i.blogs.es/2ad4d1/harry-potter-franquicia/1366_2000.jpg"
        }
        cambioDeEstado={memoChangeValue}
      />

      <Review score={value} />
      <label htmlFor="score">Por favor introduzca una puntuacion:</label>
      <input
        type="number"
        name="score"
        id="score"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setRememo(!rememo)}>REMEMO</button>
    </>
  );
};

export default App;
