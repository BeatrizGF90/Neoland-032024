import "./ItemList.css";
import { Figure } from "./Figure";

export const ItemListAlive = ({ aliveCharacters }) => {
  console.log("aliveCharacters", aliveCharacters);
  return (
    <div id="containerGallery">
      {aliveCharacters.length > 0 &&
        aliveCharacters.map((item) => <Figure data={item} key={item?.id} />)}
    </div>
  );
};
