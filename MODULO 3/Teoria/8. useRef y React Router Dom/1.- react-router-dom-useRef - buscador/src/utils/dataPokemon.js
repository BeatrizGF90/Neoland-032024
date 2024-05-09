import { useFetching } from "../hooks/useFetching";
import { getById } from "../services";

export const dataPokemon = async () => {
  const dataApi = [];

  for (let i = 1; i < 41; i++) {
    const { dataFetch, state, isLoading, hasError, data } = useFetching(
      getById,
      i
    );

    dataApi.push(data);
  }

  console.log(dataApi);

  return dataApi;
};

const mappeoData = async (data) =>
  (await !data.toString().includes("null")) &&
  data.map((item) => ({
    id: item.id,
    img: item.sprites.other.dream_world.front_default,
    name: item.name,
  }));
