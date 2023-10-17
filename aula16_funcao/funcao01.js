function parimpar(num) {
    if (num % 2 == 0)
        return "par";
    else
        return "ímpar";
}

let resultado = parimpar(41);
console.log(resultado);