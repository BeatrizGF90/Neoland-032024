const express = require("express");
const AdminRoutes = express.Router();

const { upload } = require("../../middleware/files.middleware");
const {
  isAuth,
  isAuthAdmin,
  isAuthSuper,
} = require("../../middleware/auth.middleware");
const {
  changeGender,
  changeAdmin,
} = require("../controllers/Admin.controllers");

//!------------------------------------------------------------------------
//?--------------------------------RUTAS SIN REDIRECT----------------------
//!------------------------------------------------------------------------
AdminRoutes.patch("/changeGender/:idUserChanged", changeGender);
AdminRoutes.patch(
  "/superAdmin/changeAdmin/:idUser",
  [isAuthSuper],
  changeAdmin
);

/* Cuando dos rutas se parecen mucho, hay que meterle un paso más, en este caso
 /changeGender/:idUserChanged
 /changeAdmin/:idUser
  se parecen mucho por lo que añadimos un paso más y le metemos /superAdmin:
 /superAdmin/changeAdmin/:idUser
 Esto lo hacemos para evitar que confunda las rutas.
   */
//!------------------------------------------------------------------------
//?--------------------------------RUTAS CON REDIRECT----------------------
//!------------------------------------------------------------------------

//!---------------- REDIRECT-------------------------------

module.exports = AdminRoutes;
