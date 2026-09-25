const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('      CAIXA ELETRÔNICO')
console.log('---*---*---*---*---*---*---')
console.log('')

// Atribuir um valor ao saldo para chamar depois
let saldo = 1000
let opcao = 1

function menu(){
    console.log('=======================')
    console.log('1 - Consultar Saldo')
    console.log('2 - Depositar')
    console.log('3 - Sacar')
    console.log('0 - Finalizar Transação')
    console.log('=======================')

    rl.question(`Escolha uma opção: `, (resposta) => {
        opcao = Number(resposta)

        switch (opcao){
            case 1:
                // '' exibe - `` chama a variável
                console.log('')
                console.log(`Saldo atual R$: ${saldo.toFixed(2)}`)
                console.log('')

                //exibe o menu ao usuário
                menu()
            break
                
            case 2:
                rl.question(`Digite um valor para depósito: `, (valor) => {
                    let deposito = Number(valor)
                    saldo = saldo + deposito
                    console.log('Depósito realizado com sucesso!')
                    console.log(`Novo saldo R$ ${saldo.toFixed(2)}`)
                    console.log('')
                    
                    menu()
                })
            break

            case 3:
                console.log('')
                rl.question(`Digite o valor do saque: `, (valor) =>{
                    let saque = Number(valor)

                    if(valor <= saldo){
                        saldo = saldo - saque

                        console.log('Saque realizado com sucesso!')
                        console.log(`Novo saldo R$ ${saldo.toFixed(2)}`)
                        console.log('')
                    }else{
                        console.log('Saldo insuficiente')
                    }

                    console.log('')
                    menu()
                })
            break

            case 0:
                console.log('')
                console.log('Fim da transação...')
            break

            rl.close()
            break

            default:
            console.log('')
            console.log('Opção Inválida!')
            console.log('')

            menu()
            break
        }
    })
}