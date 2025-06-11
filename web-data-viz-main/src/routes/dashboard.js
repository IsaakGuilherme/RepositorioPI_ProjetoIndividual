var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get('/:idUsuario', function (req, res) {
    dashboardController.buscarRevelacoes(req, res);
});


module.exports = router;