/* Verificar se o valor é PAR */ 

const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

rl.question('Informe um valor: ', (valor) =>{
    valor = Number(valor)

    /*
    = atribuição 
    == igualdade/comparação 
    10 == '10' - true
    === 10 === "10" - false
    != diferente ex: 10 != "10" - false
    !== diferente e tipo de dado diferente ex: 10 !== "10"
    */

    if(valor % 2 === 0){
        console.log(`O valor ${valor} é PAR`)
    }

    rl.close()
})