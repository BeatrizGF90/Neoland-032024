import "./ItemList.css";
import { Card } from "./Card";

export const ItemListDead = ({ deadCharacters }) => {
  return (
    <div className="container">
      {deadCharacters.map((character) => (
        <li>
          <Card key={character.id} character={character} />
        </li>
      ))}
    </div>
  );
};
