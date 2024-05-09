import App from "../App";
import { Protected } from "../components";
import { useAuth } from "../contexts";
import {
  About,
  AboutEmpresa,
  ById,
  Gallery,
  Home,
  NotFound,
  Login,
} from "../pages";

import { createBrowserRouter, redirect } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: () => {
          const user = localStorage.getItem("user");
          if (!user) throw redirect("/login");
        },
      },

      {
        path: "/gallery/character/:id",
        element: (
          <Protected>
            <ById />
          </Protected>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: (
          <Protected>
            <About />
          </Protected>
        ),
        children: [
          {
            path: "/about/empresa",
            element: (
              <Protected>
                <AboutEmpresa />
              </Protected>
            ),
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
