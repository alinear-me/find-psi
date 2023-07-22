require("dotenv").config(); //carregando as configurações para poder manipular od dados
const express = require("express"); //importando o express
const cors = require("cors");
const mongoose = require("./database/dbConnect");
const psicologiaRoutes = require("./routes/psicologiaRoutes");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/find-psi/psicologia", psicologiaRoutes);

module.exports = app;