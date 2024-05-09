import { APIHarry } from "./harryApi.config";

export const getAll = async () => {
  return APIHarry.get(`characters`)
    .then((res) => res)
    .catch((error) => error);
};

export const getStaff = async () => {
  return APIHarry.get(`characters/staff`)
    .then((res) => res)
    .catch((error) => error);
};
