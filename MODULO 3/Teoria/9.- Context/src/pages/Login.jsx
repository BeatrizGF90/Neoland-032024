import { useRef } from "react";
import "./Login.css";
import { useAuth } from "../contexts";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const inputReference = useRef(null);
  return (
    <div id="containerLogin">
      <form>
        <label htmlFor="name">Por favor introduzca su nombre:</label>
        <input type="text" name="name" id="name" ref={inputReference} />
        <button
          onClick={(e) => {
            e.preventDefault();
            login({ name: inputReference.current.value });
            navigate("/");
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};
