const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario", {
  type: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = Usuario;
