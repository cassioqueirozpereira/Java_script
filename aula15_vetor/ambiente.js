let num = [1, 6, 3, 2, 5, 4];

console.log(num);

// push vai adicionar um valor no final do array.
num.push(7);

console.log(`Foi adicionado uma posição e o valor 7 nela \n${num}`);

// length vai mostrar qual o tamanho do array.
console.log(`O vetor tem ${num.length} posições`);

// sort vai deixar o array em ordem crescente.
console.log(`Em ordem crescente os números do vetor ficam\n${num.sort()}`);

// indexOf verifica se tem o valor que está dentro do parenteses, se tiver ele mostra a posição, se não tiver ele mostra -1.
let pos = num.indexOf(5);
if (pos == -1)
    console.log("O valor não foi encontrado");
else
    console.log(`O valor 5 está na posição ${pos}`);