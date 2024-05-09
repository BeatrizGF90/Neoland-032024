import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Paragraph, Title } from "./Components";

export const App = () => {
  return (
    <div className="App">
      <Header>
        <Title className={"Title"} texto={"RICK AND MORTY"} />
      </Header>
      <div>
        <nav>
          <NavLink to="">
            <button>Home</button>
          </NavLink>
          <NavLink to="personajes">
            <button>Personajes</button>
          </NavLink>
          <NavLink to="alive">
            <button>Alive</button>
          </NavLink>
          <NavLink to="dead">
            <button>Dead</button>
          </NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer>
        <Paragraph className={"Paragraph"} texto={"NOVENO EJERCICIO BEA 😏"} />
        <img
          src="https://res.cloudinary.com/dszkfnjwy/image/upload/v1712328781/Picachu_fondo_dfbm05.png"
          alt="Imagen Footer pikachu"
        />
      </Footer>
    </div>
  );
};
