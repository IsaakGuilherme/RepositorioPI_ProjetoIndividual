var express = require("express");
var router = express.Router();

var administrativoController = require("../controllers/administrativoController");

router.get('/buscarUsuariosCadastrados', function (req, res) {
    administrativoController.buscarUsuariosCadastrados(req, res);
});

module.exports = router;