import { useNavigate, useParams } from "react-router-dom";
import "./CardById.css";
import { Spinner } from "./Spinner";
import { getById } from "../Services/ricky.endPoint.service";
import { useFetching } from "../Hooks/useFetching";

export const CardById = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // para los botones

  /// LINK ---> FIGURE, IMAGEN, PARA UN TEXTO

  /// NAVLINK -->  SOLO PARA LAS NAV

  const { state } = useFetching(getById, id);
  return (
    <div>
      {state.isLoading ? (
        <Spinner />
      ) : (
        <figure id="cardId">
          <img src={state.data?.image} />
          <h2>{state.data?.name}</h2>
          <button onClick={() => navigate("/personajes")}>
            VOLVER A PERSONAJES
          </button>
        </figure>
      )}
    </div>
  );
};
