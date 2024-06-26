const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");
const cors = require("cors");
// creamos el servidor web
const app = express();

// vamos a configurar dotenv para poder utilizar las variables d entorno del .env
dotenv.config();

//! ------------conectamos con la base de datos---------------

connect();

//!- ------------------- CONFIGURAR cloudinary ----------------

//Traemos cloudinary y la llamamos para utilizarla
const { configCloudinary } = require("./src/middleware/files.middleware");
configCloudinary();

//! -----------------VARIABLES CONSTANTES --> PORT

const PORT = process.env.PORT;

//!- ----------------CORS -------------------------------

// libreria para configurar el acceso a la appi, hay que traer la librería (lo tengo en la línea 3)
app.use(cors()); // Para utilizar la librería

//! ----------------limitaciones de cantidad en el back end -

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! -----------------ROUTAS ---------------------------------

const UserRoutes = require("./src/api/routes/User.routes");
app.use("/api/v1/users/", UserRoutes);

const AdminRoutes = require("./src/api/routes/Admin.routes");
app.use("/api/v1/admin/", AdminRoutes);

const MessageRoutes = require("./src/api/routes/Message.routes");
app.use("/api/v1/messages/", MessageRoutes);

const MovieRoutes = require("./src/api/routes/Movie.routes");
app.use("/api/v1/movies/", MovieRoutes);

const CharacterRoutes = require("./src/api/routes/Character.routes");
app.use("/api/v1/characters/", CharacterRoutes);

//! --------------- generamos un error de cuando no see encuentre la ruta-

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

//! ------------------> cuando el servidor crachea metemos un 500 ----------

// ----- en este caso como gestionamos un error la callback lleva de parametros error, req, res
// cuando es un controlador normal llevaria siempre como para parametros REQ, RES, NEXT ---> en este orden siemppre
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//! ----------------ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB

// esto de aqui  nos revela con que tecnologia esta hecho nuestro back
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
