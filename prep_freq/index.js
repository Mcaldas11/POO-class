let info = [];


function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para adicionar à tabela
function atualizarTabela() {
    const tabela = document.getElementById('tabela');
    tabela.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Altura</th>
            <th>Peso</th>
            <th>IMC</th>
            <th>Classificação</th>
            <th>Ações</th>
        </tr>
    `;

    info.forEach((pessoa, index) => {
        const linha = tabela.insertRow();
        linha.innerHTML = `
            <td>${pessoa.nome}</td>
            <td>${pessoa.idade}</td>
            <td>${pessoa.altura}</td>
            <td>${pessoa.peso}</td>
            <td>${pessoa.imc}</td>
            <td>${pessoa.classificacao}</td>
            <td><button onclick="remover(${index})">Remover</button></td>
        `;
    });
}

// Função para classificar o IMC
function classificarIMC(imc) {
    if (imc < 18.5) 
        return "Abaixo do peso";
    else if (imc < 24.9) 
        return "Peso normal";
    else if (imc < 29.9) 
        return "Sobrepeso";
    else 
    return "Obesidade";
}

// Botão Calcular IMC
document.getElementById('btnIMC').addEventListener('click', function (e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('txtPeso').value);
    const alturaCm = parseFloat(document.getElementById('txtAltura').value);
    const altura = alturaCm / 100; // Corrigir para metros!

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }

    const imc = calcularIMC(peso, altura).toFixed(2);
    document.getElementById('txtIMC').value = imc;
});

// Botão Submeter
document.getElementById('btnSubmeter').addEventListener('click', function (event) {
    event.preventDefault();

    const nome = document.getElementById('txtNome').value;
    const idade = document.getElementById('txtIdade').value;
    const altura = document.getElementById('txtAltura').value;
    const peso = document.getElementById('txtPeso').value;
    const imc = document.getElementById('txtIMC').value;

    if (!nome || !idade || !altura || !peso || !imc) {
        alert('Por favor, preencha todos os campos e calcule o IMC!');
        return;
    }

    const classificacao = classificarIMC(imc);

    const pessoa = {
        nome,
        idade,
        altura,
        peso,
        imc,
        classificacao
    };

    info.push(pessoa);
    atualizarTabela();
    guardarLocalStorage();
    limparFormulario();
});

// Função para remover um registo
function remover(index) {
    info.splice(index, 1);
    atualizarTabela();
    guardarLocalStorage();
}

// Guardar no LocalStorage
function guardarLocalStorage() {
    localStorage.setItem('info', JSON.stringify(info));
}

// Carregar dados ao iniciar
function carregarLocalStorage() {
    const dados = localStorage.getItem('info');
    if (dados) {
        info = JSON.parse(dados);
        atualizarTabela();
    }
}

// Limpar formulário
function limparFormulario() {
    document.getElementById('idForm').reset();
    document.getElementById('txtIMC').value = '';
}

// Chamar função ao abrir a página
carregarLocalStorage();
