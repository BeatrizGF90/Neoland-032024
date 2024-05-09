import { useEffect, useState } from "react";
import "./Gallery.css";
import { useCounter, useErrorGallery } from "../hooks";
import { getById } from "../services/pokemon.endPoint.service";
import { Figure } from "../components";

export const Gallery = () => {
  const { increment, decrement, value } = useCounter(1);
  const [off, setOff] = useState(false);
  const [res, setRes] = useState({});
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      setOff(true);
      setRes(await getById(value));
      setOff(false);
    })();
  }, [value]);

  useEffect(() => {
    console.log("🌎", res);
    useErrorGallery(res, setRes, setData);
  }, [res]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div id="containerGallery">
      <Figure src={data?.sprites?.front_default} name={data?.name} />
      <button onClick={() => value > 1 && decrement()} disabled={off}>
        -1
      </button>
      <p> ID: {value}</p>
      <button onClick={() => increment()} disabled={off}>
        +1
      </button>
    </div>
  );
};
