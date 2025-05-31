var database = require("../database/config");

// salvarRespostas recebe idUsuario e um array de objetos {idPergunta, idResposta}
async function salvarRespostas(idUsuario, respostas) {
  const values = respostas.map(r => `(${idUsuario}, ${r.idPergunta}, ${r.idResposta})`).join(',');
  const instrucaoSql = `
    INSERT INTO respostaUsuario (fkusuario, fkpergunta, fkresposta)
    VALUES ${values}
    ON DUPLICATE KEY UPDATE fkresposta=VALUES(fkresposta);
  `;
  return database.executar(instrucaoSql);
}

module.exports = {
  salvarRespostas
};