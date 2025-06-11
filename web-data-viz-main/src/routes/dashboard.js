var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get('/buscarRevelacoes', function (req, res) {
    dashboardController.buscarRevelacoes(req, res);
});

router.get('/buscarJogoInesquecivel', function (req, res) {
    dashboardController.buscarJogoInesquecivel(req, res);
});

module.exports = router;