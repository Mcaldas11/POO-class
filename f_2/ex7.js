//Implemente uma função de expressão (função arrow) que dado um número com 3 dígitos (entre 100 e 999, verifique se esse número é um palíndromo. Se sim, a função deve devolver true, caso contrário false. Imprima o resultado devolvido pela função na consola

num = prompt("Digite um número de 3 dígitos: ");
num = parseInt(num);

let palindromo = (num) => {
  let numString = num.toString();
  if(numString[0] == numString[2]){
    return true;
  }else{
    return false;
  }
}

console.log(palindromo(num));
