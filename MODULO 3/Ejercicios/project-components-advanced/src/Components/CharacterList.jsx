import "./CharacterList.css";

import { useState } from "react";
import React from "react";
// import { Card } from "./Card";
import { SubTitle } from "./SubTitle";
import { ItemListAlive } from "./ItemListAlive";
import { ItemListDead } from "./ItemListDead";

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

  const deadCharacters = characterList.filter(
    (character) => character.status === "Dead"
  );

  return (
    <>
      <SubTitle
        className={"SubTitle"}
        texto={"PERSONAJES ALIVE RICK AND MORTY - ALIVE"}
      />
      <ul>
        <ItemListAlive />
        {/* 
          <div className="container">
            {aliveCharacters.map((character) => (
            <li>
              <Card key={character.id} character={character} />
            ))}
            </li>
          </div>
         */}
      </ul>

      <SubTitle
        className={"SubTitle"}
        texto={"PERSONAJES ALIVE RICK AND MORTY - DEAD"}
      />
      <ul>
        <ItemListDead />
        {/* 
          <div className="container">
            {deadCharacters.map((character) => (
              <li>
              <Card key={character.id} character={character} />
            ))}
            </li>
          </div>
         */}
      </ul>
    </>
  );
};
