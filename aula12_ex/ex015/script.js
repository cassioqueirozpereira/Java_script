function verificar() {
    // Criando a variável e adicionando a data atual
    var data = new Date();
    // Criando a variável e adicionando o ano atual
    var ano = data.getFullYear();
    // Criando a variável e adicionando o HTML com id "ano"
    var ano_formulario = document.getElementById("ano");
    // Criando a variável e adicionando o HTML <section>
    var resultado = document.querySelector("section")
    // Se no campo do HTML o valor tiver 0 casas (ou seja, estiver vazio/não for digitado nada) || (ou) no campo HTML for digitado um valor maior que o ano atual
    if (ano_formulario.value.length == 0 || Number(ano_formulario.value) > ano)
        //  Alerta no HTML
        alert("[ERRO] Verifique os dados e tente novamente!");
    else {
        // Criando a variável adicionando o HTML com o nome "sexo"
        var sexo_formulario = document.getElementsByName("sexo");
        // Criando a variável e adicionando o ano atual menos o ano digitado no HTML com id "ano"
        var idade = ano - Number(ano_formulario.value);
        // Criando a variável e adicionando um valor vazio, ou seja, limpando a variável
        var genero = "";
        // Criando a variável img que irá receber a criação da tag <img> no HTML
        var img = document.createElement("img");
        // Atribuindo id ao HTML e o valor dele após a virgula. (não será ultilizado nesse site, somente para aprender).
        img.setAttribute("id", "foto");
        // Se a opção masculino estiver selecionada
        if (sexo_formulario[0].checked) {
            // A variável recebe "homem"
            genero = "homem";
            if (idade < 13)
                // Atribuindo src ao HTML e o valor dele aós a virgula
                img.setAttribute("src", "imagens/menino.jpg");
            else if (idade < 21)
                // Atribuindo src ao HTML e o valor dele aós a virgula
                img.setAttribute("src", "imagens/garoto.jpg");
            else if (idade < 50)
                // Atribuindo src ao HTML e o valor dele aós a virgula
                img.setAttribute("src", "imagens/homem.jpg");
            else
                // Atribuindo src ao HTML e o valor dele aós a virgula
                img.setAttribute("src", "imagens/velho.jpg");
        }
        else {
            genero = "mulher";
            if (idade < 13)
                // Atribuindo src ao HTML e o valor dele aós a virgula
                img.setAttribute("src", "imagens/menina.jpg");
            else if (idade < 21)
                // Atribuindo src ao HTML e o valor dele aós a virgula
                img.setAttribute("src", "imagens/garota.jpg");
            else if (idade < 50)
                // Atribuindo src ao HTML e o valor dele aós a virgula
                img.setAttribute("src", "imagens/mulher.jpg");
            else
                // Atribuindo src ao HTML e o valor dele aós a virgula
                img.setAttribute("src", "imagens/velha.jpg");
        }
        // Adicionando estilo de alinhamento no resultado
        resultado.style.textAlign = "center";
        // Adicionando valores no resultado
        resultado.innerHTML = `Detectamos ${genero} com ${idade} ano(s)`;
        // Adicionando estilo de borda na imagem
        img.style.borderRadius = "50%";
        // Adicionando estilo de alinhamento na imagem
        img.style.textAlign = "center";
        // Adicionando estilo de preenchimento na imagem
        img.style.padding = "30px";
        // Exibindo a imagem no HTML
        resultado.appendChild(img);
    }
}