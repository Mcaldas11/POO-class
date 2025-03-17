// Crie uma função designada showTabuada(numero) que apresenta a tabela de multiplicação para um determinado número passado como parâmetro (número esse, resultante de um prompt). No caso de nenhum parâmetro ser passado à função, esta deve imprimir a tabela de multiplicação de 10.

num = prompt("Digite um número: ");
if (num == "") {
    num = 10;
}

function showTabuada(num) {
    for ( i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

console.log(showTabuada(num));


    