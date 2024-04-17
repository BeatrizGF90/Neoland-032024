const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connect } = require("./src/utils/db");
const UserRoutes = require("./src/api/routes/User.routes");

//! creamos el servidor web
const app = express();

//! vamos a configurar dotenv para poder utilizar las variables d entorno del .env
dotenv.config();

//! conectamos con la base de datos
connect();

//! -----------------VARIABLES CONSTANTES --> PORT

const PORT = process.env.PORT;

//!- ----------------CORS -------------------------------
// libreria para configurar el acceso a la appi, hay que traer la librería (lo tengo en la línea 3)
app.use(cors()); // Para utilizar la librería

//! ----------------limitaciones de cantidad en el back end
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! -----------------ROUTAS ---------------------------------
// realizado en paso 4.

//! ----------------ERRORES GENERALES Y RUTA NO ENCONTRADA

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

// ----- en este caso como gestionamos un error la callback lleva de parametros error, req, res
// cuando es un controlador normal llevaria siempre como para parametros REQ, RES, NEXT ---> en este orden siemppre
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//! ----------------ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB

app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
