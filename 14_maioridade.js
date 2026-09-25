const readline = require('readline') 
const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

console.log('Verificação de Maioridade')
console.log('')

rl.question('Insira o seu ano de nascimento: ', (ano) => {
rl.question('Insira o ano atual: ', (anoAtual) => {

    let idade = Number(anoAtual) - Number(ano)

    if(idade >= 18){
        console.log(`Você tem ${idade} anos de idade, portanto é maior de idade!`)
    } else {
        console.log(`Você tem ${idade} anos de idade, portanto é menor de idade!`)
    }

    rl.close()
})
})