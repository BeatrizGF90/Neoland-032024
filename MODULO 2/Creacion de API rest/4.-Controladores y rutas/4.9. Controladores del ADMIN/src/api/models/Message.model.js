//! --------- nos requerimos mongoose---
const mongoose = require("mongoose");

//! ----------nos traemos de mongoose la parte de los esquemas de datos

const Schema = mongoose.Schema;

//! --------- creamos los esquemas de datos

// Definir el modelo de datos:
// ------------> Le damos a cada clave del objeto el Type (tipo de dato)
// ------------> definimos otras propiedades que limitan la informacion que se puede incluir en esa clave
// ------------> que sea requerido, una longitud maxima y minima, etc etc

/* Con MenssageSchema vamos a poder hacer:
- Un mensaje privado, un chat a un usuario
- Un mensaje público, un comentario a una movie
- Un mensaje público, un comentario a un usuario
- Un mensaje público, un comentario a un personaje

Esto lo vamos a hacer con un switch para evaluar con una variable en que caso estamos.
*/
const MenssageSchema = new Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // quién ha escrito el mensaje
    type: {
      // el tipo de mensaje, que va a ser o mensaje privado(chat privados) o mensaje público (los comentarios)
      type: String,
      enum: ["private", "public"],
      required: true,
    },
    content: {
      // contenido de los mensajes
      type: String,
      required: true,
    },
    recipientCharacter: {
      /* a dónde hago el comentario en concreto, no son requeridos para que solo salga en el objeto el que tiene el comentario o like */
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character",
    },
    recipientMovie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
    recipientUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

//! -------- con la definicion de datos y su esquema vamos a crear el modelo de datos

const Menssage = mongoose.model("Menssage", MenssageSchema);

//! -------- exportar el modelo para que lo utilicen los controladores

module.exports = Menssage;
