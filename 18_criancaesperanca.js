const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('      CRIANÇA ESPERANÇA')
console.log('  Obrigada pela sua doação!')
console.log('---*---*---*---*---*---*---')
console.log('')
console.log('[1] para doar R$10,00')
console.log('[2] para doar R$25,00')
console.log('[3] para doar R$50,00')
console.log('[4] para doar outros valores')
console.log('[5] para cancelar')

rl.question(`Escolha uma opção: `, (doar) => {
    doar = Number(doar)
    let valor = 0

    switch(doar){
        case 1:
            valor = 10
        break

        case 2:
            valor = 25
        break

        case 3:
            valor = 50
        break

        case 4:
            rl.question(`Qual o valor da sua doação: `, (doacao) => {
                valor = Number(doacao)

                console.log('---------------------------')
                console.log('Sua doação foi de R$', valor.toFixed(2))
                console.log('Muito obrigado!')

                rl.close()
            })
        return    

        case 5:
            valor = 0
        break
    }
    
    console.log('---------------------------')
    console.log('Sua doação foi de R$', valor.toFixed(2))
    console.log('Muito obrigado!')
    console.log('---------------------------')

    rl.close()
})