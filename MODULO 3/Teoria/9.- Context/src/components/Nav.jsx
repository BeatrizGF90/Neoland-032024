import { useAuth } from "../contexts";
import "./Nav.css";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  const { user, logout } = useAuth();
  return (
    <nav>
      {user && (
        <>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="/gallery">
            <button>Gallery</button>
          </NavLink>
          <NavLink to="/about">
            <button>About</button>
          </NavLink>
        </>
      )}

      {user !== null && (
        <NavLink to="/login">
          <button onClick={() => logout()}>Logout</button>
        </NavLink>
      )}
    </nav>
  );
};
