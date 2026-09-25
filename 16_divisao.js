const readline = require('readline') 
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('        DIVISÃO')
console.log('---*---*---*---*---*---*---')
console.log('')

rl.question('Digite o 1° número: ', (valor1) => {
    rl.question('Digite o 2° número: ', (valor2) => {

        valor1 = Number(valor1)
        valor2 = Number(valor2)

        if (valor2 === 0) {
            console.log('')
            console.log(`Valor não divisível por Zero`)
        } else if (valor1 % valor2 === 0) {
            console.log('')
            console.log(valor1 + " é divisível por " + valor2)
            console.log("Resultado da divisão: " + (valor1 / valor2))
        } else {
            console.log('')
            console.log(valor1 + " não é divisível por " + valor2)
            console.log("Resultado da divisão: " + (valor1 / valor2))
        }

        rl.close()

    })
})