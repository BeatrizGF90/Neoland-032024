import React, { useEffect } from "react";

export const Saludo = () => {
  useEffect(() => {
    console.log("me monto soy saludooooooo");

    return () => {
      console.log("ME DESMONTO ❌");
    };
  }, []);

  return <h1>Holaaa</h1>;
};
