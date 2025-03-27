//Crie um objeto denominado compra com os atributos nomeProduto e catProduto. Estes, devem ser pedidos ao utilizador através de prompts.

let compra = {
    nomeProduto: prompt("Digite o nome do produto: "),
    catProduto: prompt("Digite a categoria do produto: ")
}

//Imprima na consola o objeto compra

console.log(compra);

//Adicione ao objeto uma nova propriedade designada precoBase e atribualhe um valor (p.e. 2.10)

compra.precoBase = 2.10;

//Acrescente ao objeto uma nova propriedade txIVA com o valor de 23. Volte a imprimir na console o objeto, para verificar a sua nova estrutura.

compra.txIVA= 23;

// Altere a propriedade precoBase para 2.50

compra.precoBase = 2.50;

// Acrescente ao objeto uma propriedade designada precoFinal, que resulta de um método que multiplica o preçoBase (deste objeto) pela txIVA

compra.precoFinal = function() {
    return this.precoBase + (this.precoBase * (this.txIVA/100));
}

console.log(compra.precoFinal());


//Acrescente ao objeto uma propriedade dadosEncomenda, que constitui um subobjecto do objeto compra.(Este subobjecto deve incluir as seguintes propriedades: • dataEncomenda (2023-03-27) • prazoEntrega (7) dias • localEntrega Avenida do Mar, 74, 4460-810 Matosinhos)

compra.dadosEncomenda = {
    dataEncomenda: "2023-03-27",
    prazoEntrega: 7,
    localEntrega: "Avenida do Mar, 74, 4460-810 Matosinhos"
}

//Crie uma função showLength, no seu ficheiro index.js, que indique (na console) o número de propriedades do objeto compra.

function showLength(){
    console.log(Object.keys().length);
}

// Crie uma função showProperties que liste na console, as propriedades (nomes das propriedades) do objeto compra

function showProperties(){
    console.log(Object.keys());
}

//Crie uma função removeProp(arg) que remova uma determinada propriedade do objeto, passada como argumento da função.

function removeProp(prop){
    delete [prop];
}

removeProp(prompt("Digite a propriedade que deseja remover: "));