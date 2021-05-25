const express = require("express");
const cors = require("cors");
const rutas = require("./routes/routes");
const conexion = require("./connect/index");

const app = express();
const port = process.env.PORT || 4000;

conexion();
app.use(express.json());
app.use(cors());
app.use("/api/v1", rutas);

app.listen(port, () => console.log("server up"));
