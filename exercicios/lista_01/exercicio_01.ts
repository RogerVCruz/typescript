import { questionInt, keyInYNStrict } from "readline-sync";

const numeros: Array<number> = new Array<number>(10);
numeros.unshift(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

while (true) {
  let numero = questionInt("Insira uma valor para ser buscado no array: ");

  if (numeros.indexOf(numero) === -1) {
    console.log(`O número ${numero} não foi encontrado!`);
  } else {
    console.log(
      `O número ${numero} está localizado na posição: ${numeros.indexOf(
        numero
      )}`
    );
  }

  let parar = keyInYNStrict("Deseja parar? : ");
  if (parar) {
    break;
  }
}
