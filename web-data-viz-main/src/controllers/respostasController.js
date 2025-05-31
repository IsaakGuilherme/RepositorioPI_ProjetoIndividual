const respostasModel = require("../models/respostasModel");

async function salvarRespostas(req, res) {
  const { idUsuario, respostas } = req.body;

  if (!idUsuario || !Array.isArray(respostas)) {
    return res.status(400).json({ erro: "Dados inválidos" });
  }

  try {
    await respostasModel.salvarRespostas(idUsuario, respostas);
    res.status(200).json({ mensagem: "Respostas salvas com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar respostas" });
  }
}

module.exports = {
  salvarRespostas
};