import { createBrowserRouter } from "react-router-dom";
import { Alive, ById, Dead, Home, NotFound, Personajes } from "../Pages";
import { App } from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/personajes",
        element: <Personajes />,
      },
      {
        path: "/personajes/character/:id",
        element: <ById />,
      },
      {
        path: "/alive",
        element: <Alive />,
      },
      {
        path: "/dead",
        element: <Dead />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
