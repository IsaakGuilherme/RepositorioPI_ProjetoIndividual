var database = require("../database/config");

function buscarRevelacoes() {
    var instrucaoSql = `
        SELECT r.textoResposta AS jogador, COUNT(*) AS totalVotos
        FROM respostaUsuario ru
        INNER JOIN respostaQuiz r ON ru.fkresposta = r.idRespostaQuiz
        WHERE ru.fkpergunta = 1
        GROUP BY r.textoResposta
        ORDER BY totalVotos DESC;
    `;
    console.log("Executando SQL das revelações:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarRevelacoes
}
