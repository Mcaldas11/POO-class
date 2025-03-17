//Peça números ao utilizador até que ele insira o número 0. Exibir na consola o menor e o maior número inseridos.

let num = +prompt("Indique um número:");
let menor = num;
let maior = num;

while(num !== 0){
    if(num < menor){
        menor = num;
    }
    if(num > maior){
        maior = num;
    }
    num = +prompt("Indique um número:");
}
console.log(`O menor número inserido foi ${menor} e o maior foi ${maior}`);