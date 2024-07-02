import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for (let i = 1; i <= 10; i++) {
  fila.enqueue(i);
}

fila.printQueue();

console.log(`Remover elemento ${fila.dequeue()}`);

fila.printQueue();

console.log(`Exibir o primeiro elemento da fila: ${fila.peek()}`);

console.log(`Checar se o elemento 1 existe na fila: ${fila.contains(1)}`);
