function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var ano_formulario = document.getElementById("ano");
    var resultado = document.querySelector("section")
    if (ano_formulario.value.length == 0 || Number(ano_formulario.value) > ano)
        alert("[ERRO] Verifique os dados e tente novamente!");
    else {
        var sexo_formulario = document.getElementsByName("sexo");
        var idade = ano - Number(ano_formulario.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (sexo_formulario[0].checked) {
            genero = "homem";
            if (idade < 13)
                img.setAttribute("src", "imagens/menino.jpg");
            else if (idade < 21)
                img.setAttribute("src", "imagens/garoto.jpg");
            else if (idade < 50)
                img.setAttribute("src", "imagens/homem.jpg");
            else
                img.setAttribute("src", "imagens/velho.jpg");
        }
        else {
            genero = "mulher";
            if (idade < 13)
                img.setAttribute("src", "imagens/menina.jpg");
            else if (idade < 21)
                img.setAttribute("src", "imagens/garota.jpg");
            else if (idade < 50)
                img.setAttribute("src", "imagens/mulher.jpg");
            else
                img.setAttribute("src", "imagens/velha.jpg");
        }
        resultado.style.textAlign = "center";
        resultado.innerHTML = `Detectamos ${genero} com ${idade} ano(s)`;
        img.style.borderRadius = "50%";
        img.style.textAlign = "center";
        img.style.padding = "30px";
        resultado.appendChild(img);
    }
}