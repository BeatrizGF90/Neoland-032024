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
      console.log("data", data);
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
        texto={"PERSONAJES ALIVE RICK AND MORTY - ALIVE 👽"}
      />
      <ul>
        <ItemListAlive aliveCharacters={aliveCharacters} />
      </ul>

      <SubTitle
        className={"SubTitle"}
        texto={"PERSONAJES ALIVE RICK AND MORTY - DEAD 🪦"}
      />
      <ul>
        <ItemListDead deadCharacters={deadCharacters} />
      </ul>
    </>
  );
};
