/*
    CORVERSÃO DE REAIS EM DÓLARES

    Crie um programa em JavaScript que permita
    ao usuário informar a quantidade de reais (R$)
    e a cotação em Dólar (U$).

    O programa deverá calcular quantos dólares o 
    usuário poderá comprar com a quantidade informada.
*/

const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

rl.question('Informe o seu saldo atual em reais (R$): ', (reais) => {
    rl.question('Qual a cotação atual do dolar (U$): ', (dolar) => {

        //converter reais em dolar
        const resultado = Number(reais) / Number(dolar)

    console.log('')
    console.log('--*--*--* RESULTADO *--*--*--')
    console.log('')
    console.log(`Convertendo o seu saldo de R$ ${reais} você poderá comprar U$ ${resultado.toFixed(2)}`)

    rl.close()  
})
})