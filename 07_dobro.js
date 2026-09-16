const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

rl.question('Digite um valor: ', (valor1) => {

    const dobro = Number(valor1) * 2

    console.log('')
    console.log('--*--*--* RESULTADO *--*--*--')
    console.log('')
    console.log(`O dobro do valor informado é: ${dobro}`)

    rl.close()
})