// filepath: quiz-project/src/models/perguntasModel.js
var database = require("../database/config");

function buscar() {
  var instrucaoSql = `
    SELECT 
      pq.idPerguntaQuiz as id,
      pq.textoPergunta as pergunta,
      rA.idRespostaQuiz as idAlternativaA, rA.textoResposta as alternativaA,
      rB.idRespostaQuiz as idAlternativaB, rB.textoResposta as alternativaB,
      rC.idRespostaQuiz as idAlternativaC, rC.textoResposta as alternativaC,
      rD.idRespostaQuiz as idAlternativaD, rD.textoResposta as alternativaD
    FROM perguntaQuiz pq
    LEFT JOIN respostaQuiz rA ON pq.idPerguntaQuiz = rA.fkpergunta AND rA.ordem = 1
    LEFT JOIN respostaQuiz rB ON pq.idPerguntaQuiz = rB.fkpergunta AND rB.ordem = 2
    LEFT JOIN respostaQuiz rC ON pq.idPerguntaQuiz = rC.fkpergunta AND rC.ordem = 3
    LEFT JOIN respostaQuiz rD ON pq.idPerguntaQuiz = rD.fkpergunta AND rD.ordem = 4
    ORDER BY pq.ordem;
  `;
  return database.executar(instrucaoSql);
}

module.exports = { buscar };