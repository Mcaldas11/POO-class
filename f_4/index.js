
// Importa modulo data.js
import * as data from "./data.js";

let listUsers = []
listUsers=  data.init();

console.log(listUsers)

// 1 Crie a função listarNivel(nivel) que permita listar (numa alert) os nomes dos jogadores que estão num determinado nível (nível esse, pedido ao utilizador e passado como argumento de entrada da função).

function listarNivel(nivel){
    let users = listUsers.filter(user => user.nivel == nivel);
    let nomes = users.map(user => user.nome);
    alert(nomes);
}

listarNivel(prompt("Digite o nível: "));

// 2 Crie a função somarPontos(nivel) que imprima na consola o total de pontos dos jogadores de um determinado nível (nível esse, pedido ao utilizador, e passado como argumento de entrada da função).

function somarPontos(nivel){
    let users = listUsers.filter(user => user.nivel == nivel);
    let pontos = users.reduce((acc, user) => acc + user.pontos, 0);
    console.log(pontos);
}

somarPontos(prompt("Digite o nível: "));

/* 3 Crie uma função VerificarNivel(nível) que devolva (e imprima na consola)
True ou False, conforme existam, ou não, jogadores num determinado nível (indicado pelo utilizador). */

function VerificarNivel(nivel){
    let users = listUsers.filter(user => user.nivel == nivel);
    if(users.length > 0){
        console.log(true);
    }else{
        console.log(false);
    }
}

VerificarNivel(prompt("Digite o nível: "));

/* 4 Crie uma função pesquisarColecionaveis(colecionavel) que imprima na consola
True ou False conforme existam, ou não, jogadores com um determinado colecionável. Por exemplo com o colecionável 'badge 1'. 
 */

function pesquisarColecionaveis(colecionavel){
    let users = listUsers.filter(user => user.colecinaveis.includes(colecionavel));
    if(users.length > 0){
        console.log(true);
    }
}

pesquisarColecionaveis(prompt("Digite o colécionavel: "));

/* 5  Crie uma função mostrarJogadores(colecionavel) que receba como argumento de
entrada um objeto colecionável (p.e. avatar, badge1 ou badge 2) e imprima numa
alert os nomes dos jogadores que têm esse colecionável. */

function mostrarJogadores(colecionavel){
    let users = listUsers.filter(user => user.colecinaveis.includes(colecionavel));
    let nomes = users.map(user => user.nome);
    alert(nomes);

}

mostrarJogadores(prompt("Digite o colecionável: "));

/* 6 Crie uma função listaTabClass() que imprima numa única alert, os nomes dos
jogadores e respetivos pontos, ordenada pela pontuação (do valor mais alto para
o mais baixo). */

function listaTabClass(){
    let users = listUsers.sort((a, b) => b.pontos - a.pontos);
    let nomes = users.map(user => user.nome + " - " + user.pontos);
    alert(nomes);
}

listaTabClass();

/* 7 Crie uma função giveReward(nivel)que "ofereça" (some) 100 pontos a todos os
users que estão num determinado nível, indicado pelo utilizador.
 */

function giveReward(nivel){
    let users = listUsers.filter(user => user.nivel == nivel);
    users.forEach(user => user.pontos += 100);
}

giveReward(prompt("Digite o nível: "));

/* 8  Crie uma função sumPontos() que some o número de pontos de todos os users*/

function sumPontos(){
    let pontos = listUsers.reduce((acc, user) => acc + user.pontos, 0);
    console.log(pontos);
}

sumPontos();