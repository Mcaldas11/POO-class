/*  Crie uma função arrow designada randomNumber que possa gerar um número
inteiro e aleatório entre dois quaisquer limites, passados como parâmetros
da função. */

min = prompt("Digite o valor mínimo: ");
max = prompt("Digite o valor máximo: ");

let randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber(min, max));

