/* Crie uma função de expressão que dado um número (através de um prompt),
devolva o seu fatorial. Imprima o resultado na consola. */
 
num = +prompt("Digite um número: ");


function fatorial(num){
  let resultado = 1;
  for(let i = 1; i <= num; i++){
    resultado *= i;
  }
  console.log(resultado);
}

fatorial(num);