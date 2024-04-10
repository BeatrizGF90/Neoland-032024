// route.js ---> utils/route.js
import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintMemoryPage,
  PrintPokemonPage,
  PrintTopoPage,
  PrintTresEnRayaPage,
  printTemplateDashboard,
  PrintAhorcado,
} from "../pages";

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    // -------OPERA ESTE CASO--- SI NO HAY USER EN EL CONTEXTO PINTA EL LOGIN
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;

    // ------------------------------------------------------------------------
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Topo":
      PrintTopoPage();
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      PrintMemoryPage();
      break;
    case "TresEnRaya":
      PrintTresEnRayaPage();
      break;
    case "Ahorcado":
      PrintAhorcado();
      break;
  }
};
