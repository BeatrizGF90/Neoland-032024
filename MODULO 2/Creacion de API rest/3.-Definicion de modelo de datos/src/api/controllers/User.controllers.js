//! Traemos las librerias
const nodemailer = require("nodemailer");
const validator = require("validator");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config(); // despues de traer dotenv hay que configurarlo

//!-------------------------Modelos
const User = require("../models/User.model");

// CRUD--> "Crear, Leer, Actualizar y Borrar"
// va a ser asíncrono porque vamos a interactuar con el backend, con el mongoDb.
//siempre que algo no es instantaneo, es asíncrono y hay que gestionar esa sincronía.
//!-------------------------Register largo en código
const registerLargo = async (req, res, next) => {
  try {
    return res.status(200).json("hola");
  } catch (error) {}
};

module.exports = {
  registerLargo,
};
