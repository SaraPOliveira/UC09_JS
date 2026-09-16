// Faça um programa que receba 3 notas de um estudante,
// calcule e imprima a média aritimética das notas
// e a mensagem de APROVADO para média superior
// ou igual a 7,0 ou a mensagem de REPROVADO
// para média inferior a 7,0.

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
            
    if(media >= 7){
        console.log(`A média do Aluno ${nome} é: ${media.toFixed(1)}`)
        console.log(`O Aluno está APROVADO`)
    } else {
        console.log(`A média do Aluno ${nome} é: ${media.toFixed(1)}`)
        console.log(`O Aluno está REPROVADO`)
    }

    rl.close()
})
})
})
})