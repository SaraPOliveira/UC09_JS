const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

rl.question('Qual o seu nome?: ', (nome) => {
rl.question('Qual o seu peso?:', (peso) => {
rl.question('Qual a sua altura?: ', (altura) => {

    const IMC = peso / altura ** 2
    console.log(`Olá ${nome}, seu IMC é: ${IMC.toFixed(2)}`)

    rl.close()
})
})
})