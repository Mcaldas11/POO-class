//Peça ao utilizador para indicar 2 números (através de prompts) e determine o somatório de todos os números nesse intervalo (incluindo os limitesinferior e superior). Note que o segundo número pode ser superior ou inferior ao primeiro. O seu programa deve funcionar nos dois cenários.Por exemplo: intervalo 10–15 ou intervalo 15-10 deve dar o mesmo resultado.

let num1 = +prompt("Indique o primeiro número:");
let num2 = +prompt("Indique o segundo número:");

if(isNaN(num1) || isNaN(num2)){
    console.log("Por favor insira um número válido.");
}else{
    let menor = Math.min(num1, num2);
    let maior = Math.max(num1, num2);

    let soma = 0;
    for(let i = menor; i <= maior; i++){
        soma += i;
    }

    alert(`O somatório dos números entre ${menor} e ${maior} é ${soma}`);
}