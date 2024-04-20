const express = require("express");
const UserRoutes = express.Router();

const {
  registerLargo,
  registerUtil,
  registerWithRedirect,
  sendMailRedirect,
  resendCode,
  checkNewUser,
  login,
  autoLogin,
  changePassword,
  sendPassword,
  modifyPassword,
  update,
  deleteUser,
  getAll,
  byId,
  byName,
  byOnlyGender,
  byGender,
} = require("../controllers/User.controllers");
const { upload } = require("../../middleware/files.middleware");
const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");

//!--------------------------------RUTAS SIN REDIRECT----------------------
// una ruta llama a otra ruta
//utilizo .post para crear un elemento
//upload.single --> subida simple, significa que solo voy a subir un arquivo a "image"

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), registerUtil);
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin);
UserRoutes.patch("/forgotpassword", changePassword);
UserRoutes.patch("/changepassword", [isAuth], modifyPassword);
// UserRoutes.patch("/changepassword", [isAuth, isAuthAdmin], modifyPassword); SI QUISIERA QUE SOLO EL ADMIN PUEDA CAMBIAR CONTRASEÑAS
UserRoutes.patch("/update/update", [isAuth], upload.single("image"), update);
UserRoutes.delete("/", [isAuth], deleteUser);
UserRoutes.get("/", getAll);
UserRoutes.get("/finById/:id", byId);
UserRoutes.get("/finByName/:name", byName);
UserRoutes.get("/finByOnlyGender/:gender", byOnlyGender);
UserRoutes.get("/finByGender/:gender/:name", byGender);

//!--------------------------------RUTAS CON REDIRECT----------------------
UserRoutes.post("/register", upload.single("image"), registerWithRedirect);

//!---------------- REDIRECT-------------------------------
/*:id esto se llama queryparam, es info que podemos enviar por parte de la ruta, estamos enviando 
el id del usuario a quien quiero enviar el email*/
UserRoutes.post("/register/sendMail/:id", sendMailRedirect);
UserRoutes.patch("/sendPassword/:id", sendPassword);
module.exports = UserRoutes; // .exports para exportar las routas porque las necesita el index
