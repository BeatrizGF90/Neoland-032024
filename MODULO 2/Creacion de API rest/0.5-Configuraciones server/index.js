const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

//Creamos servidor web

const app = express();

//traemos del env la variable de entorno del puerto
//!esta variable tiene que ser siempre en mayúsculas
const PORT = process.env.PORT;
console.log(PORT);

//Cors -->Configurar que se puede hacer en el back así como8 el acceso
app.use(cors());

//! limitaciones de cantidad en el back end. Esto NO SE CAMBIA NUNCA
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! Rutas de la app

//! Errores generales y de ruta no encontrada
// Para cuando la RUTA NO ESTÁ ENCONTRADA: Siempre en este orden: (req, res, next)
// el "*"" es para ruta no encontrada
/*Cuando hay una ruta que no está encontrada, lanzo un error con el mensaje Routa not found
 y le ponga el status 404 y retorno un next, el next lanza el error al usuario */
app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

/* Para UN ERROR QUE NO ESTÉ COMTEMPLADO (error 500): Interval server error: 
En este caso este orden: (error, req, res) */
/* Retorna una respuesta que tiene un status qie si no tengo el status lanza el error 500, y 
lanza un json con el mensaje del error en caso que lo tenga, si no tiene lanza:
"unexpected error"
 */

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

// cuando es un controlador normal llevaria siempre como para parametros REQ, RES, NEXT ---> en este orden siemppre

//! Escuhamos en el puerto servidor web
// disable("x-powered-by") --> Esto nos sirve para revelar la tecnología con la que está hecho el back
/* con listen lo que hace es escuchar un puerto que recibe y tiene una callback que maneja
 que pasa cuando un puerto se está escuchando y nos da la url donde tenemos el servidor*/
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
