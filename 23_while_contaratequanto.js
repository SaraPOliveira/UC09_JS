const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('    CONTADOR ATÉ QUANTO')
console.log('---*---*---*---*---*---*---')
console.log('')

rl.question('Quer contar até quanto: ', (valor) => {

    let cont = 0

    while(cont <= valor){
        console.log(cont)
        cont = cont + 1
    }

    console.log('')
    console.log('Fim da contagem...')

    rl.close()
})