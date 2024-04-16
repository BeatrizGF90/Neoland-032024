const express = require("express");
const UserRoutes = express.Router();

const { registerLargo } = require("../controllers/User.controllers");
const { upload } = require("../../middleware/files.middleware");

//!--------------------------------RUTAS SIN REDIRECT----------------------
// una ruta llama a otra ruta
//utilizo .post para crear un elemento
//upload.single --> subida simple, significa que solo voy a subir un arquivo a "image"

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);

module.exports = UserRoutes; // .exports para exportar las routas porque las necesita el index
