import { questionInt } from "readline-sync";

const numeros: Set<number> = new Set<number>();

for (let index = 0; index < 10; index++) {
  let numero = questionInt(
    "Insira uma valor inteiro nao repetido para ser inserido no set: "
  );
  numeros.add(numero);
}

console.table([...numeros].sort((a, b) => a - b));
