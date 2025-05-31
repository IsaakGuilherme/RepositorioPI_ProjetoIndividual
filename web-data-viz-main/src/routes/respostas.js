var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController");

router.post("/salvarRespostas",respostasController.salvarRespostas);

module.exports = router;