import axios from "axios";

const apiHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const APIRicky = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: apiHeaders,
  timeout: 6000000,
});
