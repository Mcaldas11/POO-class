//Crie uma função designada calcSoma que adiciona N números passados como parâmetros (o número de parâmetros pode variar) de entrada. Use o objeto arguments para resolver esse problema.

function calcSoma(){
    soma= 0;

    for (let i=0 ; i<arguments.length; i++){
        soma += arguments[i];

    }
    return soma;
}

console.log(calcSoma(1,2,3,4,5,6,7,8,9,10));