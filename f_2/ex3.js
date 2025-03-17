//Altere a função anterior de forma a imprimir na consola os nomes das cidades recebidas como parâmetros de entrada

numCitites("Lisboa", "Porto", "Coimbra", "Aveiro", "Faro");

function numCitites(...citites){
    console.log(...citites);
}

