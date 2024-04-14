const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//Creamos servidor web

const app = express();

//traemos del env la variable de entorno del puerto
//!esta variable tiene que ser siempre en mayúsculas
const PORT = process.env.PORT;
console.log(PORT);
