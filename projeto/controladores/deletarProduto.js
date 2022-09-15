// Pergunte o id a ser deletado
// Pergunte se o usuário realmente deseja deletar o produto X (mostre o nome do produto)
// Se o usuário confirmar, delete o produto e volte ao menu inicial
// Se o usuário desistir, volte ao menu inicial
const readline = require("readline-sync");
const { database } = require("../database");

const deletarProduto = () => {
  console.log("Digite um id de um produto para EXCLUIR");
  const idSelecionado = readline.question();

  const posicaoDeletada = database.findIndex(database => database.id === +idSelecionado); 

  const itemCompleto = database.find(database => database.id === +idSelecionado);
  console.log("Produto a ser excluido: " + idSelecionado + " - " + itemCompleto.nome);
  
  console.log("Tem certeza que deseja excluir esse produto?")
  const deletou = readline.question();

  if (deletou.toLowerCase() == "sim") {
    database.splice(posicaoDeletada, 1);
    console.log("O produto foi excluido com sucesso.")
    console.table(database);
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();

  } else {
    console.log("Tudo bem, não excluirei nenhum produto. Até a proxima :)");
    console.log("Dê enter para voltar");
    readline.question();
    console.clear();
  }
};

module.exports = {
  deletarProduto
}


