import { createContext, useState, useMemo, useContext } from "react";

/**
 * createContext: ---> crea el contexto, y nos provee del contexto, lo que nos da el un provider con unos valores
 * useMemo:hook de memorizacion, memoriza el return de una funcion
 * useContext: hook que nos sirve para poder utilzar el contexto creado
 *
 */

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  /** INICIALIZACION EN LAZY
   * es la incializacion del estado con un soporte del localStorage, lo cookies, sessionStorage
   */
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  });

  const login = (data) => {
    // 1) la mete al estado
    setUser(data);
    // 2) la mete al localStorage
    const stringUser = JSON.stringify(data);
    localStorage.setItem("user", stringUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, setUser, login, logout }),
    [
      /** escucha valores para volver a memorizar en 
caso de cambiar su valor */ user,
    ]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// VAMOS A CREAR UN CUSTOM HOOK PARA PODER UTILIZAR EL CONTEXTO

export const useAuth = () => useContext(UserContext);
