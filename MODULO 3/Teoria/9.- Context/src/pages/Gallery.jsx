import { useEffect, useRef, useState } from "react";
import { Card, Input } from "../components";
import "./Gallery.css";
import { useFetching } from "../hooks/useFetching";
import { getAll } from "../services/ricky.endPoint.service";
export const Gallery = () => {
  const [checkFilter, setCheckFilter] = useState(false); // es un chivato que lo cambio el input a true cuando el user busca
  const [filter, setFilter] = useState([]); /// esta es la info que esta filtrada y que la general el input en el onchange
  const { state } = useFetching(getAll); // son los datos y el cargando de la llamada asincrona
  const inputBusqueda = useRef(null); /// es la referencia que creamos y se la pasamos al input

  return (
    <div id="containerGallery">
      <div className="inputContainer">
        <label htmlFor="name" className="labelBuscador">
          {" "}
          Busca tu personaje:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={inputBusqueda}
          onChange={
            () => {
              //referencia.current.style.color = "red";
              setFilter(
                state.data.results.filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(inputBusqueda.current.value.toLowerCase())
                )
              );

              setCheckFilter(() => true);
            } //esto seria el mismo valor que el e.target.value
          }
        />
      </div>
      <div className="gallery">
        {state.isLoading && <p>Cargando... </p>}
        {!checkFilter
          ? state.data?.results.map((item) => (
              <Card data={item} key={item?.id} />
            ))
          : filter.map((item) => <Card data={item} key={item?.id} />)}
      </div>
    </div>
  );
};
