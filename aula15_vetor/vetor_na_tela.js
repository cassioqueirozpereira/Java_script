var valores = [1, 3, 2, 4, 6, 5];
valores.sort();
console.log (valores);

//for (var i = 0; i < valores.length; i++)
//    console.log(`A posição ${i}, tem o valor ${valores[i]}`);

for (let i in valores)
    console.log(`A posição ${i}, tem o valor ${valores[i]}`);