import { APIRICKY } from "./rickyApi.config";

export const getAll = async () => {
  return APIRICKY.get(`character`)
    .then((res) => res)
    .catch((error) => error);
};
export const getById = async (id) => {
  return APIRICKY.get(`character/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
//
