import App from "../App";
import { About, AboutEmpresa, ById, Gallery, Home, NotFound } from "../pages";

import { createBrowserRouter } from "react-router-dom";

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
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/gallery/character/:id",
        element: <ById />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "/about/empresa",
            element: <AboutEmpresa />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
