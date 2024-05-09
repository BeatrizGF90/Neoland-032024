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
        <Input
          referencia={inputBusqueda} /// le pasamos la referencia del elemento del input
          setCheckFilter={setCheckFilter} // es el boolean que es el chivato de cuando tenemos que pintar la data filtrada
          stateData={state} // la data completa que tiene que filtrar
          setFilter={setFilter} // le pasamos donde va a guardar los datos filtrados
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
