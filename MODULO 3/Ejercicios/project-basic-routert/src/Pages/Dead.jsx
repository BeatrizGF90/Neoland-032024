import "./Personajes.css";

import { useState } from "react";
import { getAll } from "../Services/ricky.endPoint.service";
import { useEffect } from "react";
import { ItemListDead, SubTitle } from "../Components";

export const Dead = () => {
  const [characters, setCharacters] = useState([]);
  const [res, setRes] = useState({});

  useEffect(() => {
    (async () => {
      setRes(await getAll());
    })();
  }, []);

  const deadCharacters = characters.filter(
    (character) => character.status === "Dead"
  );

  return (
    <>
      <SubTitle
        className={"SubTitle"}
        texto={"PERSONAJES RICK AND MORTY - DEAD 🪦"}
      />
      <div id="containerGallery">
        <ItemListDead deadCharacters={deadCharacters} />
      </div>
    </>
  );
};
