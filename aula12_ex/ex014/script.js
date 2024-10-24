function carregar() {
    // Criando a variável e adicionando o HTML article
    var mensagem = document.querySelector("article");
    // Criando a variável e adicionando o HTML img
    var imagem = document.querySelector("img");
    // Criando a variável data e adicionando a data atual
    var data = new Date();
    // Criando a variável hora e adicionando a hora atual
    var hora = data.getHours();
    // Criando a variável minuto e adicionando o minuto atual
    var minuto = data.getMinutes();
    // Exibindo no HTML article o valor recebido
    mensagem.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12) {
        // Criando a variável e adionando o HTML <h1>
        const titulo = document.querySelector("h1");
        // Adicionando a variável o estilo da cor
        titulo.style.color = "blue";
        // Adicionando no src a imagem
        imagem.src = 'imagens/Lanna2.jpg';
        // Adicionando ao body o estilo da cor
        document.body.style.background = "lightyellow";
    }
    else if (hora >= 12 && hora < 18) {
        // Adicionando no src a imagem
        imagem.src = "imagens/tarde.jpg";
        // Criando a variável e adicionando o HTML <header>
        const titulo = document.querySelector("header");
        // Adicionando a variável o estilo da cor
        titulo.style.color = "black";
        // Adicionando ao body o estilo da cor
        document.body.style.background = "darkorange";
    }
    else {
        // Adicionando no src a imagem
        imagem.src = "imagens/noite3.jpg";
        // Criando a variável e adinando o HTML <header>
        const titulo = document.querySelector("header");
        // Adicionando a variável o estilo cor
        titulo.style.color = "white";
        // Adicionando ao body o estilo cor
        document.body.style.background = "black";
    }
}