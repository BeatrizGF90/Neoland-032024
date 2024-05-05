import React from "react";
import { Card } from "./Card";

export const CharacterList = () => {
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
            <Card key={character.id} character={character} />
          ))}
        </div>
      </main>
    </>
  );
};
