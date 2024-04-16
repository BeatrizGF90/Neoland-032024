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
const sendEmail = require("../../utils/sendEmail");
const {
  getTestEmailSend,
  setTestEmailSend,
} = require("../../state/state.data");

// CRUD--> "Crear, Leer, Actualizar y Borrar"
// va a ser asíncrono porque vamos a interactuar con el backend, con el mongoDb.
//siempre que algo no es instantaneo, es asíncrono y hay que gestionar esa sincronía.
//!-------------------------Register largo en código------------------------
const registerLargo = async (req, res, next) => {
  // capturamos la imagen nueva subida a cloudinary
  // return res.status(200).json(catchImg);
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
          //mailOption es la carta que quiero enviar y le digo quien lo envía, a quien se lo envía, que asunto y que texto
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

//! ----------------------------REGISTER CORTO EN CODIGO ------------------------

const registerUtil = async (req, res, next) => {
  let catchImg = req.file?.path; //capturamos la imagen que vamos a subir con el fichero
  try {
    await User.syncIndexes(); // con el usuario sincronizamos los indexes

    const { email, name } = req.body; // destructuring del body

    /* vamos a buscsar al usuario para ello con el destructuring cogemos el modelo y con el
    findOne buscamos un usuario que tenga el email o el nombre igual (una al menos tiene que 
    coincidei) para saber si ya existe o bien ese nombre o ese correo lo que significaría que 
    este usuario ya existe. */
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );
    if (!userExist) {
      // si el usuario no existe
      let confirmationCode = randomCode(); // generamos el randon code
      // hacemos una nueva instancia del usuario con una copia del req body y añadimos la clave adicional del confirmationCode
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        // si ha metido imagen
        newUser.image = req.file.path; // la capturamos
      } else {
        // si no ha metido imagen ponemos una general para los usuarios sin imagen
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }

      try {
        // como tenemos una asincronia por el save(), tenemos que terner un try catch
        const userSave = await newUser.save();
        //Hay que ver si el usuario realmente se ha guardado
        if (userSave) {
          sendEmail(email, name, confirmationCode); // llamamos a la unción sendEmail que está en utils
          setTimeout(() => {
            // Hago un setTimeout porque tengo que esperar un poco a que senEmail haga su trabajo
            if (getTestEmailSend()) {
              // el estado ya utilizado lo reseteo a false y mando una respuesta de el usuario es este y el confirmation este.
              setTestEmailSend(false);
              return res.status(200).json({
                user: userSave,
                confirmationCode,
              });
            } else {
              /*primero reseteo el estado porque ya lo he utilizado, y mando un error 404 de que si, te he registrado pero 
              no se ha enviado el código */
              setTestEmailSend(false);
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            }
          }, 2500);
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg); // si ya existe el usuario la imagen la borro porque no me hace falta y así no ocupo espacio en el cloudinary
      return res.status(409).json("this user already exist"); // saco un estatus 409 con el mensaje de que este usuario ya existe
    }
  } catch (error) {
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

//! ------------- REGISTER CON REDIRECT --> ES EL RECOMENDABLE A UTILIZAR

const registerWithRedirect = async (req, res, next) => {
  // capturamos la imagen por si hay un error borrarla en cloudinary
  let catchImg = req.file?.path;

  // Importante con el async await hacerlo con un try catch
  try {
    // actualizamos los indexes de los elementos unicos por si acaso han variado
    await User.syncIndexes();
    // Generamos el codigo con la funcion que hicimos en utils y que tienes mas arriba
    let confirmationCode = randomCode();

    // Hacemos destructuring del email y name que viene del body
    const { email, name } = req.body;

    // ---> comprobamos si existe el usuario

    // aqui se ponen el email y el name por separado porque ambos son unique,
    // si no fueran unique hay que meterlo como {email:req.body.email, name: req.body.name}
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );

    // SI NO EXISTE ENTONCES HACEMOS LA LÓGICA DEL REGISTER
    if (!userExist) {
      // Creamos un nuevo usuario con el req.body y le añadimos el codigo de confirmacion
      const newUser = new User({ ...req.body, confirmationCode });
      console.log(newUser);

      //  tenemos el archivo de la imagen le metemos el req.file.path que es donde guarda...
      // .. el middleware la URL de cloudinary
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        // si no nos pasa nada le pondremos una imagen predefinida
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }
      // -----> GUARDAMOS EL USUARIO EN LA DB
      try {
        const userSave = await newUser.save();

        if (userSave) {
          //------------- si hay usuario hacemos el redirech a otra ruta-------------
          return res.redirect(
            303,
            `http://localhost:8080/api/v1/users/register/sendMail/${userSave._id}`
          );
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      //----> SI EL USUARIO EXISTE:
      // + Borramos la imagen de cloudinary porque si existe no registramos el user
      // + Mandamos un error de que usuario ya existe
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    // si hay un error general borramos la URL porque no hemos registrado al usuario
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

/// ------------------------------------------------------------------------------------
/// --------------------CONTROLADOR DE ENVIAR EL CODE  ---------------------------------
///-------------------------------------------------------------------------------------

const sendMailRedirect = async (req, res, next) => {
  try {
    // nos traemos el id de los params
    const { id } = req.params;
    // buscamos al usuario por id para luego utilizarlo para sacar el email y el codigo
    const userDB = await User.findById(id);

    // ---------------------------CONFIGURAMOS NODEMAILER -----------------------------------
    const emailEnv = process.env.EMAIL;
    const password = process.env.PASSWORD;
    // --> 1) Configuramos el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailEnv,
        pass: password,
      },
    });
    // --> 2) creamos las opciones del envio del email
    const mailOptions = {
      from: emailEnv,
      to: userDB.email,
      subject: "Confirmation code",
      text: `tu codigo es ${userDB.confirmationCode}, gracias por confiar en nosotros ${userDB.name}`,
    };
    // --> 3) enviamos el correo y gestionamos el error o el ok del envio
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        // damos feedback al frontal de que no se ha enviado correctamente el codigo
        //TODO!  esto lo hacemos para que el frontal vuelva a enviar una request de este..
        // ... endpoint y vuelva a enviar el código al usuario.
        return res.status(404).json({
          user: userDB,
          confirmationCode: "error, resend code",
        });
      } else {
        console.log("Email sent: " + info.response);
        // damos feedback al frontal de que se ha enviado correctamente el codigo
        return res.status(200).json({
          user: userDB,
          confirmationCode: userDB.confirmationCode,
        });
      }
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  registerLargo,
  registerUtil,
  registerWithRedirect,
  sendMailRedirect,
};
