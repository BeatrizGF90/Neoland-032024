import { APIRicky } from "./rickyApi.config";

export const getAll = async () => {
  return APIRicky.get(`character`)
    .then((res) => res)
    .catch((error) => error);
};

export const getById = async (id) => {
  return APIRicky.get(`character/${id}`)
    .then((res) => res)
    .catch((error) => error);
};
