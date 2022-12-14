require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/database");
const personagemRoute = require("./personagens/personagens.route");

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();

app.use(cors());

app.use(express.json());

app.use("/personagens", personagemRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
