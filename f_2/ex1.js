//Implemente uma função showInverse(texto) que receba um texto (em resultado de um prompt) e imprima esse mesmo texto, mas com as palavras por ordem inversa.

texto = prompt("Insira um texto:");


function showInverse(texto){
    var texto = texto.split(" ");
    var textoInverso = texto.reverse().join(" ");
    return textoInverso;
}

alert(showInverse(texto));
