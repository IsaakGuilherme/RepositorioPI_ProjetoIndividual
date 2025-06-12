var perguntasModel = require("../models/perguntasModel");

function buscar(req, res) {
  perguntasModel.buscar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send('Perguntas Não Encontradas!!');
      }
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = { buscar };