import "./Personajes.css";
import { getAll } from "../Services/ricky.endPoint.service";
import { Figure, SubTitle } from "../Components";
import { useFetching } from "../Hooks";

export const Dead = () => {
  const { state } = useFetching(getAll);
  const deadCharacters = state.data?.results.filter(
    (character) => character.status === "Dead"
  );
  console.log("dead", deadCharacters);
  console.log("state", state);
  return (
    <>
      <SubTitle
        className={"SubTitle"}
        texto={"PERSONAJES RICK AND MORTY - DEAD 🪦"}
      />
      <div id="containerGallery">
        {deadCharacters?.map((item) => (
          <Figure data={item} key={item?.id} />
        ))}
      </div>
    </>
  );
};
