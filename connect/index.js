const mongoose = require("mongoose");
const Config = require("../config/config");

const conexion = () => {
  mongoose
    .connect(
      `mongodb://${Config.MONGO_USER}:${Config.MONGO_PASSWORD}@${Config.MONGO_HOST}:${Config.MONGO_PORT}/?authSource=admin`,
      { useNewUrlParser: true }
    )
    .then(() => console.log("Conectado a la base de datos"))
    .catch((e) => console.log(e));
};

module.exports = conexion;
