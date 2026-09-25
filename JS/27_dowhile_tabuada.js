const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('        TABUADA')
console.log('---*---*---*---*---*---*---')
console.log('')

rl.question(`Informe um número: `, (num) =>{
console.log('')

    let i = 0

    do{
        i = i + 1
        tab = num * i 
        console.log(`${num} x ${i} = ${tab}`)
    }while(i < 10)

    console.log('')
    console.log(`Terminei a tabuada do: ${tab}`)

    rl.close()
})