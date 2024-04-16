//! Traemos las librerias
const nodemailer = require("nodemailer");
const validator = require("validator");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config(); // despues de traer dotenv hay que configurarlo

//!-------------------------Modelos---------------------------------------
const User = require("../models/User.model");

//! ------------------------------utils - middlewares----------------------
const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const randomCode = require("../../utils/randomCode");

// CRUD--> "Crear, Leer, Actualizar y Borrar"
// va a ser asíncrono porque vamos a interactuar con el backend, con el mongoDb.
//siempre que algo no es instantaneo, es asíncrono y hay que gestionar esa sincronía.
//!-------------------------Register largo en código------------------------
const registerLargo = async (req, res, next) => {
  // capturamos la imagen nueva subida a cloudinary
  let catchImg = req.file?.path;
  try {
    /* actualizamos los elementos unique del modelo que son los indexes, para ello primero apunto al modelo
      que es User (el modelo siempre en Mayúscula) y luego le meto el método que es .syncIndexes() */
    await User.syncIndexes();

    const { email, name } = req.body; // lo que enviamos por la parte del body de la request

    // vamos a buscsar al usuario
    //findOne hace que busque un usuario que tenga el email o el nombre.
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );

    if (!userExist) {
      let confirmationCode = randomCode();
      const newUser = new User({ ...req.body, confirmationCode }); // al nuevo usuario me meto el body y el confirmationCode
      if (req.file) {
        // req.file --> si existe una imagen
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }

      try {
        const userSave = await newUser.save();
        if (userSave) {
          // ---------------------------> ENVIAR EL CODIGO CON NODEMAILER --------------------
          // con nodemailer me traigo el email y el password
          const emailEnv = process.env.EMAIL;
          const password = process.env.PASSWORD;
          // createTransport es como el cartero que lleva la carta con el gmail y el autentificador
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: emailEnv,
              pass: password,
            },
          });
          //mailOption es la carta que quiero enviar y le digo quien lo envía, a quien se lo envía y que le envío
          const mailOptions = {
            from: emailEnv,
            to: email,
            subject: "Confirmation code",
            text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
          };
          // una vez que tengo todo, envío el correo con el método: sendMail()
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            }
            console.log("Email sent: " + info.response);
            return res.status(200).json({
              user: userSave,
              confirmationCode,
            });
          });
        } else {
          return res.status(404).json("error save user");
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    // SIEMPRE QUE HAY UN ERROR GENERAL TENEMOS QUE BORRAR LA IMAGEN QUE HA SUBIDO EL MIDDLEWARE
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error); // lo envío por next porque next me envía y guarda todos los errores en el log
  }
};

module.exports = {
  registerLargo,
};
