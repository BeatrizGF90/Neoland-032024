import { getById } from "../services/pokemon.endPoint.service";

export const dataPokemon = async () => {
  const dataApi = [];

  for (let i = 1; i < 60; i++) {
    const res = await getById(i);
    res.status == 200 && dataApi.push(res.data);
  }

  console.log("dataApi", dataApi);
  return dataApi;
};
