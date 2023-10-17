// Com colchetes, é possível criar arrays, onde o índice começa com 0 e vai até o infinito. Com chaves, é possível criar um objeto, onde você pode nomear os índices, colocar funções dentro do objeto, etc.
let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    // Função que recebe o parâmetro p, com valor inicial 0, caso a função não receba valor.
    alterar_peso(p = 0) {
        // this assume a palavra amigo.
        let i = this.peso;
        this.peso += p;

        if (this.peso < i)
            console.log("Você emagreceu");
        else if (this.peso == i)
            console.log("Seu peso se manteve");
        else
            console.log("Você engordou");
    }
}

amigo.alterar_peso(-2);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);