const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: [true, "User must have username"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "User must have password"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
