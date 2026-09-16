const readline = require('readline') 

const rl = readline.createInterface({
    input:process.stdin, 
    output:process.stdout
})

rl.question('Digite o seu nome: ', (nome) => {
rl.question('Digite o primiero valor: ', (valor1) => {
rl.question('Digite o segundo valor: ', (valor2) => {
rl.question('Digite o terceiro valor: ', (valor3) => {

    const soma = Number(valor1) + Number(valor2) + Number(valor3)
    const media = soma / 3

    // Exibindo o resultado da soma dos valores digitados pelo usuário
    console.log('--*--*--* RESULTADO *--*--*--')
    console.log(`Nome: ${nome}`)
    console.log(`A média dos valores é: ${media}`)

    // fechando a interface de leitura de dados do usuário
    rl.close()
})
})
})
})