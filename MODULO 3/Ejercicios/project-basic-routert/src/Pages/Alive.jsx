import "./Personajes.css";

// import { useState } from "react";
import { getAll } from "../Services/ricky.endPoint.service";
// import { useEffect } from "react";
import { ItemListAlive, SubTitle } from "../Components";
import { useFetching } from "../Hooks";

export const Alive = () => {
  const { state } = useFetching(getAll);
  // const [characters, setCharacters] = useState([]);
  // const [res, setRes] = useState({});

  // const data = dataPokemon().then(res => res)
  // useEffect(() => {
  //   (async () => {
  //     setRes(await getAll());
  //   })();
  // }, []);

  const aliveCharacters = state.data?.results.filter(
    (character) => character.status === "Alive"
  );
  console.log("alive", aliveCharacters);
  console.log("state", state);
  return (
    <>
      <SubTitle
        className={"SubTitle"}
        texto={"PERSONAJES RICK AND MORTY - ALIVE 👽"}
      />
      <div id="containerGallery">
        <ItemListAlive aliveCharacters={aliveCharacters} />
      </div>
    </>
  );
};
