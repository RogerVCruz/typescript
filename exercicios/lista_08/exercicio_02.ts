import read from "readline-sync";
import { Stack } from "../../interface/Stack";

let menuOn = true;
const stack = new Stack<string>();

console.log("**********************************************");
console.log("1 - Adicionar um novo livro na pilha");
console.log("2 - Listar todos os livros na pilha");
console.log("3 - Retirar um livro da pilha");
console.log("0 - Sair");
console.log("**********************************************");

while (menuOn) {
  console.log("**********************************************");

  let menuOption = read.questionInt(
    console.log("Entre com a opção desejada: ")
  );
  switch (menuOption) {
    case 1:
      let bookName = read.question("Nome do livro: ");
      stack.push(bookName);
      console.log(`Livro ${bookName} adicionado à pilha.`);
      break;

    case 2:
      let isStackEmpty = stack.isEmpty();
      if (isStackEmpty) {
        console.log("A pilha está vazia");
      } else {
        console.log("Livros na pilha: ");
        stack.printStack();
      }
      break;

    case 3:
      let operationSuccessful = stack.pop();

      if (operationSuccessful) {
        console.log("Livro removido da pilha com sucesso!");
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
