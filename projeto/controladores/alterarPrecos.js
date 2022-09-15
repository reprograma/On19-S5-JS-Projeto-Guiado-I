// Pergunte qual o porcentual a ser aplicado
// Pergunte se o usuário realmente quer aplicar o aumento
// Caso ele desista, volte ao meno inicial
// Caso prossiga, aplique o porcentual em todos os produtos
// Lembre que é necessário converter string para number vindo do terminal

const readline = require("readline-sync");
const { database } = require("../database");

const alterarPrecos = () => {
  console.log("Qual percentual deseja aplicar em todos os produtos?");
  const percentual = readline.questionInt();
  console.log("\nPercentual: " + percentual +"%\n");

  //console.log("Deseja realmente continuar com o aumento de valor?");
  //const resposta = readline.questionInt("\n[1- Sim, 2- Nao] \n");

  if (resposta === 1){
    console.log("Deseja realmente continuar com o aumento de valor?")
    database.forEach(produto => produto.preco = Math.round((produto.preco / 100) * percentual)+ produto.preco); //aqui fez a junção entre o preço dos produtos dividido por 100 e multiplicado pela porcentagem que pudesse escolher.
    console.table(database);     
  }else{
    console.log("Dê enter para voltar ao Menu");
    readline.question();
  }
}
  //const porcentual = readline.question();
  //console.log("Porcentual: " + porcentual);
  //console.log("Dê enter para voltar");
  //readline.question();
  //console.clear();
//}

module.exports = {
  alterarPrecos
}
