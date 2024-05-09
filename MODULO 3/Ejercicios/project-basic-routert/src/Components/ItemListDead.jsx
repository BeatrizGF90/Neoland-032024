import "./ItemList.css";
import { Figure } from "./Figure";

export const ItemListDead = ({ deadCharacters }) => {
  console.log("deadCharacters", deadCharacters);
  return (
    <div id="containerGallery">
      {deadCharacters.length > 0 &&
        deadCharacters.slice(0, 10).map((item) => (
          <Figure data={item} key={item?.id} />
          // <Figure
          //   src={item?.image}
          //   name={item?.name}
          //   key={item.name}
          //   status={item?.status}
          //   origin={item?.origin}
          // />
        ))}
    </div>
  );
};
