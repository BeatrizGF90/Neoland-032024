import "./ItemList.css";
import { Card } from "./Card";

export const ItemListDead = () => {
  return (
    <li>
      <div className="container">
        {deadCharacters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </li>
  );
};
