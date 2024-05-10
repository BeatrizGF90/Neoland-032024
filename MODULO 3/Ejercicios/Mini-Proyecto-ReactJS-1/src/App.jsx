// 1. Recoger el nombre del personaje.
// 2. Recoger el id del personaje → usarlo como key.
// 3. Recoger la image proporcionada por la API.
// 4. Recoger el status e informar si nuestro personaje está “alive”
//     1. Si un personaje no está vivo hacer uso de JSX para no renderizar ese personaje.
// 5. Recoger el lugar de origen.
// 6. Estilar el listado haciendo uso de los CSS modules y obtener una visualización más atractiva.

//!---------------------TIPOS DE useEffect-------------------------
/*  
-Se ejecuta solamente cuando se monte el componente

React.useEffect(()=> {
}, [])

-Se ejecuta cuando se monte el componente y siempre que haya re-render

React.useEffect(()=> {
})

-Se ejecuta cuando se monte el componente y cada vez que cambia nuestros
personajes en un re-render

React.useEffect(()=> {
}, [characterList])

*/

import React from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  const aliveCharacters = characterList.filter(
    (character) => character.status === "Alive"
  );

  return (
    <>
      <main>
        <h1 className="Title">PERSONAJES ALIVE RICK AND MORTY</h1>
        <div className="container">
          {aliveCharacters.map((character) => (
            <div key={character.id} className="figure">
              <img src={character.image} alt={character.name} />
              <h2>{character.name}</h2>
              {/* <h3>{character.status}</h3> */}
              <h3>{character.origin.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
