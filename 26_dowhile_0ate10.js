const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('    CONTADOR DE 0 ATE 10')
console.log('---*---*---*---*---*---*---')
console.log('')

let i = 0

do{
    console.log(i)
    i = i + 1
}while(i <= 10){

    console.log("Fim da contagem")   
}

rl.close()