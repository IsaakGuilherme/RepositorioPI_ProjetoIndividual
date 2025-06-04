var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idusuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idusuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get('/buscarRevelacoes', function (req, res) {
    medidaController.buscarRevelacoes(req, res);
});


module.exports = router;