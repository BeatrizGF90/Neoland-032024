import axios from "axios";

const apiHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const APIHarry = axios.create({
  baseURL: "https://hp-api.onrender.com/api/",
  headers: apiHeaders,
  timeout: 6000000,
});
