const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

console.log('')
console.log('---*---* CONVERSOR DE IDADE *---*---')
console.log('')
rl.question('Qual o seu nome?: ', (nome) => {
rl.question('Qual a sua idade?: ', (idade) => {
    const ano = Number(idade) * 12
    const semanas = Number(idade) * 4

    console.log('')
    console.log(`${nome}, você possui ${ano} meses e ${semanas} semanas de vida.`)
    console.log('')

    rl.close()
})
})