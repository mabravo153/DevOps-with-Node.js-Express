const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.get("/api", (req, res) => {
  res.json({
    msg: "success",
    code: 200,
  });
});

app.listen(port, () => console.log("server up"));
