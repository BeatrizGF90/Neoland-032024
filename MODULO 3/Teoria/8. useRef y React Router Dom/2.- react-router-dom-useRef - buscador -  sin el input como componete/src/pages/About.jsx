import { NavLink, Outlet } from "react-router-dom";
export const About = () => {
  return (
    <div id="containerAbout">
      <NavLink to="/about/empresa">
        <button>About Empresa</button>
      </NavLink>
      <p>Estoy el la pagina de about</p>
      <Outlet />
    </div>
  );
};
