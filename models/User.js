// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  preferredBaseCurrency: {
    type: String,
    default: "USD"
  },
  savedPairs: [
    {
      from: String,
      to: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);