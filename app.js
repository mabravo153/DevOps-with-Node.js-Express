const express = require("express");
const cors = require("cors");
const redis = require("redis");
const session = require("express-session");
const rutas = require("./routes/routes");
const conexion = require("./connect/index");
const { REDIS_URL, REDIS_PORT, SESSION_SECRET } = require("./config/config");

let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient({
  host: REDIS_URL,
  port: REDIS_PORT,
});

const app = express();
const port = process.env.PORT || 4000;

conexion();

app.enable("trust proxy");

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie: {
      saveUninitialized: false,
      resave: false,
      secure: false,
      httpOnly: true,
      maxAge: 30000,
    },
  })
);
app.use(express.json());
app.use(cors());
app.use("/api/v1", rutas);

app.listen(port, () => console.log("server up"));
