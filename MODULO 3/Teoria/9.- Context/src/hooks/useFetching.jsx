import { useEffect, useState } from "react";

export const useFetching = (service, paramDelEndPoint) => {
  console.log("entro en el fetching 🌱");
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    hasError: null,
  });

  const dataFetch = async () => {
    console.log("😊");
    setState({
      data: null,
      isLoading: false,
      hasError: null,
    });
    setState({ ...state, isLoading: true });

    switch (paramDelEndPoint) {
      case undefined:
        try {
          const res = await service();

          res.status === 200 &&
            setState({
              ...state,
              data: res.data,
              isLoading: false,
              hasError: false,
            });
        } catch (error) {
          setState({
            ...state,
            data: null,
            isLoading: false,
            hasError: error,
          });
        }
        break;

      default:
        try {
          const res = await service(paramDelEndPoint);

          res.status === 200 &&
            setState({
              ...state,
              data: res.data,
              isLoading: false,
              hasError: false,
            });
        } catch (error) {
          setState({
            ...state,
            data: null,
            isLoading: false,
            hasError: error,
          });
        }
        break;
    }
  };
  /** vbamos a resetar el customHook para que cuando reciba un nuevo servicio se vuelva a resetar el estado y sus elementos  */
  useEffect(() => {
    dataFetch();
  }, [service]);

  // los customHook lo que suelen devolver son variables de estados y funciones para poder gestionar o utilizar el customHook
  return {
    dataFetch,
    state,
  };
};
