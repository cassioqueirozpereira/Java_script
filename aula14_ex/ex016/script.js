function contar() {
    let inicio = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let passo = document.getElementById("passo");
    let resultado = document.querySelector("section");
    
    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
        resultado.innerHTML = "Impossível contar!"
    else {
        resultado.innerHTML = 'Contando: ';
        let ini = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            alert("Passo inválido! Considerando PASSO 1");
            p = 1;
        }
        
        if (ini < f) {
            for(let c = ini; c <= f; c += p)
                resultado.innerHTML += `<br>${c} `;
        }
        else {
            for(let c = ini; c >= f; c -= p)
                resultado.innerHTML += `<br> ${c}`
        }
    }
}