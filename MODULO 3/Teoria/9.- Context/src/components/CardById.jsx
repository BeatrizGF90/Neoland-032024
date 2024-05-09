import { useNavigate, useParams } from "react-router-dom";
import "./CardById.css";
import { useFetching } from "../hooks/useFetching";
import { getById } from "../services/ricky.endPoint.service";
import { Spinner } from "./Spinner";

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
          <button onClick={() => navigate("/gallery")}>VOLVER A GALLERY</button>
        </figure>
      )}
    </div>
  );
};
