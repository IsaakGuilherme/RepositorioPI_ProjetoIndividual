var database = require("../database/config");

function buscarUsuariosCadastrados() {
    var instrucaoSql = `
        SELECT DATE(data_criacao) AS dia, COUNT(*) AS total
        FROM usuario
        WHERE data_criacao >= DATE_SUB(NOW(), INTERVAL 7 DAY)
        GROUP BY dia
        ORDER BY dia DESC;
    `;
    console.log("Executando SQL das revelações:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUsuariosCadastrados
}
