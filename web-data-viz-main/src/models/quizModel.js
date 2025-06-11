var database = require("../database/config");

async function buscarQuestoesComAlternativas() {
  const instrucaoSql = `
    SELECT 
      pq.idPerguntaQuiz,
      pq.textoPergunta,
      rq.idRespostaQuiz,
      rq.textoResposta,
      rq.ordem
    FROM perguntaQuiz pq
    JOIN respostaQuiz rq ON pq.idPerguntaQuiz = rq.fkpergunta
    ORDER BY pq.ordem, rq.ordem;
  `;
  
  const resultados = await database.executar(instrucaoSql);

  const listaDeQuestoes = [];
  let questaoAtual = null;
  let idUltimaPergunta = null;

  resultados.forEach(row => {
    if (row.idPerguntaQuiz !== idUltimaPergunta) {
      questaoAtual = {
        id: row.idPerguntaQuiz,
        pergunta: row.textoPergunta,
        alternativaA: "",
        alternativaB: "",
        alternativaC: "",
        alternativaD: "",
        idAlternativaA: null,
        idAlternativaB: null,
        idAlternativaC: null,
        idAlternativaD: null
      };
      listaDeQuestoes.push(questaoAtual);
      idUltimaPergunta = row.idPerguntaQuiz;
    }

    if (row.ordem === 1) {
      questaoAtual.alternativaA = row.textoResposta;
      questaoAtual.idAlternativaA = row.idRespostaQuiz;
    }
    if (row.ordem === 2) {
      questaoAtual.alternativaB = row.textoResposta;
      questaoAtual.idAlternativaB = row.idRespostaQuiz;
    }
    if (row.ordem === 3) {
      questaoAtual.alternativaC = row.textoResposta;
      questaoAtual.idAlternativaC = row.idRespostaQuiz;
    }
    if (row.ordem === 4) {
      questaoAtual.alternativaD = row.textoResposta;
      questaoAtual.idAlternativaD = row.idRespostaQuiz;
    }
  });

  return listaDeQuestoes;
}

module.exports = {
  buscarQuestoesComAlternativas
};