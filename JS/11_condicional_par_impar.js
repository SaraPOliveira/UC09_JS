const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

rl.question('Informe um valor: ', (valor) =>{
    valor = Number(valor)

    if(valor % 2 === 0){
        console.log(`O valor é PAR`)
    } else {
        console.log(`O valor é IMPAR`)
    }

    rl.close()
})