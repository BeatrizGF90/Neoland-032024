const User = require("../models/User.model");

const changeGender = async (req, res, next) => {
  try {
    const { idUserChanged } = req.params; // el params viene de la request
    const { gender } = req?.query;

    /* el nombre en este caso idUserChanged y gender lo sacamos siempre de la route
     los query no son obligatorios no hacenm que rompa la ruta, es decir que no encuentre
     los params SON OBLIGATORIOS, si no se pone la ruta no se encuentra
    
     En los params ponemos info exencial, en los query ponemos info no esencial
     

     Ahora busco por id y actualizo, puedo hacer lo siguiente:
     changeGender/idDeLaPersona?gender=hombre esto me cambiaría el genero de la persona a hombre.*/
    //!changeGender/idDeLaPersona?gender esto pone el género como "otros"
    //!changeGender/idDeLaPersona esto tambiém pone el género como "otros"
    /* Esto pasa porque la gender es la query que coincide con el nombre de la clave del objeto en 
    mongo pero no es el valor de mongo. Por lo cual si gender query le he pasado por la ruta su valor 
    lo coje (?gender=hombre) sino pone otros*/

    await User.findByIdAndUpdate(idUserChanged, {
      // el nombre en este caso idUserChanged lo sacamos siempre de la route
      gender: gender ? gender : "otros",
    });

    // ----------------________> test en runtime------------------

    const updateUser = await User.findById(idUserChanged);
    if (gender) {
      if (updateUser.gender == gender) {
        return res.status(200).json({ updateTest: true });
      } else {
        return res.status(404).json({ updateTest: false });
      }
    } else {
      if (updateUser.gender == "otros") {
        return res.status(200).json({ updateTest: true });
      } else {
        return res.status(404).json({ updateTest: false });
      }
    }
  } catch (error) {
    return next(error);
  }
};

//! ----------------PARA hacer un SuperAdmin----------------------

const changeAdmin = async (req, res, next) => {
  try {
    const { idUser } = req.params; // el nombre en este caso idUser lo sacamos siempre de la route
    try {
      await User.findByIdAndUpdate(idUser, { rol: "admin" });
      /* pongo el id que quiero cambiar y dentro de llaves lo que quiero cambiar, 
      en este caso va a ser un objeto llamado rol y en el rol le voy a poner "admin" */

      // test --------------------runtime ---------------
      const updateUser = await User.findById(idUser);
      if (updateUser.rol == "admin") {
        return res.status(200).json({ updateTest: true });
      } else {
        return res.status(404).json({ updateTest: false });
      }
    } catch (error) {
      return res.status(404).json(error.message);
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { changeGender, changeAdmin };
