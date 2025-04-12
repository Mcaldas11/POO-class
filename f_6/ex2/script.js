
let ovoPremiado;

function inicializarJogo() {
    ovoPremiado = Math.floor(Math.random() * 12) + 1;
    for (let i = 1; i <= 12; i++) {
        const btn = document.getElementById('btn' + i);
        btn.disabled = false;
        btn.style.backgroundImage = 'none';
    }
    document.getElementById('resultado').innerText = '';
    document.getElementById('jogarNovamente').style.display = 'none';
}

function clicar(num) {
    const botao = document.getElementById('btn' + num);
    if (num === ovoPremiado) {
        botao.style.backgroundImage = "url('imagens/DiscoverEggs.png')";
        document.getElementById('resultado').innerText = 'Parabéns! Encontraste o ovo premiado!';
        terminarJogo();
    } else {
        botao.style.backgroundImage = "url('imagens/Ovo.png')";
        botao.disabled = true;
    }
}

function terminarJogo() {
    for (let i = 1; i <= 12; i++) {
        document.getElementById('btn' + i).disabled = true;
    }
    document.getElementById('jogarNovamente').style.display = 'inline-block';
}

function jogarNovamente() {
    inicializarJogo();
}

// Inicializar ao carregar a página
window.onload = inicializarJogo;
