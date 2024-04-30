const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const users = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
  },
  { timestaps: true }
);

const User = mongoose.model("User", users);

module.exports = User;