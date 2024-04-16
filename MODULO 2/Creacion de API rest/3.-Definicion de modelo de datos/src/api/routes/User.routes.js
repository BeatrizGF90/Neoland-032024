const express = require("express");
const { registerLargo } = require("../controllers/User.controllers");
const UserRoutes = express.Router();

//!--------------------------------RUTAS SIN REDIRECT----------------------
// una ruta llama a otra ruta
//utilizo .post para crear un elemento
UserRoutes.post(
  "/registerLargo",
  /*middleware de subida de fichero */ registerLargo
);

module.exports = UserRoutes; // .exports para exportar las routas porque las necesita el index
