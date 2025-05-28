var database = require("../database/config");

function buscar() {
console.log("ACESSEI O quizModel -> buscar()");
  var instrucaoSql = `
    SELECT * FROM PerguntaQuiz;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}
module.exports = {
  buscar
};