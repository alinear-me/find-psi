const controller = require("../controllers/psicologiaController");
const express = require("express");

const router = express.Router();

//rotas
router.get("/all", controller.findAllPsychologists);
