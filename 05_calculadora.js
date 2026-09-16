const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

rl.question('Digite o primeiro valor: ', (valor1) => {
rl.question('Digite o segundo valor: ', (valor2) => {
    let soma = Number(valor1) + Number(valor2)
    let subtracao = Number(valor1) - Number(valor2)
    let multiplicacao = Number(valor1) * Number(valor2)
    let divisao = Number(valor1) / Number(valor2)

    console.log('')
    console.log('--*--*--* RESULTADO *--*--*--')
    console.log('')
    console.log(`A soma dos valores é: ${soma}`)
    console.log(`A subtracao dos valores é: ${subtracao}`)
    console.log(`A multiplicacao dos valores é: ${multiplicacao}`)
    console.log(`A divisao dos valores é: ${divisao}`)

    rl.close()
})
})