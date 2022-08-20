const Personagem = require("./Personagem");

const findByNamePersonagemService = (name) => Personagem.findOne({ name: name });

//cria usuário no body
const createPersonagemService = (body) => Personagem.create(body);

module.exports = { findByNamePersonagemService, createPersonagemService };