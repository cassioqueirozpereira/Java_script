function gerar() {
    let numero = document.getElementById("numero");
    let resultado = document.getElementById("tabuada");
    if (numero.value.length == 0)
        alert("Por favor, digite um número!");
    else {
        resultado.innerHTML = "";
        let num = Number(numero.value);
        for(let i = 1; i <= 10; i++) {
            let item = document.createElement("option");
            item.text = `${num} x ${i} = ${num*i}`;
            resultado.appendChild(item);
        }
    }
}