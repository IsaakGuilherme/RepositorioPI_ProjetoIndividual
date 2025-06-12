var express = require("express");
var router = express.Router();

var perguntasController = require("../controllers/perguntasController");

router.get("/buscar", function (req, res) {
    perguntasController.buscar(req, res);
});

module.exports = router;