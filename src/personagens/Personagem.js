const mongoose = require("mongoose");

const PersonagemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
    unique: true,
  },
});

const Personagem = mongoose.model("Personagem", PersonagemSchema);

module.exports = Personagem;