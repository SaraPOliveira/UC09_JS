const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

console.log('Boletim Escolar - Média Aritmética')
console.log('')

rl.question('Informe o nome do Aluno: ', (nome) => {
rl.question('Digite a nota de Artes:', (n1) => {
rl.question('Digite a nota de Inglês: ', (n2) => {
rl.question('Digite a nota de Matemática: ', (n3) => {
    
    let media = Number(n1) + Number(n2) + Number(n3) / 3

    console.log('')

     if (media >= 7){
        console.log(`A média do Aluno ${nome} é: ${media.toFixed(1)}`)
        console.log(`O Aluno está APROVADO`)
    } else 
        if (media <= 5 && media < 7){
        console.log(`A média do Aluno ${nome} é: ${media.toFixed(1)}`)
        console.log(`MAIS UMAA CHANCE!`)
    } else {
        console.log(`Você está reprovado,${nome}! O Aluno está REPROVADO! Com média: ${media.toFixed(1)}`)
    }

    rl.close()
})
})
})
})