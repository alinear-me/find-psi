const controller = require("../controllers/psicologiaController");
const express = require("express");

const router = express.Router();

//rotas
router.get("/all", controller.findAllPsicologos);
router.get("/location", controller.findByLocation);
router.get("service/psicologia", controller.findByService);
router.post("/add", controller.addNewPsicologo);
router.patch("/:id", controller.updatePsicologo);
router.delete("/:id", controller.deletePsicologo);

module.exports = router;