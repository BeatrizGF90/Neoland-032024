import "./Personajes.css";
import { getAll } from "../Services/ricky.endPoint.service";
import { Figure, SubTitle } from "../Components";
import { useFetching } from "../Hooks";

export const Alive = () => {
  const { state } = useFetching(getAll);
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
        {aliveCharacters?.map((item) => (
          <Figure data={item} key={item?.id} />
        ))}
      </div>
    </>
  );
};
