const personagemService = require("./personagem.service")

const findByNamePersonagemService = require("./personagem.service");

const createPersonagemController = async (req, res) => {
  const { name, foto } = req.body;

  if (!name || !foto) {
    return res.status(400).send({
      message:
        "Alguns campos estão faltando. Os campos são: 'name' e 'foto'.",
    });
  }

  const foundPersonagem = await personagemService.findByNamePersonagemService(name);

  //se o usuario existir, ele barra a crição
  if (foundPersonagem) {
    return res.status(400).send({
      message: "Usuário já existe!",
    });
  }

  //caso o email exista, ele cria um novo
  const personagem = await personagemService
    .createPersonagemService(req.body)
    .catch((err) => console.log(err.message));

  if (!personagem) {
    return res.status(400).send({
      message: "Erro ao criar Usuário!",
    });
  }

  res.status(201).send(personagem);
};

const findAllPersonagemController = async (req, res) => {
  res.send({ message: "Find All OK" });
};

module.exports = { createPersonagemController, findAllPersonagemController };
