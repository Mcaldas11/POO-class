let jogos = []

const form = document.getElementById("form")

function addtable(gameName, launchDate, gameType) {
    let table = document.querySelector("#tabela")
    table.innerHTML += `
    <tr class="data">
        <td>${gameName}</td>
        <td>${launchDate}</td>
        <td>${gameType}</td>
        <td><button onclick="datalhesLinha(this)">Detalhes</button></td>
        <td><button onclick="removerLinha(this)">Remover</button></td>
    </tr>`
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const ano = new Date(document.getElementById('ano').value).getFullYear()
    const genero = document.getElementById('genero').value
    const avaliacao = +document.getElementById('avaliacao').value

    const plataformas = [...document.getElementById('plataforma').selectedOptions].map(option => option.value)

    const anoAtual = new Date().getFullYear()

    if (ano < 0 || ano > anoAtual) {
        alert("Por favor, preencha o ano corretamente!")
        return
    }

    const novoJogo = { nome, ano, genero, plataformas, avaliacao }
    jogos.push(novoJogo)
    console.log(jogos)

    addtable(nome, ano, genero)

    form.reset()
})

function detalhesLinha(botao){
    const linha = botao.parentElement.parentElement
    const nome = linha.children[0].innerText
    const ano = linha.children[1].innerText
    const genero = linha.children[2].innerText

    const jogo =jogos.find(jogo => jogo.nome===nome && jogo.ano===ano && jogo.genero===genero)
    if(jogo){
        alert(jogo.nome + "\n" + jogo.ano + "\n" + jogo.genero )
    }
    else{
        alert("Jogo não encontrado")
    }
}



function removerLinha(botao) {
    botao.parentElement.parentElement.remove()
}