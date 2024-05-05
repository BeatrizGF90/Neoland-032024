// Desgranar el proyecto anterior:
// 1. Recoger el nombre del personaje.
// 2. Recoger el id del personaje → usarlo como key.
// 3. Recoger la image proporcionada por la API.
// 4. Recoger el status e informar si nuestro personaje está “alive”
//     1. Si un personaje no está vivo hacer uso de JSX para no renderizar ese personaje.
// 5. Recoger el lugar de origen.
// 6. Estilar el listado haciendo uso de los CSS modules y obtener una visualización más atractiva.

import React from "react";
import "./App.css";
import { CharacterList } from "./Components/CharacterList";

const App = () => {
  return <CharacterList />;
};

export default App;
