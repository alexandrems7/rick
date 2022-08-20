const router = require('express').Router();

const personagemController = require("./personagens.controller")

router.post("/", personagemController.createPersonagemController);
router.get("/", personagemController.findAllPersonagemController);


module.exports = router;


