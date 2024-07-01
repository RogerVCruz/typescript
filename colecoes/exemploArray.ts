const numeros: Array<number> = new Array<number>();

const numeros2: number[] = [];

numeros.push(1);
numeros.push(2);
numeros.push(3);
numeros.unshift(15, 80, 100);

console.log(numeros);
console.log(`A posição do elemento 15 é: ${numeros.indexOf(1)}`);
console.log(`Existe no Array o elemento 1? ${numeros.includes(1)}`);

numeros[numeros.indexOf(15)] = 10;

console.table(numeros);

numeros.splice(numeros.indexOf(80), 1);

console.table(numeros);
