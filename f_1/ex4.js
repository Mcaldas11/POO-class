//Escrever um programa que verifica se os numeros sao perfeitos. Um numero e perfeito se a soma dos seus divisores, excluindo ele mesmo, e igual ao numero. Por exemplo, 6 e perfeito porque 1 + 2 + 3 = 6.

num = +prompt("Digite um numero inteiro positivo; ");
soma = 0;

for( i = 1 ; i < num ; i++ ){
    if(num % i == 0){
        soma +=i;
    }
}

if(soma == num){
    alert('O numero ' + num + ' é perfeito!');
}
else{
    alert('O numero ' + num + ' não é perfeito!');
}

