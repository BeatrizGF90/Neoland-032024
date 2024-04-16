const express = require("express");
const UserRoutes = express.Router();

const {
  registerLargo,
  registerUtil,
  registerWithRedirect,
  sendMailRedirect,
} = require("../controllers/User.controllers");
const { upload } = require("../../middleware/files.middleware");

//!--------------------------------RUTAS SIN REDIRECT----------------------
// una ruta llama a otra ruta
//utilizo .post para crear un elemento
//upload.single --> subida simple, significa que solo voy a subir un arquivo a "image"

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), registerUtil);

//!------------------------------------------------------------------------
//?--------------------------------RUTAS CON REDIRECT----------------------
//!------------------------------------------------------------------------
UserRoutes.post("/register", upload.single("image"), registerWithRedirect);

//!---------------- REDIRECT-------------------------------
UserRoutes.post("/register/sendMail/:id", sendMailRedirect);
/*:id esto se llama queryparam, es info que podemos enviar por parte de la ruta, estamos enviando 
el id del usuario a quien quiero enviar el email*/
module.exports = UserRoutes; // .exports para exportar las routas porque las necesita el index
