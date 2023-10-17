// RECURSIVIDADE
function fatorial(num) {
    if (num == 1 || num == 0) {
        return 1;
    }
    else {
        console.log(num);
        return num * fatorial(num - 1);
    }
}

console.log(fatorial(2));