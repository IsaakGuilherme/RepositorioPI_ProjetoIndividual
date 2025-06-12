var database = require("../database/config");

async function salvarRespostas(idUsuario, respostas) {
  const values = [];
  respostas.forEach(r => {
    values.push(`(${idUsuario}, ${r.idPergunta}, ${r.idResposta})`);
  });
  
  const instrucaoSql = `
    INSERT INTO respostaUsuario (fkusuario, fkpergunta, fkresposta)
    VALUES ${values.join(',')}
    ON DUPLICATE KEY UPDATE fkresposta=VALUES(fkresposta);
  `;
  
  return database.executar(instrucaoSql);
}

module.exports = {
  salvarRespostas
};