import { Queue } from "../../interface/Queue";
import input from "readline-sync";

let menuOn = true;
const queue = new Queue<string>();

console.log("**********************************************");
console.log("1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
console.log("0 - Sair");
console.log("**********************************************");

while (menuOn) {
  console.log("**********************************************");

  let menuOption = input.questionInt(
    console.log("Entre com a opção desejada: ")
  );
  switch (menuOption) {
    case 1:
      let clientName = input.question("Nome do cliente: ");
      queue.enqueue(clientName);
      console.log(`Cliente ${clientName} adicionado à fila.`);

      break;

    case 2:
      console.log("Clientes na fila: ");
      queue.printQueue();
      break;

    case 3:
      let operationSuccessful = queue.dequeue();

      if (operationSuccessful) {
        console.log("Cliente removido da lista com sucesso!");
      } else {
        console.log("Não foi possível realizar a operação!");
      }
      break;

    case 0:
      console.log("Encerrando o programa!");
      menuOn = false;
      break;

    default:
      console.log("Opção inválida!");
      break;
  }
}
