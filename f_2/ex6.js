// Faça input de um texto e de uma palavra de pesquisa (através de dois prompts). Implemente uma função findWord que receba esses dois parâmetros de entrada e devolva o número de ocorrências da palavra de pesquisa no texto. Imprima o resultado devolvido na consola. 

texto= prompt("Insira um texto:")
palavra=prompt("Insira uma palavra do texto: ")

function findWord(texto,palavra){
    let contagem=0
    let pesquisa=texto.split(" ")
    for (i=0; i<pesquisa.length; i++){
        if(pesquisa[i]==palavra){
            contagem++
        }
    }
    console.log("A palavra " +palavra+ " aparece " +contagem+ " vezes no texto.")
}

findWord(texto,palavra)