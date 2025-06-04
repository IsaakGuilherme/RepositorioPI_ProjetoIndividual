var database = require("../database/config");

function buscarUltimasMedidas(idusuario, limite_linhas) {

    var instrucaoSql = `select u.idusuario, u.nome, p.idPerguntaQuiz, r.idRespostaQuiz from usuario u 
        inner join respostaUsuario ru on ru.fkusuario = u.idusuario
        inner join perguntaQuiz p on p.idPerguntaQuiz = ru.fkpergunta
        inner join respostaQuiz r on r.idRespostaQuiz = ru.fkresposta
        where u.idusuario = ${idusuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idusuario) {

    var instrucaoSql = `select u.idusuario, u.nome, p.idPerguntaQuiz, r.idRespostaQuiz from usuario u 
        inner join respostaUsuario ru on ru.fkusuario = u.idusuario
        inner join perguntaQuiz p on p.idPerguntaQuiz = ru.fkpergunta
        inner join respostaQuiz r on r.idRespostaQuiz = ru.fkresposta
        where u.idusuario = ${idusuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

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
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarRevelacoes
}
