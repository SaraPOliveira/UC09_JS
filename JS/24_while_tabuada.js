const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

console.log('')
console.log('---*---*---*---*---*---*---')
console.log('         TABUADA')
console.log('---*---*---*---*---*---*---')
console.log('')

rl.question(`Digite um número: `, (valor) => {
console.log('')

    let cont = 0
   
    while(cont <= 10){

        tab = valor * cont 

        console.log(valor, ' x ', cont, '= ', tab)
        cont = cont + 1
    }

    console.log('')
    console.log('Terminei a tabuada do:', valor)

    rl.close()

})