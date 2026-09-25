const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('    CONTADOR DE 0 ATÉ 10')
console.log('---*---*---*---*---*---*---')
console.log('')

let cont = 0

while (cont <= 10){
    console.log(cont)
    cont = cont + 1
}

console.log('')
console.log('Fim da contagem...')

rl.close()