function carregar() {
    var mensagem = document.querySelector("article");
    var imagem = document.querySelector("img");
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    mensagem.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'imagens/Lanna2.jpg';
        document.body.style.background = "lightyellow";
    }
    else if (hora >= 12 && hora < 18) {
        imagem.src = "imagens/tarde.jpg";
        document.body.style.background = "darkorange";
    }
    else {
        imagem.src = "imagens/noite3.jpg";
        document.body.style.background = "black";
    }
}