import "./CharacterList.css";
import { useState } from "react";
import { SubTitle } from "./SubTitle";
import { ItemListAlive } from "./ItemListAlive";
import { ItemListDead } from "./ItemListDead";
import { useEffect } from "react";

export const CharacterList = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
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
        texto={"PERSONAJES RICK AND MORTY - ALIVE 👽"}
      />
      <ul>
        <ItemListAlive aliveCharacters={aliveCharacters} />
      </ul>

      <SubTitle
        className={"SubTitle"}
        texto={"PERSONAJES RICK AND MORTY - DEAD 🪦"}
      />
      <ul>
        <ItemListDead deadCharacters={deadCharacters} />
      </ul>
    </>
  );
};
