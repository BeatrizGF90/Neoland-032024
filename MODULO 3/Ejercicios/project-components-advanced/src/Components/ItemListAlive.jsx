import "./ItemList.css";
import { Card } from "./Card";

export const ItemListAlive = ({ aliveCharacters }) => {
  console.log("aliveCharacters", aliveCharacters);
  return (
    <div className="container">
      {aliveCharacters.map((character) => (
        <li>
          <Card key={character.id} character={character} />
        </li>
      ))}
    </div>
  );
};
