let numero = document.getElementById("numero");
let tela = document.getElementById("tela");
let resultado = document.querySelector("section");
let valores = [];

function isNumber(num) {
    if (Number(num) > 0 && Number(num) < 101)
        return true;
    else
        return false;
}

function inList(num, lista) {
    if (lista.indexOf(Number(num)) != -1)
        return true;
    else
        return false;
}

function adicionar() {
    resultado.innerHTML = "";
    if (isNumber(numero.value) && !inList(numero.value, valores)) {
        valores.push(Number(numero.value));
        let item = document.createElement("option");
        item.text = `Valor ${numero.value} adicionado`;
        tela.appendChild(item);
    }
    else
        alert("Valor inválido ou já adicionado na lista!");
    numero.value = "";
    numero.focus();
}

function finalizar() {
    if (valores.length == 0)
        alert("Adicione valores antes de finalizar!");
    else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        for (let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos];
            else
                menor = valores[pos]
        }
        resultado.innerHTML = "";
        resultado.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
    }
    numero.focus();
}