import { useEffect, useState } from "react";
import "./Gallery.css";
import { Figure } from "../components";
import { getAll, getStaff } from "../services/harry.endPoint.service";
import { useErrorGallery } from "../hooks/useErrorGallery";
export const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [res, setRes] = useState({});

  // const data = dataPokemon().then(res => res)
  useEffect(() => {
    (async () => {
      setRes(await getStaff());
    })();
  }, []);

  useEffect(() => {
    useErrorGallery(res, setRes, setCharacters);
  }, [res]);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <div id="containerGallery">
      {characters.length > 0 &&
        characters
          .slice(0, 10)
          .map((item) => (
            <Figure src={item?.image} name={item?.name} key={item.name} />
          ))}
    </div>
  );
};
