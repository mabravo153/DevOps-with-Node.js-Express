const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

exports.signUp = async (req, res) => {
  let { username, password } = req.body;

  try {
    let hashPassword = await bcryptjs.hash(password, 12);
    let usuario = await User.create({
      username,
      password: hashPassword,
    });

    req.session.user = usuario;
    res.status(201).json({
      msg: "user created",
      id: usuario._id,
    });
  } catch (error) {
    res.status(400).json({
      msg: "fail request",
      error,
    });
  }
};

exports.login = async (req, res) => {
  let { username, password } = req.body;

  try {
    let userFind = await User.findOne({ username });

    if (!userFind) {
      res.status(404).json({
        msg: "username incorrect",
      });
    } else {
      let validatePassword = await bcryptjs.compare(
        password,
        userFind.password
      );

      if (validatePassword) {
        req.session.user = userFind;
        res.status(200).json({
          msg: "login success",
        });
      } else {
        res.status(400).json({
          msg: "password incorrect",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "fail request",
      error,
    });
  }
};
