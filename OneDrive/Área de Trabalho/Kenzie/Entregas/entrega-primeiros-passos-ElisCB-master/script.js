let precoRefrigerante = parseFloat(prompt("Digite o valor do refrigerante"))
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))
alert("Valor total Refrigerante R$" + (precoRefrigerante * quantidadeRefrigerante))

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))
alert("Valor total Macarrão R$" + (precoMacarrao * quantidadeMacarrao))

let precoErvilha = parseFloat(prompt("Digite o valor da ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))
alert("Valor total Ervilha R$" + (precoErvilha * quantidadeErvilha))

let precoArroz = parseFloat(prompt("Digite o valor do arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))
alert("Valor total Arroz R$" + (precoArroz * quantidadeArroz))

let precoFeijao = parseFloat(prompt("Digite o valor do feião"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))
alert("Valor toral Feijão R$" + (precoFeijao * quantidadeFeijao))

let precoVinho = parseFloat(prompt("Digite o valor do vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))
alert("Valor toral Vinho R$" + (precoVinho * quantidadeVinho))

let total = (precoRefrigerante * quantidadeRefrigerante) + (precoMacarrao * quantidadeMacarrao) +
    (precoErvilha * quantidadeErvilha) + (precoArroz * quantidadeArroz) + (precoFeijao * quantidadeFeijao) + (precoVinho * quantidadeVinho)
alert("Valor total a ser pago: " + total)
let quantidadeIndividual = total / 2

if (quantidadeIndividual % 2 == 0)
    alert("Você perdeu a aposta e terá que pagar a metade de toda compra!")


else if (quantidadeIndividual % 2 != 0)
    alert("Você ganhou aa aposta e não pagara o vinho!!!")
    alert("Sem o valor do vinho você pagará R$" +(total-(precoVinho * quantidadeVinho)))

//let refrigerante:11,99;
//let Macarrão: 6,99
//let ervilha: 6,99;;
//let arroz: 22,99;
//let feijão: 11,89;
//let vinho: 70,00
//let ervilha: 6,99;;
//let arroz: 22,99;
//let feijão: 11,89;
//let vinho: 70,00

