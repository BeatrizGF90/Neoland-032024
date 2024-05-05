import "./ItemList.css";
import { Card } from "./Card";

export const ItemListAlive = () => {
  return (
    <li>
      <div className="container">
        {aliveCharacters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </li>
  );
};
