var dashboardModel = require("../models/dashboardModel");

function buscarRevelacoes(req, res) {
    dashboardModel.buscarRevelacoes().then(function (resultado) {
        if (resultado.length > 0) {
            console.log(resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as revelações.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarJogoInesquecivel(req, res) {
    dashboardModel.buscarJogoInesquecivel().then(function (resultado) {
        if (resultado.length > 0) {
            console.log(resultado);
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os jogos inesqueciveis.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarRevelacoes,
    buscarJogoInesquecivel
}