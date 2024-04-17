const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateToken = (id, email) => {
  if (!id || !email) {
    throw new Error("Email or id are missing"); // Throw lanza un error al usuario
  }

  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" }); // EL TOKEN SE PUEDE PONER QUE EXPIRE EN HORAS O EN DÍAS
};

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token is missing");
  }

  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
