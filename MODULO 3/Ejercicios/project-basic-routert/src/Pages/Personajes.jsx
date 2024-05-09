import { useState } from "react";
import { useRef } from "react";
import { getAll } from "../Services/ricky.endPoint.service";
import "./Personajes.css";
import { useFetching } from "../Hooks";
import { Figure, Input } from "../Components";

export const Personajes = () => {
  const [checkFilter, setCheckFilter] = useState(false); // es un chivato que lo cambio el input a true cuando el user busca
  const [filter, setFilter] = useState([]); /// esta es la info que esta filtrada y que la general el input en el onchange
  const { state } = useFetching(getAll); // son los datos y el cargando de la llamada asincrona
  const inputBusqueda = useRef(null); /// es la referencia que creamos y se la pasamos al input
  console.log("state", state);
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
              <Figure data={item} key={item?.name} />
            ))
          : filter.map((item) => <Figure data={item} key={item?.name} />)}
      </div>
    </div>
  );
};
