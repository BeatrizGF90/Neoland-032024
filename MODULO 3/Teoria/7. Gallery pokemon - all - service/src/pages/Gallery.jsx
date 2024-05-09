import { useEffect, useState } from "react";
import { dataPokemon } from "../utils/dataPokemon";
import "./Gallery.css";
import { Figure } from "../components";
export const Gallery = () => {
  const [pokemons, setPokemons] = useState([]);

  // const data = dataPokemon().then(res => res)
  useEffect(() => {
    (async () => {
      setPokemons(await dataPokemon());
    })();
  }, []);

  useEffect(() => {}, [pokemons]);

  return (
    <div id="containerGallery">
      {pokemons.length > 0 &&
        pokemons.map((item) => (
          <Figure
            src={item?.sprites?.front_default}
            name={item?.name}
            key={item.name}
          />
        ))}
    </div>
  );
};
