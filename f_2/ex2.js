//Implemente uma função numCitites que receba como parâmetros de entrada um conjunto variável de cidades (o nº de cidades pode variar de caso para caso) e imprima na consola o nº de cidades recebidas.

numCitites("Lisboa", "Porto", "Coimbra", "Aveiro", "Faro");

function numCitites(){
    console.log(arguments.length);
    return arguments.length;
}

alert('O numero de cidades é: ' + numCitites("Lisboa", "Porto", "Coimbra", "Aveiro", "Faro"));