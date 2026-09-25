const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('        CALCULADORA')
console.log('---*---*---*---*---*---*---')
console.log('')

rl.question(`Digite o primeiro valor: `, (primeiro) => {
    rl.question(`Digite o segundo valor: `, (segundo) => {

        console.log('[1] - para soma')
        console.log('[2] - para subtrair')
        console.log('[3] - para multiplicar')
        console.log('[4] - para dividir')
        
        rl.question(`Escolha o operador: `, (opcao) => {

            let op = Number(opcao)
            let valor1 = Number(primeiro)
            let valor2 = Number(segundo)
            let resultado = 0

            switch(op){
                case 1:
                    resultado = valor1 + valor2
                    console.log('')
                    console.log('--*--*--* RESULTADO *--*--*--')
                    console.log('')
                    console.log(`A soma dos valores é: ${resultado.toFixed(1)}`)
                break

                case 2:
                    resultado = valor1 - valor2
                    console.log('')
                    console.log('--*--*--* RESULTADO *--*--*--')
                    console.log('')
                    console.log(`A subtração dos valores é: ${resultado.toFixed(1)}`)
                break

                case 3:
                    resultado = valor1 * valor2
                    console.log('')
                    console.log('--*--*--* RESULTADO *--*--*--')
                    console.log('')
                    console.log(`A multiplicação dos valores é: ${resultado.toFixed(1)}`)
                break

                case 4:
                    if (valor2 === 0) {
                        console.log('')
                        console.log('Erro: Não é possível dividir por zero!')
                    } else {
                        resultado = valor1 / valor2
                        console.log('')
                        console.log('--*--*--* RESULTADO *--*--*--')
                        console.log('')
                        console.log(`A divisão dos valores é: ${resultado.toFixed(1)}`)
                    }
                break

                default:
                    console.log('')
                    console.log('Opção inválida!')
                break
            }

            rl.close()
        })
    })
})
