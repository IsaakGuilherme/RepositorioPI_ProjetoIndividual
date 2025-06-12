var administrativoModel = require("../models/administrativoModel");

function buscarUsuariosCadastrados(req, res) {
    administrativoModel.buscarUsuariosCadastrados().then(function (resultado) {
        if (resultado.length > 0) {
            console.log(resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar usuarios cadastrados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUsuariosCadastrados
}