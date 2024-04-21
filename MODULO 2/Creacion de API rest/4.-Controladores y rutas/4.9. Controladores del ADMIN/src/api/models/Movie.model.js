const mongoose = require("mongoose");

/* En la movie vamos a tener:
- Nombre de la película.
- Año de publicación.
- Los personajes que es referenciado del modelo de personajes
- los likes que son los id de las personas que han dado like a esa película.
- los comentarios que son referenciados al modelo de mensajes públicos. (los chats son los que son mensajes privados)
*/
const MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menssage" }],
    //owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
